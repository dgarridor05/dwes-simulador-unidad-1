// ==========================================================================
// CONTROLADOR DE APLICACIÓN - DWES TEST MASTER (FP DAW / DAM)
// Unidad 1: Arquitecturas Web | Arquitectura Modular y Rendimiento Optimizado
// ==========================================================================

class DWESExamApp {
  constructor() {
    this.allQuestions = [...QUESTIONS_DATA];
    this.questions = [...this.allQuestions];
    this.filteredQuestions = [...this.questions];
    this.currentIndex = 0;
    this.currentMode = 'tutor'; // 'tutor' | 'exam' | 'traps' | 'review' | 'flashcards' | 'survival' | 'glossary'
    this.activeLevel = 'all';
    this.activeTopic = 'all';
    this.searchQuery = '';

    // Estado de respuestas
    this.tutorAnswers = {}; // { [qId]: { optionId, isCorrect } }
    this.examAnswers = {};  // { [qId]: optionId } (neutral, sin revelar corrección)
    this.failedQuestionIds = new Set(this.loadStorage('dwes_failed_ids', []));
    this.bookmarkedIds = new Set(this.loadStorage('dwes_bookmarked_ids', []));
    this.audioEnabled = this.loadStorage('dwes_audio', true);

    // Configuración y Temporizador de Examen
    this.examTotalSeconds = 45 * 60;
    this.examTimeLeft = 45 * 60;
    this.timerInterval = null;
    this.examQuestionsList = []; // Lista específica congelada del examen
    this.examOptionsShuffled = false;

    // Estado Flashcards
    this.flashcardsData = this.buildFlashcardsData();
    this.currentFcIndex = 0;
    this.fcKnownIds = new Set(this.loadStorage('dwes_fc_known', []));

    // Estado Modo Muerte Súbita (Survival)
    this.survivalStreak = 0;
    this.survivalBestStreak = this.loadStorage('dwes_survival_best', 0);
    this.survivalTimerInterval = null;
    this.survivalTimeLeft = 15;
    this.survivalCurrentQuestion = null;

    // Gestos táctiles
    this.touchStartX = 0;
    this.touchEndX = 0;

    // Sintetizador Web Audio API
    this.initAudioContext();

    // Cache de elementos DOM
    this.cacheDomElements();

    this.init();
  }

  cacheDomElements() {
    this.dom = {
      // Header y controles
      toggleAudioBtn: document.getElementById('toggleAudioBtn'),
      toggleThemeBtn: document.getElementById('toggleThemeBtn'),
      resetStatsBtn: document.getElementById('resetStatsBtn'),
      timerDisplay: document.getElementById('timerDisplay'),
      timeValue: document.getElementById('timeValue'),
      toggleMapBtn: document.getElementById('toggleMapBtn'),
      mapCurrentCount: document.getElementById('mapCurrentCount'),
      srAnnouncement: document.getElementById('srAnnouncement'),

      // Pestañas
      tabs: document.querySelectorAll('.mode-tab'),
      filterBar: document.getElementById('filterBar'),
      levelChips: document.querySelectorAll('.chip-filter[data-level]'),
      topicSelect: document.getElementById('topicFilterSelect'),
      searchInput: document.getElementById('questionSearchInput'),

      // Banners y progreso
      statsBanner: document.getElementById('statsBanner'),
      statProgress: document.getElementById('statProgress'),
      statCorrect: document.getElementById('statCorrect'),
      statWrong: document.getElementById('statWrong'),
      statGrade: document.getElementById('statGrade'),
      failedCountBadge: document.getElementById('failedCountBadge'),
      progressBarContainer: document.getElementById('progressBarContainer'),
      progressFill: document.getElementById('progressFill'),
      progressText: document.getElementById('progressText'),
      questionCountText: document.getElementById('questionCountText'),

      // Vistas
      quizMainView: document.getElementById('quizMainView'),
      resultsModal: document.getElementById('resultsModal'),
      glossaryView: document.getElementById('glossaryView'),
      examReviewView: document.getElementById('examReviewView'),
      flashcardsView: document.getElementById('flashcardsView'),
      survivalView: document.getElementById('survivalView'),
      terminalView: document.getElementById('terminalView'),
      terminalInput: document.getElementById('terminalInput'),
      terminalSubmitBtn: document.getElementById('terminalSubmitBtn'),
      terminalOutput: document.getElementById('terminalOutput'),

      // Tarjeta de pregunta
      questionCard: document.getElementById('questionCard'),
      badgeLevel: document.getElementById('badgeLevel'),
      badgeTopic: document.getElementById('badgeTopic'),
      badgePage: document.getElementById('badgePage'),
      cardMapBtn: document.getElementById('cardMapBtn'),
      bookmarkBtn: document.getElementById('bookmarkQuestionBtn'),
      questionText: document.getElementById('questionText'),
      optionsContainer: document.getElementById('optionsContainer'),

      // Feedback / Explicación
      explanationCard: document.getElementById('explanationCard'),
      explanationTitle: document.getElementById('explanationTitle'),
      explanationText: document.getElementById('explanationText'),
      distractorContainer: document.getElementById('distractorContainer'),
      distractorList: document.getElementById('distractorList'),
      trapBox: document.getElementById('trapBox'),
      trapText: document.getElementById('trapText'),

      // Botones de acción
      prevBtn: document.getElementById('prevBtn'),
      nextBtn: document.getElementById('nextBtn'),
      skipBtn: document.getElementById('skipBtn'),
      unselectBtn: document.getElementById('unselectBtn'),
      finishExamBtn: document.getElementById('finishExamBtn'),

      // Modales
      mapModalOverlay: document.getElementById('mapModalOverlay'),
      closeMapModalBtn: document.getElementById('closeMapModalBtn'),
      questionGridContainer: document.getElementById('questionGridContainer'),
      mapModalTotalCount: document.getElementById('mapModalTotalCount'),

      examConfigModalOverlay: document.getElementById('examConfigModalOverlay'),
      closeConfigModalBtn: document.getElementById('closeConfigModalBtn'),
      cancelExamConfigBtn: document.getElementById('cancelExamConfigBtn'),
      startConfiguredExamBtn: document.getElementById('startConfiguredExamBtn'),
      shuffleOptionsCheckbox: document.getElementById('shuffleOptionsCheckbox'),

      // Pantalla de Resultados
      finalGradeScore: document.getElementById('finalGradeScore'),
      finalGradeTitle: document.getElementById('finalGradeTitle'),
      finalGradeVerdict: document.getElementById('finalGradeVerdict'),
      finalCorrectCount: document.getElementById('finalCorrectCount'),
      finalWrongCount: document.getElementById('finalWrongCount'),
      finalBlankCount: document.getElementById('finalBlankCount'),
      finalAccuracy: document.getElementById('finalAccuracy'),
      topicMasteryBars: document.getElementById('topicMasteryBars'),
      diagnosisAdviceBox: document.getElementById('diagnosisAdviceBox'),
      reviewFullExamBtn: document.getElementById('reviewFullExamBtn'),
      printReportBtn: document.getElementById('printReportBtn'),
      restartExamBtn: document.getElementById('restartExamBtn'),
      reviewFailedOnlyBtn: document.getElementById('reviewFailedOnlyBtn'),
      backToTutorBtn: document.getElementById('backToTutorBtn'),

      // Revisión Post-Examen
      closeReviewViewBtn: document.getElementById('closeReviewViewBtn'),
      examReviewContainer: document.getElementById('examReviewContainer'),
      revCountAll: document.getElementById('revCountAll'),
      revCountWrong: document.getElementById('revCountWrong'),
      revCountBlank: document.getElementById('revCountBlank'),
      revCountCorrect: document.getElementById('revCountCorrect'),
      reviewFilterChips: document.querySelectorAll('[data-review-filter]'),

      // Flashcards
      flashcardElement: document.getElementById('flashcardElement'),
      cardTopicBadge: document.getElementById('cardTopicBadge'),
      cardPromptText: document.getElementById('cardPromptText'),
      cardAnswerText: document.getElementById('cardAnswerText'),
      cardTrapText: document.getElementById('cardTrapText'),
      cardPageText: document.getElementById('cardPageText'),
      fcPrevBtn: document.getElementById('fcPrevBtn'),
      fcNextBtn: document.getElementById('fcNextBtn'),
      fcFlipBtn: document.getElementById('fcFlipBtn'),
      fcMarkKnownBtn: document.getElementById('fcMarkKnownBtn'),
      fcMarkReviewBtn: document.getElementById('fcMarkReviewBtn'),
      fcCardCount: document.getElementById('fcCardCount'),
      fcKnownCount: document.getElementById('fcKnownCount'),
      fcReviewCount: document.getElementById('fcReviewCount'),

      // Muerte Súbita
      survivalCurrentStreak: document.getElementById('survivalCurrentStreak'),
      survivalBestStreak: document.getElementById('survivalBestStreak'),
      survivalTimerBar: document.getElementById('survivalTimerBar'),
      survivalSecondsText: document.getElementById('survivalSecondsText'),
      survivalQuestionText: document.getElementById('survivalQuestionText'),
      survivalOptionsContainer: document.getElementById('survivalOptionsContainer')
    };
  }

  init() {
    this.setupEventListeners();
    this.setupTerminal();
    this.applyStoredTheme();
    this.updateAudioButtonState();
    this.updateFailedBadge();
    this.updateLevelChipsCounts();
    this.registerServiceWorker();
    this.applyFilters();
    this.renderQuestion();

    // Comprobar si había un examen activo guardado
    this.checkSavedExamSession();
  }

  // --- AUDIO SYNTHESIS (Zero External Assets) ---
  initAudioContext() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtx();
    } catch {
      this.audioCtx = null;
    }
  }

  playSound(type) {
    if (!this.audioEnabled || !this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.setValueAtTime(146.83, now + 0.12);
        gain.gain.setValueAtTime(0.14, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'click') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === 'fanfare') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        osc.frequency.setValueAtTime(783.99, now + 0.2);
        osc.frequency.setValueAtTime(1046.50, now + 0.3); // C6
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.start(now);
        osc.stop(now + 0.6);
      }
    } catch (err) {
      console.warn("Audio issue", err);
    }
  }

  // --- PERSISTENCIA LOCAL STORAGE ---
  loadStorage(key, defaultValue) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch {
      return defaultValue;
    }
  }

  saveStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn("Storage save error", e);
    }
  }

  // --- REGISTRO PWA OFFLINE ---
  registerServiceWorker() {
    if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
      navigator.serviceWorker.register('./sw.js')
        .then(() => console.log('Service Worker registrado con éxito'))
        .catch((err) => console.log('SW registration error', err));
    }
  }

  // --- EVENT LISTENERS ---
  setupEventListeners() {
    // Cambio de modo
    this.dom.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const mode = tab.dataset.mode;
        if (mode === 'exam' && this.currentMode !== 'exam') {
          this.openExamConfigModal();
        } else {
          this.switchMode(mode);
        }
      });
    });

    // Filtros de nivel
    this.dom.levelChips.forEach(chip => {
      chip.addEventListener('click', () => {
        this.dom.levelChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.activeLevel = chip.dataset.level;
        this.applyFilters();
      });
    });

    // Filtro por bloque
    this.dom.topicSelect.addEventListener('change', (e) => {
      this.activeTopic = e.target.value;
      this.applyFilters();
    });

    // Buscador en tiempo real
    this.dom.searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      this.applyFilters();
    });

    // Botones de navegación
    this.dom.nextBtn.addEventListener('click', () => this.nextQuestion());
    this.dom.prevBtn.addEventListener('click', () => this.prevQuestion());
    this.dom.skipBtn.addEventListener('click', () => this.nextQuestion());
    this.dom.unselectBtn.addEventListener('click', () => this.unselectCurrentExamAnswer());
    this.dom.finishExamBtn.addEventListener('click', () => this.confirmFinishExam());

    // Bookmark / Duda
    this.dom.bookmarkBtn.addEventListener('click', () => this.toggleBookmarkCurrent());

    // Botones Mapa de preguntas
    this.dom.toggleMapBtn.addEventListener('click', () => this.openMapModal());
    this.dom.cardMapBtn.addEventListener('click', () => this.openMapModal());
    this.dom.closeMapModalBtn.addEventListener('click', () => this.closeMapModal());
    this.dom.mapModalOverlay.addEventListener('click', (e) => {
      if (e.target === this.dom.mapModalOverlay) this.closeMapModal();
    });

    // Configurador de Examen
    this.dom.closeConfigModalBtn.addEventListener('click', () => this.closeExamConfigModal());
    this.dom.cancelExamConfigBtn.addEventListener('click', () => this.closeExamConfigModal());
    this.dom.startConfiguredExamBtn.addEventListener('click', () => this.startConfiguredExam());
    this.dom.examConfigModalOverlay.addEventListener('click', (e) => {
      if (e.target === this.dom.examConfigModalOverlay) this.closeExamConfigModal();
    });

    // Presets visuales en el modal de examen
    document.querySelectorAll('.preset-option input').forEach(radio => {
      radio.addEventListener('change', () => {
        document.querySelectorAll('.preset-option').forEach(p => p.classList.remove('active'));
        radio.closest('.preset-option').classList.add('active');
      });
    });

    // Botones de Resultados
    this.dom.restartExamBtn.addEventListener('click', () => this.openExamConfigModal());
    this.dom.reviewFailedOnlyBtn.addEventListener('click', () => this.switchMode('review'));
    this.dom.backToTutorBtn.addEventListener('click', () => this.switchMode('tutor'));
    this.dom.reviewFullExamBtn.addEventListener('click', () => this.openPostExamReviewView());
    this.dom.printReportBtn.addEventListener('click', () => window.print());

    // Revisión Post-Examen
    this.dom.closeReviewViewBtn.addEventListener('click', () => this.closePostExamReviewView());
    this.dom.reviewFilterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        this.dom.reviewFilterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.filterPostExamReviewList(chip.dataset.reviewFilter);
      });
    });

    // Flashcards
    this.dom.flashcardElement.addEventListener('click', () => this.flipFlashcard());
    this.dom.fcFlipBtn.addEventListener('click', () => this.flipFlashcard());
    this.dom.fcPrevBtn.addEventListener('click', () => this.prevFlashcard());
    this.dom.fcNextBtn.addEventListener('click', () => this.nextFlashcard());
    this.dom.fcMarkKnownBtn.addEventListener('click', () => this.markFlashcard(true));
    this.dom.fcMarkReviewBtn.addEventListener('click', () => this.markFlashcard(false));

    // Audio & Tema & Reinicio
    this.dom.toggleAudioBtn.addEventListener('click', () => this.toggleAudio());
    this.dom.toggleThemeBtn.addEventListener('click', () => this.toggleTheme());
    this.dom.resetStatsBtn.addEventListener('click', () => this.confirmReset());

    // Gestos táctiles Swipe en móvil
    this.dom.questionCard.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.dom.questionCard.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipeGesture();
    }, { passive: true });

    // Atajos de Teclado
    window.addEventListener('keydown', (e) => this.handleKeyboard(e));
  }

  handleSwipeGesture() {
    const diff = this.touchStartX - this.touchEndX;
    if (Math.abs(diff) > 55) {
      if (diff > 0) {
        // Deslizar izquierda -> siguiente
        this.nextQuestion();
      } else {
        // Deslizar derecha -> anterior
        this.prevQuestion();
      }
    }
  }

  handleKeyboard(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

    const key = e.key.toUpperCase();
    const map = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', 'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D' };

    if (this.currentMode === 'flashcards') {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        this.flipFlashcard();
      } else if (e.key === 'ArrowRight') {
        this.nextFlashcard();
      } else if (e.key === 'ArrowLeft') {
        this.prevFlashcard();
      }
      return;
    }

    if (this.dom.resultsModal.style.display === 'block' || this.dom.mapModalOverlay.style.display === 'flex' || this.dom.examConfigModalOverlay.style.display === 'flex') {
      if (e.key === 'Escape') {
        this.closeMapModal();
        this.closeExamConfigModal();
      }
      return;
    }

    if (map[key]) {
      const optionBtn = document.querySelector(`.option-btn[data-option-id="${map[key]}"]`);
      if (optionBtn && !optionBtn.disabled) {
        optionBtn.click();
      }
    } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
      if (this.currentIndex < this.filteredQuestions.length - 1) {
        this.nextQuestion();
      } else if (this.currentMode === 'exam') {
        this.confirmFinishExam();
      }
    } else if (e.key === 'ArrowLeft') {
      this.prevQuestion();
    } else if (key === 'M') {
      this.openMapModal();
    } else if (key === 'B') {
      this.toggleBookmarkCurrent();
    }
  }

  // --- FILTROS Y BÚSQUEDA ---
  applyFilters() {
    let list = (this.currentMode === 'exam') ? [...this.examQuestionsList] : [...this.allQuestions];

    // Modo específico
    if (this.currentMode === 'traps') {
      list = list.filter(q => q.level === 'avanzado');
    } else if (this.currentMode === 'review') {
      list = list.filter(q => this.failedQuestionIds.has(q.id));
      if (list.length === 0) {
        this.filteredQuestions = [];
        this.renderNoQuestionsState("🎉 ¡Enhorabuena! No tienes ninguna pregunta pendiente en tu bolsa de fallos.");
        return;
      }
    }

    // Nivel
    if (this.activeLevel !== 'all' && this.currentMode !== 'traps' && this.currentMode !== 'exam') {
      list = list.filter(q => q.level === this.activeLevel);
    }

    // Bloque temático
    if (this.activeTopic !== 'all' && this.currentMode !== 'exam') {
      list = list.filter(q => q.topic.toString() === this.activeTopic.toString());
    }

    // Búsqueda en texto
    if (this.searchQuery && this.currentMode !== 'exam') {
      list = list.filter(q => {
        const inQ = q.question.toLowerCase().includes(this.searchQuery);
        const inExpl = q.explanation.toLowerCase().includes(this.searchQuery);
        const inOpts = q.options.some(o => o.text.toLowerCase().includes(this.searchQuery));
        return inQ || inExpl || inOpts;
      });
    }

    this.filteredQuestions = list;
    this.currentIndex = 0;

    if (this.filteredQuestions.length === 0) {
      this.renderNoQuestionsState("No hay preguntas que coincidan con la búsqueda o filtros.");
    } else {
      this.renderQuestion();
    }
    this.updateStatsDisplay();
    this.updateMapCounters();
  }

  renderNoQuestionsState(message) {
    this.dom.questionText.innerHTML = `<div style="text-align: center; padding: 2.5rem; color: var(--text-muted); font-size: 1.05rem;">${message}</div>`;
    this.dom.optionsContainer.innerHTML = '';
    this.dom.explanationCard.style.display = 'none';
    this.dom.nextBtn.style.display = 'none';
    this.dom.prevBtn.style.display = 'none';
    this.dom.skipBtn.style.display = 'none';
    this.dom.unselectBtn.style.display = 'none';
  }

  updateLevelChipsCounts() {
    const total = this.allQuestions.length;
    const basicos = this.allQuestions.filter(q => q.level === 'basico').length;
    const medios = this.allQuestions.filter(q => q.level === 'medio').length;
    const avanzados = this.allQuestions.filter(q => q.level === 'avanzado').length;

    this.dom.levelChips.forEach(chip => {
      const lvl = chip.dataset.level;
      if (lvl === 'all') chip.textContent = `Todos (${total})`;
      else if (lvl === 'basico') chip.textContent = `Básico (${basicos})`;
      else if (lvl === 'medio') chip.textContent = `Intermedio (${medios})`;
      else if (lvl === 'avanzado') chip.textContent = `Avanzado / Trampa (${avanzados})`;
    });
  }

  // --- CAMBIO DE VISTAS Y MODOS ---
  switchMode(mode) {
    this.currentMode = mode;
    this.dom.tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.mode === mode);
      tab.setAttribute('aria-selected', tab.dataset.mode === mode);
    });

    // Detener temporizador si salimos de examen o survival
    if (mode !== 'exam') {
      this.stopTimer();
      this.dom.timerDisplay.style.display = 'none';
      this.dom.finishExamBtn.style.display = 'none';
      this.dom.unselectBtn.style.display = 'none';
    }
    if (mode !== 'survival') {
      this.stopSurvivalTimer();
    }

    // Visibilidad de secciones
    const allViews = [
      this.dom.quizMainView, this.dom.glossaryView, this.dom.resultsModal,
      this.dom.examReviewView, this.dom.flashcardsView, this.dom.survivalView,
      this.dom.terminalView
    ];
    allViews.forEach(v => { if (v) v.style.display = 'none'; });

    // Paneles auxiliares
    const isSpecialView = ['glossary', 'flashcards', 'survival', 'terminal'].includes(mode);
    this.dom.filterBar.style.display = isSpecialView ? 'none' : 'flex';
    this.dom.statsBanner.style.display = isSpecialView ? 'none' : 'grid';
    this.dom.progressBarContainer.style.display = isSpecialView ? 'none' : 'block';

    if (mode === 'glossary') {
      this.dom.glossaryView.style.display = 'block';
    } else if (mode === 'flashcards') {
      this.dom.flashcardsView.style.display = 'block';
      this.renderCurrentFlashcard();
    } else if (mode === 'survival') {
      this.dom.survivalView.style.display = 'block';
      this.startSurvivalChallenge();
    } else if (mode === 'terminal') {
      if (this.dom.terminalView) {
        this.dom.terminalView.style.display = 'block';
        if (this.dom.terminalInput) this.dom.terminalInput.focus();
      }
    } else {
      this.dom.quizMainView.style.display = 'block';
      this.applyFilters();
    }

    this.playSound('click');
  }

  // --- RENDERIZADO DE PREGUNTA ---
  renderQuestion() {
    if (!this.filteredQuestions || this.filteredQuestions.length === 0) return;

    const q = this.filteredQuestions[this.currentIndex];
    const total = this.filteredQuestions.length;
    const isExam = (this.currentMode === 'exam');

    // Animación suave de entrada
    this.dom.questionCard.classList.remove('active-card');
    void this.dom.questionCard.offsetWidth;
    this.dom.questionCard.classList.add('active-card');

    // Visibilidad de botones de acción
    this.dom.nextBtn.style.display = (this.currentIndex < total - 1) ? 'inline-flex' : 'none';
    this.dom.prevBtn.style.display = (this.currentIndex > 0) ? 'inline-flex' : 'none';
    this.dom.skipBtn.style.display = (!isExam && this.currentIndex < total - 1) ? 'inline-flex' : 'none';
    this.dom.finishExamBtn.style.display = isExam ? 'inline-flex' : 'none';
    this.dom.unselectBtn.style.display = (isExam && this.examAnswers[q.id]) ? 'inline-flex' : 'none';

    // Metadatos
    this.dom.badgeLevel.textContent = q.level.toUpperCase();
    this.dom.badgeLevel.className = `badge-level ${q.level}`;
    this.dom.badgeTopic.textContent = `Tema ${q.topic}: ${q.topicName}`;
    this.dom.badgePage.textContent = q.page;

    // Marcador de duda
    const isBookmarked = this.bookmarkedIds.has(q.id);
    this.dom.bookmarkBtn.classList.toggle('active', isBookmarked);
    this.dom.bookmarkBtn.textContent = isBookmarked ? '⭐ Duda Guardada' : '☆ Guardar Duda';

    // Enunciado
    this.dom.questionText.textContent = `${this.currentIndex + 1}. ${q.question}`;

    // Obtener opciones a mostrar (orden original o barajadas para el examen)
    let displayOptions = q.options;
    if (isExam && q._shuffledOptions) {
      displayOptions = q._shuffledOptions;
    }

    // Renderizar Opciones
    this.dom.optionsContainer.innerHTML = '';
    displayOptions.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.dataset.optionId = opt.id;
      btn.setAttribute('role', 'radio');

      btn.innerHTML = `
        <span class="option-letter">${opt.id}</span>
        <span class="option-content">${opt.text}</span>
      `;

      if (isExam) {
        // MODO EXAMEN: Selección NEUTRA. No delata colores ni bloquea opciones
        const selectedOptId = this.examAnswers[q.id];
        if (selectedOptId === opt.id) {
          btn.classList.add('selected-neutral');
          btn.setAttribute('aria-checked', 'true');
        } else {
          btn.setAttribute('aria-checked', 'false');
        }
        btn.addEventListener('click', () => this.handleExamOptionSelect(q, opt));
      } else {
        // MODO TUTOR: Feedback inmediato con colores y bloqueo
        const tutorAns = this.tutorAnswers[q.id];
        if (tutorAns) {
          btn.disabled = true;
          if (opt.isCorrect) {
            btn.classList.add(tutorAns.optionId === opt.id ? 'selected-correct' : 'show-correct');
          } else if (tutorAns.optionId === opt.id) {
            btn.classList.add('selected-wrong');
          }
        } else {
          btn.addEventListener('click', () => this.handleTutorOptionSelect(q, opt));
        }
      }

      this.dom.optionsContainer.appendChild(btn);
    });

    // Explicación (Solo en Modo Tutor)
    if (!isExam && this.tutorAnswers[q.id]) {
      this.showExplanation(q, this.tutorAnswers[q.id]);
    } else {
      this.dom.explanationCard.style.display = 'none';
    }

    this.updateProgressTrack();
  }

  // --- SELECCIÓN EN MODO TUTOR (Feedback Inmediato) ---
  handleTutorOptionSelect(question, selectedOption) {
    const isCorrect = selectedOption.isCorrect;

    this.tutorAnswers[question.id] = {
      optionId: selectedOption.id,
      isCorrect: isCorrect,
      timestamp: Date.now()
    };

    if (!isCorrect) {
      this.failedQuestionIds.add(question.id);
    } else if (this.currentMode === 'review') {
      this.failedQuestionIds.delete(question.id);
    }
    this.saveStorage('dwes_failed_ids', Array.from(this.failedQuestionIds));
    this.updateFailedBadge();

    // Efecto Sonoro y Anuncio Accesible
    this.playSound(isCorrect ? 'correct' : 'wrong');
    this.announceSr(isCorrect ? "Respuesta correcta" : `Respuesta incorrecta. La opción correcta era la ${question.options.find(o => o.isCorrect).id}`);

    this.updateStatsDisplay();
    this.renderQuestion();
  }

  // --- SELECCIÓN EN MODO EXAMEN (Silencioso y Neutral) ---
  handleExamOptionSelect(question, selectedOption) {
    // Permite cambiar de opción libremente
    this.examAnswers[question.id] = selectedOption.id;

    // Solo sonido suave de clic (sin delatar si es correcta o errónea)
    this.playSound('click');

    // Guardar estado del examen activo
    this.saveActiveExamSession();

    this.updateStatsDisplay();
    this.renderQuestion();
  }

  unselectCurrentExamAnswer() {
    if (this.currentMode !== 'exam') return;
    const q = this.filteredQuestions[this.currentIndex];
    if (q && this.examAnswers[q.id]) {
      delete this.examAnswers[q.id];
      this.playSound('click');
      this.saveActiveExamSession();
      this.updateStatsDisplay();
      this.renderQuestion();
    }
  }

  showExplanation(question, answer) {
    const isCorrect = answer.isCorrect;
    const card = this.dom.explanationCard;
    card.style.display = 'block';
    card.className = `explanation-card ${isCorrect ? 'correct' : 'wrong'}`;

    this.dom.explanationTitle.className = `explanation-title ${isCorrect ? 'correct' : 'wrong'}`;
    this.dom.explanationTitle.innerHTML = isCorrect 
      ? `✅ ¡Excelente deducción! Respuesta Correcta (Opción ${answer.optionId})`
      : `❌ Respuesta Incorrecta (Marcaste ${answer.optionId}). La correcta es la ${question.options.find(o => o.isCorrect).id}`;

    this.dom.explanationText.innerHTML = `<strong>Justificación oficial (${question.page}):</strong> ${question.explanation}`;

    if (question.distractors) {
      this.dom.distractorContainer.style.display = 'block';
      this.dom.distractorList.innerHTML = Object.entries(question.distractors).map(([opt, desc]) => `
        <div class="distractor-item">
          <strong>Opción ${opt}:</strong> ${desc}
        </div>
      `).join('');
    } else {
      this.dom.distractorContainer.style.display = 'none';
    }

    if (question.trapNote) {
      this.dom.trapBox.style.display = 'flex';
      this.dom.trapText.textContent = question.trapNote;
    } else {
      this.dom.trapBox.style.display = 'none';
    }
  }

  // --- NAVEGACIÓN ---
  nextQuestion() {
    if (this.currentIndex < this.filteredQuestions.length - 1) {
      this.currentIndex++;
      this.renderQuestion();
      this.playSound('click');
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderQuestion();
      this.playSound('click');
    }
  }

  jumpToQuestion(index) {
    if (index >= 0 && index < this.filteredQuestions.length) {
      this.currentIndex = index;
      this.renderQuestion();
      this.playSound('click');
      this.closeMapModal();
    }
  }

  toggleBookmarkCurrent() {
    if (!this.filteredQuestions[this.currentIndex]) return;
    const qId = this.filteredQuestions[this.currentIndex].id;
    if (this.bookmarkedIds.has(qId)) {
      this.bookmarkedIds.delete(qId);
    } else {
      this.bookmarkedIds.add(qId);
    }
    this.saveStorage('dwes_bookmarked_ids', Array.from(this.bookmarkedIds));
    this.dom.bookmarkBtn.classList.toggle('active', this.bookmarkedIds.has(qId));
    this.dom.bookmarkBtn.textContent = this.bookmarkedIds.has(qId) ? '⭐ Duda Guardada' : '☆ Guardar Duda';
    this.playSound('click');
    this.updateMapCounters();
  }

  // --- CONFIGURADOR DE EXAMEN ---
  openExamConfigModal() {
    this.dom.examConfigModalOverlay.style.display = 'flex';
    this.playSound('click');
  }

  closeExamConfigModal() {
    this.dom.examConfigModalOverlay.style.display = 'none';
  }

  startConfiguredExam() {
    const presetRadio = document.querySelector('input[name="examPreset"]:checked');
    const preset = presetRadio ? presetRadio.value : 'marathon';
    const shuffleOpts = this.dom.shuffleOptionsCheckbox.checked;

    this.closeExamConfigModal();
    this.startExamMode(preset, shuffleOpts);
  }

  startExamMode(preset = 'marathon', shuffleOptions = true) {
    this.currentMode = 'exam';
    this.examAnswers = {};

    let list = [...this.allQuestions].sort(() => Math.random() - 0.5);

    if (preset === 'express') {
      list = list.slice(0, 15);
      this.examTotalSeconds = 12 * 60;
    } else if (preset === 'standard') {
      list = list.slice(0, 30);
      this.examTotalSeconds = 25 * 60;
    } else {
      // marathon: todas las 147 preguntas oficiales
      this.examTotalSeconds = 60 * 60;
    }

    // Barajado de alternativas (A, B, C, D) anti-memoria visual si está marcado
    if (shuffleOptions) {
      list.forEach(q => {
        const letters = ['A', 'B', 'C', 'D'];
        const shuffled = [...q.options].sort(() => Math.random() - 0.5);
        q._shuffledOptions = shuffled.map((opt, i) => ({
          ...opt,
          id: letters[i]
        }));
      });
    } else {
      list.forEach(q => delete q._shuffledOptions);
    }

    this.examQuestionsList = list;
    this.filteredQuestions = [...list];
    this.currentIndex = 0;
    this.examTimeLeft = this.examTotalSeconds;

    // Actualizar vista
    this.dom.tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.mode === 'exam');
    });

    const allViews = [
      this.dom.quizMainView, this.dom.glossaryView, this.dom.resultsModal,
      this.dom.examReviewView, this.dom.flashcardsView, this.dom.survivalView
    ];
    allViews.forEach(v => v.style.display = 'none');
    this.dom.quizMainView.style.display = 'block';
    this.dom.filterBar.style.display = 'flex';
    this.dom.statsBanner.style.display = 'grid';
    this.dom.progressBarContainer.style.display = 'block';

    this.dom.timerDisplay.style.display = 'inline-flex';
    this.dom.finishExamBtn.style.display = 'inline-flex';

    this.startTimer();
    this.saveActiveExamSession();
    this.renderQuestion();
    this.updateStatsDisplay();
  }

  // --- TEMPORIZADOR INTELIGENTE CON ALERTAS ---
  startTimer() {
    this.stopTimer();
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.examTimeLeft--;
      this.updateTimerDisplay();

      // Guardar sesión cada 10 segundos
      if (this.examTimeLeft % 10 === 0) {
        this.saveActiveExamSession();
      }

      if (this.examTimeLeft <= 0) {
        this.stopTimer();
        alert("⏰ ¡Tiempo agotado! El examen se finalizará automáticamente.");
        this.finishExam();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  updateTimerDisplay() {
    const mins = Math.floor(this.examTimeLeft / 60);
    const secs = this.examTimeLeft % 60;
    this.dom.timeValue.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    // Clases de alerta de tiempo
    const badge = this.dom.timerDisplay;
    badge.classList.remove('warning', 'danger');
    if (this.examTimeLeft <= 5 * 60) {
      badge.classList.add('danger');
    } else if (this.examTimeLeft <= 15 * 60) {
      badge.classList.add('warning');
    }
  }

  // --- PERSISTENCIA DE SESIÓN DE EXAMEN ---
  saveActiveExamSession() {
    if (this.currentMode !== 'exam') return;
    const session = {
      timeLeft: this.examTimeLeft,
      totalSeconds: this.examTotalSeconds,
      currentIndex: this.currentIndex,
      answers: this.examAnswers,
      questionIds: this.examQuestionsList.map(q => q.id),
      timestamp: Date.now()
    };
    this.saveStorage('dwes_active_exam_session', session);
  }

  clearActiveExamSession() {
    localStorage.removeItem('dwes_active_exam_session');
  }

  checkSavedExamSession() {
    const session = this.loadStorage('dwes_active_exam_session', null);
    if (!session) return;

    const elapsed = Math.floor((Date.now() - session.timestamp) / 1000);
    const remaining = session.timeLeft - elapsed;

    if (remaining > 60 && session.questionIds && session.questionIds.length > 0) {
      if (confirm(`Tienes un examen en curso con ${Math.floor(remaining / 60)} min restantes. ¿Deseas reanudarlo?`)) {
        this.currentMode = 'exam';
        this.examAnswers = session.answers || {};
        this.examTotalSeconds = session.totalSeconds || 45 * 60;
        this.examTimeLeft = remaining;
        this.currentIndex = session.currentIndex || 0;

        const idMap = new Map(this.allQuestions.map(q => [q.id, q]));
        this.examQuestionsList = session.questionIds.map(id => idMap.get(id)).filter(Boolean);
        this.filteredQuestions = [...this.examQuestionsList];

        this.dom.tabs.forEach(tab => {
          tab.classList.toggle('active', tab.dataset.mode === 'exam');
        });
        this.dom.timerDisplay.style.display = 'inline-flex';
        this.dom.finishExamBtn.style.display = 'inline-flex';
        this.startTimer();
        this.renderQuestion();
        this.updateStatsDisplay();
      } else {
        this.clearActiveExamSession();
      }
    } else {
      this.clearActiveExamSession();
    }
  }

  // --- FINALIZACIÓN DE EXAMEN Y EVALUACIÓN OFICIAL ---
  confirmFinishExam() {
    const total = this.filteredQuestions.length;
    const answeredCount = Object.keys(this.examAnswers).length;
    const blanks = total - answeredCount;

    const msg = blanks > 0
      ? `Tienes ${blanks} preguntas sin responder (quedarán en blanco sin penalizar). ¿Deseas entregar el examen definitivamente?`
      : `Has respondido a todas las ${total} preguntas. ¿Deseas entregar el examen definitivamente?`;

    if (confirm(msg)) {
      this.finishExam();
    }
  }

  finishExam() {
    this.stopTimer();
    this.clearActiveExamSession();

    const total = this.filteredQuestions.length;
    let correct = 0;
    let wrong = 0;

    // Diagnóstico por Bloques
    const topicStats = {
      1: { name: "Páginas Estáticas, Dinámicas y SPA", total: 0, correct: 0 },
      2: { name: "Arquitectura en Capas y Patrón MVC", total: 0, correct: 0 },
      3: { name: "Tecnologías y Servidores Web", total: 0, correct: 0 },
      4: { name: "Modelos de Ejecución de Lenguajes", total: 0, correct: 0 },
      5: { name: "Entorno PHP, php.ini y XAMPP Inicial", total: 0, correct: 0 },
      6: { name: "Instalación y Configuración del Servidor XAMPP y Apache", total: 0, correct: 0 },
      7: { name: "Seguridad y Accesos a phpMyAdmin / MySQL", total: 0, correct: 0 }
    };

    this.filteredQuestions.forEach(q => {
      const selectedOptId = this.examAnswers[q.id];
      const t = q.topic;
      if (topicStats[t]) topicStats[t].total++;

      if (selectedOptId) {
        // Encontrar si la opción seleccionada era la correcta
        const opts = q._shuffledOptions || q.options;
        const optObj = opts.find(o => o.id === selectedOptId);
        if (optObj && optObj.isCorrect) {
          correct++;
          if (topicStats[t]) topicStats[t].correct++;
        } else {
          wrong++;
          this.failedQuestionIds.add(q.id);
        }
      }
    });

    this.saveStorage('dwes_failed_ids', Array.from(this.failedQuestionIds));
    this.updateFailedBadge();

    const blank = total - (correct + wrong);
    // Fórmula Oficial FP DAW/DAM: Aciertos - (Fallos / 3) escalado a 10
    const rawScore = correct - (wrong / 3);
    const finalScore = Math.max(0, (rawScore / total) * 10).toFixed(2);
    const accuracy = (correct + wrong) > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;

    // Mostrar modal de resultados
    this.dom.quizMainView.style.display = 'none';
    this.dom.resultsModal.style.display = 'block';

    this.dom.finalGradeScore.textContent = finalScore;
    this.dom.finalCorrectCount.textContent = correct;
    this.dom.finalWrongCount.textContent = wrong;
    this.dom.finalBlankCount.textContent = blank;
    this.dom.finalAccuracy.textContent = `${accuracy}%`;

    // Veredicto Académico
    let title = "";
    let verdict = "";
    if (finalScore >= 9.0) {
      title = "🏆 ¡SOBRESALIENTE / MATRÍCULA DE HONOR!";
      verdict = "Dominas absolutamente todos los conceptos, directivas de php.ini y particularidades de la Unidad 1.";
      this.playSound('fanfare');
    } else if (finalScore >= 7.0) {
      title = "👏 ¡NOTABLE ALTO!";
      verdict = "Gran nivel de preparación técnica. Revisa un par de cuestiones en la bolsa de fallos.";
      this.playSound('correct');
    } else if (finalScore >= 5.0) {
      title = "✅ ¡APROBADO!";
      verdict = "Superas la nota de corte eliminatoria, pero debes reforzar las preguntas trampa de CGI y servidores.";
      this.playSound('correct');
    } else {
      title = "⚠️ EXAMEN NO SUPERADO (ELIMINATORIO)";
      verdict = "La penalización de fallos (-0.33) ha reducido tu calificación. Estudia con el Modo Tutor.";
      this.playSound('wrong');
    }

    this.dom.finalGradeTitle.textContent = title;
    this.dom.finalGradeVerdict.textContent = verdict;

    // Renderizar desglose de dominio por bloques
    this.renderTopicMasteryBars(topicStats);
  }

  renderTopicMasteryBars(topicStats) {
    let html = '';
    let weakestTopic = null;
    let lowestPct = 101;

    Object.entries(topicStats).forEach(([tNum, data]) => {
      if (data.total === 0) return;
      const pct = Math.round((data.correct / data.total) * 100);
      let barColor = 'var(--success-border)';
      if (pct < 50) barColor = 'var(--danger-border)';
      else if (pct < 75) barColor = 'var(--warning-border)';

      if (pct < lowestPct) {
        lowestPct = pct;
        weakestTopic = { num: tNum, name: data.name, pct };
      }

      html += `
        <div class="topic-bar-row">
          <div class="topic-bar-info">
            <span><strong>Bloque ${tNum}:</strong> ${data.name}</span>
            <span>${data.correct}/${data.total} (${pct}%)</span>
          </div>
          <div class="topic-bar-track">
            <div class="topic-bar-fill" style="width: ${pct}%; background: ${barColor};"></div>
          </div>
        </div>
      `;
    });

    this.dom.topicMasteryBars.innerHTML = html;

    // Diagnóstico personalizado
    let advice = "💡 <strong>Consejo del Preparador:</strong> ";
    if (lowestPct < 60 && weakestTopic) {
      advice += `Tu área con mayor margen de mejora es el <strong>Bloque ${weakestTopic.num} (${weakestTopic.name})</strong> con un ${weakestTopic.pct}% de acierto. Te recomendamos utilizar el filtro de ese bloque en el Modo Tutor y consultar la Chuleta del Tema.`;
    } else {
      advice += `¡Excelente equilibrio de conocimientos en todos los bloques! Mantén este nivel repasando periódicamente tu bolsa de fallos.`;
    }
    this.dom.diagnosisAdviceBox.innerHTML = advice;
  }

  // --- REVISIÓN DETALLADA POST-EXAMEN (POST-MORTEM) ---
  openPostExamReviewView() {
    this.dom.resultsModal.style.display = 'none';
    this.dom.examReviewView.style.display = 'block';
    this.dom.filterBar.style.display = 'none';
    this.dom.statsBanner.style.display = 'none';
    this.dom.progressBarContainer.style.display = 'none';

    this.updatePostExamReviewCounters();
    this.filterPostExamReviewList('all');
    this.playSound('click');
  }

  closePostExamReviewView() {
    this.dom.examReviewView.style.display = 'none';
    this.dom.resultsModal.style.display = 'block';
    this.playSound('click');
  }

  updatePostExamReviewCounters() {
    let wrong = 0, blank = 0, correct = 0;
    this.examQuestionsList.forEach(q => {
      const ansId = this.examAnswers[q.id];
      if (!ansId) {
        blank++;
      } else {
        const opts = q._shuffledOptions || q.options;
        const opt = opts.find(o => o.id === ansId);
        if (opt && opt.isCorrect) correct++;
        else wrong++;
      }
    });

    this.dom.revCountAll.textContent = this.examQuestionsList.length;
    this.dom.revCountWrong.textContent = wrong;
    this.dom.revCountBlank.textContent = blank;
    this.dom.revCountCorrect.textContent = correct;
  }

  filterPostExamReviewList(filterType) {
    const container = this.dom.examReviewContainer;
    container.innerHTML = '';

    const list = this.examQuestionsList.filter(q => {
      const ansId = this.examAnswers[q.id];
      const opts = q._shuffledOptions || q.options;
      const opt = opts.find(o => o.id === ansId);
      const isCorrect = opt ? opt.isCorrect : false;

      if (filterType === 'wrong') return ansId && !isCorrect;
      if (filterType === 'blank') return !ansId;
      if (filterType === 'correct') return ansId && isCorrect;
      return true;
    });

    if (list.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding: 2rem; color: var(--text-muted);">No hay preguntas en esta categoría.</div>`;
      return;
    }

    list.forEach((q, idx) => {
      const ansId = this.examAnswers[q.id];
      const opts = q._shuffledOptions || q.options;
      const opt = opts.find(o => o.id === ansId);
      const isCorrect = opt ? opt.isCorrect : false;

      let borderClass = 'blank-border';
      let statusBadge = '<span style="color: var(--text-dim); font-weight:700;">⚪ EN BLANCO (0.00)</span>';

      if (ansId) {
        if (isCorrect) {
          borderClass = 'correct-border';
          statusBadge = '<span style="color: var(--success-text); font-weight:700;">✅ ACIERTO (+1.00)</span>';
        } else {
          borderClass = 'wrong-border';
          statusBadge = '<span style="color: var(--danger-text); font-weight:700;">❌ FALLO (-0.33)</span>';
        }
      }

      const card = document.createElement('div');
      card.className = `review-card ${borderClass}`;

      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom: 0.75rem; font-size:0.85rem;">
          <span style="color: var(--accent-cyan); font-weight:600;">Tema ${q.topic} | ${q.page}</span>
          ${statusBadge}
        </div>
        <h4 style="margin-bottom: 1rem; font-size:1.05rem; line-height:1.5;">${q.question}</h4>
        <div style="margin-bottom: 1.25rem;">
          ${opts.map(o => {
            let optClass = 'review-opt-item';
            let labelTag = '';
            if (o.isCorrect) {
              optClass += ' review-opt-correct';
              labelTag = ' (Solución Correcta)';
            } else if (ansId === o.id) {
              optClass += ' review-opt-user-wrong';
              labelTag = ' (Marcaste esta)';
            }
            return `<div class="${optClass}"><strong>${o.id}:</strong> ${o.text} ${labelTag}</div>`;
          }).join('')}
        </div>
        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: var(--radius-sm); font-size:0.9rem; line-height:1.5;">
          <strong>Justificación oficial (${q.page}):</strong> ${q.explanation}
          ${q.trapNote ? `<div style="margin-top:0.5rem; color:var(--warning-text);">⚠️ <strong>Ojo al examen:</strong> ${q.trapNote}</div>` : ''}
        </div>
      `;

      container.appendChild(card);
    });
  }

  // --- MAPA VISUAL DE PREGUNTAS (QUESTION GRID) ---
  openMapModal() {
    this.renderQuestionGrid();
    this.dom.mapModalOverlay.style.display = 'flex';
    this.playSound('click');
  }

  closeMapModal() {
    this.dom.mapModalOverlay.style.display = 'none';
  }

  renderQuestionGrid() {
    const container = this.dom.questionGridContainer;
    container.innerHTML = '';
    const total = this.filteredQuestions.length;
    this.dom.mapModalTotalCount.textContent = total;

    this.filteredQuestions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'grid-q-btn';
      btn.textContent = idx + 1;

      if (idx === this.currentIndex) btn.classList.add('current');
      if (this.bookmarkedIds.has(q.id)) btn.classList.add('bookmarked');

      if (this.currentMode === 'exam') {
        if (this.examAnswers[q.id]) btn.classList.add('answered');
      } else {
        const ans = this.tutorAnswers[q.id];
        if (ans) {
          btn.classList.add(ans.isCorrect ? 'correct' : 'wrong');
        }
      }

      btn.addEventListener('click', () => this.jumpToQuestion(idx));
      container.appendChild(btn);
    });
  }

  updateMapCounters() {
    const total = this.filteredQuestions.length;
    this.dom.mapCurrentCount.textContent = total;
  }

  // --- FLASHCARDS (Tarjetas de Memoria Activa) ---
  buildFlashcardsData() {
    return [
      {
        topic: "Tema 5: php.ini",
        prompt: "¿Qué hace la directiva short_open_tag y por qué debe configurarse en Off?",
        answer: "Habilita o deshabilita los delimitadores cortos <? y ?>. Debe configurarse en Off para evitar conflictos con el prólogo estándar de archivos XML (<?xml ... ?>).",
        trap: "Cae habitualmente en exámenes: 'Off evita problemas con XML'.",
        page: "Pág. 17"
      },
      {
        topic: "Tema 5: php.ini",
        prompt: "¿Cuál es el propósito y unidad de max_execution_time?",
        answer: "Ajusta el número máximo de SEGUNDOS que puede durar la ejecución de un script PHP. Evita bloqueos del servidor causados por bucles infinitos o scripts atascados.",
        trap: "Se mide en segundos, no en milisegundos ni minutos.",
        page: "Pág. 18"
      },
      {
        topic: "Tema 5: php.ini",
        prompt: "¿Qué significa error_reporting = E_ALL & ~E_NOTICE?",
        answer: "Muestra TODOS los errores (E_ALL) EXCEPTO los avisos leves (E_NOTICE). La virgulilla (~) actúa como operador bit a bit NOT para excluir.",
        trap: "El operador virgulilla (~) niega el bit, no es un error de sintaxis.",
        page: "Pág. 18"
      },
      {
        topic: "Tema 5: Apache / XAMPP",
        prompt: "¿Qué es el DocumentRoot y cuál es su carpeta en XAMPP?",
        answer: "Es la raíz de documentos donde Apache busca las aplicaciones web. En XAMPP corresponde a la carpeta 'htdocs' (C:\\xampp\\htdocs).",
        trap: "Si falta index.php en DocumentRoot, se activa el 'listado de directorios'.",
        page: "Pág. 18-19"
      },
      {
        topic: "Tema 3: Servidores Web",
        prompt: "¿Qué grave inconveniente de rendimiento presenta el estándar CGI?",
        answer: "Para cada petición se crea un nuevo proceso en el sistema operativo, lo que dispara el consumo de recursos y ralentiza las respuestas concurrentes.",
        trap: "FastCGI y módulos integrados (mod_perl/mod_php) nacieron para resolver esto.",
        page: "Pág. 12, 14"
      },
      {
        topic: "Tema 3: Python en Servidor",
        prompt: "¿Qué ocurrió con mod_python y qué estándar se utiliza actualmente?",
        answer: "mod_python quedó descontinuado hace años. Hoy se usa WSGI (Web Server Gateway Interface) comunicando mediante un proxy inverso (Apache o Nginx).",
        trap: "WSGI + Servidor de aplicaciones detrás de proxy inverso.",
        page: "Pág. 14"
      },
      {
        topic: "Tema 3: Jakarta EE",
        prompt: "¿Qué componente encapsula la lógica de negocio en Jakarta EE?",
        answer: "EJB (Enterprise JavaBeans) encapsulan la lógica de negocio; Servlets y JSP se orientan a la generación dinámica de páginas web.",
        trap: "Servlets y JSP = generación web. EJB = lógica de negocio.",
        page: "Pág. 10-11"
      },
      {
        topic: "Tema 3: Jakarta EE",
        prompt: "¿Qué servidor de código abierto para Java EE se señala como inactivo?",
        answer: "Apache Geronimo (el temario indica expresamente que lleva años inactivo). JBoss/WildFly y GlassFish siguen activos.",
        trap: "Pregunta literal de detalle del temario oficial.",
        page: "Pág. 15"
      },
      {
        topic: "Tema 3: XAMPP",
        prompt: "¿Qué significa literalmente cada una de las letras de XAMPP?",
        answer: "X: Multiplataforma (Win/Linux/Mac) | A: Apache | M: MySQL/MariaDB | P: PHP (más usado) | P: Perl (menos usado hoy).",
        trap: "La segunda P es Perl, no Python ni PostgreSQL.",
        page: "Pág. 11"
      },
      {
        topic: "Tema 2: Patrón MVC",
        prompt: "¿Cómo se accede al Modelo y cuál es el rol del Controlador en MVC?",
        answer: "Al Modelo se accede siempre VÍA EL CONTROLADOR. El Controlador es intermediario: atiende al usuario, consulta al Modelo y envía los datos formateados a la Vista.",
        trap: "La Vista no consulta directamente al Modelo en este esquema.",
        page: "Pág. 10"
      },
      {
        topic: "Tema 1: Arquitectura SPA",
        prompt: "¿Cuál es el ciclo de vida de una SPA frente a la web tradicional?",
        answer: "Carga inicial única del HTML; no se recarga la página completa. Las acciones usan AJAX/REST consumiendo JSON reactivamente para actualizar fragmentos.",
        trap: "Traditional = Form POST -> Page Reload HTML. SPA = AJAX -> JSON.",
        page: "Pág. 7-8"
      },
      {
        topic: "Tema 1: Aplicaciones Web",
        prompt: "¿Para qué tipo de software NO son adecuadas las apps web?",
        answer: "Software que requiera acceso directo y de bajo nivel al hardware (ej. diseño 3D con aceleración gráfica específica o videojuegos exigentes con la GPU local).",
        trap: "Palabra clave: 'acceso directo y de bajo nivel al hardware / GPU'.",
        page: "Pág. 6"
      },
      {
        topic: "Tema 4: Lenguajes de Servidor",
        prompt: "¿Cómo funcionan los lenguajes compilados a código intermedio y qué es JIT?",
        answer: "Se compilan a un código intermedio independiente del CPU que corre en una máquina virtual; JIT (Just-In-Time) compila en caliente a código máquina las partes más usadas.",
        trap: "Ejemplos: Java (Jakarta EE) y ASP.NET (.NET).",
        page: "Pág. 15"
      },
      {
        topic: "Tema 5: Código PHP Puro",
        prompt: "¿Qué regla aplica a los archivos que contienen exclusivamente código PHP?",
        answer: "En archivos compuestos sólo por PHP puro, NO se incluye la etiqueta de cierre '?>' para evitar envío accidental de espacios en blanco antes de cabeceras HTTP.",
        trap: "Regla obligatoria de examen y estándar PSR-12.",
        page: "Pág. 17"
      },
      {
        topic: "Tema 6: XAMPP y Seguridad",
        prompt: "¿Por qué el temario advierte que XAMPP NO es adecuado para entornos de producción?",
        answer: "Porque la seguridad de datos no es su punto fuerte. Viene preconfigurado de forma abierta y permisiva para desarrollo y pruebas locales rápidas.",
        trap: "XAMPP = desarrollo local, NUNCA servidores de producción.",
        page: "XAMPP Pág. 1"
      },
      {
        topic: "Tema 6: Windows vs. Linux",
        prompt: "¿Qué diferencia crítica existe entre Windows y Linux al servir archivos web?",
        answer: "Linux distingue entre mayúsculas y minúsculas (case-sensitive) en nombres de archivo y rutas, mientras que Windows no.",
        trap: "Un script que funciona en Windows fallará en Linux con 404 si las mayúsculas no coinciden.",
        page: "XAMPP Pág. 1"
      },
      {
        topic: "Tema 6: Panel XAMPP",
        prompt: "¿Por qué es imprescindible ejecutar el panel de control de XAMPP en 'Modo Administrador'?",
        answer: "Porque el servidor web Apache, por medidas de seguridad del sistema operativo, solamente arranca con privilegios elevados de Administrador.",
        trap: "Si no se ejecuta como Administrador, el botón Start fallará por permisos.",
        page: "XAMPP Pág. 3"
      },
      {
        topic: "Tema 6: Directory Listing",
        prompt: "¿Qué ocurre en Apache si se renombra o elimina index.php dentro de DocumentRoot?",
        answer: "Se activa el examen de directorios (Directory Listing), mostrando en el navegador la lista completa de archivos y carpetas del disco.",
        trap: "Examen de directorios = Index of /.",
        page: "XAMPP Pág. 6"
      },
      {
        topic: "Tema 6: Ficheros de Configuración",
        prompt: "¿Qué carácter se utiliza para comentar líneas en httpd.conf frente a php.ini?",
        answer: "En Apache (httpd.conf) se utiliza la almohadilla (#); en PHP (php.ini) se utiliza el punto y coma (;).",
        trap: "Apache = # | PHP = ;. Clásica trampa en exámenes tipo test.",
        page: "XAMPP Pág. 7, 9"
      },
      {
        topic: "Tema 6: Apache / Options Indexes",
        prompt: "¿Qué hace 'Options Indexes' y qué error muestra si se desactiva sin archivo índice?",
        answer: "Si no existe archivo índice (index.php/html), muestra el contenido de la carpeta. Si estuviera desactivado, Apache devuelve '403 Forbidden'.",
        trap: "Código de estado devuelto: 403 Forbidden.",
        page: "XAMPP Pág. 8"
      },
      {
        topic: "Tema 6: Apache / AllowOverride",
        prompt: "¿Qué diferencia AllowOverride All de AllowOverride None en Apache?",
        answer: "'None' ignora cualquier archivo .htaccess por rendimiento y seguridad; 'All' permite que los ficheros .htaccess sobreescriban la configuración principal.",
        trap: "AllowOverride None = ignora .htaccess completamente.",
        page: "XAMPP Pág. 8"
      },
      {
        topic: "Tema 7: phpMyAdmin / Autenticación",
        prompt: "¿Cómo se activa la ventana interactiva de login en phpMyAdmin?",
        answer: "En config.inc.php, cambiando $cfg['Servers'][$i]['auth_type'] = 'config' por $cfg['Servers'][$i]['auth_type'] = 'cookie'.",
        trap: "'config' entra directo sin login; 'cookie' solicita usuario y contraseña.",
        page: "Accesos Pág. 1"
      },
      {
        topic: "Tema 7: phpMyAdmin / AllowNoPassword",
        prompt: "¿Qué directiva obliga a los usuarios a introducir contraseña en phpMyAdmin?",
        answer: "En config.inc.php, estableciendo: $cfg['Servers'][$i]['AllowNoPassword'] = false. Si se intenta entrar sin clave, el acceso queda prohibido.",
        trap: "AllowNoPassword = false bloquea logins con contraseña vacía.",
        page: "Accesos Pág. 1-2"
      },
      {
        topic: "Tema 7: MySQL CLI / mysqladmin",
        prompt: "¿Qué comandos asignan y cambian respectivamente la contraseña del root en MySQL?",
        answer: "Primera vez (sin clave): 'mysqladmin -u root password'. Modificación (con clave previa): 'mysqladmin -u root -p password nueva_clave'.",
        trap: "Sin clave previa: sin flag -p. Con clave previa: con flag -p.",
        page: "Accesos Pág. 2"
      },
      {
        topic: "Tema 7: Apache / Acceso LAN",
        prompt: "¿Cómo se permite el acceso a phpMyAdmin desde cualquier equipo de la red local?",
        answer: "En httpd-xampp.conf, dentro del bloque <Directory 'C:/xampp/phpMyAdmin'>, sustituir 'Require local' por 'Require all granted' y reiniciar Apache.",
        trap: "Require local = solo mi equipo. Require all granted = toda la red.",
        page: "Accesos Pág. 3"
      }
    ];
  }

  renderCurrentFlashcard() {
    const fc = this.flashcardsData[this.currentFcIndex];
    if (!fc) return;

    this.dom.flashcardElement.classList.remove('flipped');
    this.dom.cardTopicBadge.textContent = fc.topic;
    this.dom.cardPromptText.textContent = fc.prompt;
    this.dom.cardAnswerText.textContent = fc.answer;
    this.dom.cardTrapText.textContent = fc.trap;
    this.dom.cardPageText.textContent = fc.page;

    this.dom.fcCardCount.textContent = `Tarjeta ${this.currentFcIndex + 1} de ${this.flashcardsData.length}`;
    this.dom.fcKnownCount.textContent = `Dominadas: ${this.fcKnownIds.size}`;
    this.dom.fcReviewCount.textContent = `Por repasar: ${this.flashcardsData.length - this.fcKnownIds.size}`;
  }

  flipFlashcard() {
    this.dom.flashcardElement.classList.toggle('flipped');
    this.playSound('click');
  }

  nextFlashcard() {
    if (this.currentFcIndex < this.flashcardsData.length - 1) {
      this.currentFcIndex++;
      this.renderCurrentFlashcard();
      this.playSound('click');
    }
  }

  prevFlashcard() {
    if (this.currentFcIndex > 0) {
      this.currentFcIndex--;
      this.renderCurrentFlashcard();
      this.playSound('click');
    }
  }

  markFlashcard(known) {
    if (known) {
      this.fcKnownIds.add(this.currentFcIndex);
      this.playSound('correct');
    } else {
      this.fcKnownIds.delete(this.currentFcIndex);
      this.playSound('wrong');
    }
    this.saveStorage('dwes_fc_known', Array.from(this.fcKnownIds));
    this.nextFlashcard();
  }

  // --- MODO MUERTE SÚBITA (SURVIVAL MODE) ---
  startSurvivalChallenge() {
    this.survivalStreak = 0;
    this.survivalBestStreak = this.loadStorage('dwes_survival_best', 0);
    this.dom.survivalCurrentStreak.textContent = '0';
    this.dom.survivalBestStreak.textContent = this.survivalBestStreak;
    this.nextSurvivalQuestion();
  }

  nextSurvivalQuestion() {
    this.stopSurvivalTimer();
    this.survivalTimeLeft = 15;
    this.updateSurvivalTimerBar();

    const randomQ = this.allQuestions[Math.floor(Math.random() * this.allQuestions.length)];
    this.survivalCurrentQuestion = randomQ;

    this.dom.survivalQuestionText.textContent = randomQ.question;
    this.dom.survivalOptionsContainer.innerHTML = '';

    randomQ.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<span class="option-letter">${opt.id}</span> <span class="option-content">${opt.text}</span>`;
      btn.addEventListener('click', () => this.handleSurvivalAnswer(opt.isCorrect));
      this.dom.survivalOptionsContainer.appendChild(btn);
    });

    this.survivalTimerInterval = setInterval(() => {
      this.survivalTimeLeft -= 0.2;
      this.updateSurvivalTimerBar();

      if (this.survivalTimeLeft <= 0) {
        this.stopSurvivalTimer();
        this.endSurvivalGame("¡Tiempo agotado!");
      }
    }, 200);
  }

  updateSurvivalTimerBar() {
    const pct = Math.max(0, (this.survivalTimeLeft / 15) * 100);
    this.dom.survivalTimerBar.style.width = `${pct}%`;
    this.dom.survivalSecondsText.textContent = `${Math.ceil(this.survivalTimeLeft)}s`;

    if (this.survivalTimeLeft <= 4) {
      this.dom.survivalTimerBar.style.background = '#ef4444';
    } else if (this.survivalTimeLeft <= 8) {
      this.dom.survivalTimerBar.style.background = '#f59e0b';
    } else {
      this.dom.survivalTimerBar.style.background = 'var(--accent-cyan)';
    }
  }

  stopSurvivalTimer() {
    if (this.survivalTimerInterval) {
      clearInterval(this.survivalTimerInterval);
      this.survivalTimerInterval = null;
    }
  }

  handleSurvivalAnswer(isCorrect) {
    this.stopSurvivalTimer();
    if (isCorrect) {
      this.survivalStreak++;
      this.playSound('correct');
      if (this.survivalStreak > this.survivalBestStreak) {
        this.survivalBestStreak = this.survivalStreak;
        this.saveStorage('dwes_survival_best', this.survivalBestStreak);
      }
      this.dom.survivalCurrentStreak.textContent = this.survivalStreak;
      this.dom.survivalBestStreak.textContent = this.survivalBestStreak;
      this.nextSurvivalQuestion();
    } else {
      this.playSound('wrong');
      this.endSurvivalGame("Has fallado la pregunta.");
    }
  }

  endSurvivalGame(reason) {
    const msg = `💀 GAME OVER\n\n${reason}\nRacha conseguida: ${this.survivalStreak} aciertos consecutivos.\nRécord personal: ${this.survivalBestStreak}.\n\n¿Deseas intentar superar tu récord?`;
    if (confirm(msg)) {
      this.startSurvivalChallenge();
    } else {
      this.switchMode('tutor');
    }
  }

  // --- ACTUALIZACIÓN DE PROGRESO Y ESTADÍSTICAS ---
  updateProgressTrack() {
    const total = this.filteredQuestions.length;
    const current = this.currentIndex + 1;
    const percent = total > 0 ? Math.round((current / total) * 100) : 0;

    this.dom.progressFill.style.width = `${percent}%`;
    this.dom.progressText.textContent = `Avance: ${percent}%`;
    this.dom.questionCountText.textContent = `Pregunta ${current} de ${total}`;
  }

  updateStatsDisplay() {
    const totalQuestions = this.filteredQuestions.length || 1;

    if (this.currentMode === 'exam') {
      const answeredCount = Object.keys(this.examAnswers).length;
      this.dom.statProgress.textContent = `${answeredCount} / ${totalQuestions}`;
      this.dom.statCorrect.textContent = "—";
      this.dom.statWrong.textContent = "—";
      this.dom.statGrade.textContent = "Al finalizar";
    } else {
      const answeredEntries = Object.values(this.tutorAnswers);
      const correctCount = answeredEntries.filter(a => a.isCorrect).length;
      const wrongCount = answeredEntries.filter(a => !a.isCorrect).length;
      const totalAnswered = answeredEntries.length;

      const rawScore = correctCount - (wrongCount / 3);
      const grade = Math.max(0, (rawScore / totalQuestions) * 10).toFixed(2);

      this.dom.statProgress.textContent = `${totalAnswered} / ${totalQuestions}`;
      this.dom.statCorrect.textContent = correctCount;
      this.dom.statWrong.textContent = wrongCount;
      this.dom.statGrade.textContent = `${grade} / 10`;
    }
  }

  updateFailedBadge() {
    this.dom.failedCountBadge.textContent = this.failedQuestionIds.size;
  }

  announceSr(text) {
    if (this.dom.srAnnouncement) {
      this.dom.srAnnouncement.textContent = text;
    }
  }

  // --- AUDIO, TEMA Y REINICIO ---
  toggleAudio() {
    this.audioEnabled = !this.audioEnabled;
    this.saveStorage('dwes_audio', this.audioEnabled);
    this.updateAudioButtonState();
    if (this.audioEnabled) this.playSound('click');
  }

  updateAudioButtonState() {
    this.dom.toggleAudioBtn.textContent = this.audioEnabled ? '🔊 Sonido' : '🔇 Mute';
  }

  toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', nextTheme);
    this.saveStorage('dwes_theme', nextTheme);
    this.playSound('click');
  }

  applyStoredTheme() {
    const theme = this.loadStorage('dwes_theme', 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  }

  // --- TERMINAL CLI INTERACTIVA ---
  setupTerminal() {
    if (!this.dom.terminalSubmitBtn || !this.dom.terminalInput) return;

    this.dom.terminalSubmitBtn.addEventListener('click', () => {
      this.executeTerminalInput();
    });

    this.dom.terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.executeTerminalInput();
      }
    });

    document.querySelectorAll('.cli-challenge-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const cmd = chip.dataset.cmd;
        this.dom.terminalInput.value = cmd;
        this.executeTerminalInput();
      });
    });
  }

  executeTerminalInput() {
    const rawCmd = this.dom.terminalInput.value.trim();
    if (!rawCmd) return;
    this.dom.terminalInput.value = '';
    this.handleCliCommand(rawCmd);
  }

  handleCliCommand(cmd) {
    const output = this.dom.terminalOutput;
    const appendLine = (text, cls = '') => {
      const line = document.createElement('div');
      line.className = `cli-line ${cls}`;
      line.textContent = text;
      output.appendChild(line);
      output.scrollTop = output.scrollHeight;
    };

    appendLine(`C:\\xampp> ${cmd}`, 'cmd');

    const clean = cmd.toLowerCase().trim();

    if (clean === 'clear' || clean === 'cls') {
      output.innerHTML = '';
      appendLine('Consola reiniciada.', 'info');
      return;
    }

    if (clean === 'help') {
      appendLine('Comandos oficiales disponibles en el simulador:', 'info');
      appendLine('  - mysqladmin -u root password : Poner contraseña inicial a root');
      appendLine('  - mysqladmin -u root -p password <nueva> : Cambiar contraseña existente');
      appendLine('  - Alias /aplicacionesclase "C:/xampp/aplicacionesclase/" : Crear Alias en Apache');
      appendLine('  - Require all granted : Permitir acceso público / red en httpd-xampp.conf');
      appendLine('  - Require local : Limitar acceso exclusivamente a máquina local');
      appendLine('  - clear / cls : Limpiar pantalla de consola');
      return;
    }

    if (clean === 'mysqladmin -u root password') {
      appendLine('New password: ********', 'info');
      appendLine('Confirm new password: ********', 'info');
      appendLine('[OK] Contraseña asignada con éxito al usuario root. Ahora solo se podrá acceder a MySQL/phpMyAdmin con credenciales válidas.', 'success');
      this.playSound('correct');
      return;
    }

    if (clean.includes('mysqladmin') && clean.includes('-u root -p password')) {
      appendLine('Enter password (anterior): ********', 'info');
      appendLine('New password: ********', 'info');
      appendLine('[OK] Contraseña del usuario root actualizada correctamente tras verificar la clave anterior con el parámetro -p.', 'success');
      this.playSound('correct');
      return;
    }

    if (clean.includes('mysqladmin') && clean.includes('password') && !clean.includes('-p')) {
      appendLine('[ERROR 1045 (28000)]: Access denied for user \'root\'@\'localhost\' (using password: NO)', 'error');
      appendLine('💡 Consejo de examen: Como root ya tiene contraseña previa, es obligatorio incluir el flag "-p" (mysqladmin -u root -p password <nueva>) para que te solicite la antigua.', 'info');
      this.playSound('wrong');
      return;
    }

    if (clean.startsWith('alias /aplicacionesclase')) {
      appendLine('[OK] Sintaxis de Alias válida. Apache mapeará "http://localhost/aplicacionesclase" a la carpeta física "C:/xampp/aplicacionesclase/".', 'success');
      appendLine('Recuerda configurar el bloque <Directory "C:/xampp/aplicacionesclase/"> con Options Indexes y Require all granted, y reiniciar Apache.', 'info');
      this.playSound('correct');
      return;
    }

    if (clean.includes('require all granted')) {
      appendLine('[OK] Directiva de control de acceso válida. Acceso concedido a todos los clientes e IPs de la red local.', 'success');
      this.playSound('correct');
      return;
    }

    if (clean.includes('require local')) {
      appendLine('[OK] Directiva activa. El acceso queda restringido exclusivamente a localhost / 127.0.0.1.', 'info');
      return;
    }

    appendLine(`'${cmd}' no se reconoce como un comando o directiva válida de XAMPP.`, 'error');
    appendLine('Escribe "help" para ver los comandos del temario oficial de examen.', 'info');
    this.playSound('wrong');
  }

  confirmReset() {
    if (confirm("¿Estás seguro de que deseas reiniciar todas tus respuestas, bolsas de fallos y estadísticas?")) {
      this.tutorAnswers = {};
      this.examAnswers = {};
      this.failedQuestionIds.clear();
      this.bookmarkedIds.clear();
      this.fcKnownIds.clear();
      this.clearActiveExamSession();
      this.saveStorage('dwes_failed_ids', []);
      this.saveStorage('dwes_bookmarked_ids', []);
      this.saveStorage('dwes_fc_known', []);
      this.updateFailedBadge();
      this.applyFilters();
      this.playSound('click');
    }
  }
}

// Inicialización automática
document.addEventListener('DOMContentLoaded', () => {
  window.dwesApp = new DWESExamApp();
});
