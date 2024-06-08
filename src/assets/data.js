export const data = [
  {
    question: "Welcher AWS-Service bietet einen vollständig verwalteten NoSQL-Datenbankdienst?",
    option1: "Amazon S3",
    option2: "Amazon RDS",
    option3: "Amazon DynamoDB",
    option4: "Amazon Redshift",
    ans: 3,
    info:  "Domain:1 - Der richtige antwort ist DynamoDB,weil Amazon DynamoDB ein vollständig verwalteter NoSQL-Datenbankdienst von AWS ist.",
    wrongInfo: {
      option1: "Das ist nichts die richtige Antwort, weil Amazon S3 ein Objektspeicher und kein NoSQL-Datenbankdienst ist.",
      option2: "Das ist nichts die richtige Antwort, weil Amazon RDS ein relationaler Datenbankdienst und kein NoSQL-Datenbankdienst ist.",
      option4: "Das ist nichts die richtige Antwort, weil Amazon Redshift ein Data Warehouse Dienst und kein NoSQL-Datenbankdienst ist."
    }
  },
  {
    question: "Welcher AWS-Service bietet eine skalierbare und verwaltete Container-Orchestrierung?",
    option1: "Amazon EC2",
    option2: "Amazon EKS",
    option3: "Amazon ECS",
    option4: "AWS Lambda",
    ans: 2,
    info: "Domain:2 - Der richtige Antwort ist Amazon EKS, weil Amazon Elastic Kubernetes Service (Amazon EKS) ein verwalteter Kubernetes-Dienst von AWS ist.",
    wrongInfo: {
      option1: "Das ist nichts die richtige Antwort, weil Amazon EC2 virtuelle Server bietet, aber keine Container-Orchestrierung.",
      option3: "Das ist nichts die richtige Antwort, weil Amazon ECS ein Container-Orchestrierungsdienst ist, aber nicht auf Kubernetes-Basis.",
      option4: "Das ist nichts die richtige Antwort, weil AWS Lambda serverlose Berechnungsressourcen bietet, aber keine Container-Orchestrierung."
    }
  },
  {
    
    question: "Welche der folgenden Optionen ist ein speicherintensiver AWS-Service?",
    option1: "Amazon EC2",
    option2: "Amazon RDS",
    option3: "Amazon EBS",
    option4: "Amazon S3",
    ans: 4,
    info: "Domain:3 - Der richtige Antwort ist Amazon S3, weil Amazon S3 ein skalierbarer, objektbasierter Speicherdienst von AWS ist.",
    wrongInfo: {
      option1: "Das ist nichts die richtige Antwort, weil Amazon EC2 virtuelle Server bereitstellt, aber kein Speicherdienst ist.",
      option2: "Das ist nichts die richtige Antwort, weil Amazon RDS ein relationaler Datenbankdienst ist und kein Speicherdienst.",
      option3: "Das ist nichts die richtige Antwort, weil Amazon EBS (Elastic Block Store) ein Blockspeicherdienst ist, aber nicht objektbasiert wie S3."
    }
  },
  {
    
    question: "Welcher AWS-Service wird verwendet, um eine unveränderliche Sicherung von Amazon S3-Buckets zu erstellen?",
    option1: "Amazon CloudFront",
    option2: "Amazon Glacier",
    option3: "Amazon Athena",
    option4: "Amazon Macie",
    ans: 2,
    info: "Domain:4 -  Das ist richtig, weil Amazon Glacier ein niedrigpreisiger Speicherdienst ist, der für die langfristige, sichere und dauerhafte Speicherung von Daten verwendet wird.",
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
    info: " Domain:5 - Das ist richtig, weil Amazon Auto Scaling verwendet wird, um die Anzahl der EC2-Instances automatisch zu erhöhen oder zu verringern, um die Auslastung oder andere Kriterien zu erfüllen.",
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
    info: "Domain: 6 - Das ist richtig, weil AWS KMS (Key Management Service) verwendet wird, um Daten zu verschlüsseln und zu entschlüsseln und die Schlüssel zu verwalten, die für die Verschlüsselung verwendet werden.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil AWS IAM (Identity and Access Management) zur Verwaltung von Benutzeridentitäten und Zugriffsrechten für AWS-Ressourcen verwendet wird, nicht zur automatischen Verschlüsselung von S3-Objekten.",
      option3: "Das ist nicht richtig, weil Amazon CloudHSM (Cloud Hardware Security Module) verwendet wird, um sicherheitskritische Anwendungen und Daten in der Cloud zu schützen, aber nicht zur automatischen Verschlüsselung von S3-Objekten.",
      option4: "Das ist nicht richtig, weil Amazon GuardDuty ein Sicherheitsdienst ist, der die Sicherheit von AWS-Konten, -Daten und -Arbeitslasten überwacht und nicht zur automatischen Verschlüsselung von S3-Objekten verwendet wird."
    }
  },
    {
      question: "Welcher AWS-Service wird verwendet, um verteilte Anwendungen zu erstellen, die in der Regel aus Microservices bestehen?",
      option1: "Amazon EC2",
      option2: "Amazon S3",
      option3: "Amazon EKS",
      option4: "Amazon ECS",
      ans: 4,
      info: "Domain:1 - Das ist richtig, weil Amazon ECS (Elastic Container Service) ein vollständig verwalteter Containerorchestrierungsdienst von AWS ist, der es Kunden ermöglicht, Container-Workloads in der Cloud einfach auszuführen und zu skalieren.",
      wrongInfo: {
        option1: "Das ist nicht richtig, weil Amazon EC2 virtuelle Server bereitstellt, aber nicht speziell für Microservices entwickelt wurde.",
        option2: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher ist und nicht für das Hosting von verteilten Anwendungen optimiert ist.",
        option3: "Das ist nicht richtig, weil Amazon EKS (Elastic Kubernetes Service) eine verwaltete Kubernetes-Lösung ist, die zwar für Container-Workloads optimiert ist, aber nicht speziell für verteilte Anwendungen.",
      }
    },
    {
      question: "Welcher AWS-Service wird verwendet, um eine relationale Datenbank in der Cloud bereitzustellen?",
      option1: "Amazon RDS",
      option2: "Amazon DynamoDB",
      option3: "Amazon S3",
      option4: "Amazon Redshift",
      ans: 1,
      info: "Domain:2 - Das ist richtig, weil Amazon RDS (Relational Database Service) einen vollständig verwalteten relationalen Datenbankdienst von AWS bietet, der es Kunden ermöglicht, relationale Datenbanken in der Cloud einfach einzurichten, zu betreiben und zu skalieren.",
      wrongInfo: {
        option2: "Das ist nicht richtig, weil Amazon DynamoDB ein NoSQL-Datenbankdienst ist und keine relationale Datenbank.",
        option3: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher ist und keine relationale Datenbank.",
        option4: "Das ist nicht richtig, weil Amazon Redshift ein Data Warehouse-Dienst ist und keine relationale Datenbank.",
      }
    },
    {
      question: "Welcher AWS-Service wird verwendet, um virtuelle Server in der Cloud bereitzustellen?",
      option1: "Amazon EC2",
      option2: "Amazon EKS",
      option3: "Amazon S3",
      option4: "Amazon ECS",
      ans: 1,
      info: "Domain:3 - Das ist richtig, weil Amazon EC2 (Elastic Compute Cloud) virtuelle Server in der Cloud bereitstellt, die es Kunden ermöglichen, Rechenkapazität in der Cloud einfach zu mieten und zu konfigurieren.",
      wrongInfo: {
        option2: "Das ist nicht richtig, weil Amazon EKS (Elastic Kubernetes Service) ein verwalteter Kubernetes-Dienst ist und keine virtuellen Server bereitstellt.",
        option3: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher ist und keine virtuellen Server bereitstellt.",
        option4: "Das ist nicht richtig, weil Amazon ECS (Elastic Container Service) ein Containerorchestrierungsdienst ist und keine virtuellen Server bereitstellt.",
      }
    },
    {
      question: "Welcher AWS-Service wird verwendet, um Datenanalysen und Business Intelligence (BI) in der Cloud durchzuführen?",
      option1: "Amazon RDS",
      option2: "Amazon Redshift",
      option3: "Amazon Athena",
      option4: "Amazon DynamoDB",
      ans: 3,
      info: "Domain:4 - Das ist richtig, weil Amazon Athena eine interaktive Abfrage-Service ist, der es Kunden ermöglicht, Datenanalysen direkt auf Daten in Amazon S3 durchzuführen, ohne dass sie eine Datenbank verwalten müssen.",
      wrongInfo: {
        option1: "Das ist nicht richtig, weil Amazon RDS ein relationaler Datenbankdienst ist und nicht speziell für Datenanalysen und BI entwickelt wurde.",
        option2: "Das ist nicht richtig, weil Amazon Redshift ein Data Warehouse-Dienst ist und nicht direkt für interaktive Abfragen entwickelt wurde.",
        option4: "Das ist nicht richtig, weil Amazon DynamoDB ein NoSQL-Datenbankdienst ist und nicht speziell für Datenanalysen und BI entwickelt wurde.",
      }
    },
    {
      question: "Welcher AWS-Service wird verwendet, um Machine Learning-Modelle in der Cloud zu trainieren und bereitzustellen?",
      option1: "Amazon SageMaker",
      option2: "Amazon Kendra",
      option3: "Amazon Rekognition",
      option4: "Amazon Lex",
      ans: 1,
      info: "Domain:5 - Das ist richtig, weil Amazon SageMaker ein vollständig verwalteter Dienst ist, der es Entwicklern und Datenwissenschaftlern ermöglicht, Machine Learning-Modelle einfach zu erstellen, zu trainieren und bereitzustellen.",
      wrongInfo: {
        option2: "Das ist nicht richtig, weil Amazon Kendra ein Suchdienst ist und keine Machine Learning-Modelle trainiert und bereitstellt.",
        option3: "Das ist nicht richtig, weil Amazon Rekognition ein Dienst für die Bild- und Videointelligenz ist und keine Machine Learning-Modelle trainiert und bereitstellt.",
        option4: "Das ist nicht richtig, weil Amazon Lex ein Dienst für die Konversationsschnittstellen ist und keine Machine Learning-Modelle trainiert und bereitstellt.",
      }
    },
    {
      question: "Welcher AWS-Service wird verwendet, um Serverless Computing in der Cloud durchzuführen?",
      option1: "Amazon EC2",
      option2: "Amazon ECS",
      option3: "AWS Lambda",
      option4: "Amazon S3",
      ans: 3,
      info: "Domain:6 - Das ist richtig, weil AWS Lambda ein serverloser Berechnungsdienst ist, der es Entwicklern ermöglicht, Code auszuführen, ohne sich um die Bereitstellung oder Verwaltung von Servern kümmern zu müssen.",
      wrongInfo: {
        option1: "Das ist nicht richtig, weil Amazon EC2 virtuelle Server in der Cloud bereitstellt, was nicht serverlos ist.",
        option2: "Das ist nicht richtig, weil Amazon ECS ein Containerorchestrierungsdienst ist und nicht serverlos ist.",
        option4: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher ist und nicht für die Ausführung von Code entwickelt wurde.",
      }
    },
    {
      question: "Welcher AWS-Service wird verwendet, um eine verteilte und skalierbare Anwendungsarchitektur zu erstellen?",
      option1: "Amazon EC2",
      option2: "Amazon S3",
      option3: "Amazon SQS",
      option4: "Amazon ElastiCache",
      ans: 3,
      info: "Domain:1 - Das ist richtig, weil Amazon SQS (Simple Queue Service) eine verwaltete Warteschlangenservice ist, die es ermöglicht, Nachrichten zwischen verteilten Systemen und Microservices sicher und zuverlässig zu übertragen.",
      wrongInfo: {
        option1: "Das ist nicht richtig, weil Amazon EC2 virtuelle Server bereitstellt und nicht speziell für die verteilte Nachrichtenübertragung entwickelt wurde.",
        option2: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher ist und nicht für die verteilte Nachrichtenübertragung entwickelt wurde.",
        option4: "Das ist nicht richtig, weil Amazon ElastiCache ein verwalteter In-Memory-Cache-Service ist und nicht für die verteilte Nachrichtenübertragung entwickelt wurde.",
      }
    },
    {
      question: "Welcher AWS-Service wird verwendet, um eine automatisierte Bereitstellung von Anwendungen in der Cloud durchzuführen?",
      option1: "AWS CloudFormation",
      option2: "Amazon ECS",
      option3: "Amazon S3",
      option4: "Amazon Lambda",
      ans: 1,
      info: "Domain:2 - Das ist richtig, weil AWS CloudFormation eine Infrastruktur als Code-Service ist, der es Entwicklern ermöglicht, die Infrastruktur ihrer Anwendungen in der Cloud einfach zu modellieren und zu automatisieren.",
      wrongInfo: {
        option2: "Das ist nicht richtig, weil Amazon ECS ein Containerorchestrierungsdienst ist und nicht speziell für die automatisierte Bereitstellung von Anwendungen entwickelt wurde.",
        option3: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher ist und nicht speziell für die automatisierte Bereitstellung von Anwendungen entwickelt wurde.",
        option4: "Das ist nicht richtig, weil Amazon Lambda ein serverloser Berechnungsdienst ist und nicht speziell für die automatisierte Bereitstellung von Anwendungen entwickelt wurde.",
      }
    },
    {
      question: "Welcher AWS-Service wird verwendet, um Daten in Echtzeit zu streamen und zu verarbeiten?",
      option1: "Amazon Kinesis",
      option2: "Amazon SQS",
      option3: "Amazon SWF",
      option4: "AWS Step Functions",
      ans: 1,
      info: "Domain:3 - Das ist richtig, weil Amazon Kinesis ein verwalteter Streaming-Dienst ist, der es ermöglicht, Daten in Echtzeit zu sammeln, zu verarbeiten und zu analysieren.",
      wrongInfo: {
        option2: "Das ist nicht richtig, weil Amazon SQS ein Nachrichtenwarteschlangenservice ist und nicht speziell für die Verarbeitung von Echtzeitdaten entwickelt wurde.",
        option3: "Das ist nicht richtig, weil Amazon SWF (Simple Workflow Service) ein Workflow-Managementdienst ist und nicht speziell für die Verarbeitung von Echtzeitdaten entwickelt wurde.",
        option4: "Das ist nicht richtig, weil AWS Step Functions ein verwalteter Workflowservice ist und nicht speziell für die Verarbeitung von Echtzeitdaten entwickelt wurde.",
      }
    },
    {
      question: "Welcher AWS-Service wird verwendet, um eine verteilte Anwendungsarchitektur mit asynchroner Kommunikation zu erstellen?",
      option1: "Amazon EC2",
      option2: "Amazon S3",
      option3: "Amazon SNS",
      option4: "Amazon SQS",
      ans: 4,
      info: "Domain:4 - Das ist richtig, weil Amazon SQS (Simple Queue Service) eine Nachrichtenwarteschlangenservice ist, die es ermöglicht, Nachrichten zwischen verteilten Systemen und Microservices sicher und zuverlässig zu übertragen.",
      wrongInfo: {
        option1: "Das ist nicht richtig, weil Amazon EC2 virtuelle Server bereitstellt und nicht speziell für die asynchrone Kommunikation entwickelt wurde.",
        option2: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher ist und nicht speziell für die asynchrone Kommunikation entwickelt wurde.",
        option3: "Das ist nicht richtig, weil Amazon SNS (Simple Notification Service) ein Nachrichtenübermittlungsdienst ist und nicht speziell für die asynchrone Kommunikation entwickelt wurde.",
      }
    },
    {
      question: "Welcher AWS-Service wird verwendet, um Anwendungslogs zu zentralisieren und zu analysieren?",
      option1: "Amazon CloudFront",
      option2: "Amazon CloudWatch",
      option3: "Amazon CloudTrail",
      option4: "Amazon Inspector",
      ans: 2,
      info: "Domain:5 - Das ist richtig, weil Amazon CloudWatch ein Überwachungsdienst ist, der es Kunden ermöglicht, Ressourcen und Anwendungen in der Cloud zu überwachen und Protokolle, Metriken und Alarme zu zentralisieren.",
      wrongInfo: {
        option1: "Das ist nicht richtig, weil Amazon CloudFront ein Content Delivery Network (CDN) ist und nicht speziell für die Überwachung von Anwendungslogs entwickelt wurde.",
        option3: "Das ist nicht richtig, weil Amazon CloudTrail ein Dienst ist, der die API-Aktivitäten in Ihrem AWS-Konto protokolliert, aber nicht speziell für die Überwachung von Anwendungslogs entwickelt wurde.",
        option4: "Das ist nicht richtig, weil Amazon Inspector ein Sicherheitsscan-Service ist und nicht speziell für die Überwachung von Anwendungslogs entwickelt wurde.",
      }
    },
    {
      question: "Welcher AWS-Service wird verwendet, um Datenbankabfragen in Echtzeit zu analysieren?",
      option1: "Amazon Redshift",
      option2: "Amazon DynamoDB",
      option3: "Amazon Athena",
      option4: "Amazon RDS",
      ans: 3,
      info: "Domain:1 - Das ist richtig, weil Amazon Athena ein interaktiver Abfrage-Service ist, der es ermöglicht, Daten in Amazon S3 zu analysieren und Abfragen in Echtzeit auszuführen, ohne dass ein Datenbank-Management erforderlich ist.",
      wrongInfo: {
        option1: "Das ist nicht richtig, weil Amazon Redshift ein Data Warehouse Service ist und nicht speziell für die Analyse von Datenbankabfragen in Echtzeit entwickelt wurde.",
        option2: "Das ist nicht richtig, weil Amazon DynamoDB ein NoSQL-Datenbankdienst ist und nicht speziell für die Analyse von Datenbankabfragen in Echtzeit entwickelt wurde.",
        option4: "Das ist nicht richtig, weil Amazon RDS ein relationaler Datenbankdienst ist und nicht speziell für die Analyse von Datenbankabfragen in Echtzeit entwickelt wurde."
      }
    },
    {
      question: "Welcher AWS-Service wird verwendet, um Lastenausgleich und Skalierung von Webanwendungen durchzuführen?",
      option1: "Amazon Route 53",
      option2: "Amazon ELB",
      option3: "Amazon VPC",
      option4: "AWS Auto Scaling",
      ans: 2,
      info: "Domain:2 - Das ist richtig, weil Amazon ELB (Elastic Load Balancing) ein Dienst ist, der den Datenverkehr gleichmäßig auf mehrere EC2-Instanzen verteilt, um die Auslastung zu verteilen und die Verfügbarkeit Ihrer Anwendungen zu verbessern.",
      wrongInfo: {
        option1: "Das ist nicht richtig, weil Amazon Route 53 ein DNS-Service ist und nicht speziell für Lastenausgleich und Skalierung von Webanwendungen entwickelt wurde.",
        option3: "Das ist nicht richtig, weil Amazon VPC (Virtual Private Cloud) ein Netzwerkdienst ist und nicht speziell für Lastenausgleich und Skalierung von Webanwendungen entwickelt wurde.",
        option4: "Das ist nicht richtig, weil AWS Auto Scaling ein Dienst ist, der automatisch die Anzahl der EC2-Instanzen basierend auf definierten Metriken skaliert und nicht speziell für den Lastenausgleich entwickelt wurde."
      }
    },
    {
      question: "Welcher AWS-Service wird verwendet, um ein virtuelles privates Netzwerk (VPN) zwischen der lokalen Infrastruktur und AWS herzustellen?",
      option1: "Amazon VPC",
      option2: "AWS Direct Connect",
      option3: "Amazon Route 53",
      option4: "AWS VPN Gateway",
      ans: 2,
      info: "Domain:3 - Das ist richtig, weil AWS Direct Connect eine dedizierte Netzwerkverbindung von Ihrem Rechenzentrum zum AWS-Rechenzentrum bereitstellt, um eine private und direkte Verbindung zu AWS-Ressourcen herzustellen.",
      wrongInfo: {
        option1: "Das ist nicht richtig, weil Amazon VPC (Virtual Private Cloud) ein Netzwerkdienst ist, der Ihnen die Kontrolle über Ihre AWS-Virtualisierungsumgebung bietet, aber nicht speziell für die Verbindung mit der lokalen Infrastruktur entwickelt wurde.",
        option3: "Das ist nicht richtig, weil Amazon Route 53 ein DNS-Service ist und nicht speziell für die Verbindung mit der lokalen Infrastruktur entwickelt wurde.",
        option4: "Das ist nicht richtig, weil AWS VPN Gateway ein Dienst ist, der es Ihnen ermöglicht, verschlüsselte VPN-Verbindungen zwischen Ihrem Netzwerk und Ihrer VPC herzustellen, aber nicht speziell für die Verbindung mit der lokalen Infrastruktur entwickelt wurde."
      }
    },
    {
      question: "Welcher AWS-Service wird verwendet, um Anwendungsdaten in Echtzeit zu überwachen und Benachrichtigungen zu generieren?",
      option1: "Amazon CloudWatch",
      option2: "AWS CloudTrail",
      option3: "Amazon Inspector",
      option4: "Amazon GuardDuty",
      ans: 1,
      info: "Domain:4 - Das ist richtig, weil Amazon CloudWatch ein Überwachungsdienst ist, der es Ihnen ermöglicht, Ressourcen und Anwendungen in der Cloud zu überwachen und Alarme zu generieren, basierend auf definierten Metriken und Protokollen.",
      wrongInfo: {
        option2: "Das ist nicht richtig, weil AWS CloudTrail ein Dienst ist, der die API-Aktivitäten in Ihrem AWS-Konto protokolliert, aber nicht speziell für die Echtzeitüberwachung von Anwendungsdaten entwickelt wurde.",
        option3: "Das ist nicht richtig, weil Amazon Inspector ein Sicherheitsscan-Service ist und nicht speziell für die Echtzeitüberwachung von Anwendungsdaten entwickelt wurde.",
        option4: "Das ist nicht richtig, weil Amazon GuardDuty ein Sicherheitsdienst ist, der die Sicherheit von AWS-Konten, -Daten und -Arbeitslasten überwacht, aber nicht speziell für die Echtzeitüberwachung von Anwendungsdaten entwickelt wurde."
      }
    },
    {
      question: "Welcher AWS-Service wird verwendet, um eine Container-basierte Anwendung zu verwalten und zu orchestrieren?",
      option1: "Amazon EKS",
      option2: "Amazon EC2",
      option3: "AWS Lambda",
      option4: "Amazon S3",
      ans: 1,
      info: "Domain:1 - Das ist richtig, weil Amazon EKS (Elastic Kubernetes Service) ein verwalteter Kubernetes-Dienst von AWS ist, der die Bereitstellung, Verwaltung und Orchestrierung von Containeranwendungen erleichtert.",
      wrongInfo: {
        option2: "Das ist nicht richtig, weil Amazon EC2 virtuelle Server bereitstellt und nicht speziell für die Verwaltung und Orchestrierung von Containern entwickelt wurde.",
        option3: "Das ist nicht richtig, weil AWS Lambda serverlose Berechnungsressourcen bietet und nicht speziell für die Verwaltung und Orchestrierung von Containern entwickelt wurde.",
        option4: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher ist und nicht speziell für die Verwaltung und Orchestrierung von Containern entwickelt wurde."
      }
    },
    {
      question: "Welcher AWS-Service wird verwendet, um Daten in Echtzeit zwischen Anwendungen zu übertragen?",
      option1: "Amazon SQS",
      option2: "Amazon Kinesis",
      option3: "Amazon S3",
      option4: "Amazon RDS",
      ans: 2,
      info: "Domain:2 - Das ist richtig, weil Amazon Kinesis ein verwalteter Streaming-Dienst ist, der es ermöglicht, Daten in Echtzeit zwischen verschiedenen Anwendungen und Diensten zu übertragen und zu verarbeiten.",
      wrongInfo: {
        option1: "Das ist nicht richtig, weil Amazon SQS ein Nachrichtenwarteschlangenservice ist und nicht speziell für die Echtzeitdatenübertragung zwischen Anwendungen entwickelt wurde.",
        option3: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher ist und nicht speziell für die Echtzeitdatenübertragung zwischen Anwendungen entwickelt wurde.",
        option4: "Das ist nicht richtig, weil Amazon RDS ein relationaler Datenbankdienst ist und nicht speziell für die Echtzeitdatenübertragung zwischen Anwendungen entwickelt wurde."
      }
    },
    {
      question: "Welcher AWS-Service wird verwendet, um die Netzwerkverbindung zwischen lokalen Systemen und AWS-Ressourcen zu ermöglichen?",
      option1: "Amazon VPC",
      option2: "AWS Direct Connect",
      option3: "Amazon Route 53",
      option4: "Amazon VPN Gateway",
      ans: 2,
      info: "Domain:3 - Das ist richtig, weil AWS Direct Connect eine dedizierte Netzwerkverbindung zwischen Ihrem Rechenzentrum und AWS bereitstellt, was eine private und konsistente Netzwerkverbindung gewährleistet.",
      wrongInfo: {
        option1: "Das ist nicht richtig, weil Amazon VPC (Virtual Private Cloud) Ihnen die Kontrolle über Ihre AWS-Virtualisierungsumgebung bietet, aber keine direkte Netzwerkverbindung zwischen lokalen Systemen und AWS-Ressourcen herstellt.",
        option3: "Das ist nicht richtig, weil Amazon Route 53 ein DNS-Service ist und keine direkte Netzwerkverbindung zwischen lokalen Systemen und AWS-Ressourcen herstellt.",
        option4: "Das ist nicht richtig, weil Amazon VPN Gateway ein Dienst ist, der verschlüsselte VPN-Verbindungen zwischen Ihrem Netzwerk und Ihrer VPC ermöglicht, aber keine direkte Netzwerkverbindung zwischen lokalen Systemen und AWS-Ressourcen herstellt."
      }
    },
    {
      question: "Welcher AWS-Service wird verwendet, um die Sicherheit von AWS-Ressourcen kontinuierlich zu überwachen und zu verbessern?",
      option1: "Amazon Inspector",
      option2: "Amazon Macie",
      option3: "Amazon GuardDuty",
      option4: "Amazon IAM",
      ans: 3,
      info: "Domain:4 - Das ist richtig, weil Amazon GuardDuty ein verwalteter Sicherheitsdienst ist, der die Sicherheit von AWS-Konten, -Daten und -Workloads überwacht und kontinuierlich Verbesserungen vorschlägt.",
      wrongInfo: {
        option1: "Das ist nicht richtig, weil Amazon Inspector ein Dienst ist, der Sicherheitsbewertungen von Ihren EC2-Instanzen durchführt, aber nicht kontinuierlich die Sicherheit der AWS-Ressourcen überwacht.",
        option2: "Das ist nicht richtig, weil Amazon Macie ein Sicherheitsdienst ist, der sensible Daten in S3 überwacht, aber nicht kontinuierlich die Sicherheit der AWS-Ressourcen überwacht.",
        option4: "Das ist nicht richtig, weil Amazon IAM (Identity and Access Management) zur Verwaltung von Benutzeridentitäten und Zugriffsrechten für AWS-Ressourcen verwendet wird, aber nicht für die kontinuierliche Sicherheitsüberwachung der Ressourcen."
      }
    }
  ]; 
