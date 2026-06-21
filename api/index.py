import os
import logging
from typing import List, Optional
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv

# Charger les variables d'environnement
load_dotenv()

# Configurer les logs
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("portfolio-backend")

app = FastAPI(title="Yakini Portfolio Backend", version="1.0.0")

# Configurer CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Charger le contexte du CV
CV_CONTEXT = ""
cv_path = os.path.join(os.path.dirname(__file__), "cv_context.txt")
try:
    if os.path.exists(cv_path):
        with open(cv_path, "r", encoding="utf-8") as f:
            CV_CONTEXT = f.read()
except Exception as e:
    logger.error(f"Impossible de charger cv_context.txt: {e}")

# Schémas Pydantic
class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class ChatMessage(BaseModel):
    role: str  # 'user' ou 'bot' / 'model'
    content: str

class ChatRequest(BaseModel):
    message: str
    history: Optional[List[ChatMessage]] = []

# Moteur de secours local (si pas de clé d'API Gemini)
FALLBACK_KNOWLEDGE = [
    {
        "keywords": ["bonjour", "salut", "hello", "qui es-tu", "présente-toi", "presente"],
        "response": "Bonjour ! Je suis l'Agent Virtuel de Yakini. Comment puis-je vous aider ? Je peux vous renseigner sur son parcours, ses compétences ou comment le contacter."
    },
    {
        "keywords": ["experience", "parcours", "expleo", "airbus", "travail", "poste", "carriere", "historique", "doctorant"],
        "response": "Yakini est Ingénieur IA Sénior. Il travaille actuellement chez <strong>Expleo Group</strong> sur de l'IA générative appliquée à CATIA (CAO 3D). Auparavant, il a industrialisé des cas d'usage LLM chez <strong>Airbus</strong> et conçu des systèmes RAG complexes."
    },
    {
        "keywords": ["competence", "techno", "python", "langchain", "framework", "outil", "langgraph", "azure"],
        "response": "Ses compétences incluent :<br>• <strong>IA Générative / LLM :</strong> OpenAI, Gemini, Mistral, Fine-tuning.<br>• <strong>RAG & Agents :</strong> LangChain, LangGraph, Azure AI Search, FAISS, Chroma.<br>• <strong>Développement :</strong> Python, FastAPI, Docker, Azure."
    },
    {
        "keywords": ["doctorat", "phd", "these", "etude", "recherche", "universite", "medical", "bert"],
        "response": "Yakini détient un <strong>Doctorat en Informatique</strong> spécialisé en NLP (Université Marie Louis et Pasteur, 2020-2023). Sa thèse portait sur l'adaptation de modèles Transformers (BERT/BioBERT) pour l'analyse de rapports médicaux."
    },
    {
        "keywords": ["contact", "email", "mail", "telephone", "tel", "adresse", "toulouse", "recruter"],
        "response": "Vous pouvez le contacter par email à <strong>yakandres3@gmail.com</strong> ou par téléphone au <strong>+33 7 53 53 48 91</strong>. Il est basé à Toulouse."
    },
    {
        "keywords": ["rag", "retrieval", "hallucination", "ragas"],
        "response": "Yakini a une forte expertise en RAG (Retrieval-Augmented Generation). Il a déployé des pipelines d'ingestion complexes et utilise des outils comme <strong>RAGAs</strong> et <strong>LangFuse</strong> pour évaluer quantitativement la fidélité des réponses."
    }
]

def fallback_chat_response(query: str) -> str:
    normalized = query.lower()
    for item in FALLBACK_KNOWLEDGE:
        if any(keyword in normalized for keyword in item["keywords"]):
            return item["response"]
    return "C'est une excellente question. Yakini a beaucoup travaillé sur ces sujets. Je vous invite à le contacter directement par email à yakandres3@gmail.com pour échanger en détail !"

@app.post("/api/contact")
async def handle_contact(payload: ContactRequest):
    resend_api_key = os.getenv("RESEND_API_KEY")
    
    logger.info(f"Formulaire de contact reçu de {payload.name} ({payload.email}) - Sujet: {payload.subject}")
    
    if not resend_api_key:
        logger.warning("RESEND_API_KEY non configurée. Simulation d'envoi locale (logs).")
        return {
            "status": "success",
            "message": f"Message de {payload.name} simulé avec succès en local.",
            "simulation": True
        }
        
    try:
        import resend
        resend.api_key = resend_api_key
        
        email_content = f"""
        <h3>Nouveau message depuis le portfolio de {payload.name}</h3>
        <p><strong>Nom:</strong> {payload.name}</p>
        <p><strong>Email:</strong> {payload.email}</p>
        <p><strong>Sujet:</strong> {payload.subject}</p>
        <p><strong>Message:</strong></p>
        <p>{payload.message}</p>
        """
        
        params = {
            "from": "onboarding@resend.dev",
            "to": "yakandres3@gmail.com",
            "subject": f"Portfolio Contact: {payload.subject}",
            "html": email_content
        }
        resend.Emails.send(params)
        logger.info("Email envoyé via Resend avec succès.")
        return {"status": "success", "message": "Votre message a été envoyé avec succès."}
    except Exception as e:
        logger.error(f"Erreur d'envoi avec Resend: {e}")
        raise HTTPException(status_code=500, detail="Une erreur est survenue lors de l'envoi de l'email.")

@app.post("/api/chat")
async def handle_chat(payload: ChatRequest):
    gemini_api_key = os.getenv("GEMINI_API_KEY")
    
    if not gemini_api_key:
        logger.warning("GEMINI_API_KEY non configurée. Utilisation du moteur de secours local.")
        response_text = fallback_chat_response(payload.message)
        return {"response": response_text}
        
    try:
        from google import genai
        from google.genai import types
        
        client = genai.Client(api_key=gemini_api_key)
        
        system_instruction = f"""
        Tu es "Agent Yakini", l'assistant virtuel intelligent de Yakini Tchouka.
        Ton objectif est de répondre aux questions des recruteurs et visiteurs de manière professionnelle, chaleureuse et structurée.
        Tu dois te baser exclusivement sur les données suivantes issues de son CV :
        
        ---
        {CV_CONTEXT}
        ---
        
        Consignes strictes :
        - Sois honnête : si une compétence ou expérience n'est pas mentionnée, dis gentiment que Yakini ne l'a pas ou propose de le contacter pour clarifier.
        - Réponses courtes et percutantes en français.
        - Utilise le formatage Markdown léger (puces, gras).
        """
        
        # Structurer l'historique pour Gemini
        contents = []
        if payload.history:
            for h in payload.history:
                role = 'model' if h.role in ['model', 'bot', 'assistant'] else 'user'
                contents.append({"role": role, "parts": [{"text": h.content}]})
        
        # Ajouter la question actuelle
        contents.append({"role": "user", "parts": [{"text": payload.message}]})
        
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=contents,
            config=types.GenerateContentConfig(
                system_instruction=system_instruction,
                temperature=0.4
            )
        )
        
        return {"response": response.text}
        
    except Exception as e:
        logger.error(f"Erreur d'appel API Gemini: {e}")
        # En cas d'erreur de clé ou d'API, on utilise le moteur local en backup
        response_text = fallback_chat_response(payload.message)
        return {"response": response_text, "error": str(e)}
