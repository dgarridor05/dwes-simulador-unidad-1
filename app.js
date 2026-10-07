// ==========================================================================
// CONTROLADOR DE APLICACIÓN - SIMULADOR EXAMEN DWES UNIDAD 1 (DAW / DAM)
// ==========================================================================

class DWESExamApp {
  constructor() {
    this.questions = [...QUESTIONS_DATA];
    this.filteredQuestions = [...this.questions];
    this.currentIndex = 0;
    this.currentMode = 'tutor'; // 'tutor' | 'exam' | 'traps' | 'review' | 'glossary'
    this.activeLevel = 'all';
    this.activeTopic = 'all';

    // Estado del usuario
    this.userAnswers = {}; // { [questionId]: { optionId, isCorrect } }
    this.failedQuestionIds = new Set(this.loadFromStorage('dwes_failed_ids', []));
    this.bookmarkedIds = new Set(this.loadFromStorage('dwes_bookmarked_ids', []));
    this.audioEnabled = this.loadFromStorage('dwes_audio', true);

    // Temporizador de Examen (45 minutos para banco completo de 94 preguntas)
    this.examTimeLeft = 45 * 60;
    this.timerInterval = null;

    // Sintetizador Web Audio API
    this.initAudioContext();

    // Cache de elementos DOM
    this.dom = {
      // Header & Controles
      toggleAudioBtn: document.getElementById('toggleAudioBtn'),
      toggleThemeBtn: document.getElementById('toggleThemeBtn'),
      resetStatsBtn: document.getElementById('resetStatsBtn'),
      timerDisplay: document.getElementById('timerDisplay'),
      timeValue: document.getElementById('timeValue'),

      // Pestañas de modo
      tabs: document.querySelectorAll('.mode-tab'),
      filterBar: document.getElementById('filterBar'),
      levelChips: document.querySelectorAll('.chip-filter[data-level]'),
      topicSelect: document.getElementById('topicFilterSelect'),

      // Estadísticas
      statProgress: document.getElementById('statProgress'),
      statCorrect: document.getElementById('statCorrect'),
      statWrong: document.getElementById('statWrong'),
      statGrade: document.getElementById('statGrade'),
      failedCountBadge: document.getElementById('failedCountBadge'),

      // Progreso
      progressBarContainer: document.getElementById('progressBarContainer'),
      progressFill: document.getElementById('progressFill'),
      progressText: document.getElementById('progressText'),
      questionCountText: document.getElementById('questionCountText'),

      // Vistas
      quizMainView: document.getElementById('quizMainView'),
      resultsModal: document.getElementById('resultsModal'),
      glossaryView: document.getElementById('glossaryView'),

      // Tarjeta de pregunta
      questionCard: document.getElementById('questionCard'),
      badgeLevel: document.getElementById('badgeLevel'),
      badgeTopic: document.getElementById('badgeTopic'),
      badgePage: document.getElementById('badgePage'),
      bookmarkBtn: document.getElementById('bookmarkQuestionBtn'),
      questionText: document.getElementById('questionText'),
      optionsContainer: document.getElementById('optionsContainer'),

      // Explicación
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
      finishExamBtn: document.getElementById('finishExamBtn'),

      // Modal de resultados
      finalGradeScore: document.getElementById('finalGradeScore'),
      finalGradeTitle: document.getElementById('finalGradeTitle'),
      finalGradeVerdict: document.getElementById('finalGradeVerdict'),
      finalCorrectCount: document.getElementById('finalCorrectCount'),
      finalWrongCount: document.getElementById('finalWrongCount'),
      finalBlankCount: document.getElementById('finalBlankCount'),
      finalAccuracy: document.getElementById('finalAccuracy'),
      restartExamBtn: document.getElementById('restartExamBtn'),
      reviewFailedOnlyBtn: document.getElementById('reviewFailedOnlyBtn'),
      backToTutorBtn: document.getElementById('backToTutorBtn')
    };

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.applyStoredTheme();
    this.updateAudioButtonState();
    this.updateFailedBadge();
    this.updateLevelChipsCounts();
    this.applyFilters();
    this.renderQuestion();
  }

  updateLevelChipsCounts() {
    const total = this.questions.length;
    const basicos = this.questions.filter(q => q.level === 'basico').length;
    const medios = this.questions.filter(q => q.level === 'medio').length;
    const avanzados = this.questions.filter(q => q.level === 'avanzado').length;

    this.dom.levelChips.forEach(chip => {
      const lvl = chip.dataset.level;
      if (lvl === 'all') chip.textContent = `Todos (${total})`;
      else if (lvl === 'basico') chip.textContent = `Básico (${basicos})`;
      else if (lvl === 'medio') chip.textContent = `Intermedio (${medios})`;
      else if (lvl === 'avanzado') chip.textContent = `Avanzado / Trampa (${avanzados})`;
    });
  }

  // --- AUDIO SYNTHESIS (Zero External Assets) ---
  initAudioContext() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    } catch (e) {
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
        // Acorde alegre ascendente
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'wrong') {
        // Tono grave descendente
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.setValueAtTime(146.83, now + 0.12);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'click') {
        // Click suave
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      }
    } catch (err) {
      console.warn("Audio playback issue:", err);
    }
  }

  // --- PERSISTENCIA LOCAL STORAGE ---
  loadFromStorage(key, defaultValue) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch {
      return defaultValue;
    }
  }

  saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn("Storage save error", e);
    }
  }

  // --- EVENT LISTENERS ---
  setupEventListeners() {
    // Cambio de modo
    this.dom.tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const mode = tab.dataset.mode;
        this.switchMode(mode);
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

    // Filtro por bloque temático
    this.dom.topicSelect.addEventListener('change', (e) => {
      this.activeTopic = e.target.value;
      this.applyFilters();
    });

    // Botones de acción
    this.dom.nextBtn.addEventListener('click', () => this.nextQuestion());
    this.dom.prevBtn.addEventListener('click', () => this.prevQuestion());
    this.dom.skipBtn.addEventListener('click', () => this.nextQuestion());
    this.dom.finishExamBtn.addEventListener('click', () => this.finishExam());

    // Bookmark
    this.dom.bookmarkBtn.addEventListener('click', () => this.toggleBookmarkCurrent());

    // Reinicio
    this.dom.resetStatsBtn.addEventListener('click', () => this.confirmReset());

    // Audio & Tema
    this.dom.toggleAudioBtn.addEventListener('click', () => this.toggleAudio());
    this.dom.toggleThemeBtn.addEventListener('click', () => this.toggleTheme());

    // Botones de la pantalla de resultados
    this.dom.restartExamBtn.addEventListener('click', () => this.startExamMode());
    this.dom.reviewFailedOnlyBtn.addEventListener('click', () => this.switchMode('review'));
    this.dom.backToTutorBtn.addEventListener('click', () => this.switchMode('tutor'));

    // Atajos de teclado (1-4, A-D, Enter, Flechas)
    window.addEventListener('keydown', (e) => this.handleKeyboard(e));
  }

  handleKeyboard(e) {
    if (this.currentMode === 'glossary' || this.dom.resultsModal.style.display === 'block') return;

    const key = e.key.toUpperCase();
    const map = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', 'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D' };

    if (map[key]) {
      const optionBtn = document.querySelector(`.option-btn[data-option-id="${map[key]}"]`);
      if (optionBtn && !optionBtn.disabled) {
        optionBtn.click();
      }
    } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
      if (this.currentIndex < this.filteredQuestions.length - 1) {
        this.nextQuestion();
      } else if (this.currentMode === 'exam') {
        this.finishExam();
      }
    } else if (e.key === 'ArrowLeft') {
      this.prevQuestion();
    }
  }

  // --- FILTRADO Y GESTIÓN DE BANCO ---
  applyFilters() {
    let list = [...this.questions];

    // Modo específico
    if (this.currentMode === 'traps') {
      list = list.filter(q => q.level === 'avanzado');
    } else if (this.currentMode === 'review') {
      list = list.filter(q => this.failedQuestionIds.has(q.id));
      if (list.length === 0) {
        // Si no hay fallos, mensaje informativo
        this.filteredQuestions = [];
        this.renderNoQuestionsState("¡Enhorabuena! No tienes ninguna pregunta pendiente en la bolsa de fallos.");
        return;
      }
    }

    // Nivel
    if (this.activeLevel !== 'all' && this.currentMode !== 'traps') {
      list = list.filter(q => q.level === this.activeLevel);
    }

    // Bloque temático
    if (this.activeTopic !== 'all') {
      list = list.filter(q => q.topic.toString() === this.activeTopic.toString());
    }

    this.filteredQuestions = list;
    this.currentIndex = 0;

    if (this.filteredQuestions.length === 0) {
      this.renderNoQuestionsState("No hay preguntas que coincidan con los filtros seleccionados.");
    } else {
      this.renderQuestion();
    }
    this.updateStatsDisplay();
  }

  renderNoQuestionsState(message) {
    this.dom.questionText.innerHTML = `<div style="text-align: center; padding: 2rem; color: var(--text-muted);">${message}</div>`;
    this.dom.optionsContainer.innerHTML = '';
    this.dom.explanationCard.style.display = 'none';
    this.dom.nextBtn.style.display = 'none';
    this.dom.prevBtn.style.display = 'none';
    this.dom.skipBtn.style.display = 'none';
  }

  // --- CAMBIO DE MODOS ---
  switchMode(mode) {
    this.currentMode = mode;
    this.dom.tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.mode === mode);
    });

    // Detener timer si salimos de examen
    if (mode !== 'exam') {
      this.stopTimer();
      this.dom.timerDisplay.style.display = 'none';
      this.dom.finishExamBtn.style.display = 'none';
    }

    // Visibilidad de contenedores principales
    if (mode === 'glossary') {
      this.dom.quizMainView.style.display = 'none';
      this.dom.filterBar.style.display = 'none';
      this.dom.statsBanner.style.display = 'none';
      this.dom.progressBarContainer.style.display = 'none';
      this.dom.resultsModal.style.display = 'none';
      this.dom.glossaryView.style.display = 'block';
      this.playSound('click');
      return;
    } else {
      this.dom.glossaryView.style.display = 'none';
      this.dom.quizMainView.style.display = 'block';
      this.dom.filterBar.style.display = 'flex';
      this.dom.statsBanner.style.display = 'grid';
      this.dom.progressBarContainer.style.display = 'block';
      this.dom.resultsModal.style.display = 'none';
    }

    if (mode === 'exam') {
      this.startExamMode();
    } else {
      this.applyFilters();
    }

    this.playSound('click');
  }

  startExamMode() {
    this.userAnswers = {}; // Reinicia respuestas del simulacro
    this.filteredQuestions = [...this.questions].sort(() => Math.random() - 0.5); // Barajar preguntas
    this.currentIndex = 0;
    this.examTimeLeft = 45 * 60; // 45 mins
    this.dom.timerDisplay.style.display = 'inline-flex';
    this.dom.finishExamBtn.style.display = 'inline-flex';
    this.startTimer();
    this.renderQuestion();
    this.updateStatsDisplay();
  }

  startTimer() {
    this.stopTimer();
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.examTimeLeft--;
      this.updateTimerDisplay();
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
  }

  // --- RENDERIZADO DE PREGUNTA ---
  renderQuestion() {
    if (!this.filteredQuestions || this.filteredQuestions.length === 0) return;

    const q = this.filteredQuestions[this.currentIndex];
    const total = this.filteredQuestions.length;
    const answered = this.userAnswers[q.id];

    // Restaurar visibilidad de botones
    this.dom.nextBtn.style.display = (this.currentIndex < total - 1) ? 'inline-flex' : 'none';
    this.dom.prevBtn.style.display = (this.currentIndex > 0) ? 'inline-flex' : 'none';
    this.dom.skipBtn.style.display = (this.currentMode !== 'exam' && this.currentIndex < total - 1) ? 'inline-flex' : 'none';

    // Metadatos
    this.dom.badgeLevel.textContent = q.level.toUpperCase();
    this.dom.badgeLevel.className = `badge-level ${q.level}`;
    this.dom.badgeTopic.textContent = `Tema ${q.topic}: ${q.topicName}`;
    this.dom.badgePage.textContent = q.page;

    // Marcador de duda
    this.dom.bookmarkBtn.classList.toggle('active', this.bookmarkedIds.has(q.id));
    this.dom.bookmarkBtn.textContent = this.bookmarkedIds.has(q.id) ? '⭐ Duda Guardada' : '☆ Guardar Duda';

    // Texto de la pregunta
    this.dom.questionText.textContent = `${this.currentIndex + 1}. ${q.question}`;

    // Renderizar Opciones
    this.dom.optionsContainer.innerHTML = '';
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.dataset.optionId = opt.id;

      btn.innerHTML = `
        <span class="option-letter">${opt.id}</span>
        <span class="option-content">${opt.text}</span>
      `;

      if (answered) {
        btn.disabled = true;
        if (opt.isCorrect) {
          btn.classList.add(answered.optionId === opt.id ? 'selected-correct' : 'show-correct');
        } else if (answered.optionId === opt.id) {
          btn.classList.add('selected-wrong');
        }
      } else {
        btn.addEventListener('click', () => this.handleOptionSelect(q, opt));
      }

      this.dom.optionsContainer.appendChild(btn);
    });

    // Explicación
    if (answered && this.currentMode !== 'exam') {
      this.showExplanation(q, answered);
    } else {
      this.dom.explanationCard.style.display = 'none';
    }

    // Progreso
    this.updateProgressTrack();
  }

  handleOptionSelect(question, selectedOption) {
    const isCorrect = selectedOption.isCorrect;

    // Registrar respuesta
    this.userAnswers[question.id] = {
      optionId: selectedOption.id,
      isCorrect: isCorrect,
      timestamp: Date.now()
    };

    if (!isCorrect) {
      this.failedQuestionIds.add(question.id);
    } else {
      // Si la acierta en repaso, se retira de fallos
      if (this.currentMode === 'review') {
        this.failedQuestionIds.delete(question.id);
      }
    }
    this.saveToStorage('dwes_failed_ids', Array.from(this.failedQuestionIds));
    this.updateFailedBadge();

    // Efecto Sonoro
    this.playSound(isCorrect ? 'correct' : 'wrong');

    // Actualizar vista
    this.updateStatsDisplay();
    this.renderQuestion();
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

    // Desglose de distractores
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

    // Alerta de examen / trampa
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

  toggleBookmarkCurrent() {
    if (!this.filteredQuestions[this.currentIndex]) return;
    const qId = this.filteredQuestions[this.currentIndex].id;
    if (this.bookmarkedIds.has(qId)) {
      this.bookmarkedIds.delete(qId);
    } else {
      this.bookmarkedIds.add(qId);
    }
    this.saveToStorage('dwes_bookmarked_ids', Array.from(this.bookmarkedIds));
    this.dom.bookmarkBtn.classList.toggle('active', this.bookmarkedIds.has(qId));
    this.dom.bookmarkBtn.textContent = this.bookmarkedIds.has(qId) ? '⭐ Duda Guardada' : '☆ Guardar Duda';
  }

  // --- ACTUALIZACIÓN DE PROGRESO Y ESTADÍSTICAS ---
  updateProgressTrack() {
    const total = this.filteredQuestions.length;
    const current = this.currentIndex + 1;
    const percent = Math.round((current / total) * 100);

    this.dom.progressFill.style.width = `${percent}%`;
    this.dom.progressText.textContent = `Avance: ${percent}%`;
    this.dom.questionCountText.textContent = `Pregunta ${current} de ${total}`;
  }

  updateStatsDisplay() {
    const answeredEntries = Object.values(this.userAnswers);
    const correctCount = answeredEntries.filter(a => a.isCorrect).length;
    const wrongCount = answeredEntries.filter(a => !a.isCorrect).length;
    const totalAnswered = answeredEntries.length;
    const totalQuestions = this.filteredQuestions.length || 1;

    // Fórmula oficial FP DAW/DAM: Aciertos - (Fallos / 3) normalizado a 10
    const rawScore = correctCount - (wrongCount / 3);
    const grade = Math.max(0, (rawScore / totalQuestions) * 10).toFixed(2);

    this.dom.statProgress.textContent = `${totalAnswered} / ${totalQuestions}`;
    this.dom.statCorrect.textContent = correctCount;
    this.dom.statWrong.textContent = wrongCount;
    this.dom.statGrade.textContent = `${grade} / 10`;
  }

  updateFailedBadge() {
    this.dom.failedCountBadge.textContent = this.failedQuestionIds.size;
  }

  // --- FINALIZACIÓN DE EXAMEN (RESULTADOS) ---
  finishExam() {
    this.stopTimer();

    const total = this.filteredQuestions.length;
    let correct = 0;
    let wrong = 0;

    this.filteredQuestions.forEach(q => {
      const ans = this.userAnswers[q.id];
      if (ans) {
        if (ans.isCorrect) correct++;
        else wrong++;
      }
    });

    const blank = total - (correct + wrong);
    const rawScore = correct - (wrong / 3);
    const finalScore = Math.max(0, (rawScore / total) * 10).toFixed(2);
    const accuracy = (correct + wrong) > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;

    // Ocultar vista de preguntas y mostrar modal
    this.dom.quizMainView.style.display = 'none';
    this.dom.resultsModal.style.display = 'block';

    this.dom.finalGradeScore.textContent = finalScore;
    this.dom.finalCorrectCount.textContent = correct;
    this.dom.finalWrongCount.textContent = wrong;
    this.dom.finalBlankCount.textContent = blank;
    this.dom.finalAccuracy.textContent = `${accuracy}%`;

    // Veredicto académico
    let title = "";
    let verdict = "";
    if (finalScore >= 9.0) {
      title = "🏆 ¡SOBRESALIENTE / MATRÍCULA DE HONOR!";
      verdict = "Dominas absolutamente todos los detalles técnicos, trampas y directivas de la Unidad 1.";
    } else if (finalScore >= 7.0) {
      title = "👏 ¡NOTABLE ALTO!";
      verdict = "Gran nivel de conocimientos. Revisa únicamente un par de detalles en la bolsa de fallos.";
    } else if (finalScore >= 5.0) {
      title = "✅ ¡APROBADO!";
      verdict = "Superas la nota de corte, pero ten cuidado con las preguntas trampa de CGI y php.ini.";
    } else {
      title = "⚠️ EXAMEN NO SUPERADO (ELIMINATORIO)";
      verdict = "Has caído en demasiados distractores. Te recomiendo usar el Modo Tutor para estudiar cada explicación.";
    }

    this.dom.finalGradeTitle.textContent = title;
    this.dom.finalGradeVerdict.textContent = verdict;
  }

  // --- AUDIO & TEMA & REINICIO ---
  toggleAudio() {
    this.audioEnabled = !this.audioEnabled;
    this.saveToStorage('dwes_audio', this.audioEnabled);
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
    this.saveToStorage('dwes_theme', nextTheme);
    this.playSound('click');
  }

  applyStoredTheme() {
    const theme = this.loadFromStorage('dwes_theme', 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  }

  confirmReset() {
    if (confirm("¿Estás seguro de que deseas reiniciar tus respuestas y estadísticas del simulador?")) {
      this.userAnswers = {};
      this.failedQuestionIds.clear();
      this.bookmarkedIds.clear();
      this.saveToStorage('dwes_failed_ids', []);
      this.saveToStorage('dwes_bookmarked_ids', []);
      this.updateFailedBadge();
      this.applyFilters();
      this.playSound('click');
    }
  }
}

// Inicializar la aplicación al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  window.dwesApp = new DWESExamApp();
});
