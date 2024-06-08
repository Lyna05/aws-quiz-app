// Importieren der korrekten Informationen
import { correctInfo } from '../assets/correctInfo.js';

// Definieren der Fragen und Zuordnen jeder Frage mit dem entsprechenden Index im correctInfo-Array
export const questions = [
  {
    question: "Was ist die Definition des Amazon DynamoDB-Dienstes?",
    correctIndex: 0 // Index für Amazon DynamoDB in correctInfo
  },
  {
    question: "Was ist Amazon S3 (Simple Storage Service)?",
    correctIndex: 2 // Index für Amazon S3 in correctInfo
  },
  // Fügen Sie Fragen für jeden Dienst hinzu...
];

// Funktion zum Abrufen der korrekten Informationen basierend auf dem Index der Frage
export function getCorrectInfoByIndex(index) {
  return correctInfo[index];
}
