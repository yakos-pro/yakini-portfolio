// data.js - Fichier contenant toutes les données du portfolio de Yakini Tchouka

export const profileData = {
  name: "Yakini Tchouka",
  title: "Ingénieur IA Sénior",
  subtitle: "AI Générative | Systèmes LLM | Architectures RAG | PhD en NLP",
  bio: "Ingénieur IA spécialisé en IA générative, LLM et solutions NLP. Docteur en NLP avec 7 ans et plus d’expérience en Python et développement backend, je conçois et déploie des solutions IA de bout en bout, de la recherche à la production. Expérience confirmée dans la conception de systèmes basés sur des LLM, de pipelines ML scalables et de solutions d’automatisation en environnements contraints.",
  avatar: "avatar.png",
  contact: {
    phone: "+33 7 53 53 48 91",
    email: "yakandres3@gmail.com",
    location: "31100, Toulouse",
    github: "https://github.com/yakini-t",
    linkedin: "https://www.linkedin.com/in/yakini-tchouka/",
  },
  languages: [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Professionnel (B2/C1)" }
  ],
  interests: ["Jeux d'échecs", "Football", "Musique"],
  softSkills: [
    "Esprit analytique et résolution de problèmes complexes",
    "Capacité à transformer des concepts de recherche en solutions industrielles",
    "Autonomie et prise d'initiative sur des projets techniques",
    "Collaboration avec des équipes pluridisciplinaires",
    "Esprit d'innovation et approche orientée R&D"
  ]
};

export const skillsData = [
  {
    category: "IA Générative & LLM",
    icon: "brain",
    items: ["OpenAI", "Mistral", "Gemini", "LLaMA", "Hugging Face", "Transformers", "Prompt Engineering", "Fine-tuning", "Azure Foundry", "MLFlow"]
  },
  {
    category: "RAG & Recherche Sémantique",
    icon: "search",
    items: ["LangChain", "LangGraph", "LangFlow", "LangFuse", "Azure AI Search", "RAGAs", "FAISS", "Chroma", "Recherche Hybride & Similarité"]
  },
  {
    category: "Apprentissage Automatique",
    icon: "chart-line",
    items: ["PyTorch", "NLP", "Classification de Texte", "Embeddings", "Traitement de données"]
  },
  {
    category: "Cloud & MLOps",
    icon: "cloud",
    items: ["Microsoft Azure (Foundry, Stockage, Modèles)", "CI/CD pipelines", "Docker", "APIs (REST, gRPC)"]
  },
  {
    category: "Développement d’Application",
    icon: "code",
    items: ["Python", "APIs REST", "Développement Backend", "Conception d'architectures applicatives"]
  }
];

export const experiencesData = [
  {
    company: "Expleo Group",
    role: "Ingénieur IA",
    period: "Fév. 2026 - Présent",
    description: "Développement de solutions d’IA de pointe appliquées à l'automatisation industrielle.",
    tasks: [
      "Développement de solutions d’IA pour automatiser la génération de modèles 3D dans le logiciel CATIA.",
      "Conception de workflows cognitifs complexes permettant d’optimiser et d’accélérer les processus de conception industrielle."
    ],
    technologies: ["LangChain", "Gemini", "Azure AI", "FastAPI", "CI/CD", "Chroma", "CATIA"]
  },
  {
    company: "Airbus via Expleo Group",
    role: "Ingénieur IA Générative",
    period: "Oct. 2025 - Fév. 2026",
    description: "Industrialisation de cas d’usage avancés autour des modèles de langage dans l'aéronautique.",
    tasks: [
      "Industrialisation de cas d'usage LLM robustes dans un environnement aéronautique hautement contraint.",
      "Conception et réalisation de POC (Proof of Concept) pour automatiser l'analyse documentaire technique et optimiser les processus internes."
    ],
    technologies: ["LangChain", "GCP", "Gemini", "Vertex AI", "FastAPI", "CI/CD"]
  },
  {
    company: "Expleo Group",
    role: "Ingénieur Docteur / Data Scientist",
    period: "Janv. 2024 - Sept. 2025",
    description: "Conception de systèmes d'information sémantiques et de recherche de connaissances.",
    tasks: [
      "Conception et implémentation complète d'un système RAG (Retrieval-Augmented Generation) de bout en bout pour la recherche d'informations métier.",
      "Conception d'architectures de bases de données vectorielles, de pipelines d'ingestion et de stratégies d'extraction de données optimisées.",
      "Mise en place de frameworks d'évaluation et de monitoring (LangFuse, RAGAs) pour garantir la qualité des réponses."
    ],
    technologies: ["LangChain (Graph, Flow, Fuse)", "Azure AI", "FastAPI", "CI/CD", "FAISS", "ReactJS", "Docker", "Azure Storage", "Hugging Face (Embeddings, Llama, Mistral)", "Django", "MLFlow"]
  },
  {
    company: "Hôpital Nord Franche-Comté",
    role: "Doctorant en NLP / Machine Learning",
    period: "Déc. 2020 - Juil. 2023",
    description: "Recherche appliquée en traitement automatique du langage naturel (NLP) dans le domaine de la santé.",
    tasks: [
      "Entraînement, fine-tuning et évaluation de modèles de Deep Learning (Transformers) appliqués aux textes cliniques.",
      "Collaboration étroite avec des experts médicaux pour la validation fonctionnelle des résultats des modèles.",
      "Rédaction et publication de travaux de recherche dans des conférences internationales en NLP appliqué."
    ],
    technologies: ["PyTorch", "HuggingFace", "Transformers (famille BERT)", "Pandas", "Numpy", "Jupyter Notebook"]
  },
  {
    company: "Office Togolais des Recettes",
    role: "Ingénieur Logiciel",
    period: "Janv. 2019 - Nov. 2020",
    description: "Développement d'outils d'automatisation d'entreprise et de services backend.",
    tasks: [
      "Développement de services backend et d'outils d'automatisation en Python et Java.",
      "Optimisation de requêtes et de workflows SQL complexes pour améliorer l'efficacité des traitements de données volumineuses.",
      "Contribution active à la digitalisation et à l'automatisation des processus métier."
    ],
    technologies: ["Python", "Spring Boot", "SQL Server", "PHP", "APIs REST"]
  }
];

export const educationData = [
  {
    degree: "Doctorat en Informatique (Spécialisation NLP)",
    school: "Université Marie Louis et Pasteur",
    period: "2020 - 2023",
    details: "Thèse axée sur le traitement automatique des langues appliquées (NLP, classification, Transformers)."
  },
  {
    degree: "Master en Informatique",
    school: "Université de Technologie de Belfort-Montbéliard",
    period: "2018 - 2020",
    details: "Intelligence Artificielle, systèmes distribués et génie logiciel."
  },
  {
    degree: "Licence en Mathématiques",
    school: "Université de Lomé",
    period: "2014 - 2017",
    details: "Algèbre linéaire, probabilités, statistiques et analyse numérique."
  }
];

export const useCasesData = [
  {
    id: "rag-expert",
    title: "Système RAG Multi-Source & Évaluation RAGAs",
    shortDesc: "Conception et déploiement d'un moteur de recherche de connaissances internes sécurisé à base de RAG.",
    longDesc: "Création d'une solution RAG capable d'ingérer et d'indexer des milliers de documents techniques (PDF, Docx, Sharepoint). Développement de stratégies avancées de chunking, d'expansion de requêtes (Query Expansion) et de re-ranking pour limiter les hallucinations. Intégration de LangFuse et de RAGAs pour évaluer la fidélité et la pertinence des réponses.",
    tags: ["LangChain", "Azure AI Search", "FAISS", "RAGAs", "LangFuse", "Python", "FastAPI"],
    impact: "Accès à l'information métier réduit de 15 minutes à moins de 10 secondes avec un taux de fidélité de 94%."
  },
  {
    id: "cad-agent",
    title: "Automatisation de CAO par Agents IA (CATIA)",
    shortDesc: "Agent IA générateur de scripts 3D à partir de spécifications textuelles en langage naturel.",
    longDesc: "Développement d'un agent de type ReAct qui traduit des descriptions fonctionnelles d'objets mécaniques en scripts géométriques exécutables dans Dassault CATIA. L'agent utilise des mécanismes de self-correction en exécutant le code dans un bac à sable et en corrigeant les erreurs de syntaxe via des retours d'exécution en boucle fermée.",
    tags: ["Gemini 1.5", "LangChain", "FastAPI", "Python", "CATIA API", "Chroma DB"],
    impact: "Accélération du temps de prototypage initial des pièces mécaniques répétitives de 60%."
  },
  {
    id: "doc-aero",
    title: "Pipeline de Parsing Aéronautique (Airbus)",
    shortDesc: "Industrialisation de pipelines d'extraction d'information sur documents techniques complexes.",
    longDesc: "Mise en place d'un workflow de traitement de documents techniques PDF aéronautiques (souvent composés de schémas complexes et de tableaux denses). Utilisation de modèles multimodaux et de OCR avancés couplés à des agents de validation pour structurer la donnée brute en schémas JSON conformes aux contraintes réglementaires.",
    tags: ["Vertex AI", "Gemini Pro", "GCP Cloud Functions", "FastAPI", "Docker", "CI/CD"],
    impact: "Extraction automatique fiable à 98% sur les manuels de maintenance, réduisant la validation humaine de 80%."
  },
  {
    id: "medical-nlp",
    title: "Classification de Textes Cliniques & BERT (PhD)",
    shortDesc: "Entraînement de Transformers spécialisés pour l'aide au diagnostic clinique.",
    longDesc: "Travaux de recherche doctorale consistant à d'adapter des modèles pré-entraînés (famille BERT, BioBERT) sur des corpus de rapports médicaux confidentiels et non structurés. Implémentation d'architectures d'extraction d'entités nommées (NER) pour identifier les pathologies, traitements et dosages.",
    tags: ["PyTorch", "HuggingFace", "Transformers", "BioBERT", "Python", "Scikit-Learn"],
    impact: "Publication de 3 articles scientifiques dans des conférences majeures et création d'un modèle NER atteignant un F1-score de 0.92."
  },
  {
    id: "multi-agent-system",
    title: "Orchestration Multi-Agent pour Décideurs",
    shortDesc: "Système de supervision et d'analyse concurrentielle automatisé par graphe d'agents.",
    longDesc: "Création d'un système multi-agent structuré avec LangGraph où plusieurs rôles (Chercheur web, Synthétiseur, Rédacteur de rapports, Critique de qualité) coopèrent. Le système gère des cycles de feedback où le Critique renvoie le travail à l'agent de recherche si des sources manquent d'autorité.",
    tags: ["LangGraph", "LangFlow", "LangChain", "OpenAI API", "Tavily Search", "FastAPI"],
    impact: "Automatisation de la veille technologique hebdomadaire avec génération de rapports synthétiques autonomes de 10 pages."
  }
];

export const blogPostsData = [
  {
    id: "langgraph-agents",
    title: "Pourquoi LangGraph change la donne pour les architectures Multi-Agents",
    date: "15 Mai 2026",
    category: "Agents IA",
    readTime: "6 min",
    summary: "Découvrez comment LangGraph permet de surmonter les limites des agents de type chaîne linéaire (Chain-of-Thought) en introduisant des graphes d'états cycliques.",
    content: `
      <p>Dans le développement d'applications basées sur les LLM, nous sommes rapidement passés d'un simple appel d'API (Input -> Output) à des chaînes complexes (LangChain). Cependant, les tâches professionnelles réelles exigent souvent des allers-retours, des boucles de validation et de la mémoire à long terme. C'est ici que <strong>LangGraph</strong> intervient.</p>
      
      <h4>La limite des agents linéaires</h4>
      <p>Les frameworks traditionnels imposent souvent un flux acyclique (DAG). Si un agent génère un code erroné, la chaîne continue sans pouvoir revenir en arrière pour corriger l'erreur. Un humain, quant à lui, teste son code, lit l'erreur, et corrige son tir. Ce comportement cyclique est indispensable pour atteindre l'autonomie.</p>
 
      <h4>LangGraph : State, Nodes et Edges</h4>
      <p>LangGraph modélise les agents comme des machines à états (State Machines) :</p>
      <ul>
        <li><strong>State (État) :</strong> Un objet partagé accessible par tous les nœuds de notre système (contenant par exemple l'historique des messages, les variables locales, etc.).</li>
        <li><strong>Nodes (Nœuds) :</strong> Des fonctions Python ou des agents spécialisés. Par exemple, un nœud <code>chercheur</code> et un nœud <code>codeur</code>.</li>
        <li><strong>Edges (Arêtes) :</strong> Les règles de transition. Les arêtes peuvent être conditionnelles (ex: si le codeur a fait une erreur, retourner au nœud codeur, sinon aller au nœud validateur).</li>
      </ul>
 
      <pre><code># Exemple rapide de structure de graphe
from langgraph.graph import StateGraph, END
 
workflow = StateGraph(AgentState)
workflow.add_node("agent", call_model)
workflow.add_node("tools", call_tool)
 
workflow.set_entry_point("agent")
workflow.add_conditional_edges("agent", should_continue, {"continue": "tools", "end": END})
workflow.add_edge("tools", "agent")
</code></pre>
 
      <h4>Avantages clés</h4>
      <p>1. <strong>Persistance intégrée :</strong> Possibilité de faire du "human-in-the-loop" très facilement (le graphe s'arrête, demande l'approbation d'un humain, puis reprend son cours).</p>
      <p>2. <strong>Contrôle précis :</strong> Contrairement à un agent autonome libre (type AutoGPT) qui peut boucler indéfiniment et vider votre forfait d'API, LangGraph permet de définir des chemins stricts et des limites claires.</p>
    `
  },
  {
    id: "evaluating-rag",
    title: "Évaluer votre système RAG avec RAGAs et LangFuse",
    date: "28 Avril 2026",
    category: "RAG & LLM",
    readTime: "8 min",
    summary: "Déployer un système RAG en production est simple, s'assurer qu'il ne produit pas d'hallucinations est un vrai défi. Apprenez à mesurer scientifiquement sa qualité.",
    content: `
      <p>Trop de projets d'IA générative restent au stade de POC parce que les équipes ne savent pas comment évaluer la fiabilité des réponses de leur système RAG. Faut-il relire manuellement 1000 réponses ? C'est impossible. C'est là que l'évaluation automatisée entre en jeu.</p>
      
      <h4>Le triangle d'or de l'évaluation RAG</h4>
      <p>Le framework open-source <strong>RAGAs</strong> propose de mesurer 3 métriques clés basées sur l'analyse conjointe de la <strong>Requête</strong>, des <strong>Contextes récupérés</strong>, et de la <strong>Réponse finale</strong> :</p>
      
      <ol>
        <li><strong>Fidélité (Faithfulness) :</strong> La réponse finale est-elle uniquement basée sur le contexte récupéré ? (Permet de détecter les hallucinations).</li>
        <li><strong>Pertinence de la réponse (Answer Relevance) :</strong> La réponse répond-elle directement à la question de l'utilisateur ?</li>
        <li><strong>Pertinence du contexte (Context Recall) :</strong> Les documents récupérés par le moteur de recherche sémantique contiennent-ils l'information nécessaire pour répondre ?</li>
      </ol>
 
      <h4>Intégration MLOps avec LangFuse</h4>
      <p>Pour mesurer ces métriques en production de manière continue, nous connectons RAGAs à <strong>LangFuse</strong> (un outil open-source d'observabilité LLM) :</p>
      <ul>
        <li>Chaque requête utilisateur est tracée (Tracing) : temps de latence de la recherche vectorielle, coût des tokens LLM, arbres d'appels.</li>
        <li>Un échantillon de traces est envoyé quotidiennement à l'API RAGAs pour calculer les scores automatiquement en utilisant un LLM juge (souvent GPT-4o ou Claude 3.5 Sonnet).</li>
        <li>Des alertes sont déclenchées si le score de Fidélité descend en dessous de 85%.</li>
      </ul>
 
      <p>Cette approche permet d'itérer sereinement sur vos algorithmes de chunking ou de recherche hybride, en comparant scientifiquement les scores d'une version à l'autre.</p>
    `
  },
  {
    id: "mcp-azure-standard",
    title: "Standardiser l'intégration d'outils avec le Model Context Protocol (MCP) sur Azure",
    date: "12 Mars 2026",
    category: "Cloud & MLOps",
    readTime: "7 min",
    summary: "Découvrez le protocole MCP lancé par Anthropic et comment l'héberger de façon sécurisée sur le Cloud Microsoft Azure pour connecter vos LLMs à vos APIs internes.",
    content: `
      <p>Jusqu'à récemment, si vous vouliez donner à un LLM l'accès à une base de données interne ou à une API, vous deviez écrire du code ad-hoc pour formater les outils (tools) pour OpenAI, un autre format pour Claude, et encore un autre pour Gemini. Le <strong>Model Context Protocol (MCP)</strong> résout cela en standardisant la communication.</p>
      
      <h4>Qu'est-ce que le Model Context Protocol ?</h4>
      <p>Le protocole MCP sépare clairement l'application (le client qui discute avec le LLM) et les sources de données/outils (les serveurs MCP). Un serveur MCP expose de manière standardisée :</p>
      <ul>
        <li><strong>Resources :</strong> Fichiers, tables de base de données, logs de serveurs.</li>
        <li><strong>Prompts :</strong> Templates de prompts réutilisables.</li>
        <li><strong>Tools :</strong> Fonctions exécutables par le modèle (ex: lire un fichier, interroger une API).</li>
      </ul>
 
      <h4>Architecture de déploiement sur Azure</h4>
      <p>Pour des applications d'entreprise sécurisées, nous déployons nos serveurs MCP sur Azure en suivant ce pattern :</p>
      
      <ol>
        <li><strong>Containerisation :</strong> Le serveur MCP est packagé dans un conteneur Docker léger en Python ou TypeScript.</li>
        <li><strong>Azure Container Apps (ACA) :</strong> Hébergement des conteneurs avec mise à l'échelle automatique à zéro (scale-to-zero) pour réduire les coûts lorsque l'agent IA n'est pas actif.</li>
        <li><strong>Azure API Management (APIM) :</strong> Exposition du serveur MCP avec authentification Azure AD (OAuth 2.0) pour que seuls vos agents authentifiés puissent appeler les outils d'entreprise.</li>
      </ol>
 
      <p>Grâce à ce standard, intégrer un nouvel outil dans votre assistant IA ne prend plus que quelques minutes, indépendamment du modèle de langage utilisé en arrière-plan.</p>
    `
  }
];
 
// Base de connaissances pour le simulateur d'agent interactif
export const chatbotKnowledge = [
  {
    keywords: ["bonjour", "salut", "hello", "qui es-tu", "présente-toi", "presente"],
    response: "Bonjour ! Je suis l'Agent Virtuel de Yakini Tchouka. Je peux vous renseigner sur sa carrière, ses compétences en IA/LLM/RAG, ses projets, son doctorat ou encore comment le contacter. Posez-moi vos questions !"
  },
  {
    keywords: ["expérience", "parcours", "expleo", "airbus", "travail", "poste", "carriere", "historique", "doctorant"],
    response: "Yakini est Ingénieur IA Sénior. Il travaille actuellement chez <strong>Expleo Group</strong> sur l'intégration de l'IA générative dans CATIA (CAO 3D). Auparavant, il a industrialisé des cas d'usage LLM chez <strong>Airbus</strong> et conçu des systèmes RAG complexes chez Expleo. Il a également réalisé son doctorat en NLP à l'Hôpital Nord Franche-Comté."
  },
  {
    keywords: ["competence", "techno", "python", "langchain", "framework", "outil", "langgraph", "azure"],
    response: "Ses compétences clés incluent :<br>• <strong>IA Générative / LLM :</strong> OpenAI, Gemini, Mistral, Fine-tuning, MLOps, MLFlow.<br>• <strong>RAG & Agents :</strong> LangChain, LangGraph, LangFlow, bases de données vectorielles (FAISS, Chroma, Azure Search).<br>• <strong>Développement & Cloud :</strong> Python, FastAPI, Docker, Microsoft Azure.<br>Il maîtrise également PyTorch pour le deep learning appliqué au NLP."
  },
  {
    keywords: ["doctorat", "phd", "these", "etude", "recherche", "universite", "medical", "bert"],
    response: "Yakini détient un <strong>Doctorat en Informatique</strong> spécialisé en NLP (Traitement Automatique du Langage Naturel) de l'Université Marie Louis et Pasteur (2020-2023). Sa thèse portait sur l'entraînement et l'adaptation de modèles Transformers (type BERT) pour l'analyse de données médicales cliniques textuelles."
  },
  {
    keywords: ["contact", "email", "mail", "telephone", "tel", "adresse", "toulouse", "recruter", "embaucher"],
    response: "Vous pouvez contacter Yakini directement par email à <strong>yakandres3@gmail.com</strong> ou par téléphone au <strong>+33 7 53 53 48 91</strong>. Il est basé à Toulouse (31100) mais est ouvert aux opportunités intéressantes."
  },
  {
    keywords: ["rag", "retrieval", "hallucination", "ragas"],
    response: "Yakini a une forte expertise en RAG. Il a conçu des pipelines d'ingestion complexes et implémenté des architectures hybrides (recherche vectorielle + sémantique) avec re-ranking. Il utilise des outils comme <strong>RAGAs</strong> et <strong>LangFuse</strong> pour évaluer quantitativement la fidélité et la précision des systèmes."
  },
  {
    keywords: ["agent", "multiagent", "langgraph", "workflow", "mcp"],
    response: "Yakini conçoit des systèmes d'agents IA complexes. Il utilise notamment <strong>LangGraph</strong> pour créer des architectures multi-agents avec gestion d'état et boucles de validation (Self-Correction). Il s'intéresse également au Model Context Protocol (MCP) pour connecter standardiser les outils des LLMs."
  },
  {
    keywords: ["catia", "cao", "dessin", "industriel", "expleo"],
    response: "Chez Expleo Group, Yakini conçoit des agents IA capables de générer automatiquement des modèles 3D dans <strong>CATIA</strong> à partir d'expressions de besoins en langage naturel. Cela permet d'optimiser considérablement les processus de conception de pièces industrielles."
  }
];
 
export const fallbackResponses = [
  "C'est une excellente question ! Mon créateur Yakini a beaucoup travaillé sur ces sujets. Je vous invite à explorer la section 'Cas d'usage' ou à le contacter directement par email (yakandres3@gmail.com).",
  "Je ne suis pas certain de détenir cette information précise dans ma base de connaissances locale. Vous pouvez consulter son CV détaillé ci-dessus ou lui envoyer un message directement !",
  "Intéressant ! Pour en savoir plus à ce sujet, vous pouvez envoyer un mail à yakandres3@gmail.com ou m'interroger sur ses projets RAG, son doctorat, ou ses expériences chez Airbus et Expleo."
];
