// app.js - Logique et interactivité du portfolio de Yakini Tchouka

import {
  profileData,
  skillsData,
  experiencesData,
  educationData,
  useCasesData,
  blogPostsData,
  chatbotKnowledge,
  fallbackResponses
} from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeroTypewriter();
  renderSkills();
  renderUseCases();
  renderTimeline();
  initChatbot();
  renderBlog();
  initContactForm();
  initScrollSpy();
});

/* 1. Menu Mobile */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
}

/* 2. Effet d'écriture (Typewriter) dans le Hero */
function initHeroTypewriter() {
  const subtitleEl = document.getElementById('hero-subtitle');
  if (!subtitleEl) return;

  const titles = [
    "Ingénieur IA Générative",
    "Architecte RAG & Bases Vectorielles",
    "Expert Systèmes Multi-Agents (LangGraph)",
    "Docteur en NLP / Deep Learning",
    "Spécialiste MLOps & Cloud Azure"
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 100;

  function type() {
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
      subtitleEl.innerHTML = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      delay = 50;
    } else {
      subtitleEl.innerHTML = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      delay = 100;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting = true;
      delay = 2000; // Pause avant effacement
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      delay = 500; // Pause avant réécriture
    }

    setTimeout(type, delay);
  }

  type();
}

/* 3. Rendu des compétences */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  // Icon mapping Helper
  const getIconSvg = (iconName) => {
    switch (iconName) {
      case 'brain':
        return `<svg viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.07 19.58 10.47 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>`;
      case 'search':
        return `<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`;
      case 'chart-line':
        return `<svg viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>`;
      case 'cloud':
        return `<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/></svg>`;
      case 'code':
        return `<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`;
      default:
        return `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`;
    }
  };

  container.innerHTML = skillsData.map(skillGroup => `
    <div class="skill-card glass-panel">
      <div class="skill-header">
        <div class="skill-icon-wrap">
          ${getIconSvg(skillGroup.icon)}
        </div>
        <h3 class="skill-title">${skillGroup.category}</h3>
      </div>
      <div class="skill-list">
        ${skillGroup.items.map(skill => `<span class="badge tech">${skill}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* 4. Rendu des Cas d'usage avec filtre */
function renderUseCases() {
  const container = document.getElementById('usecases-container');
  const filtersContainer = document.getElementById('usecases-filters');
  if (!container || !filtersContainer) return;

  // Définir les catégories de filtre
  const categories = [
    { id: 'all', name: 'Tous les cas' },
    { id: 'genai', name: 'IA Générative / LLM' },
    { id: 'rag', name: 'RAG & Sémantique' },
    { id: 'agents', name: 'Multi-Agents' },
    { id: 'nlp', name: 'NLP & Deep Learning' }
  ];

  // Rendu des boutons filtres
  filtersContainer.innerHTML = categories.map((cat, index) => `
    <button class="filter-btn ${index === 0 ? 'active' : ''}" data-filter="${cat.id}">
      ${cat.name}
    </button>
  `).join('');

  // Logique de filtrage des cas d'usage
  const filterUseCases = (categoryId) => {
    let filteredData = useCasesData;

    if (categoryId !== 'all') {
      filteredData = useCasesData.filter(item => {
        if (categoryId === 'genai') {
          return item.tags.some(tag => ['LangChain', 'Gemini 1.5', 'Vertex AI', 'OpenAI API', 'LLM'].includes(tag) || item.id === 'cad-agent' || item.id === 'doc-aero');
        }
        if (categoryId === 'rag') {
          return item.tags.some(tag => ['FAISS', 'Chroma DB', 'RAGAs', 'LangFuse', 'Azure AI Search'].includes(tag)) || item.id === 'rag-expert';
        }
        if (categoryId === 'agents') {
          return item.tags.some(tag => ['LangGraph', 'LangFlow', 'Multi-Agent'].includes(tag)) || item.id === 'cad-agent' || item.id === 'multi-agent-system';
        }
        if (categoryId === 'nlp') {
          return item.tags.some(tag => ['PyTorch', 'Transformers', 'BioBERT', 'NLP', 'BERT'].includes(tag)) || item.id === 'medical-nlp';
        }
        return false;
      });
    }

    if (filteredData.length === 0) {
      container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Aucun cas d'usage trouvé dans cette catégorie.</p>`;
      return;
    }

    container.innerHTML = filteredData.map(item => `
      <div class="usecase-card glass-panel" data-id="${item.id}">
        <h3 class="usecase-title">${item.title}</h3>
        <p class="usecase-desc">${item.shortDesc}</p>
        <div class="usecase-impact">
          <strong>Impact :</strong> ${item.impact}
        </div>
        <div class="usecase-tags">
          ${item.tags.map(tag => `<span class="badge tech">${tag}</span>`).join('')}
        </div>
      </div>
    `).join('');
  };

  // Rendu initial (Tous)
  filterUseCases('all');

  // Event listener pour filtres
  filtersContainer.addEventListener('click', (e) => {
    const button = e.target.closest('.filter-btn');
    if (!button) return;

    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filterId = button.getAttribute('data-filter');
    filterUseCases(filterId);
  });
}

/* 5. Rendu du parcours (Chronologie) */
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  // Fusionner et trier ou afficher simplement les expériences, puis études
  // Ici nous affichons les expériences qui constituent la partie la plus importante
  const timelineHtml = experiencesData.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card glass-panel">
        <div class="timeline-header">
          <div class="timeline-title-group">
            <h3>${exp.role}</h3>
            <span class="timeline-company">${exp.company}</span>
          </div>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <div class="timeline-body">
          <p>${exp.description}</p>
          <ul class="timeline-tasks">
            ${exp.tasks.map(task => `<li>${task}</li>`).join('')}
          </ul>
          <div class="usecase-tags">
            ${exp.technologies.map(tech => `<span class="badge tech">${tech}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Ajouter les formations sous forme de section chronologique après les expériences
  const educationHtml = `
    <div class="timeline-item" style="margin-top: 6rem;">
      <div class="timeline-dot" style="border-color: var(--accent-pink);"></div>
      <div class="timeline-card glass-panel" style="border-left: 3px solid var(--accent-pink);">
        <h3 style="font-size: 1.5rem; margin-bottom: 2rem; background: linear-gradient(135deg, #fff, var(--accent-pink)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Formation Académique</h3>
        <div style="display: flex; flex-direction: column; gap: 2rem;">
          ${educationData.map(edu => `
            <div style="border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 1.5rem; last-child: border-bottom: none;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.5rem; flex-wrap:wrap; gap:0.5rem;">
                <h4 style="font-size:1.15rem; font-weight:600; color:var(--text-primary);">${edu.degree}</h4>
                <span style="font-family:var(--font-mono); font-size:0.8rem; color:var(--text-muted);">${edu.period}</span>
              </div>
              <p style="color:var(--accent-pink); font-size:0.95rem; font-weight:500; margin-bottom:0.5rem;">${edu.school}</p>
              <p style="color:var(--text-secondary); font-size:0.9rem;">${edu.details}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  container.innerHTML = timelineHtml + educationHtml;
}

/* 6. Simulateur de Chatbot Agent */
function initChatbot() {
  const messagesContainer = document.getElementById('chat-messages');
  const inputEl = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');
  const resetBtn = document.getElementById('chat-reset');
  const suggestionsContainer = document.getElementById('chat-suggestions');

  if (!messagesContainer || !inputEl || !sendBtn) return;

  const initialMessage = "Bonjour ! Je suis l'Agent IA de Yakini. Comment puis-je vous aider ? Vous pouvez me poser des questions sur son doctorat, ses projets avec Airbus, ou ses compétences RAG / LLM.";
  
  const suggestions = [
    "Quelles sont ses compétences RAG ?",
    "Parle-moi de sa thèse de doctorat",
    "Qu'a-t-il fait chez Airbus ?",
    "Quels langages et technos ?",
    "Comment le contacter ?"
  ];

  let chatHistory = [];

  // Réinitialiser la conversation
  const resetChat = () => {
    messagesContainer.innerHTML = '';
    chatHistory = [];
    appendMessage(initialMessage, 'bot');
    renderSuggestions();
  };

  const renderSuggestions = () => {
    if (!suggestionsContainer) return;
    suggestionsContainer.innerHTML = suggestions.map(sug => `
      <button class="suggestion-chip">${sug}</button>
    `).join('');
  };

  const appendMessage = (text, sender) => {
    const bubble = document.createElement('div');
    bubble.classList.add('chat-bubble', sender);
    bubble.innerHTML = text;
    messagesContainer.appendChild(bubble);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  const showTypingIndicator = () => {
    const indicator = document.createElement('div');
    indicator.classList.add('chat-bubble', 'bot', 'typing-indicator-wrapper');
    indicator.id = 'chat-typing-indicator';
    indicator.innerHTML = `
      <div class="typing-indicator">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;
    messagesContainer.appendChild(indicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  const removeTypingIndicator = () => {
    const indicator = document.getElementById('chat-typing-indicator');
    if (indicator) {
      indicator.remove();
    }
  };

  // Moteur de recherche de réponses basiques de secours
  const getAgentResponse = (userQuery) => {
    const normalized = userQuery.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Retirer les accents
    
    // Rechercher un mot-clé correspondant
    for (const item of chatbotKnowledge) {
      const match = item.keywords.some(keyword => {
        // Normaliser le mot clé également
        const normKeyword = keyword.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return normalized.includes(normKeyword);
      });
      if (match) {
        return item.response;
      }
    }

    // Réponse aléatoire si aucun mot-clé ne match
    const randomIdx = Math.floor(Math.random() * fallbackResponses.length);
    return fallbackResponses[randomIdx];
  };

  const handleSend = async () => {
    const text = inputEl.value.trim();
    if (!text) return;

    appendMessage(text, 'user');
    inputEl.value = '';

    showTypingIndicator();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: text,
          history: chatHistory
        })
      });

      const data = await response.json();
      removeTypingIndicator();
      
      const reply = data.response;
      appendMessage(reply, 'bot');
      
      // Mettre à jour l'historique
      chatHistory.push({ role: 'user', content: text });
      chatHistory.push({ role: 'bot', content: reply });
      
    } catch (error) {
      console.warn('Erreur chatbot backend, utilisation du secours local:', error);
      removeTypingIndicator();
      const reply = getAgentResponse(text);
      appendMessage(reply, 'bot');
      
      chatHistory.push({ role: 'user', content: text });
      chatHistory.push({ role: 'bot', content: reply });
    }
  };

  // Handlers
  sendBtn.addEventListener('click', handleSend);
  inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', resetChat);
  }

  if (suggestionsContainer) {
    suggestionsContainer.addEventListener('click', (e) => {
      const chip = e.target.closest('.suggestion-chip');
      if (!chip) return;
      inputEl.value = chip.textContent;
      handleSend();
    });
  }

  // Lancement initial
  resetChat();
}

/* 7. Blog (Recherche et Modal) */
function renderBlog() {
  const container = document.getElementById('blog-container');
  const searchInput = document.getElementById('blog-search');
  const modal = document.getElementById('blog-modal');
  const modalClose = document.getElementById('modal-close');

  if (!container) return;

  const displayPosts = (filterText = '') => {
    const filtered = blogPostsData.filter(post => {
      const query = filterText.toLowerCase();
      return post.title.toLowerCase().includes(query) || 
             post.summary.toLowerCase().includes(query) ||
             post.category.toLowerCase().includes(query);
    });

    if (filtered.length === 0) {
      container.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:var(--text-muted);">Aucun article ne correspond à votre recherche.</p>`;
      return;
    }

    container.innerHTML = filtered.map(post => `
      <div class="blog-card glass-panel" data-id="${post.id}">
        <div class="blog-card-body">
          <div class="blog-card-meta">
            <span class="blog-card-category">${post.category}</span>
            <span>${post.date}</span>
          </div>
          <h3 class="blog-card-title">${post.title}</h3>
          <p class="blog-card-summary">${post.summary}</p>
          <div class="blog-card-meta" style="margin-bottom:0; margin-top: auto;">
            <span class="blog-card-link">
              Lire l'article
              <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
            </span>
            <span>${post.readTime}</span>
          </div>
        </div>
      </div>
    `).join('');
  };

  // Initial
  displayPosts();

  // Recherche
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      displayPosts(e.target.value);
    });
  }

  // Ouvrir Modal
  container.addEventListener('click', (e) => {
    const card = e.target.closest('.blog-card');
    if (!card) return;

    const postId = card.getAttribute('data-id');
    const post = blogPostsData.find(p => p.id === postId);

    if (post && modal) {
      document.getElementById('modal-category').textContent = post.category;
      document.getElementById('modal-date').textContent = post.date;
      document.getElementById('modal-readtime').textContent = post.readTime + " de lecture";
      document.getElementById('modal-title').textContent = post.title;
      document.getElementById('modal-body').innerHTML = post.content;

      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Bloquer le scroll du body
    }
  });

  // Fermer Modal
  const closeModal = () => {
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  };

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
}

/* 8. Gestionnaire de formulaire de contact */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('form-submit-btn');

  if (!form || !feedback) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !subject || !message) {
      feedback.textContent = "Veuillez remplir tous les champs du formulaire.";
      feedback.className = "form-feedback error";
      return;
    }

    // Effet visuel d'envoi en cours
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `Envoi en cours... <span class="typing-dot" style="background:#000; width:5px; height:5px; margin:0 2px;"></span>`;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, subject, message })
      });

      const data = await response.json();

      if (response.ok) {
        if (data.simulation) {
          feedback.innerHTML = `<strong>Merci ${name} !</strong> Votre message a bien été simulé en local (mode développement).`;
        } else {
          feedback.innerHTML = `<strong>Merci ${name} !</strong> Votre message a été envoyé avec succès à Yakini.`;
        }
        feedback.className = "form-feedback success";
        form.reset();
      } else {
        feedback.textContent = data.detail || "Une erreur est survenue lors de l'envoi du message.";
        feedback.className = "form-feedback error";
      }
    } catch (error) {
      console.warn('Erreur envoi contact backend, utilisation du secours local:', error);
      feedback.innerHTML = `<strong>Merci ${name} !</strong> Votre message a été simulé en local car le serveur backend n'est pas actif.`;
      feedback.className = "form-feedback success";
      form.reset();
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });
}

/* 9. ScrollSpy - Activer la classe active sur les liens de navigation lors du défilement */
function initScrollSpy() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  const options = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // Analyse du milieu de l'écran
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, options);

  sections.forEach(section => observer.observe(section));
}
