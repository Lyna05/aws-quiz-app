

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
    question: "Welcher AWS-Service bietet einen vollständig verwalteten Stream-Verarbeitungsdienst?",
    option1: "Amazon SQS",
    option2: "Amazon SNS",
    option3: "Amazon Kinesis",
    option4: "Amazon RDS",
    ans: 3,
    info: "Das ist richtig, weil Amazon Kinesis ein vollständig verwalteter Stream-Verarbeitungsdienst von AWS ist.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon SQS ein Nachrichtenwarteschlangendienst und kein Stream-Verarbeitungsdienst ist.",
      option2: "Das ist nicht richtig, weil Amazon SNS ein Benachrichtigungsdienst und kein Stream-Verarbeitungsdienst ist.",
      option4: "Das ist nicht richtig, weil Amazon RDS ein relationaler Datenbankdienst und kein Stream-Verarbeitungsdienst ist."
    }
  },
  {
    question: "Welcher AWS-Service bietet eine Möglichkeit zur Verwaltung von Identitäten und Zugriff auf AWS-Ressourcen?",
    option1: "Amazon Route 53",
    option2: "AWS IAM",
    option3: "Amazon CloudFront",
    option4: "Amazon Cognito",
    ans: 2,
    info: "Das ist richtig, weil Amazon Identity and Access Management (IAM) ein AWS-Service zur Verwaltung von Identitäten und Zugriff auf AWS-Ressourcen ist.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon Route 53 ein skalierbarer DNS-Webdienst und kein Identitäts- und Zugriffsverwaltungsdienst ist.",
      option3: "Das ist nicht richtig, weil Amazon CloudFront ein Content Delivery Network und kein Identitäts- und Zugriffsverwaltungsdienst ist.",
      option4: "Das ist nicht richtig, weil Amazon Cognito ein Service zur Verwaltung von Benutzeranmeldungen und Identitäten für mobile und Webanwendungen ist, aber nicht speziell für den Zugriff auf AWS-Ressourcen."
    }
  },
  {
    question: "Welcher AWS-Service bietet einen vollständig verwalteten Dateispeicherdienst?",
    option1: "Amazon EBS",
    option2: "Amazon Glacier",
    option3: "Amazon S3",
    option4: "Amazon RDS",
    ans: 3,
    info: "Das ist richtig, weil Amazon Simple Storage Service (S3) ein vollständig verwalteter Dateispeicherdienst von AWS ist.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon EBS ein Blockspeicher und kein Dateispeicher ist.",
      option2: "Das ist nicht richtig, weil Amazon Glacier ein Archivspeicher und kein allgemeiner Dateispeicher ist.",
      option4: "Das ist nicht richtig, weil Amazon RDS ein relationaler Datenbankdienst und kein Dateispeicherdienst ist."
    }
  },
  {
    question: "Welcher AWS-Service bietet das Hosting von statischen Websites?",
    option1: "Amazon S3",
    option2: "Amazon EC2",
    option3: "Amazon Lightsail",
    option4: "Amazon CloudFront",
    ans: 1,
    info: "Das ist richtig, weil Amazon Simple Storage Service (S3) verwendet werden kann, um statische Websites zu hosten.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil Amazon EC2 virtuelle Server bietet, aber mehr Konfigurationsaufwand zum Hosten einer statischen Website erfordert.",
      option3: "Das ist nicht richtig, weil Amazon Lightsail ein einfacher Cloud-Service für kleine Anwendungen und Server ist, aber nicht speziell für statische Websites.",
      option4: "Das ist nicht richtig, weil Amazon CloudFront ein Content Delivery Network (CDN) und kein Web-Hosting-Dienst ist."
    }
  },
  {
    question: "Welcher AWS-Service bietet serverlose Berechnungsressourcen?",
    option1: "Amazon EC2",
    option2: "AWS Lambda",
    option3: "Amazon ECS",
    option4: "Amazon RDS",
    ans: 2,
    info: "Das ist richtig, weil AWS Lambda serverlose Berechnungsressourcen bietet und die Ausführung von Code ohne Bereitstellung oder Verwaltung von Servern ermöglicht.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon EC2 virtuelle Server bietet, aber keine serverlosen Berechnungsressourcen.",
      option3: "Das ist nicht richtig, weil Amazon ECS ein Container-Orchestrierungsdienst und kein serverloser Berechnungsdienst ist.",
      option4: "Das ist nicht richtig, weil Amazon RDS ein relationaler Datenbankdienst und kein Berechnungsdienst ist."
    }
  },
  {
    question: "Welcher AWS-Service bietet die Echtzeit-Überwachung von AWS-Ressourcen und Anwendungen?",
    option1: "Amazon CloudWatch",
    option2: "AWS CloudTrail",
    option3: "AWS Config",
    option4: "Amazon Inspector",
    ans: 1,
    info: "Das ist richtig, weil Amazon CloudWatch Überwachungsdienste für AWS-Ressourcen und Anwendungen in Echtzeit bietet.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil AWS CloudTrail API-Aufrufe für Ihr Konto aufzeichnet, aber keine Echtzeit-Überwachung bietet.",
      option3: "Das ist nicht richtig, weil AWS Config Konfigurationsüberwachung und -bewertung bietet, aber keine Echtzeit-Überwachung.",
      option4: "Das ist nicht richtig, weil Amazon Inspector automatisierte Sicherheitsbewertungen bietet und keine Echtzeit-Überwachung."
    }
  },
  {
    question: "Welcher AWS-Service bietet einen voll verwalteten SQL-Datenbankdienst?",
    option1: "Amazon Aurora",
    option2: "Amazon DynamoDB",
    option3: "Amazon Redshift",
    option4: "Amazon Neptune",
    ans: 1,
    info: "Das ist richtig, weil Amazon Aurora ein vollständig verwalteter SQL-Datenbankdienst von AWS ist.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil Amazon DynamoDB ein NoSQL-Datenbankdienst und kein SQL-Datenbankdienst ist.",
      option3: "Das ist nicht richtig, weil Amazon Redshift ein Data Warehouse und kein SQL-Datenbankdienst ist.",
      option4: "Das ist nicht richtig, weil Amazon Neptune ein Graphdatenbankdienst und kein SQL-Datenbankdienst ist."
    }
  },
  {
    question: "Welcher AWS-Service ermöglicht das Verwalten von Berechtigungen und Sicherheitsrichtlinien?",
    option1: "AWS IAM",
    option2: "Amazon CloudFront",
    option3: "Amazon GuardDuty",
    option4: "AWS Shield",
    ans: 1,
    info: "Das ist richtig, weil Amazon Identity and Access Management (IAM) das Verwalten von Berechtigungen und Sicherheitsrichtlinien für AWS-Ressourcen ermöglicht.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil Amazon CloudFront ein Content Delivery Network (CDN) und kein Dienst zur Verwaltung von Berechtigungen ist.",
      option3: "Das ist nicht richtig, weil Amazon GuardDuty ein Bedrohungserkennungsdienst und kein Dienst zur Verwaltung von Berechtigungen ist.",
      option4: "Das ist nicht richtig, weil AWS Shield ein DDoS-Schutzdienst und kein Dienst zur Verwaltung von Berechtigungen ist."
    }
  },
  {
    question: "Welcher AWS-Service unterstützt ein Content Delivery Network (CDN)?",
    option1: "Amazon CloudFront",
    option2: "Amazon S3",
    option3: "Amazon Route 53",
    option4: "AWS Global Accelerator",
    ans: 1,
    info: "Das ist richtig, weil Amazon CloudFront ein Content Delivery Network (CDN) von AWS ist.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher und kein CDN ist.",
      option3: "Das ist nicht richtig, weil Amazon Route 53 ein DNS-Webdienst und kein CDN ist.",
      option4: "Das ist nicht richtig, weil AWS Global Accelerator ein Netzwerkdienst ist, der die Benutzererfahrung von Internetanwendungen verbessert, aber kein CDN ist."
    }
  },
  {
    question: "Welcher AWS-Service bietet verwaltete Graphdatenbanken?",
    option1: "Amazon RDS",
    option2: "Amazon Redshift",
    option3: "Amazon Neptune",
    option4: "Amazon DynamoDB",
    ans: 3,
    info: "Das ist richtig, weil Amazon Neptune verwaltete Graphdatenbanken von AWS bietet.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon RDS ein relationaler Datenbankdienst und keine Graphdatenbank ist.",
      option2: "Das ist nicht richtig, weil Amazon Redshift ein Data Warehouse und keine Graphdatenbank ist.",
      option4: "Das ist nicht richtig, weil Amazon DynamoDB ein NoSQL-Datenbankdienst und keine Graphdatenbank ist."
    }
  },
  {
    question: "Welcher AWS-Service bietet eine serverlose Datenbank?",
    option1: "Amazon RDS",
    option2: "Amazon Aurora Serverless",
    option3: "Amazon Redshift",
    option4: "Amazon DynamoDB",
    ans: 2,
    info: "Das ist richtig, weil Amazon Aurora Serverless eine serverlose Datenbankoption von AWS ist.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon RDS ein relationaler Datenbankdienst ist und keine serverlose Datenbank bietet.",
      option3: "Das ist nicht richtig, weil Amazon Redshift ein Data Warehouse ist und keine serverlose Datenbank bietet.",
      option4: "Das ist nicht richtig, weil Amazon DynamoDB ein NoSQL-Datenbankdienst ist und keine serverlose SQL-Datenbank bietet."
    }
  },
  {
    question: "Welcher AWS-Service ermöglicht die einfache Bereitstellung und Skalierung von Webanwendungen?",
    option1: "Amazon S3",
    option2: "AWS Elastic Beanstalk",
    option3: "Amazon CloudFront",
    option4: "Amazon RDS",
    ans: 2,
    info: "Das ist richtig, weil AWS Elastic Beanstalk die einfache Bereitstellung und Skalierung von Webanwendungen auf AWS ermöglicht.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher ist und keine direkte Unterstützung für die Bereitstellung und Skalierung von Webanwendungen bietet.",
      option3: "Das ist nicht richtig, weil Amazon CloudFront ein Content Delivery Network (CDN) ist und keine Webanwendungen bereitstellt oder skaliert.",
      option4: "Das ist nicht richtig, weil Amazon RDS ein relationaler Datenbankdienst ist und keine Webanwendungen bereitstellt oder skaliert."
    }
  },
  {
    question: "Welcher AWS-Service bietet automatisierte Sicherheitsüberprüfungen?",
    option1: "AWS Config",
    option2: "AWS Shield",
    option3: "Amazon Inspector",
    option4: "Amazon GuardDuty",
    ans: 3,
    info: "Das ist richtig, weil Amazon Inspector automatisierte Sicherheitsüberprüfungen für AWS-Ressourcen bietet.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil AWS Config Konfigurationsüberwachung und -bewertung bietet, aber keine automatisierten Sicherheitsüberprüfungen.",
      option2: "Das ist nicht richtig, weil AWS Shield ein DDoS-Schutzdienst ist und keine Sicherheitsüberprüfungen durchführt.",
      option4: "Das ist nicht richtig, weil Amazon GuardDuty ein Bedrohungserkennungsdienst ist und keine automatisierten Sicherheitsüberprüfungen durchführt."
    }
  },
  {
    question: "Welcher AWS-Service bietet eine einfache Möglichkeit, eine serverlose REST-API zu erstellen und zu verwalten?",
    option1: "Amazon API Gateway",
    option2: "AWS Lambda",
    option3: "Amazon S3",
    option4: "Amazon RDS",
    ans: 1,
    info: "Das ist richtig, weil Amazon API Gateway eine einfache Möglichkeit bietet, serverlose REST-APIs zu erstellen und zu verwalten.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil AWS Lambda serverlose Berechnungsressourcen bietet, aber keine vollständige API-Verwaltungslösung ist.",
      option3: "Das ist nicht richtig, weil Amazon S3 ein Objektspeicher und keine Lösung zur Erstellung und Verwaltung von APIs ist.",
      option4: "Das ist nicht richtig, weil Amazon RDS ein relationaler Datenbankdienst und keine Lösung zur Erstellung und Verwaltung von APIs ist."
    }
  },
  {
    question: "Welcher AWS-Service bietet eine verwaltete DDoS-Schutzlösung?",
    option1: "AWS WAF",
    option2: "Amazon GuardDuty",
    option3: "AWS Shield",
    option4: "Amazon CloudWatch",
    ans: 3,
    info: "Das ist richtig, weil AWS Shield eine verwaltete DDoS-Schutzlösung bietet.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil AWS WAF eine Web Application Firewall ist und keinen vollständigen DDoS-Schutz bietet.",
      option2: "Das ist nicht richtig, weil Amazon GuardDuty ein Bedrohungserkennungsdienst ist und keine DDoS-Schutzlösung bietet.",
      option4: "Das ist nicht richtig, weil Amazon CloudWatch Überwachungsdienste bietet, aber keine DDoS-Schutzlösung ist."
    }
  },
  {
    question: "Welcher AWS-Service bietet ein skalierbares Dateisystem für die Nutzung mit AWS-Cloud-Diensten und On-Premises-Ressourcen?",
    option1: "Amazon EBS",
    option2: "Amazon S3",
    option3: "Amazon EFS",
    option4: "AWS Backup",
    ans: 3,
    info: "Das ist richtig, weil Amazon Elastic File System (EFS) ein skalierbares Dateisystem für die Nutzung mit AWS-Cloud-Diensten und On-Premises-Ressourcen bietet.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon EBS Blockspeicher für EC2-Instanzen bietet, aber kein verteiltes Dateisystem ist.",
      option2: "Das ist nicht richtig, weil Amazon S3 Objektspeicher bietet, aber kein Dateisystem ist.",
      option4: "Das ist nicht richtig, weil AWS Backup ein Backup-Service ist und kein Dateisystem."
    }
  },
  {
    question: "Welcher AWS-Service bietet einen vollständig verwalteten Suchdienst?",
    option1: "Amazon Athena",
    option2: "Amazon Elasticsearch Service",
    option3: "Amazon CloudSearch",
    option4: "Amazon Kendra",
    ans: 2,
    info: "Das ist richtig, weil Amazon Elasticsearch Service ein vollständig verwalteter Suchdienst von AWS ist.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon Athena ein interaktiver Abfragedienst ist und kein Suchdienst.",
      option3: "Das ist nicht richtig, weil Amazon CloudSearch ein Suchdienst ist, aber nicht so umfangreich wie der Amazon Elasticsearch Service.",
      option4: "Das ist nicht richtig, weil Amazon Kendra ein intelligenter Suchdienst ist, der auf maschinellem Lernen basiert, aber nicht der klassische Suchdienst wie Elasticsearch ist."
    }
  },
  {
    question: "Welcher AWS-Service bietet einen vollständig verwalteten Data-Warehouse-Dienst?",
    option1: "Amazon Redshift",
    option2: "Amazon RDS",
    option3: "Amazon Aurora",
    option4: "Amazon DynamoDB",
    ans: 1,
    info: "Das ist richtig, weil Amazon Redshift ein vollständig verwalteter Data-Warehouse-Dienst von AWS ist.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil Amazon RDS ein relationaler Datenbankdienst und kein Data-Warehouse-Dienst ist.",
      option3: "Das ist nicht richtig, weil Amazon Aurora ein relationaler Datenbankdienst und kein Data-Warehouse-Dienst ist.",
      option4: "Das ist nicht richtig, weil Amazon DynamoDB ein NoSQL-Datenbankdienst und kein Data-Warehouse-Dienst ist."
    }
  },
  {
    question: "Welcher AWS-Service bietet automatische Skalierung für EC2-Instanzen?",
    option1: "Amazon CloudWatch",
    option2: "AWS Auto Scaling",
    option3: "Amazon SNS",
    option4: "AWS CloudFormation",
    ans: 2,
    info: "Das ist richtig, weil AWS Auto Scaling automatische Skalierung für EC2-Instanzen und andere AWS-Ressourcen bietet.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil Amazon CloudWatch Überwachungsdienste bietet, aber keine automatische Skalierung.",
      option3: "Das ist nicht richtig, weil Amazon SNS ein Benachrichtigungsdienst und keine Skalierungslösung ist.",
      option4: "Das ist nicht richtig, weil AWS CloudFormation eine Infrastruktur als Code (IaC) Dienst und keine Skalierungslösung ist."
    }
  },
  {
    question: "Welcher AWS-Service bietet die Migration von Datenbanken zu AWS?",
    option1: "AWS Snowball",
    option2: "AWS Migration Hub",
    option3: "AWS Database Migration Service (DMS)",
    option4: "AWS DataSync",
    ans: 3,
    info: "Das ist richtig, weil AWS Database Migration Service (DMS) die Migration von Datenbanken zu AWS ermöglicht.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil AWS Snowball physische Datenmigrationstools bietet, aber keine spezifische Datenbankmigration.",
      option2: "Das ist nicht richtig, weil AWS Migration Hub eine zentrale Anlaufstelle für Migrationsprojekte ist, aber keine spezifische Datenbankmigration durchführt.",
      option4: "Das ist nicht richtig, weil AWS DataSync die Datenübertragung zwischen On-Premises- und AWS-Speicher ermöglicht, aber keine spezifische Datenbankmigration."
    }
  },
  {
    question: "Welcher AWS-Service bietet vollständig verwaltete Nachrichtenwarteschlangen?",
    option1: "Amazon SQS",
    option2: "Amazon SNS",
    option3: "Amazon MQ",
    option4: "Amazon EventBridge",
    ans: 1,
    info: "Das ist richtig, weil Amazon Simple Queue Service (SQS) vollständig verwaltete Nachrichtenwarteschlangen bietet.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil Amazon SNS ein Benachrichtigungsdienst ist und keine Nachrichtenwarteschlangen bietet.",
      option3: "Das ist nicht richtig, weil Amazon MQ ein verwalteter Nachrichtenbroker-Dienst ist, aber keine Nachrichtenwarteschlangen wie SQS bietet.",
      option4: "Das ist nicht richtig, weil Amazon EventBridge ein Ereignisbus ist und keine Nachrichtenwarteschlangen bietet."
    }
  },
  {
    question: "Welcher AWS-Service bietet eine vollständig verwaltete Desktop-Virtualisierung?",
    option1: "Amazon WorkSpaces",
    option2: "Amazon AppStream 2.0",
    option3: "AWS Lambda",
    option4: "Amazon EC2",
    ans: 1,
    info: "Das ist richtig, weil Amazon WorkSpaces eine vollständig verwaltete Desktop-Virtualisierungslösung von AWS ist.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil Amazon AppStream 2.0 eine verwaltete Anwendung-Streaming-Lösung ist, aber keine vollständige Desktop-Virtualisierung bietet.",
      option3: "Das ist nicht richtig, weil AWS Lambda serverlose Berechnungsressourcen bietet und keine Desktop-Virtualisierung.",
      option4: "Das ist nicht richtig, weil Amazon EC2 virtuelle Server bietet, aber keine vollständige Desktop-Virtualisierung."
    }
  },
  {
    question: "Welcher AWS-Service ermöglicht die sichere Verwaltung und Speicherung von Geheimnissen und Schlüsseln?",
    option1: "AWS IAM",
    option2: "AWS Secrets Manager",
    option3: "AWS CloudHSM",
    option4: "AWS Key Management Service (KMS)",
    ans: 2,
    info: "Das ist richtig, weil AWS Secrets Manager die sichere Verwaltung und Speicherung von Geheimnissen und Schlüsseln ermöglicht.",
    wrongInfo: {
      option1: "Das ist nicht richtig, weil AWS IAM die Verwaltung von Identitäten und Zugriff ermöglicht, aber keine spezielle Lösung für Geheimnisse und Schlüssel bietet.",
      option3: "Das ist nicht richtig, weil AWS CloudHSM ein Hardware-Sicherheitsmodul ist und keine spezielle Lösung für die Verwaltung von Geheimnissen bietet.",
      option4: "Das ist nicht richtig, weil AWS Key Management Service (KMS) die Verwaltung von kryptografischen Schlüsseln ermöglicht, aber keine vollständige Lösung für Geheimnisse bietet."
    }
  },
  {
    question: "Welcher AWS-Service bietet einen vollständig verwalteten Service Mesh?",
    option1: "AWS App Mesh",
    option2: "Amazon EKS",
    option3: "AWS Fargate",
    option4: "Amazon ECS",
    ans: 1,
    info: "Das ist richtig, weil AWS App Mesh ein vollständig verwalteter Service Mesh von AWS ist.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil Amazon EKS ein verwalteter Kubernetes-Dienst ist, aber kein vollständiger Service Mesh.",
      option3: "Das ist nicht richtig, weil AWS Fargate eine serverlose Rechen-Engine für Container ist, aber kein Service Mesh.",
      option4: "Das ist nicht richtig, weil Amazon ECS ein Container-Orchestrierungsdienst ist, aber kein Service Mesh."
    }
  },
  {
    question: "Welcher AWS-Service bietet eine vollständig verwaltete Blockchain-Lösung?",
    option1: "Amazon Managed Blockchain",
    option2: "Amazon Quantum Ledger Database (QLDB)",
    option3: "Amazon Redshift",
    option4: "AWS Lambda",
    ans: 1,
    info: "Das ist richtig, weil Amazon Managed Blockchain eine vollständig verwaltete Blockchain-Lösung von AWS ist.",
    wrongInfo: {
      option2: "Das ist nicht richtig, weil Amazon QLDB eine vollständig verwaltete Ledger-Datenbank ist, aber keine Blockchain-Lösung.",
      option3: "Das ist nicht richtig, weil Amazon Redshift ein Data Warehouse ist und keine Blockchain-Lösung.",
      option4: "Das ist nicht richtig, weil AWS Lambda serverlose Berechnungsressourcen bietet, aber keine Blockchain-Lösung."
    }
  }
];


