export const data = [
  {
    question: "Welcher AWS-Service bietet einen vollständig verwalteten NoSQL-Datenbankdienst?",
    option1: "Amazon S3",
    option2: "Amazon RDS",
    option3: "Amazon DynamoDB",
    option4: "Amazon Redshift",
    ans: 3,
    info: "Das ist richtig, weil Amazon DynamoDB ein vollständig verwalteter NoSQL-Datenbankdienst von AWS ist.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher und kein NoSQL-Datenbankdienst ist.",
      option2: "Das ist nicht richtig, weil Amazon RDS ein relationaler Datenbankdienst und kein NoSQL-Datenbankdienst ist.",
      option4: "Das ist nicht richtig, weil Amazon Redshift ein Data Warehouse Dienst und kein NoSQL-Datenbankdienst ist."
    }
  },
  {
    question: "Welcher AWS-Service bietet eine skalierbare und verwaltete Container-Orchestrierung?",
    option1: "Amazon EC2",
    option2: "Amazon EKS",
    option3: "Amazon ECS",
    option4: "AWS Lambda",
    ans: 2,
    info: "Das ist richtig, weil Amazon Elastic Kubernetes Service (Amazon EKS) ein verwalteter Kubernetes-Dienst von AWS ist.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon EC2 virtuelle Server bietet, aber keine Container-Orchestrierung.",
      option3: "Das ist nicht richtig, weil Amazon ECS ein Container-Orchestrierungsdienst ist, aber nicht auf Kubernetes-Basis.",
      option4: "Das ist nicht richtig, weil AWS Lambda serverlose Berechnungsressourcen bietet, aber keine Container-Orchestrierung."
    }
  },
  {
    question: "Welche der folgenden Optionen ist ein speicherintensiver AWS-Service?",
    option1: "Amazon EC2",
    option2: "Amazon RDS",
    option3: "Amazon EBS",
    option4: "Amazon S3",
    ans: 4,
    info: "Das ist richtig, weil Amazon S3 ein skalierbarer, objektbasierter Speicherdienst von AWS ist.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon EC2 virtuelle Server bereitstellt, aber kein Speicherdienst ist.",
      option2: "Das ist nicht richtig, weil Amazon RDS ein relationaler Datenbankdienst ist und kein Speicherdienst.",
      option3: "Das ist nicht richtig, weil Amazon EBS (Elastic Block Store) ein Blockspeicherdienst ist, aber nicht objektbasiert wie S3."
    }
  },
  {
    question: "Welcher AWS-Service wird verwendet, um eine unveränderliche Sicherung von Amazon S3-Buckets zu erstellen?",
    option1: "Amazon CloudFront",
    option2: "Amazon Glacier",
    option3: "Amazon Athena",
    option4: "Amazon Macie",
    ans: 2,
    info: "Das ist richtig, weil Amazon Glacier ein niedrigpreisiger Speicherdienst ist, der für die langfristige, sichere und dauerhafte Speicherung von Daten verwendet wird.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon CloudFront ein Content Delivery Network (CDN) ist und keine Sicherungsdienste für S3 bietet.",
      option3: "Das ist nicht richtig, weil Amazon Athena ein Analysedienst für interaktive Abfragen von Daten in Amazon S3 ist.",
      option4: "Das ist nicht richtig, weil Amazon Macie ein Sicherheitsdienst ist, der Daten in Amazon S3 auf sensible Daten hin überwacht."
    }
  },
  {
    question: "Welcher AWS-Service wird verwendet, um EC2-Instances automatisch zu skalieren?",
    option1: "Amazon CloudWatch",
    option2: "Amazon Auto Scaling",
    option3: "AWS Trusted Advisor",
    option4: "AWS Budgets",
    ans: 2,
    info: "Das ist richtig, weil Amazon Auto Scaling verwendet wird, um die Anzahl der EC2-Instances automatisch zu erhöhen oder zu verringern, um die Auslastung oder andere Kriterien zu erfüllen.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon CloudWatch ein Monitoringdienst ist und nicht zum automatischen Skalieren von EC2-Instances verwendet wird.",
      option3: "Das ist nicht richtig, weil AWS Trusted Advisor Ratschläge für die Optimierung der AWS-Ressourcen gibt, aber nicht zum automatischen Skalieren verwendet wird.",
      option4: "Das ist nicht richtig, weil AWS Budgets für die Budgetierung und Überwachung der Kosten verwendet wird und nicht zum automatischen Skalieren von EC2-Instances."
    }
  },
  
  {
    question: "Welcher AWS-Service wird verwendet, um Objekte und Dateien in AWS S3-Buckets automatisch zu verschlüsseln?",
    option1: "AWS KMS",
    option2: "AWS IAM",
    option3: "Amazon CloudHSM",
    option4: "Amazon GuardDuty",
    ans: 1,
    info: "Das ist richtig, weil AWS KMS (Key Management Service) verwendet wird, um Daten zu verschlüsseln und zu entschlüsseln und die Schlüssel zu verwalten, die für die Verschlüsselung verwendet werden.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil AWS IAM (Identity and Access Management) zur Verwaltung von Benutzeridentitäten und Zugriffsrechten für AWS-Ressourcen verwendet wird, nicht zur automatischen Verschlüsselung von S3-Objekten.",
      option3: "Das ist nicht richtig, weil Amazon CloudHSM (Cloud Hardware Security Module) verwendet wird, um sicherheitskritische Anwendungen und Daten in der Cloud zu schützen, aber nicht zur automatischen Verschlüsselung von S3-Objekten.",
      option4: "Das ist nicht richtig, weil Amazon GuardDuty ein Sicherheitsdienst ist, der die Sicherheit von AWS-Konten, -Daten und -Arbeitslasten überwacht und nicht zur automatischen Verschlüsselung von S3-Objekten verwendet wird."
    }
  },
  {
    question: "Welcher AWS-Service wird verwendet, um eine Virtual Private Cloud (VPC) in AWS zu erstellen?",
    option1: "Amazon Route 53",
    option2: "Amazon VPC",
    option3: "AWS Direct Connect",
    option4: "Amazon SQS",
    ans: 2,
    info: "Das ist richtig, weil Amazon VPC (Virtual Private Cloud) verwendet wird, um eine isolierte Cloud-Umgebung zu erstellen, in der AWS-Ressourcen bereitgestellt werden können.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon Route 53 ein Domain Name System (DNS) ist und nicht zur Erstellung von VPCs verwendet wird.",
      option3: "Das ist nicht richtig, weil AWS Direct Connect eine dedizierte Netzwerkverbindung zwischen dem lokalen Rechenzentrum und der AWS-Infrastruktur bereitstellt, aber nicht zur Erstellung von VPCs verwendet wird.",
      option4: "Das ist nicht richtig, weil Amazon SQS (Simple Queue Service) ein Nachrichtenwarteschlangenservice ist und nicht zur Erstellung von VPCs verwendet wird."
    }
  },
  {
    question: "Welcher AWS-Service wird verwendet, um skalierbare und verwaltete relationale Datenbanken in der Cloud zu erstellen?",
    option1: "Amazon S3",
    option2: "Amazon Aurora",
    option3: "Amazon DynamoDB",
    option4: "Amazon ElastiCache",
    ans: 2,
    info: "Das ist richtig, weil Amazon Aurora ein vollständig verwalteter relationaler Datenbankdienst von AWS ist, der für hohe Leistung, Verfügbarkeit und Skalierbarkeit optimiert ist.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon S3 ein objektbasierter Speicherdienst ist und keine relationale Datenbank.",
      option3: "Das ist nicht richtig, weil Amazon DynamoDB ein vollständig verwalteter NoSQL-Datenbankdienst ist, aber nicht relational.",
      option4: "Das ist nicht richtig, weil Amazon ElastiCache ein verwalteter In-Memory-Cache ist und keine relationale Datenbank."
    }
  },
  {
    question: "Welcher AWS-Service wird verwendet, um Zugriffssteuerungsrichtlinien für AWS-Ressourcen zu definieren?",
    option1: "Amazon S3",
    option2: "AWS IAM",
    option3: "AWS KMS",
    option4: "Amazon Route 53",
    ans: 2,
    info: "Das ist richtig, weil AWS IAM (Identity and Access Management) zur Verwaltung von Benutzeridentitäten, Rollen und Zugriffsrechten für AWS-Ressourcen verwendet wird.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher ist und AWS IAM nicht verwendet wird, um Zugriffssteuerungsrichtlinien für S3 zu definieren.",
      option3: "Das ist nicht richtig, weil AWS KMS (Key Management Service) zur Verwaltung von Verschlüsselungsschlüsseln verwendet wird und nicht zur Definition von Zugriffssteuerungsrichtlinien.",
      option4: "Das ist nicht richtig, weil Amazon Route 53 ein Domain Name System (DNS) ist und nicht zur Definition von Zugriffssteuerungsrichtlinien verwendet wird."
    }
  },
  
  {
    question: "Welcher AWS-Service wird verwendet, um eine hochverfügbare und skalierbare Echtzeit-Messaging-Anwendung zu erstellen?",
    option1: "Amazon S3",
    option2: "Amazon SQS",
    option3: "Amazon SNS",
    option4: "Amazon SES",
    ans: 3,
    info: "Das ist richtig, weil Amazon SNS (Simple Notification Service) verwendet wird, um Nachrichten an eine Vielzahl von Endpunkten wie E-Mail, HTTP und AWS Lambda zu senden.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher ist und nicht für Echtzeit-Messaging verwendet wird.",
      option2: "Das ist nicht richtig, weil Amazon SQS (Simple Queue Service) eine warteschlangenbasierte Nachrichtenwarteschlange ist und nicht für Echtzeit-Messaging verwendet wird.",
      option4: "Das ist nicht richtig, weil Amazon SES (Simple Email Service) für das Senden von E-Mails verwendet wird und nicht für Echtzeit-Messaging."
    }
  },
  {
    question: "Welcher AWS-Service wird verwendet, um einen relationale Datenbanken in der Cloud zu erstellen?",
    option1: "Amazon Aurora",
    option2: "Amazon DynamoDB",
    option3: "Amazon Redshift",
    option4: "Amazon RDS",
    ans: 4,
    info: "Das ist richtig, weil Amazon RDS (Relational Database Service) verwendet wird, um relationale Datenbanken wie MySQL, PostgreSQL, Oracle oder SQL Server in der Cloud zu erstellen und zu verwalten.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon Aurora eine spezielle Variante von Amazon RDS ist, die für hohe Leistung, Verfügbarkeit und Skalierbarkeit optimiert ist, aber nicht der allgemeine Dienst zur Erstellung von relationalen Datenbanken ist.",
      option2: "Das ist nicht richtig, weil Amazon DynamoDB ein NoSQL-Datenbankdienst ist und nicht für relationale Datenbanken verwendet wird.",
      option3: "Das ist nicht richtig, weil Amazon Redshift ein Data Warehouse-Dienst ist, der für die Analyse großer Datenmengen optimiert ist, aber nicht für relationale Datenbanken verwendet wird."
    }
  },
  {
    question: "Welcher AWS-Service wird verwendet, um einen Data Lake in der Cloud zu erstellen?",
    option1: "Amazon Redshift",
    option2: "Amazon Aurora",
    option3: "Amazon S3",
    option4: "Amazon DynamoDB",
    ans: 3,
    info: "Das ist richtig, weil Amazon S3 (Simple Storage Service) verwendet wird, um große Datenmengen zu speichern, die strukturiert oder unstrukturiert sein können, und als Basis für die Erstellung eines Data Lake dienen kann.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon Redshift ein Data Warehouse-Dienst ist, der für die Analyse großer Datenmengen optimiert ist, aber nicht für die Erstellung eines Data Lake verwendet wird.",
      option2: "Das ist nicht richtig, weil Amazon Aurora eine relationale Datenbank in der Cloud ist und nicht für die Erstellung eines Data Lake verwendet wird.",
      option4: "Das ist nicht richtig, weil Amazon DynamoDB ein NoSQL-Datenbankdienst ist und nicht für die Erstellung eines Data Lake verwendet wird."
    }
  },
  {
    question: "Welcher AWS-Service wird verwendet, um eine Anwendung bereitzustellen und auszuführen, ohne sich um die zugrunde liegende Serverinfrastruktur kümmern zu müssen?",
    option1: "Amazon EC2",
    option2: "Amazon ECS",
    option3: "AWS Lambda",
    option4: "Amazon Lightsail",
    ans: 3,
    info: "Das ist richtig, weil AWS Lambda ein serverloser Bereitstellungsdienst ist, der Code in Reaktion auf Ereignisse ausführt und die zugrunde liegende Serverinfrastruktur verwaltet.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon EC2 virtuelle Server bereitstellt und die Serverinfrastruktur verwaltet werden muss.",
      option2: "Das ist nicht richtig, weil Amazon ECS (Elastic Container Service) Container auf EC2-Instances bereitstellt, aber immer noch die EC2-Instances verwalten muss.",
      option4: "Das ist nicht richtig, weil Amazon Lightsail virtuelle private Server bereitstellt, aber die Serverinfrastruktur verwaltet werden muss."
    }
  },
  {
    question: "Welcher AWS-Service wird verwendet, um AWS-Ressourcen und -Anwendungen in einer Infrastruktur wie Code zu definieren und bereitzustellen?",
    option1: "AWS CloudFormation",
    option2: "AWS OpsWorks",
    option3: "Amazon Inspector",
    option4: "AWS CodePipeline",
    ans: 1,
    info: "Das ist richtig, weil AWS CloudFormation verwendet wird, um eine Vorlage zu erstellen, die die AWS-Ressourcen und -Konfigurationen definiert, und um diese Vorlage zu verwenden, um die Ressourcen bereitzustellen und zu verwalten.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil AWS OpsWorks verwendet wird, um die Konfiguration von Anwendungen mithilfe von Chef oder Puppet zu automatisieren, aber nicht für Infrastruktur wie Code.",
      option3: "Das ist nicht richtig, weil Amazon Inspector verwendet wird, um Sicherheitsbewertungen für die AWS-Ressourcen durchzuführen, aber nicht für die Bereitstellung von Infrastruktur wie Code.",
      option4: "Das ist nicht richtig, weil AWS CodePipeline verwendet wird, um die Continuous Integration und Continuous Deployment (CI/CD)-Pipelines für Anwendungen zu automatisieren, aber nicht für die Bereitstellung von Infrastruktur wie Code."
    }
  },
  {
    question: "Welcher AWS-Service bietet eine vollständig verwaltete relationale Datenbanklösung?",
    option1: "Amazon S3",
    option2: "Amazon RDS",
    option3: "Amazon DynamoDB",
    option4: "Amazon Redshift",
    ans: 2,
    info: "Das ist richtig, weil Amazon RDS (Relational Database Service) eine verwaltete Dienstleistung für relationale Datenbanken wie MySQL, PostgreSQL, Oracle und SQL Server bereitstellt.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher ist und nicht für relationale Datenbanken verwendet wird.",
      option3: "Das ist nicht richtig, weil Amazon DynamoDB eine NoSQL-Datenbanklösung ist und nicht auf relationalen Datenbanken basiert.",
      option4: "Das ist nicht richtig, weil Amazon Redshift ein Data Warehouse-Dienst ist, der für die Analyse großer Datensätze verwendet wird, aber nicht für relationale Datenbanken."
    }
  },
  {
    question: "Welcher AWS-Service wird verwendet, um automatisch skalierbare virtuelle Server in der Cloud bereitzustellen?",
    option1: "Amazon EC2",
    option2: "Amazon VPC",
    option3: "Amazon Route 53",
    option4: "Amazon EBS",
    ans: 1,
    info: "Das ist richtig, weil Amazon EC2 (Elastic Compute Cloud) virtuelle Server in der Cloud bereitstellt, die automatisch skalierbar sind.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil Amazon VPC (Virtual Private Cloud) eine Netzwerklösung ist, die es Kunden ermöglicht, isolierte Abschnitte ihrer Cloud-Umgebung zu erstellen.",
      option3: "Das ist nicht richtig, weil Amazon Route 53 ein Domain Name System (DNS) ist, das für die Auflösung von Domainnamen in IP-Adressen verwendet wird und nicht für die Bereitstellung von virtuellen Servern in der Cloud.",
      option4: "Das ist nicht richtig, weil Amazon EBS (Elastic Block Store) ein Blockspeicher ist, der für die Speicherung von Daten auf EC2-Instanzen verwendet wird und nicht für die Bereitstellung von virtuellen Servern."
    }
  },
  {
    question: "Welcher AWS-Service bietet eine serverlose Compute-Lösung?",
    option1: "Amazon EC2",
    option2: "Amazon RDS",
    option3: "Amazon ECS",
    option4: "AWS Lambda",
    ans: 4,
    info: "Das ist richtig, weil AWS Lambda eine serverlose Berechnungslösung ist, die es Entwicklern ermöglicht, Code ohne die Bereitstellung oder Verwaltung von Servern auszuführen.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon EC2 virtuelle Server bereitstellt und nicht serverlos ist.",
      option2: "Das ist nicht richtig, weil Amazon RDS eine verwaltete relationale Datenbanklösung ist und nicht serverlos ist.",
      option3: "Das ist nicht richtig, weil Amazon ECS (Elastic Container Service) verwendet wird, um Container in der Cloud auszuführen und nicht serverlos ist."
    }
  },
  {
    question: "Welcher AWS-Service wird verwendet, um sicherzustellen, dass Anwendungen in mehreren AWS-Regionen hochverfügbar sind?",
    option1: "Amazon S3",
    option2: "Amazon CloudFront",
    option3: "Amazon Route 53",
    option4: "Amazon Global Accelerator",
    ans: 4,
    info: "Das ist richtig, weil Amazon Global Accelerator verwendet wird, um Anwendungen in mehreren AWS-Regionen hochverfügbar zu machen, indem der Verkehr über das globale AWS-Netzwerk verteilt wird.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher ist und nicht für die Hochverfügbarkeit von Anwendungen in mehreren Regionen verwendet wird.",
      option2: "Das ist nicht richtig, weil Amazon CloudFront ein Content Delivery Network (CDN) ist und nicht direkt für die Hochverfügbarkeit von Anwendungen in mehreren Regionen verwendet wird.",
      option3: "Das ist nicht richtig, weil Amazon Route 53 ein Domain Name System (DNS) ist und nicht direkt für die Hochverfügbarkeit von Anwendungen in mehreren Regionen verwendet wird."
    }
  },
  {
    question: "Welcher AWS-Service wird verwendet, um Code ohne die Notwendigkeit, Server zu verwalten, auszuführen?",
    option1: "Amazon EC2",
    option2: "Amazon RDS",
    option3: "Amazon S3",
    option4: "AWS Lambda",
    ans: 4,
    info: "Das ist richtig, weil AWS Lambda eine serverlose Compute-Plattform ist, die Code ausführt, ohne dass du Server verwalten musst.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon EC2 virtuelle Server bereitstellt und nicht serverlos ist.",
      option2: "Das ist nicht richtig, weil Amazon RDS ein verwalteter relationale Datenbankdienst ist und nicht serverlos.",
      option3: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher ist und nicht serverlos."
    }
  },
  {
    question: "Welcher AWS-Service bietet ein Tool zum Planen, Erstellen und Ausführen von automatisierten Tests für mobile Apps?",
    option1: "AWS Device Farm",
    option2: "Amazon Cognito",
    option3: "Amazon AppStream 2.0",
    option4: "Amazon Pinpoint",
    ans: 1,
    info: "Das ist richtig, weil AWS Device Farm ein Tool zum Planen, Erstellen und Ausführen von automatisierten Tests für mobile Apps bietet.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil Amazon Cognito eine Dienstleistung zur Authentifizierung und Autorisierung ist und keine automatisierten Tests für mobile Apps bietet.",
      option3: "Das ist nicht richtig, weil Amazon AppStream 2.0 eine Anwendungsvirtualisierungslösung ist und keine automatisierten Tests für mobile Apps bietet.",
      option4: "Das ist nicht richtig, weil Amazon Pinpoint ein Marketing-Tool ist und keine automatisierten Tests für mobile Apps bietet."
    }
  },
  {
    question: "Welcher AWS-Service bietet eine automatisierte Sicherungslösung für Amazon EC2-Instances?",
    option1: "Amazon S3",
    option2: "Amazon EBS",
    option3: "AWS Backup",
    option4: "Amazon Glacier",
    ans: 3,
    info: "Das ist richtig, weil AWS Backup eine automatisierte Sicherungslösung für Amazon EC2-Instances ist.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher ist und keine automatisierten Sicherungslösungen für EC2-Instances bietet.",
      option2: "Das ist nicht richtig, weil Amazon EBS ein Blockspeicher für EC2-Instances ist und keine automatisierten Sicherungslösungen bietet.",
      option4: "Das ist nicht richtig, weil Amazon Glacier ein Archivierungsdienst ist und keine automatisierten Sicherungslösungen für EC2-Instances bietet."
    }
  },
  {
    question: "Welcher AWS-Service wird verwendet, um einen verteilten Dateispeicher bereitzustellen, der automatisch skaliert?",
    option1: "Amazon EFS",
    option2: "Amazon S3",
    option3: "Amazon EBS",
    option4: "Amazon FSx",
    ans: 1,
    info: "Das ist richtig, weil Amazon EFS einen verteilten Dateispeicher bereitstellt, der automatisch skaliert.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher ist und kein Dateispeicher, der automatisch skaliert.",
      option3: "Das ist nicht richtig, weil Amazon EBS ein Blockspeicher für EC2-Instances ist und kein verteiltes Dateisystem.",
      option4: "Das ist nicht richtig, weil Amazon FSx ein verwalteter Dateisystemdienst ist, der nicht automatisch skaliert."
    }
  },
  {
    question: "Welcher AWS-Service ermöglicht die Verbindung einer Anwendung mit Diensten von Drittanbietern über HTTPS?",
    option1: "Amazon API Gateway",
    option2: "Amazon SQS",
    option3: "AWS Direct Connect",
    option4: "AWS Transit Gateway",
    ans: 1,
    info: "Das ist richtig, weil Amazon API Gateway ermöglicht die Erstellung, Veröffentlichung, Wartung, Überwachung und den Schutz von APIs.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil Amazon SQS ein vollständig verwalteter Nachrichtenwarteschlangendienst ist und nicht zum Verbinden von Anwendungen mit Diensten von Drittanbietern über HTTPS verwendet wird.",
      option3: "Das ist nicht richtig, weil AWS Direct Connect eine dedizierte Netzwerkverbindung von Ihrem Rechenzentrum zu AWS ist und nicht zum Verbinden von Anwendungen mit Diensten von Drittanbietern über HTTPS verwendet wird.",
      option4: "Das ist nicht richtig, weil AWS Transit Gateway eine Verbindung zwischen Ihrem VPC und anderen VPCs, VPNs oder Direct Connect-Verbindungen ist und nicht zum Verbinden von Anwendungen mit Diensten von Drittanbietern über HTTPS verwendet wird."
    }
  },
  {
    question: "Welcher AWS-Service bietet eine langlebige, skalierbare und hochverfügbare Methode zum Speichern von Dateien in der Cloud?",
    option1: "Amazon EFS",
    option2: "Amazon S3",
    option3: "Amazon EBS",
    option4: "Amazon Glacier",
    ans: 2,
    info: "Das ist richtig, weil Amazon S3 ein Objektspeicher bietet, der langlebig, skalierbar und hochverfügbar ist.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon EFS ein verteiltes Dateisystem ist und nicht zum Speichern von Dateien in der Cloud verwendet wird.",
      option3: "Das ist nicht richtig, weil Amazon EBS ein Blockspeicher ist und nicht zum Speichern von Dateien in der Cloud verwendet wird.",
      option4: "Das ist nicht richtig, weil Amazon Glacier ein Archivierungsdienst ist und nicht zum Speichern von Dateien in der Cloud verwendet wird."
    }
  },
  {
    question: "Welcher AWS-Service bietet eine automatisierte Methode zum Überwachen von Ressourcen und Anwendungen in der Cloud?",
    option1: "Amazon CloudWatch",
    option2: "Amazon Inspector",
    option3: "AWS Config",
    option4: "AWS CloudTrail",
    ans: 1,
    info: "Das ist richtig, weil Amazon CloudWatch eine Überwachungslösung für Ressourcen und Anwendungen in der Cloud bietet.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil Amazon Inspector ein Dienst zur Sicherheitsbewertung von Anwendungen ist und nicht zur Überwachung von Ressourcen und Anwendungen in der Cloud verwendet wird.",
      option3: "Das ist nicht richtig, weil AWS Config einen detaillierten Überblick über die Konfiguration der AWS-Ressourcen bietet und nicht zur Überwachung von Ressourcen und Anwendungen in der Cloud verwendet wird.",
      option4: "Das ist nicht richtig, weil AWS CloudTrail zur Verfolgung von API-Aufrufen und zur Überwachung von Benutzeraktivitäten verwendet wird und nicht zur Überwachung von Ressourcen und Anwendungen in der Cloud."
    }
  },  
]




