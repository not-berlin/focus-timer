const TRANS = {
  vi: {
    navClock:'Giờ hiện tại', navCountdown:'Đếm ngược', navPomo:'Pomodoro',
    ncdLeft:'Chỉ còn', ncdTarget:'Là thi THPTQG',
    panelBg:'Hình nền', panelMusic:'Nhạc nền', panelNotes:'Ghi chú', panelSettings:'Cài đặt', panelTodo: 'Việc cần làm', panelStats: 'Tiến độ',
    dropZone:'Kéo thả ảnh (hoặc thư mục) vào đây', dropZoneSub:'hỗ trợ tải lên nhiều ảnh cùng lúc',
    dropZoneImg:'Kéo thả ảnh hoặc thư mục vào đây', dropZoneImgSub:'hỗ trợ ảnh nền nhiều tấm',
    bgVideoDropZone:'Kéo thả video nền vào đây', bgVideoDropZoneSub:'hỗ trợ mov, mp4, webm, m4v…',
    bgVideoChoose:'Chọn video nền', bgVideoClear:'Tắt video nền',
    bgUrlPh:'Hoặc dán link ảnh vào đây…', applyLink:'Áp dụng link', clearBg:'Xóa hình nền',
    ytPh:'Dán link YouTube / playlist…', scPh:'Dán link SoundCloud / playlist…', todoPh: 'Bạn muốn làm gì tiếp theo?',
    playMusic:'Phát nhạc', tabYt:'YouTube', tabSc:'SoundCloud', tabLocal:'Thư viện',
    mediaDropZone:'Kéo thả nhạc/video hoặc thư mục vào đây', mediaDropZoneSub:'hỗ trợ mp3, m4a, flac, mov, mp4, webm…',
    mediaAddFiles:'Thêm file', mediaAddFolder:'Thêm thư mục', mediaSearchPh:'Tìm bài trong thư viện…', mediaEmpty:'Chưa có bài nào được thêm',
    mediaRepeatOff:'Lặp: Tắt', mediaRepeatAll:'Lặp: Tất cả', mediaRepeatOne:'Lặp: Một bài',
    mediaPrev:'Lùi bài', mediaNext:'Bài tiếp', mediaPlay:'Phát', mediaPause:'Tạm dừng', mediaTypeAudio:'Âm thanh', mediaTypeVideo:'Video', mediaDelete:'Xóa bài',
    notesPh:'Gõ gì đó vào đây…\nCứ tự nhiên như đang nghĩ thôi.', exportNotes:'Tải về',
    tabPomo: 'Pomodoro', tabClock: 'Đồng hồ & Font', tabDisplay: 'Giao diện', tabSystem: 'Hệ thống',
    tabGuide: 'Hướng dẫn', tabWhatsNew: 'Có gì mới',
    settSectPomo:'Pomodoro', settPomoWork:'Tập trung', settMinutes:'phút',
    settPomoBreak:'Nghỉ ngắn', settPomoLong:'Nghỉ dài', settAfter4:'sau 4 hiệp',
    settSectDisplay:'Hiển thị', settBlur:'Blur nền khi chạy',
    settUiBlur:'Độ mờ nền UI (Blur)', settUiBlurSub:'panel, thông báo',
    settDim:'Độ tối nền mặc định', settDimSub:'ảnh nền khi chưa chạy',
    settHideQuoteAuto:'Ẩn Quote & Mindset', settHideQuoteAutoSub:'khi bật tối mờ hoặc countdown đang chạy',
    settOffset:'Vị trí đồng hồ', settOffsetSub:'từ giữa',
    settClockScale:'Cỡ đồng hồ', settClockScaleSub:'phóng to / thu nhỏ',
    settClockColor: 'Màu đồng hồ', settClockColorSub: 'tùy chỉnh màu sắc',
    settClockOpacity: 'Độ mờ font', settClockOpacitySub: 'rõ hay mờ',
    settClockBlur: 'Độ nhòe font (Glow)', settClockBlurSub: 'hiệu ứng glow ảo ảo',
    settSectInterface:'Giao diện', settLang:'Ngôn ngữ', settLangSub:'giao diện',
    settFont:'Font', settFontSub:'toàn bộ giao diện', fontDefault:'Mặc định',
    settSectVideoBg:'Nền video', settYtBg:'YouTube làm nền', settYtBgSub:'video lặp im lặng',
    ytBgPh:'Dán link YouTube vào đây…', applyVideoBg:'Áp dụng video', clearVideoBg:'Xóa video nền',
    settBgInterval: 'Chuyển ảnh mỗi', settBgRandom: 'Ngẫu nhiên', settBgRandomSub: 'không theo thứ tự',
    settHideDate: 'Ẩn ngày tháng', settHideDateSub: 'giấu thông tin dưới đồng hồ',
    settHideHint: 'Ẩn hướng dẫn chạm', settHideHintSub: 'giấu dòng chữ dưới bộ đếm',
    breakBadge:'Giải lao', notifDismiss:'Tiếp tục thôi',
    langCurrent:'Tiếng Việt', langVi:'VI', langEn:'EN', clearDone: 'Xóa việc đã xong', taskLeft: 'việc còn lại',
    quoteTag:'Mindset', toolPip:'Cửa sổ nổi', toolTools:'Công cụ',
    toolMusic:'Nhạc nền', toolNotes:'Ghi chú', toolStats:'Tiến độ hôm nay', toolDim:'Tối mờ',
    toolSettings:'Cài đặt', toolFullscreen:'Toàn màn hình', toolExitFullscreen:'Thoát toàn màn hình',
    toolClosePlayer:'Đóng cửa sổ nổi', titleExportNotes:'Tải về file .txt',
    titleCondensed:'Chỉ áp dụng cho mặt đồng hồ', todoAddTitle:'Thêm việc',
    todoDeleteTitle:'Xóa việc này', todoAdded: 'Thêm:', todoDone: 'Xong:',
    statsFocus:'Phút tập trung', statsRounds:'Pomodoro xong', statsCountdown:'Countdown xong',
    statsTasks:'Việc hoàn tất', statsStreak:'Chuỗi đạt mục tiêu', statsGoalShort:'Mục tiêu',
    statsLast:'Phiên gần nhất', statsLastEmpty:'Chưa có phiên nào hôm nay.',
    dailyGoal:'Mục tiêu hôm nay', dailyGoalSub:'phút tập trung',
    statsGoalStart:'Bắt đầu một phiên để lấp thanh tiến độ.', statsGoalReached:'Mục tiêu hôm nay đã hoàn thành.',
    statsGoalProgress:'{done}/{goal} phút tập trung hôm nay.',
    statsSessionAt:'lúc {time}', dayShort:'n', goalDayUnit:'ngày',
    settSound:'Âm báo', settSoundSub:'khi xong phiên hoặc có lỗi',
    settSoundVolume:'Âm lượng', settSoundVolumeSub:'âm báo nhẹ, không gắt',
    errorTitle: 'Oops!', errYt: 'Link YouTube không hợp lệ.', errSc: 'Link SoundCloud không hợp lệ.', 
    errNotes: 'Ghi chú đang trống, không có gì để tải về cả.', errPip: 'Trình duyệt không hỗ trợ cửa sổ nổi (PiP).',
    start:'Bắt đầu', reset:'Đặt lại', pause:'Tạm dừng', resume:'Tiếp tục', stop:'Dừng',
    countdownLbl:'Đếm ngược', countdownSub:'Đặt thời gian bên dưới', countingSub:'Đang đếm ngược',
    pomoLbl:'Pomodoro', focusSub:'Hiệp {n} — Tập trung',
    shortBreakSub:'Nghỉ ngắn — Đứng dậy đi', longBreakSub:'Nghỉ dài — Thở sâu',
    fpFocus:'tập trung', fpBreak:'giải lao', fpCountdown:'đếm ngược',
    notifPomoTitle:'Hiệp {n} xong!', notifBreakDone:'Giải lao xong!',
    notifBreakMsg:'Tâm trí tươi mới — hãy bước vào hiệp tiếp theo.',
    notifLongBreak:'\n\nBạn xứng đáng với một giải lao dài.',
    notifDoneTitle:'Hoàn thành!', wordUnit:' từ',
    titleClock:'Giờ hiện tại', titleCountdown:'Đếm ngược', titlePomoRound:'Hiệp {n}', titlePomoShort:'Nghỉ ngắn', titlePomoLong:'Nghỉ dài',
    settTouchMode:'Chế độ chạm', settTouchModeSub:'chạm = bắt/dừng · chạm×2 = đặt lại',
    touchHintStr:'chạm = bắt đầu/dừng · chạm×2 = đặt lại',
    todoEmpty: 'Bạn có việc gì cần làm không?', taskPending: 'Còn {n} việc cần làm',
    msgComplete: ["Mọi thứ đã xong — cái khoảnh khắc này là của bạn.", "Tâm trí đã đi qua, và trở về trong lành hơn.", "Xong. Đơn giản vậy thôi — và đó là điều tuyệt vời nhất."],
    msgPomo: ["Một hiệp nữa đã qua — tâm trí tỉnh như sương mai.", "Sóng sau đè sóng trước — bạn vừa vượt qua một hiệp.", "Dừng lại một chút. Hít thở. Rồi tiếp tục."],
    calTargetNamePh: 'Tên sự kiện (vd: Thi THPTQG)…', calTargetTime: 'Giờ đích', calSave: 'Lưu ngày đích', calPassed: 'Ngày này đã qua rồi.', calLeftDays: 'Còn {days} ngày', calTargetLabel: 'Ngày đích'
  },
  en: {
    navClock:'Current Time', navCountdown:'Countdown', navPomo:'Pomodoro',
    ncdLeft:'Only', ncdTarget:'Until Exam',
    panelBg:'Background', panelMusic:'Music', panelNotes:'Notes', panelSettings:'Settings', panelTodo: 'To-do List', panelStats: 'Progress',
    dropZone:'Drag & drop images (or folder)', dropZoneSub:'supports uploading multiple images',
    dropZoneImg:'Drag & drop images or folders here', dropZoneImgSub:'supports image slideshows',
    bgVideoDropZone:'Drag & drop a background video here', bgVideoDropZoneSub:'supports mov, mp4, webm, m4v…',
    bgVideoChoose:'Choose background video', bgVideoClear:'Turn off background video',
    bgUrlPh:'Or paste image URL here…', applyLink:'Apply link', clearBg:'Clear background',
    ytPh:'Paste YouTube link / playlist…', scPh:'Paste SoundCloud link / playlist…', todoPh: 'What to do next?',
    playMusic:'Play', tabYt:'YouTube', tabSc:'SoundCloud', tabLocal:'Library',
    mediaDropZone:'Drag & drop music/video files or folders here', mediaDropZoneSub:'supports mp3, m4a, flac, mov, mp4, webm…',
    mediaAddFiles:'Add files', mediaAddFolder:'Add folder', mediaSearchPh:'Search the library…', mediaEmpty:'No tracks added yet',
    mediaRepeatOff:'Loop: Off', mediaRepeatAll:'Loop: All', mediaRepeatOne:'Loop: One',
    mediaPrev:'Previous track', mediaNext:'Next track', mediaPlay:'Play', mediaPause:'Pause', mediaTypeAudio:'Audio', mediaTypeVideo:'Video', mediaDelete:'Remove track',
    notesPh:'Type something here…\nJust think out loud.', exportNotes:'Export',
    tabPomo: 'Pomodoro', tabClock: 'Clock & Font', tabDisplay: 'Display', tabSystem: 'System',
    tabGuide: 'User Guide', tabWhatsNew: 'What\'s New',
    settSectPomo:'Pomodoro', settPomoWork:'Focus', settMinutes:'minutes',
    settPomoBreak:'Short Break', settPomoLong:'Long Break', settAfter4:'after 4 rounds',
    settSectDisplay:'Display', settBlur:'Blur while running',
    settUiBlur:'UI Blur', settUiBlurSub:'panels, notifications',
    settDim:'Background dim', settDimSub:'before timer starts',
    settHideQuoteAuto:'Hide Quote & Mindset', settHideQuoteAutoSub:'while dim mode or countdown is active',
    settOffset:'Clock position', settOffsetSub:'from center',
    settClockScale:'Clock Scale', settClockScaleSub:'zoom in / out',
    settClockColor: 'Clock Color', settClockColorSub: 'custom color',
    settClockOpacity: 'Font Opacity', settClockOpacitySub: 'clear or transparent',
    settClockBlur: 'Font Blur (Glow)', settClockBlurSub: 'glow effect',
    settSectInterface:'Interface', settLang:'Language', settLangSub:'interface',
    settFont:'Set font', settFontSub:'entire interface', fontDefault:'Default',
    settSectVideoBg:'Video Background', settYtBg:'YouTube Background', settYtBgSub:'silent loop',
    ytBgPh:'Paste YouTube link here…', applyVideoBg:'Apply video', clearVideoBg:'Clear video',
    settBgInterval: 'Change image every', settBgRandom: 'Random order', settBgRandomSub: 'shuffle images',
    settHideDate: 'Hide Date', settHideDateSub: 'hide date below the clock',
    settHideHint: 'Hide Touch Hint', settHideHintSub: 'hide instructions below timer',
    breakBadge:'Break', notifDismiss:'Continue',
    langCurrent:'English', langVi:'VI', langEn:'EN', clearDone: 'Clear done', taskLeft: 'tasks left',
    quoteTag:'Mindset', toolPip:'Floating player', toolTools:'Tools',
    toolMusic:'Music', toolNotes:'Notes', toolStats:'Today progress', toolDim:'Dim mode',
    toolSettings:'Settings', toolFullscreen:'Fullscreen', toolExitFullscreen:'Exit fullscreen',
    toolClosePlayer:'Close floating player', titleExportNotes:'Download .txt file',
    titleCondensed:'Applies to clock face only', todoAddTitle:'Add task',
    todoDeleteTitle:'Delete task', todoAdded: 'Added:', todoDone: 'Done:',
    statsFocus:'Focus minutes', statsRounds:'Pomodoro done', statsCountdown:'Countdown done',
    statsTasks:'Tasks done', statsStreak:'Goal streak', statsGoalShort:'Goal',
    statsLast:'Latest session', statsLastEmpty:'No sessions yet today.',
    dailyGoal:'Today goal', dailyGoalSub:'focus minutes',
    statsGoalStart:'Start a session to build the progress bar.', statsGoalReached:'Daily goal completed.',
    statsGoalProgress:'{done}/{goal} focus minutes today.',
    statsSessionAt:'at {time}', dayShort:'d', goalDayUnit:'days',
    settSound:'Sound cues', settSoundSub:'when sessions end or errors appear',
    settSoundVolume:'Volume', settSoundVolumeSub:'soft notification tone',
    errorTitle: 'Oops!', errYt: 'Invalid YouTube link.', errSc: 'Invalid SoundCloud link.', 
    errNotes: 'Notes are empty, nothing to export.', errPip: 'Browser does not support PiP.',
    start:'Start', reset:'Reset', pause:'Pause', resume:'Resume', stop:'Stop',
    countdownLbl:'Countdown', countdownSub:'Set time below', countingSub:'Counting down',
    pomoLbl:'Pomodoro', focusSub:'Round {n} — Focus',
    shortBreakSub:'Short break — Stand up', longBreakSub:'Long break — Breathe',
    fpFocus:'focus', fpBreak:'break', fpCountdown:'countdown',
    notifPomoTitle:'Round {n} done!', notifBreakDone:'Break over!',
    notifBreakMsg:'Fresh mind — step into the next round.', notifLongBreak:'\n\nYou deserve a long break.',
    notifDoneTitle:'Done!', wordUnit:' words',
    titleClock:'Current Time', titleCountdown:'Countdown', titlePomoRound:'Round {n}', titlePomoShort:'Short Break', titlePomoLong:'Long Break',
    settTouchMode:'Touch Mode', settTouchModeSub:'tap = start/pause · 2 taps = reset',
    touchHintStr:'tap = start/pause · 2 taps = reset',
    todoEmpty: 'Anything else to do?', taskPending: '{n} tasks left',
    msgComplete: ["Everything is done — this moment is yours.", "The mind has traveled, returning clearer."],
    msgPomo: ["Another round passed — mind as clear as morning dew.", "Pause for a moment. Breathe. Then continue."],
    calTargetNamePh: 'Event name (e.g. Final Exam)…', calTargetTime: 'Target time', calSave: 'Save target', calPassed: 'This date has passed.', calLeftDays: 'Left {days} days', calTargetLabel: 'Target Date'
  }
};

function t(key, p) {
  let s = (TRANS[lang] || TRANS.vi)[key] || TRANS.vi[key] || key;
  if (Array.isArray(s)) return s;
  if (p) Object.keys(p).forEach(k => s = s.replace('{'+k+'}', p[k]));
  return s;
}

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const label = t(el.dataset.i18nTitle);
    el.title = label; el.setAttribute('aria-label', label);
  });
  
  const modeLabels = { clock: t('navClock'), countdown: t('navCountdown'), pomodoro: t('navPomo') };
  const modeBtnLabel = document.getElementById('mode-btn-label');
  if (modeBtnLabel) modeBtnLabel.textContent = modeLabels[mode] || mode;

  document.getElementById('lang-label').textContent = t('langCurrent');
  syncLangToggle();
  
  updateClock(); 
  renderTodos(); 
  updateNotesMeta(); 
  renderQuote(false); 
  renderStats();
  renderLocalMediaList();
  updateLocalMediaMeta();
  updateLocalPlayButton();
  setLocalRepeatLabel();
  updateDocumentTitle();
  updateDynamicTooltips(); 
  updateSoundUi(); 
  updateNavCountdown(); 
  updateGreeting(true); 
  updateTouchHint();
  
  if(document.getElementById('calendar-panel') && document.getElementById('calendar-panel').classList.contains('open')) {
    renderCalendar();
  }
}

function setLang(isEn) {
  lang = isEn ? 'en' : 'vi';
  document.documentElement.lang = lang;
  applyLang();
  syncSettings();
  render();
  savePrefs();
}

const MINDSETS_EN = [{ text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs", mindset: "Protect attention and build around what matters, not noise." }];
const MINDSETS_VI = [{ text: "Thời gian của bạn là có hạn, đừng lãng phí nó để sống cuộc đời của người khác.", author: "Steve Jobs", mindset: "Giữ sự chú ý cho điều quan trọng, đừng để nó bị nuốt bởi tạp âm." }];
const POMO_ICONS = ["✦", "◈", "⬡", "✧", "◇"];

let mode = 'clock';
let running = false;
let totalSecs = 0; let currentSecs = 0;
let timerInterval = null; let clockInterval = null;
let quoteInterval = null; let quoteIdx = 0; let quoteShowMode = 'quote'; 
let pomoSession = 0; let pomoCount = 0;
let isDragging = false; let dragOffX = 0, dragOffY = 0;
let lastTimeStr = ''; let lang = 'vi';
let clockDimOn = false; let touchMode = false; let soundEnabled = true;
let lastTapTime = 0; let tapTimeout = null; let holdTimeout = null; let holdTriggered = false; let clockTouchPending = false;
let currentGreetingIndex = -1;

const settings = {
  'pomo-work': 25, 'pomo-break': 5, 'pomo-long': 15,
  blur: 8, dim: 0.55, offset: 0, 'clock-scale': 1, 'ui-blur': 14,
  'clock-color': '#ffffff', 'clock-opacity': 1, 'clock-blur': 0, 'sound-volume': 0.35,
  'bg-interval': 300, 'bg-random': false,
  'hide-date': false, 'hide-hint': false, 'hide-quote-auto': true
};

try { const saved = JSON.parse(localStorage.getItem('focus-settings') || '{}'); Object.assign(settings, saved); } catch(e) {}

const STATS_KEY = 'focus-stats';
let focusStats = { goalMinutes: 120, days: {} };
let TARGET_DATE = (() => { try { const saved = localStorage.getItem('focus-target-date'); return saved ? new Date(saved) : new Date('2026-06-11T07:30:00'); } catch(e) { return new Date('2026-06-11T07:30:00'); }})();
let TARGET_NAME = localStorage.getItem('focus-target-name') || 'Là thi THPTQG';

function pad(n) { return String(n).padStart(2,'0'); }
function getDayKey(date = new Date()) { return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`; }
function loadFocusStats() { try { const saved = JSON.parse(localStorage.getItem(STATS_KEY) || '{}'); return { goalMinutes: Math.max(30, parseInt(saved.goalMinutes, 10) || 120), days: saved.days && typeof saved.days === 'object' ? saved.days : {} }; } catch(e) { return { goalMinutes: 120, days: {} }; } }
function ensureDayStats(key = getDayKey()) { if (!focusStats.days[key]) { focusStats.days[key] = { focusSecs: 0, completedPomos: 0, completedCountdowns: 0, completedTasks: 0, lastSession: null }; } return focusStats.days[key]; }
function saveFocusStats() { try { localStorage.setItem(STATS_KEY, JSON.stringify(focusStats)); } catch(e) {} renderStats(); }
function formatFocusMinutes(minutes) { return `${minutes} ${t('settMinutes')}`; }
function formatLastSession(session) { const label = session.kind === 'pomodoro' ? t('pomoLbl') : t('countdownLbl'); return `${label} · ${formatFocusMinutes(Math.round(session.secs / 60))} · ${t('statsSessionAt', { time: formatTime(session.at) })}`; }

function calculateGoalStreak() {
  const goalSecs = (focusStats.goalMinutes || 0) * 60; if (goalSecs <= 0) return 0;
  let streak = 0; const probe = new Date();
  while (true) { const day = focusStats.days[getDayKey(probe)]; if (day && day.focusSecs >= goalSecs) { streak++; probe.setDate(probe.getDate() - 1); continue; } break; }
  return streak;
}

function renderStats() {
  const goalSlider = document.getElementById('s-daily-goal'); if (!goalSlider) return;
  const today = ensureDayStats(); const goalMinutes = Math.max(30, parseInt(focusStats.goalMinutes, 10) || 120);
  const focusMinutes = Math.round((today.focusSecs || 0) / 60); const goalPct = Math.min(100, Math.round((focusMinutes / goalMinutes) * 100));
  goalSlider.value = goalMinutes; document.getElementById('v-daily-goal').textContent = formatFocusMinutes(goalMinutes);
  document.getElementById('stats-focus').textContent = focusMinutes; document.getElementById('stats-rounds').textContent = today.completedPomos || 0;
  document.getElementById('stats-countdown').textContent = today.completedCountdowns || 0; document.getElementById('stats-tasks').textContent = today.completedTasks || 0;
  document.getElementById('stats-streak').textContent = calculateGoalStreak(); document.getElementById('stats-goal-short').textContent = `${goalPct}%`;
  document.getElementById('stats-progress-bar').style.width = `${goalPct}%`;
  document.getElementById('stats-goal-note').textContent = focusMinutes <= 0 ? t('statsGoalStart') : goalPct >= 100 ? t('statsGoalReached') : t('statsGoalProgress', { done: focusMinutes, goal: goalMinutes });
  document.getElementById('stats-last-session').textContent = today.lastSession ? formatLastSession(today.lastSession) : t('statsLastEmpty');
}

function updateDailyGoal(val) { focusStats.goalMinutes = Math.max(30, parseInt(val, 10) || 120); saveFocusStats(); }
function updateNotesMeta() { const area = document.getElementById('notes-area'); const meta = document.getElementById('notes-meta'); if (!area || !meta) return; const words = area.value.trim() ? area.value.trim().split(/\s+/).length : 0; meta.textContent = words + t('wordUnit'); }
function setTranslatedMeta(id, key) { const el = document.getElementById(id); if (!el) return; const label = t(key); el.title = label; el.setAttribute('aria-label', label); }
function updateDynamicTooltips() { setTranslatedMeta('btn-zen', document.fullscreenElement ? 'toolExitFullscreen' : 'toolFullscreen'); setTranslatedMeta('fp-close', 'toolClosePlayer'); }
function updateSoundUi() { const toggle = document.getElementById('sound-toggle'); const row = document.getElementById('sound-volume-row'); if (toggle) toggle.checked = soundEnabled; if (row) row.classList.toggle('disabled', !soundEnabled); }
function setSoundEnabled(on) { soundEnabled = on; updateSoundUi(); savePrefs(); }

let audioCtx = null;
function getAudioCtx() { const AudioCtx = window.AudioContext || window.webkitAudioContext; if (!AudioCtx) return null; if (!audioCtx) audioCtx = new AudioCtx(); if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {}); return audioCtx; }
function playTone(ctx, freq, start, duration, gain, type = 'sine') { const osc = ctx.createOscillator(); const amp = ctx.createGain(); osc.type = type; osc.frequency.setValueAtTime(freq, start); amp.gain.setValueAtTime(0.0001, start); amp.gain.linearRampToValueAtTime(gain, start + 0.01); amp.gain.exponentialRampToValueAtTime(0.0001, start + duration); osc.connect(amp); amp.connect(ctx.destination); osc.start(start); osc.stop(start + duration + 0.02); }
function playNotifSound(kind = 'success') {
  if (!soundEnabled) return; const ctx = getAudioCtx(); if (!ctx) return;
  const vol = Math.max(0.05, Math.min(1, settings['sound-volume'] || 0.35)) * 0.08; const now = ctx.currentTime + 0.01;
  if (kind === 'error') { playTone(ctx, 220, now, 0.12, vol, 'triangle'); playTone(ctx, 180, now + 0.14, 0.18, vol * 0.95, 'triangle'); return; }
  if (kind === 'break') { playTone(ctx, 392, now, 0.10, vol, 'sine'); playTone(ctx, 523.25, now + 0.12, 0.14, vol * 0.9, 'sine'); playTone(ctx, 659.25, now + 0.26, 0.18, vol * 0.85, 'sine'); return; }
  playTone(ctx, 523.25, now, 0.12, vol, 'sine'); playTone(ctx, 659.25, now + 0.12, 0.15, vol * 0.95, 'sine'); playTone(ctx, 783.99, now + 0.26, 0.2, vol * 0.9, 'sine');
}

function recordSession(kind, secs) { if (!secs) return; const today = ensureDayStats(); today.focusSecs += secs; if (kind === 'pomodoro') today.completedPomos += 1; if (kind === 'countdown') today.completedCountdowns += 1; today.lastSession = { kind, secs, at: Date.now() }; saveFocusStats(); }
function adjustCompletedTasks(delta) { const today = ensureDayStats(); today.completedTasks = Math.max(0, (today.completedTasks || 0) + delta); saveFocusStats(); }

focusStats = loadFocusStats();

function hexToRgbCss(hex) {
  const normalized = String(hex || '').trim().replace('#', '');
  if (!/^[\da-fA-F]{6}$/.test(normalized)) return '255, 255, 255';
  const value = parseInt(normalized, 16);
  return `${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}`;
}

function applyClockTheme(color = settings['clock-color']) {
  const rgb = hexToRgbCss(color);
  document.documentElement.style.setProperty('--clock-color', color);
  document.documentElement.style.setProperty('--clock-rgb', rgb);
  if (pipWindow) {
    try {
      pipWindow.document.documentElement.style.setProperty('--clock-color', color);
      pipWindow.document.documentElement.style.setProperty('--clock-rgb', rgb);
    } catch (e) {}
  }
}

function syncLangToggle() {
  const wrap = document.getElementById('lang-toggle');
  if (!wrap) return;
  wrap.dataset.lang = lang;
  const viBtn = document.getElementById('lang-btn-vi');
  const enBtn = document.getElementById('lang-btn-en');
  if (viBtn) viBtn.classList.toggle('active', lang === 'vi');
  if (enBtn) enBtn.classList.toggle('active', lang === 'en');
}

function setLangFromToggle(nextLang) { setLang(nextLang === 'en'); }

function switchSettingsTab(tabId, btn) {
  document.querySelectorAll('.settings-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.settings-pane').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
  if (window.innerWidth <= 820) btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}
function setFont(type, btn) { document.querySelectorAll('.font-opt').forEach(b => b.classList.remove('active')); if (btn) btn.classList.add('active'); else { const el = document.getElementById('font-' + type); if (el) el.classList.add('active'); } document.body.classList.remove('font-mono', 'font-serif', 'font-condensed'); if (type !== 'default') document.body.classList.add('font-' + type); if (pipWindow) { pipWindow.document.body.className = ''; if (type !== 'default') pipWindow.document.body.classList.add('font-' + type); } savePrefs(); }
function toggleHideDate(on) { settings['hide-date'] = on; document.body.classList.toggle('hide-date', on); savePrefs(); }
function toggleHideHint(on) { settings['hide-hint'] = on; document.body.classList.toggle('hide-hint', on); savePrefs(); }
function toggleHideQuoteAuto(on) { settings['hide-quote-auto'] = on; updateQuoteVisibility(); savePrefs(); }

function updateNavCountdown() {
  const now = new Date(); const diff = TARGET_DATE - now; const container = document.getElementById('nav-countdown'); const lbl = document.getElementById('ncd-target-label');
  if (lbl) lbl.textContent = TARGET_NAME;
  if (diff <= 0) { if(container) container.classList.add('expired'); return; }
  if(container) container.classList.remove('expired');
  const days = Math.floor(diff / 86400000); const hours = Math.floor((diff % 86400000) / 3600000); const mins = Math.floor((diff % 3600000) / 60000); const secs = Math.floor((diff % 60000) / 1000);
  document.getElementById('ncd-time').textContent = days + t('dayShort') + ' ' + pad(hours) + ':' + pad(mins) + ':' + pad(secs);
}
updateNavCountdown(); setInterval(updateNavCountdown, 1000);

const ncd = document.getElementById('nav-countdown');
if(ncd) {
  ncd.addEventListener('mouseenter', () => {
    if(ncd.classList.contains('expired')) return;
    gsap.to('.ncd-prefix-wrap, .ncd-suffix-wrap', { width: 'auto', opacity: 1, duration: 0.35, ease: "power2.out" });
    gsap.to('#ncd-time', { scale: 1.15, color: 'var(--accent)', duration: 0.35, ease: "power2.out" });
  });
  ncd.addEventListener('mouseleave', () => {
    if(ncd.classList.contains('expired')) return;
    gsap.to('.ncd-prefix-wrap, .ncd-suffix-wrap', { width: 0, opacity: 0, duration: 0.25, ease: "power2.in" });
    gsap.to('#ncd-time', { scale: 1, color: 'var(--accent2)', duration: 0.25, ease: "power2.in" });
  });
}

let todos = JSON.parse(localStorage.getItem('focus-todos') || '[]');
function saveTodos() { localStorage.setItem('focus-todos', JSON.stringify(todos)); renderTodos(); }
function formatTime(ms) { if(!ms) return ''; const d = new Date(ms); return `${pad(d.getHours())}:${pad(d.getMinutes())}`; }
function addTodo() { const input = document.getElementById('todo-input'); const text = input.value.trim(); if (text) { todos.unshift({ id: Date.now(), text, done: false, addedAt: Date.now(), completedAt: null }); input.value = ''; saveTodos(); } }
function toggleTodo(id) { const todo = todos.find(t => t.id === id); if (todo) { const wasDone = todo.done; todo.done = !todo.done; todo.completedAt = todo.done ? Date.now() : null; if (!wasDone && todo.done) adjustCompletedTasks(1); if (wasDone && !todo.done) adjustCompletedTasks(-1); saveTodos(); } }
function deleteTodo(id, e) { e.stopPropagation(); todos = todos.filter(t => t.id !== id); saveTodos(); }
function clearDoneTodos() { todos = todos.filter(t => !t.done); saveTodos(); }

function updateGreeting(forceLangUpdate = false) {
  const el = document.getElementById('todo-greeting'); if (!el) return;
  const h = new Date().getHours(); let texts = [];
  
  if (h >= 23 || h < 4) { texts = lang === 'en' ? ["Rest is productive.", "Time to sleep soon.", "A quiet night builds a strong morning."] : ["Nghỉ ngơi cũng là nỗ lực.", "Khuya rồi, đừng thức quá muộn nhé.", "Đêm yên tĩnh, tâm trí vững vàng."]; }
  else if (h >= 4 && h < 12) { texts = lang === 'en' ? ["Good morning!", "Have a great day!"] : ["Chào buổi sáng!", "Một ngày làm việc vui vẻ!"]; }
  else if (h >= 12 && h < 18) { texts = lang === 'en' ? ["Good afternoon!", "Keep up the good work!"] : ["Chào buổi chiều!", "Tiếp tục phát huy nhé!"]; }
  else { texts = lang === 'en' ? ["Good evening!", "Welcome back!"] : ["Chào buổi tối!", "Chào mừng quay trở lại!"]; }
  
  if(currentGreetingIndex === -1 || forceLangUpdate) currentGreetingIndex = Math.floor(Math.random() * texts.length);
  el.textContent = texts[currentGreetingIndex];
}

function renderTodos() {
  const list = document.getElementById('todo-list'); list.innerHTML = ''; let pending = 0;
  todos.forEach(tItem => {
    if (!tItem.done) pending++;
    const div = document.createElement('div'); div.className = `todo-item ${tItem.done ? 'done' : ''}`; div.onclick = () => toggleTodo(tItem.id);
    div.innerHTML = `<div class="todo-check"><svg class="todo-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M20 6L9 17l-5-5"/></svg></div><div class="todo-info"><span class="todo-text">${tItem.text}</span><div class="todo-timestamps">${t('todoAdded')} ${formatTime(tItem.addedAt)} ${tItem.done && tItem.completedAt ? ' | ' + t('todoDone') + ' ' + formatTime(tItem.completedAt) : ''}</div></div><button class="todo-del" onclick="deleteTodo(${tItem.id}, event)" title="${t('todoDeleteTitle')}" aria-label="${t('todoDeleteTitle')}">✕</button>`;
    list.appendChild(div);
  });
  document.getElementById('todo-count').textContent = pending + ' ' + t('taskLeft');
  const btnText = document.getElementById('todo-btn-text');
  if (btnText) btnText.textContent = pending === 0 ? t('todoEmpty') : t('taskPending', {n: pending});
  list.setAttribute('data-empty', t('todoEmpty'));
}

/* ── QUOTES ── */
function setQuoteContent(q) {
  const main = document.getElementById('quote-main'); const divider = document.querySelector('#quote-content .quote-divider'); const note = document.getElementById('quote-note'); const author = document.getElementById('quote-author'); const tag = document.getElementById('quote-tag');
  if (quoteShowMode === 'mindset') { tag.textContent = 'Mindset'; main.style.display = 'none'; if (divider) divider.style.display = 'none'; note.style.display = ''; note.textContent = q.mindset.replace(/[.。,،]+$/, ''); author.textContent = ''; }
  else { tag.textContent = 'Quote'; main.style.display = ''; if (divider) divider.style.display = 'none'; note.style.display = 'none'; main.textContent = '\u201c' + q.text.replace(/[.。,،]+$/, '') + '\u201d'; author.textContent = '\u2014 ' + q.author; }
}
function renderQuote(animate = true) {
  const quotePool = lang === 'en' ? MINDSETS_EN : MINDSETS_VI; const q = quotePool[quoteIdx % quotePool.length]; const content = document.getElementById('quote-content'); const author = document.getElementById('quote-author');
  if (!animate) { setQuoteContent(q); content.style.opacity = 1; author.style.opacity = 1; return; }
  content.style.opacity = 0; author.style.opacity = 0; setTimeout(() => { setQuoteContent(q); content.style.opacity = 1; author.style.opacity = 1; }, 400);
}
function updateQuoteVisibility() {
  const hideForCountdown = mode === 'countdown' && (running || currentSecs > 0);
  document.body.classList.toggle('quote-muted', !!settings['hide-quote-auto'] && (clockDimOn || hideForCountdown));
}
function getPomodoroTitleLabel() {
  if (pomoSession === 2) return t('titlePomoLong');
  if (pomoSession === 1) return t('titlePomoShort');
  return t('titlePomoRound', { n: pomoCount + 1 });
}
function updateDocumentTitle(overrideTime) {
  let title = 'Focus';
  if (mode === 'clock') {
    const now = new Date();
    const currentTime = overrideTime || `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    title = `${t('titleClock')}: ${currentTime}`;
  } else if (mode === 'countdown') {
    const remaining = overrideTime || (currentSecs > 0 ? document.getElementById('time-display')?.textContent?.trim() || '00:00' : '00:00:00');
    title = `${t('titleCountdown')}: ${remaining}`;
  } else if (mode === 'pomodoro') {
    const remaining = overrideTime || (document.getElementById('time-display')?.textContent?.trim() || `${pad(settings['pomo-work'])}:00`);
    title = `${getPomodoroTitleLabel()}: ${remaining}`;
  }
  document.title = title;
}
renderQuote(false);
document.getElementById('quote-box').addEventListener('click', () => { quoteShowMode = quoteShowMode === 'quote' ? 'mindset' : 'quote'; renderQuote(true); });
quoteInterval = setInterval(() => { quoteIdx++; renderQuote(true); }, 20000);

/* ── INTRO REVEAL ── */
let introDone = false;
function setIntroProgress(value) { const counter = document.getElementById('intro-counter'); const bar = document.getElementById('intro-progress-bar'); const clamped = Math.max(0, Math.min(100, value)); if (!counter || !bar) return; counter.textContent = clamped < 100 ? String(Math.round(clamped)).padStart(2, '0') : '100'; counter.style.setProperty('--intro-progress', (clamped / 100).toFixed(4)); bar.style.transform = 'scaleX(' + (clamped / 100).toFixed(4) + ')'; }
function finishIntro() { const intro = document.getElementById('intro-screen'); if (!intro || introDone) return; introDone = true; intro.classList.add('is-unmasking'); document.body.classList.remove('intro-active'); setTimeout(() => intro.classList.add('is-finished'), 680); setTimeout(() => intro.remove(), 1250); }
function animateIntroOut() { const counter = document.getElementById('intro-counter'); if (!counter) { finishIntro(); return; } const chars = [...counter.textContent]; counter.innerHTML = chars.map(c => `<span class="intro-char-wrap"><span class="intro-char">${c}</span></span>`).join(''); if (typeof gsap !== 'undefined') { gsap.to('#intro-counter .intro-char', { xPercent: -110, duration: 0.42, stagger: { each: 0.10, from: 'end' }, ease: 'power3.in', onComplete: finishIntro }); } else { setTimeout(finishIntro, 400); } }
function startIntro() { const intro = document.getElementById('intro-screen'); const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; if (!intro || introDone) { document.body.classList.remove('intro-active'); return; } setIntroProgress(0); requestAnimationFrame(() => intro.classList.add('is-live')); if (prefersReduced) { setIntroProgress(100); setTimeout(finishIntro, 120); return; } const duration = 3200; const startedAt = performance.now(); const frame = now => { const raw = Math.min(1, (now - startedAt) / duration); const eased = 1 - Math.pow(1 - raw, 3); setIntroProgress(eased * 100); if (raw < 1) { requestAnimationFrame(frame); return; } animateIntroOut(); }; requestAnimationFrame(frame); }

/* ── MODE SWITCH ── */
function switchMode(m) { stop(); mode = m; const labels = { clock: t('navClock'), countdown: t('navCountdown'), pomodoro: t('navPomo') }; const btn = document.getElementById('btn-mode-current'); if (btn) { document.getElementById('mode-btn-label').textContent = labels[m] || m; btn.classList.add('active'); } document.querySelectorAll('.mode-opt').forEach(b => { b.classList.toggle('active', b.id === 'mode-opt-' + m); }); closeAllPanels(); render(); }
function selectModeOpt(m) { closeModeDropdown(); switchMode(m); }

function render() {
  const lbl = document.getElementById('mode-label'); const sub = document.getElementById('sub-label'); const ci = document.getElementById('countdown-input'); const dots = document.getElementById('pomo-dots'); const ctrl = document.getElementById('controls'); const td = document.getElementById('time-display');
  const btnDim = document.getElementById('btn-dim');

  td.classList.remove('running','warning'); dots.innerHTML = ''; ci.style.display = 'none';
  
  if (mode === 'clock') {
    lbl.textContent = ''; sub.textContent = ''; ctrl.innerHTML = ''; 
    document.getElementById('clock-display').classList.add('clock-mode'); 
    
    if (btnDim) btnDim.style.display = ''; 
    
    clearInterval(clockInterval); updateClock(); clockInterval = setInterval(updateClock, 1000);
  } else {
    document.getElementById('clock-display').classList.remove('clock-mode'); 
    
    if (btnDim) btnDim.style.display = 'none'; 
    
    if (clockDimOn) { 
        clockDimOn = false; 
        document.body.classList.remove('clock-dim'); 
        if (btnDim) btnDim.classList.remove('active'); 
        savePrefs(); 
    }
    
    clearInterval(clockInterval);
    
    if (mode === 'countdown') { 
        lbl.textContent = t('countdownLbl'); 
        sub.textContent = t('countdownSub'); 
        ci.style.display = 'flex'; 
        setTimeDisplay('00:00:00'); 
        ctrl.innerHTML = `<button class="ctrl-btn primary" onclick="startCountdown()">${t('start')}</button><button class="ctrl-btn" onclick="stop()">${t('reset')}</button>`; 
    }
    else { 
        lbl.textContent = t('pomoLbl'); 
        renderPomoDots(); 
        setTimeDisplay(pad(settings['pomo-work']) + ':00'); 
        sub.textContent = t('focusSub', {n: pomoCount + 1}); 
        ctrl.innerHTML = `<button class="ctrl-btn primary" onclick="startPomo()">${t('start')}</button><button class="ctrl-btn" onclick="stop()">${t('reset')}</button>`; 
    }
  }
  updateTouchHint();
  updateQuoteVisibility();
  updateDocumentTitle();
}

function setTimeDisplay(str) { const td = document.getElementById('time-display'); if (str !== lastTimeStr) { td.classList.remove('tick'); void td.offsetWidth; td.classList.add('tick'); lastTimeStr = str; } td.innerHTML = str.replace(/:/g, '<span class="time-colon">:</span>'); document.getElementById('fp-time').innerHTML = str.replace(/:/g, '<span style="opacity:0.7">:</span>'); if (pipWindow) { const pipTime = pipWindow.document.getElementById('fp-time'); if (pipTime) pipTime.innerHTML = str.replace(/:/g, '<span style="opacity:0.7">:</span>'); const pipMode = pipWindow.document.getElementById('fp-mode'); if (pipMode) pipMode.textContent = document.getElementById('fp-mode').textContent; } updateDocumentTitle(str); }

function updateClock() { 
  const now = new Date(); const str = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds()); setTimeDisplay(str); 
  const locale = lang === 'en' ? 'en-US' : 'vi-VN'; 
  const options = { weekday: 'long', month: 'long', day: 'numeric' }; 
  document.getElementById('mode-label').textContent = now.toLocaleDateString(locale, options); 
  document.getElementById('fp-mode').textContent = lang === 'en' ? 'current time' : 'giờ hiện tại'; 
  if (now.getMinutes() === 0 && now.getSeconds() === 0) { updateGreeting(); } 
  updateDocumentTitle(str);
}

function renderPomoDots() { const dots = document.getElementById('pomo-dots'); dots.innerHTML = ''; for (let i = 0; i < 4; i++) { const d = document.createElement('div'); d.className = 'pomo-dot' + (i < pomoCount % 4 ? ' done' : ''); dots.appendChild(d); } }

function startCountdown() { const h = parseInt(document.getElementById('input-h').value) || 0; const m = parseInt(document.getElementById('input-m').value) || 0; const s = parseInt(document.getElementById('input-s').value) || 0; totalSecs = h * 3600 + m * 60 + s; if (totalSecs <= 0) return; currentSecs = totalSecs; document.getElementById('countdown-input').style.display = 'none'; document.getElementById('sub-label').textContent = t('countingSub'); document.getElementById('controls').innerHTML = `<button class="ctrl-btn" onclick="pauseResume()" id="pause-btn">${t('pause')}</button><button class="ctrl-btn" onclick="stop()">${t('stop')}</button>`; running = true; document.getElementById('time-display').classList.add('running'); displayCountdownTime(currentSecs); setBgFocus(true); document.body.classList.add('timer-running'); closeAllPanels(); timerInterval = setInterval(tickCountdown, 1000); document.getElementById('fp-mode').textContent = t('fpCountdown'); updateTouchHint(); updateQuoteVisibility(); updateDocumentTitle(); }
function tickCountdown() { currentSecs--; if (currentSecs <= 0) { currentSecs = 0; setTimeDisplay('00:00'); clearInterval(timerInterval); running = false; setBgFocus(false); document.body.classList.remove('timer-running'); document.getElementById('time-display').classList.remove('running','warning'); recordSession('countdown', totalSecs); updateQuoteVisibility(); const msgArr = t('msgComplete'); showNotif('◇', t('notifDoneTitle'), msgArr[Math.floor(Math.random()*msgArr.length)], 'success'); return; } if (currentSecs <= 10) document.getElementById('time-display').classList.add('warning'); displayCountdownTime(currentSecs); updateQuoteVisibility(); }
function displayCountdownTime(s) { const h = Math.floor(s / 3600); const m = Math.floor((s % 3600) / 60); const sec = s % 60; setTimeDisplay(h > 0 ? pad(h) + ':' + pad(m) + ':' + pad(sec) : pad(m) + ':' + pad(sec)); }

function startPomo() { pomoSession = 0; startPomoWork(); }
function startPomoWork() { pomoSession = 0; currentSecs = settings['pomo-work'] * 60; document.getElementById('sub-label').textContent = t('focusSub', {n: pomoCount + 1}); document.getElementById('break-badge').style.display = 'none'; document.getElementById('controls').innerHTML = `<button class="ctrl-btn" onclick="pauseResume()" id="pause-btn">${t('pause')}</button><button class="ctrl-btn" onclick="stop()">${t('stop')}</button>`; running = true; document.getElementById('time-display').classList.add('running'); setTimeDisplay(pad(Math.floor(currentSecs / 60)) + ':' + pad(currentSecs % 60)); setBgFocus(true); document.body.classList.add('timer-running'); closeAllPanels(); timerInterval = setInterval(tickPomo, 1000); document.getElementById('fp-mode').textContent = t('fpFocus'); updateTouchHint(); updateQuoteVisibility(); updateDocumentTitle(); }
function startPomoBreak(long) { pomoSession = long ? 2 : 1; currentSecs = (long ? settings['pomo-long'] : settings['pomo-break']) * 60; document.getElementById('sub-label').textContent = long ? t('longBreakSub') : t('shortBreakSub'); document.getElementById('break-badge').style.display = 'block'; document.getElementById('time-display').classList.remove('running','warning'); setTimeDisplay(pad(Math.floor(currentSecs / 60)) + ':' + pad(currentSecs % 60)); document.getElementById('controls').innerHTML = `<button class="ctrl-btn" onclick="pauseResume()" id="pause-btn">${t('pause')}</button><button class="ctrl-btn" onclick="stop()">${t('stop')}</button>`; setBgFocus(false); running = true; document.body.classList.add('timer-running'); closeAllPanels(); timerInterval = setInterval(tickPomo, 1000); document.getElementById('fp-mode').textContent = t('fpBreak'); updateTouchHint(); updateQuoteVisibility(); updateDocumentTitle(); }
function tickPomo() { currentSecs--; setTimeDisplay(pad(Math.floor(currentSecs/60)) + ':' + pad(currentSecs%60)); if (currentSecs <= 10 && pomoSession === 0) document.getElementById('time-display').classList.add('warning'); if (currentSecs <= 0) { clearInterval(timerInterval); running = false; document.getElementById('time-display').classList.remove('warning'); if (pomoSession === 0) { pomoCount++; renderPomoDots(); setBgFocus(false); recordSession('pomodoro', settings['pomo-work'] * 60); const isLong = pomoCount % 4 === 0; updateQuoteVisibility(); const msgArr = t('msgPomo'); showNotif( POMO_ICONS[pomoCount % POMO_ICONS.length], t('notifPomoTitle', {n: pomoCount}), msgArr[Math.floor(Math.random()*msgArr.length)] + (isLong ? t('notifLongBreak') : ''), 'success' ); document.getElementById('notif-dismiss').onclick = () => { dismissNotif(); startPomoBreak(isLong); }; } else { document.getElementById('break-badge').style.display = 'none'; updateQuoteVisibility(); showNotif('✦', t('notifBreakDone'), t('notifBreakMsg'), 'break'); document.getElementById('notif-dismiss').onclick = () => { dismissNotif(); startPomoWork(); }; } } }

function pauseResume() { const btn = document.getElementById('pause-btn'); if (running) { clearInterval(timerInterval); running = false; if (btn) btn.textContent = t('resume'); setBgFocus(false); document.body.classList.remove('timer-running'); } else { running = true; if (btn) btn.textContent = t('pause'); setBgFocus(true); document.body.classList.add('timer-running'); if (mode === 'countdown') timerInterval = setInterval(tickCountdown, 1000); else timerInterval = setInterval(tickPomo, 1000); } updateTouchHint(); updateQuoteVisibility(); }
function stop() { clearInterval(timerInterval); clearInterval(clockInterval); running = false; currentSecs = 0; pomoCount = 0; setBgFocus(false); document.body.classList.remove('timer-running'); document.getElementById('break-badge').style.display = 'none'; const td = document.getElementById('time-display'); td.classList.remove('running','warning'); render(); updateQuoteVisibility(); }

function setBgFocus(on) { 
    document.getElementById('bg-layer').classList.toggle('focused', on); 
    document.getElementById('bg-new').classList.toggle('focused', on); 
    document.getElementById('bg-video-wrap').classList.toggle('focused', on);
    document.getElementById('floating-player').classList.toggle('focused', on); 
    if (pipWindow) { 
        try {
            const pipBg = pipWindow.document.getElementById('pip-bg'); 
            if (pipBg) pipBg.classList.toggle('focused', on); 
        } catch(e) {}
    } 
}

function updateSetting(key, val) {
  settings[key] = isNaN(val) && key === 'clock-color' ? val : parseFloat(val);
  const min = t ? t('settMinutes') : 'phút';
  const displays = { 'pomo-work': v => v + ' ' + min, 'pomo-break': v => v + ' ' + min, 'pomo-long': v => v + ' ' + min, blur: v => v + 'px', dim: v => Math.round(v * 100) + '%', offset: v => v + '%', 'clock-scale': v => Math.round(v * 100) + '%', 'ui-blur': v => v + 'px', 'clock-opacity': v => v, 'clock-blur': v => v + 'px', 'sound-volume': v => Math.round(v * 100) + '%' };
  const dispEl = document.getElementById('v-' + key); if(dispEl && displays[key]) dispEl.textContent = displays[key](val);
  
  if (key === 'blur') { document.documentElement.style.setProperty('--focus-blur', val + 'px'); if(pipWindow){ try{pipWindow.document.documentElement.style.setProperty('--focus-blur', val + 'px');}catch(e){} } }
  if (key === 'dim') { document.documentElement.style.setProperty('--focus-dim', val); if(pipWindow){ try{pipWindow.document.documentElement.style.setProperty('--focus-dim', val);}catch(e){} } }
  if (key === 'offset') document.getElementById('clock-display').style.transform = 'translateY(calc(' + val + 'vh))';
  if (key === 'clock-scale') document.documentElement.style.setProperty('--clock-scale', val);
  if (key === 'ui-blur') document.documentElement.style.setProperty('--ui-blur', val + 'px');
  if (key === 'clock-color') applyClockTheme(val);
  if (key === 'clock-opacity') document.documentElement.style.setProperty('--clock-opacity', val);
  if (key === 'clock-blur') document.documentElement.style.setProperty('--clock-blur', val + 'px');
  
  if (pipWindow) { 
      try {
          if (key === 'clock-color') applyClockTheme(val); 
          if (key === 'clock-opacity') pipWindow.document.documentElement.style.setProperty('--clock-opacity', val); 
          if (key === 'clock-blur') pipWindow.document.documentElement.style.setProperty('--clock-blur', val + 'px'); 
      } catch(e) {}
  }
  try { localStorage.setItem('focus-settings', JSON.stringify(settings)); } catch(e) {}
}

/* ── INDEXEDDB & GSAP BACKGROUND SLIDESHOW ── */
let bgImages = [];
let currentBgIndex = -1;
let bgSlideshowInterval = null;

const dbPromise = (() => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('FocusBgDB', 1);
    request.onupgradeneeded = (e) => { e.target.result.createObjectStore('bgs', { keyPath: 'id' }); };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
})();

async function saveBgsToDB(imagesArr) {
  const db = await dbPromise;
  return new Promise((resolve) => {
    const tx = db.transaction('bgs', 'readwrite');
    tx.objectStore('bgs').clear(); 
    imagesArr.forEach((img, i) => tx.objectStore('bgs').put({ id: i, data: img }));
    tx.oncomplete = resolve;
  });
}

async function loadBgsFromDB() {
  const db = await dbPromise;
  return new Promise((resolve) => {
    const tx = db.transaction('bgs', 'readonly');
    const request = tx.objectStore('bgs').getAll();
    request.onsuccess = () => resolve(request.result.map(r => r.data));
  });
}

async function initBgSlideshow() {
  const savedBgs = await loadBgsFromDB();
  if(savedBgs && savedBgs.length > 0) {
    bgImages = savedBgs;
    updateBgUI();
    setBgImage(bgImages[0], false);
    startBgSlideshow();
  } else {
    const url = localStorage.getItem('focus-bg');
    if (url) {
      bgImages = [url];
      updateBgUI();
      setBgImage(url, false);
    }
  }
}

function updateBgUI() {
  const label = document.getElementById('bg-count-label');
  const slideSettings = document.getElementById('slideshow-settings');
  if(bgImages.length > 1) {
    if(label) label.textContent = lang === 'en' ? `Loaded ${bgImages.length} images` : `Đã tải ${bgImages.length} ảnh`;
    if(slideSettings) slideSettings.style.display = 'block';
  } else {
    if(slideSettings) slideSettings.style.display = 'none';
  }
}

function updateBgInterval(val) {
  settings['bg-interval'] = parseInt(val);
  const disp = document.getElementById('v-bg-interval');
  if(disp) disp.textContent = val + 's';
  savePrefs();
  startBgSlideshow(); 
}

function toggleBgRandom(on) {
  settings['bg-random'] = on;
  savePrefs();
}

function startBgSlideshow() {
  clearInterval(bgSlideshowInterval);
  if(bgImages.length > 1) {
    const ms = (settings['bg-interval'] || 300) * 1000;
    bgSlideshowInterval = setInterval(nextBg, ms);
  }
}

function nextBg() {
  if (bgImages.length <= 1) return;
  if (settings['bg-random']) {
    let next = currentBgIndex;
    while(next === currentBgIndex) next = Math.floor(Math.random() * bgImages.length);
    currentBgIndex = next;
  } else {
    currentBgIndex = (currentBgIndex + 1) % bgImages.length;
  }
  setBgImage(bgImages[currentBgIndex], true);
}

function setBgImage(url, animate = true) {
  const bgNew = document.getElementById('bg-new'); 
  const bgLayer = document.getElementById('bg-layer');
  
  const applyToOthers = (bgUrl) => {
    document.getElementById('fp-bg').style.backgroundImage = `url("${bgUrl}")`;
    document.documentElement.style.setProperty('--notif-bg-img', `url("${bgUrl}")`);
    if (pipWindow) { 
        try {
            const pipBg = pipWindow.document.getElementById('pip-bg'); 
            if (pipBg) pipBg.style.backgroundImage = `url("${bgUrl}")`; 
        } catch(e) {}
    }
  };

  if(!animate) {
    bgLayer.style.backgroundImage = `url("${url}")`;
    applyToOthers(url);
    return;
  }

  const img = new Image();
  img.onload = () => {
    bgNew.style.backgroundImage = `url("${url}")`;
    gsap.fromTo(bgNew, 
      { opacity: 0 }, 
      { 
        opacity: 1, 
        duration: 1.2, 
        ease: "power2.inOut",
        onComplete: () => {
          bgLayer.style.backgroundImage = `url("${url}")`;
          gsap.set(bgNew, { opacity: 0 }); // reset bgNew
          applyToOthers(url);
        }
      }
    );
  };
  img.src = url;
}

async function applyMultipleBgs(urls) {
  bgImages = urls;
  currentBgIndex = 0;
  updateBgUI();
  setBgImage(bgImages[0], true);
  await saveBgsToDB(bgImages);
  startBgSlideshow();
}

function applyBgUrl() {
  const url = document.getElementById('bg-url-input').value.trim();
  if (url) applyMultipleBgs([url]);
}

async function clearBg() {
  bgImages = [];
  clearInterval(bgSlideshowInterval);
  updateBgUI();
  const layerWrap = document.getElementById('bg-layer'); layerWrap.style.backgroundImage = '';
  document.getElementById('bg-new').style.backgroundImage = ''; document.getElementById('fp-bg').style.backgroundImage = '';
  document.getElementById('bg-url-input').value = ''; document.documentElement.style.removeProperty('--notif-bg-img');
  localStorage.removeItem('focus-bg');
  await saveBgsToDB([]);
  if (pipWindow) { 
      try {
          const pipBg = pipWindow.document.getElementById('pip-bg'); 
          if (pipBg) pipBg.style.backgroundImage = ''; 
      } catch(e) {}
  }
  syncBackgroundLayersVisibility();
}

function isImageFile(file) { return !!file && (file.type.startsWith('image/') || /\.(png|jpe?g|gif|webp|bmp|svg)$/i.test(file.name || '')); }
function isAudioFile(file) { return !!file && (file.type.startsWith('audio/') || /\.(mp3|m4a|flac|wav|aac|ogg|oga)$/i.test(file.name || '')); }
function isVideoFile(file) { return !!file && (file.type.startsWith('video/') || /\.(mov|mp4|webm|m4v|ogv)$/i.test(file.name || '')); }

function walkDroppedEntry(entry) {
  return new Promise(resolve => {
    if (!entry) { resolve([]); return; }
    if (entry.isFile) {
      entry.file(file => resolve([file]), () => resolve([]));
      return;
    }
    if (!entry.isDirectory) { resolve([]); return; }
    const reader = entry.createReader();
    const entries = [];
    const readBatch = () => reader.readEntries(async batch => {
      if (!batch.length) {
        const nested = await Promise.all(entries.map(walkDroppedEntry));
        resolve(nested.flat());
        return;
      }
      entries.push(...batch);
      readBatch();
    }, () => resolve([]));
    readBatch();
  });
}

async function getEventFiles(e) {
  const items = Array.from(e?.dataTransfer?.items || []);
  if (!items.length) return Array.from(e?.dataTransfer?.files || []);
  const batches = await Promise.all(items.map(async item => {
    const entry = item.webkitGetAsEntry?.();
    if (entry) return walkDroppedEntry(entry);
    const file = item.getAsFile?.();
    return file ? [file] : [];
  }));
  return batches.flat();
}

async function handleDrop(e) {
  e.preventDefault(); e.currentTarget.classList.remove('dragover');
  processFiles(await getEventFiles(e));
}
function handleFileInput(e) {
  processFiles(e.target.files);
  e.target.value = '';
}

function processFiles(files) {
  if (!files || files.length === 0) return;
  const allFiles = Array.from(files);
  const imageFiles = allFiles.filter(isImageFile);
  const videoFiles = allFiles.filter(isVideoFile);
  if (!imageFiles.length && videoFiles.length) {
    processBgVideoFiles(videoFiles);
    return;
  }
  if (imageFiles.length === 0) return;
  
  const urls = [];
  let loaded = 0;
  imageFiles.forEach(file => {
    const reader = new FileReader();
    reader.onload = ev => {
      urls.push(ev.target.result);
      loaded++;
      if(loaded === imageFiles.length) {
        applyMultipleBgs(urls);
      }
    };
    reader.readAsDataURL(file);
  });
}

function syncBackgroundLayersVisibility() {
  const hasVideoBackground = document.getElementById('yt-bg-wrap').classList.contains('active') || document.getElementById('bg-video-wrap').classList.contains('active');
  document.getElementById('bg-layer').style.opacity = hasVideoBackground ? '0' : '';
  document.getElementById('bg-new').style.opacity = hasVideoBackground ? '0' : '';
}

let bgVideoObjectUrl = '';

async function handleBgVideoDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('dragover');
  processBgVideoFiles(await getEventFiles(e));
}

function handleBgVideoInput(e) {
  processBgVideoFiles(e.target.files);
  e.target.value = '';
}

function processBgVideoFiles(files) {
  if (!files || files.length === 0) return;
  const videoFile = Array.from(files).find(isVideoFile);
  if (!videoFile) return;
  const ytToggle = document.getElementById('yt-bg-toggle');
  if (ytToggle) ytToggle.checked = false;
  clearYtBg();
  if (bgVideoObjectUrl) URL.revokeObjectURL(bgVideoObjectUrl);
  bgVideoObjectUrl = URL.createObjectURL(videoFile);
  const wrap = document.getElementById('bg-video-wrap');
  const video = document.getElementById('bg-video');
  video.src = bgVideoObjectUrl;
  wrap.classList.add('active');
  video.currentTime = 0;
  video.play().catch(() => {});
  syncBackgroundLayersVisibility();
}

function clearBgVideo() {
  const wrap = document.getElementById('bg-video-wrap');
  const video = document.getElementById('bg-video');
  wrap.classList.remove('active');
  video.pause();
  video.removeAttribute('src');
  video.load();
  if (bgVideoObjectUrl) {
    URL.revokeObjectURL(bgVideoObjectUrl);
    bgVideoObjectUrl = '';
  }
  syncBackgroundLayersVisibility();
}

/* ── YOUTUBE BACKGROUND ── */
function toggleYtBg(enabled) { document.getElementById('yt-bg-section').style.display = enabled ? 'block' : 'none'; if (!enabled) clearYtBg(); }
function applyYtBg() { const url = document.getElementById('yt-bg-input').value.trim(); if (!url) return; let videoId = ''; const m = url.match(/(?:youtu\.be\/|v=)([^#&?]{11})/); if (m) videoId = m[1]; if (!videoId) { showNotif('!', t('errorTitle'), t('errYt'), 'error'); return; } clearBgVideo(); const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&iv_load_policy=3`; document.getElementById('yt-bg-iframe').src = src; document.getElementById('yt-bg-wrap').classList.add('active'); syncBackgroundLayersVisibility(); savePrefs(); }
function clearYtBg() { document.getElementById('yt-bg-iframe').src = ''; document.getElementById('yt-bg-wrap').classList.remove('active'); document.getElementById('yt-bg-input').value = ''; syncBackgroundLayersVisibility(); savePrefs(); }

/* ── MUSIC TABS ── */
function hasMusicEmbedLoaded() { return !!document.getElementById('yt-iframe')?.src; }
function syncMusicEmbedHost() {
  const wrap = document.getElementById('yt-frame-wrap');
  const stage = document.getElementById('music-iframe-stage');
  const dock = document.getElementById('music-iframe-dock');
  const panel = document.getElementById('music-panel');
  if (!wrap || !stage || !dock || !panel) return;
  const linkTabOpen = document.getElementById('music-tab-yt').style.display !== 'none' || document.getElementById('music-tab-sc').style.display !== 'none';
  const shouldShowPreview = panel.classList.contains('open') && linkTabOpen && hasMusicEmbedLoaded();
  if (shouldShowPreview) {
    if (wrap.parentElement !== stage) stage.appendChild(wrap);
    panel.classList.add('has-embed-preview');
  } else {
    if (wrap.parentElement !== dock) dock.appendChild(wrap);
    panel.classList.remove('has-embed-preview');
  }
}
function switchMusicTab(tab, btn) { document.querySelectorAll('.music-tab').forEach(b => b.classList.remove('active')); btn.classList.add('active'); document.getElementById('music-tab-yt').style.display = tab === 'yt' ? 'block' : 'none'; document.getElementById('music-tab-sc').style.display = tab === 'sc' ? 'block' : 'none'; document.getElementById('music-tab-local').style.display = tab === 'local' ? 'block' : 'none'; syncMusicEmbedHost(); }
function loadYT() { const url = document.getElementById('yt-url-input').value.trim(); if (!url) return; const iframe = document.getElementById('yt-iframe'); const wrap = document.getElementById('yt-frame-wrap'); const normalized = url.replace('music.youtube.com', 'www.youtube.com'); const listMatch = normalized.match(/[?&]list=([^#&?\s]+)/); const videoMatch = normalized.match(/(?:youtu\.be\/|[?&]v=)([^#&?\s]{11})/); let src = ''; if (videoMatch && listMatch) { src = `https://www.youtube.com/embed/${videoMatch[1]}?list=${listMatch[1]}&autoplay=1&rel=0&modestbranding=1`; } else if (listMatch) { src = `https://www.youtube.com/embed/videoseries?list=${listMatch[1]}&autoplay=1&rel=0&modestbranding=1`; } else if (videoMatch) { src = `https://www.youtube.com/embed/${videoMatch[1]}?autoplay=1&loop=1&playlist=${videoMatch[1]}&rel=0&modestbranding=1`; } else { showNotif('!', t('errorTitle'), t('errYt'), 'error'); return; } iframe.src = src; wrap.classList.add('visible'); syncMusicEmbedHost(); }
function loadSC() { const url = document.getElementById('sc-url-input').value.trim(); if (!url) return; if (!url.includes('soundcloud.com')) { showNotif('!', t('errorTitle'), t('errSc'), 'error'); return; } const iframe = document.getElementById('yt-iframe'); const wrap = document.getElementById('yt-frame-wrap'); const encoded = encodeURIComponent(url); iframe.src = `https://w.soundcloud.com/player/?url=${encoded}&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=true`; wrap.classList.add('visible'); syncMusicEmbedHost(); }

let localMediaLibrary = [];
let localMediaSearch = '';
let currentLocalMediaId = null;
let localMediaRepeat = 'all';
let localMediaShouldAutoplay = false;

function getLocalMediaElement() { return document.getElementById('local-media-player'); }
function getCurrentLocalMedia() { return localMediaLibrary.find(item => item.id === currentLocalMediaId) || null; }
function formatMediaTime(seconds) { if (!Number.isFinite(seconds) || seconds < 0) return '00:00'; const mins = Math.floor(seconds / 60); const secs = Math.floor(seconds % 60); const hours = Math.floor(mins / 60); return hours > 0 ? `${pad(hours)}:${pad(mins % 60)}:${pad(secs)}` : `${pad(mins)}:${pad(secs)}`; }

function setLocalRepeatLabel() {
  const btn = document.getElementById('local-repeat-btn');
  if (!btn) return;
  const key = localMediaRepeat === 'one' ? 'mediaRepeatOne' : localMediaRepeat === 'off' ? 'mediaRepeatOff' : 'mediaRepeatAll';
  btn.textContent = t(key);
}

function updateLocalPlayButton() {
  const btn = document.getElementById('local-play-btn');
  const media = getLocalMediaElement();
  if (!btn || !media) return;
  const isPlaying = !media.paused && !media.ended;
  btn.textContent = isPlaying ? '❚❚' : '▶';
  const label = t(isPlaying ? 'mediaPause' : 'mediaPlay');
  btn.title = label;
  btn.setAttribute('aria-label', label);
}

function updateLocalMediaMeta() {
  const current = getCurrentLocalMedia();
  const media = getLocalMediaElement();
  const titleEl = document.getElementById('local-track-title');
  const metaEl = document.getElementById('local-track-meta');
  const currentTimeEl = document.getElementById('local-current-time');
  const totalTimeEl = document.getElementById('local-total-time');
  const seekEl = document.getElementById('local-seek');
  if (!titleEl || !metaEl || !currentTimeEl || !totalTimeEl || !seekEl || !media) return;

  if (!current) {
    titleEl.textContent = t('mediaEmpty');
    metaEl.textContent = '00:00';
    currentTimeEl.textContent = '00:00';
    totalTimeEl.textContent = '00:00';
    seekEl.value = 0;
    media.style.display = 'none';
    return;
  }

  titleEl.textContent = current.name;
  metaEl.textContent = current.kind === 'video' ? t('mediaTypeVideo') : t('mediaTypeAudio');
  currentTimeEl.textContent = formatMediaTime(media.currentTime);
  totalTimeEl.textContent = formatMediaTime(media.duration || current.duration);
  seekEl.value = Number.isFinite(media.duration) && media.duration > 0 ? (media.currentTime / media.duration) * 100 : 0;
  media.style.display = current.kind === 'video' ? 'block' : 'none';
}

function renderLocalMediaList() {
  const list = document.getElementById('local-track-list');
  if (!list) return;
  const query = localMediaSearch.trim().toLowerCase();
  const visibleItems = localMediaLibrary.filter(item => !query || item.name.toLowerCase().includes(query));
  list.innerHTML = '';
  list.setAttribute('data-empty', t('mediaEmpty'));
  visibleItems.forEach(item => {
    const row = document.createElement('div');
    row.className = 'local-track-item' + (item.id === currentLocalMediaId ? ' active' : '');
    row.onclick = () => selectLocalMedia(item.id, true);
    row.innerHTML = `<div class="local-track-main"><div class="local-track-name">${item.name}</div><div class="local-track-sub">${item.kind === 'video' ? t('mediaTypeVideo') : t('mediaTypeAudio')}</div></div><div class="local-track-actions"><div class="local-track-duration">${formatMediaTime(item.duration)}</div><button class="local-track-delete" type="button" title="${t('mediaDelete')}" aria-label="${t('mediaDelete')}" onclick="removeLocalMedia('${item.id}', event)">✕</button></div>`;
    list.appendChild(row);
  });
}

function filterLocalMedia(query) {
  localMediaSearch = query || '';
  renderLocalMediaList();
}

function selectLocalMedia(id, autoplay = true) {
  const item = localMediaLibrary.find(track => track.id === id);
  const media = getLocalMediaElement();
  if (!item || !media) return;
  currentLocalMediaId = id;
  localMediaShouldAutoplay = autoplay;
  media.src = item.url;
  media.load();
  updateLocalMediaMeta();
  renderLocalMediaList();
  updateLocalPlayButton();
}

function loadLocalMediaFiles(files) {
  if (!files || files.length === 0) return;
  const accepted = Array.from(files).filter(file => isAudioFile(file) || isVideoFile(file));
  if (!accepted.length) return;
  const hadItems = localMediaLibrary.length > 0;
  accepted.forEach(file => {
    localMediaLibrary.push({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: file.name,
      kind: isVideoFile(file) ? 'video' : 'audio',
      url: URL.createObjectURL(file),
      duration: NaN
    });
  });
  renderLocalMediaList();
  if (!hadItems && localMediaLibrary[0]) selectLocalMedia(localMediaLibrary[0].id, true);
}

function removeLocalMedia(id, event) {
  event?.stopPropagation();
  const media = getLocalMediaElement();
  const currentIndex = localMediaLibrary.findIndex(item => item.id === id);
  if (currentIndex < 0) return;
  const item = localMediaLibrary[currentIndex];
  const wasCurrent = currentLocalMediaId === id;
  const nextCandidate = localMediaLibrary[currentIndex + 1] || localMediaLibrary[currentIndex - 1] || null;
  if (item.url) URL.revokeObjectURL(item.url);
  localMediaLibrary.splice(currentIndex, 1);

  if (wasCurrent && media) {
    media.pause();
    media.removeAttribute('src');
    media.load();
    currentLocalMediaId = null;
    localMediaShouldAutoplay = false;
    if (nextCandidate) selectLocalMedia(nextCandidate.id, true);
  }

  if (!localMediaLibrary.length) {
    currentLocalMediaId = null;
    localMediaShouldAutoplay = false;
  }

  renderLocalMediaList();
  updateLocalMediaMeta();
  updateLocalPlayButton();
}

async function handleLocalMediaDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('dragover');
  loadLocalMediaFiles(await getEventFiles(e));
}

function handleLocalMediaInput(e) {
  loadLocalMediaFiles(e.target.files);
  e.target.value = '';
}

function toggleLocalPlayback() {
  const media = getLocalMediaElement();
  if (!media) return;
  if (!currentLocalMediaId && localMediaLibrary[0]) {
    selectLocalMedia(localMediaLibrary[0].id, true);
    return;
  }
  if (media.paused) media.play().catch(() => {});
  else media.pause();
}

function getCurrentLocalMediaIndex() { return localMediaLibrary.findIndex(item => item.id === currentLocalMediaId); }

function playPrevLocalMedia() {
  if (!localMediaLibrary.length) return;
  const currentIndex = getCurrentLocalMediaIndex();
  const nextIndex = currentIndex <= 0 ? localMediaLibrary.length - 1 : currentIndex - 1;
  selectLocalMedia(localMediaLibrary[nextIndex].id, true);
}

function playNextLocalMedia() {
  if (!localMediaLibrary.length) return;
  const currentIndex = getCurrentLocalMediaIndex();
  const nextIndex = currentIndex >= localMediaLibrary.length - 1 || currentIndex < 0 ? 0 : currentIndex + 1;
  selectLocalMedia(localMediaLibrary[nextIndex].id, true);
}

function cycleLocalRepeat() {
  localMediaRepeat = localMediaRepeat === 'all' ? 'one' : localMediaRepeat === 'one' ? 'off' : 'all';
  setLocalRepeatLabel();
}

function seekLocalMedia(value) {
  const media = getLocalMediaElement();
  if (!media || !Number.isFinite(media.duration) || media.duration <= 0) return;
  media.currentTime = (media.duration * Number(value)) / 100;
}

const localMediaElement = getLocalMediaElement();
if (localMediaElement) {
  localMediaElement.addEventListener('loadedmetadata', () => {
    const current = getCurrentLocalMedia();
    if (current) current.duration = localMediaElement.duration;
    updateLocalMediaMeta();
    renderLocalMediaList();
  });
  localMediaElement.addEventListener('canplay', () => {
    if (!localMediaShouldAutoplay) return;
    localMediaShouldAutoplay = false;
    localMediaElement.play().catch(() => {});
  });
  localMediaElement.addEventListener('timeupdate', () => {
    updateLocalMediaMeta();
    updateLocalPlayButton();
  });
  localMediaElement.addEventListener('play', updateLocalPlayButton);
  localMediaElement.addEventListener('pause', updateLocalPlayButton);
  localMediaElement.addEventListener('ended', () => {
    if (localMediaRepeat === 'one') {
      localMediaElement.currentTime = 0;
      localMediaElement.play().catch(() => {});
      return;
    }
    const currentIndex = getCurrentLocalMediaIndex();
    if (currentIndex < localMediaLibrary.length - 1) {
      selectLocalMedia(localMediaLibrary[currentIndex + 1].id, true);
      return;
    }
    if (localMediaRepeat === 'all' && localMediaLibrary.length) {
      selectLocalMedia(localMediaLibrary[0].id, true);
      return;
    }
    updateLocalPlayButton();
  });
}

function saveNotes() { const val = document.getElementById('notes-area').value; localStorage.setItem('focus-notes', val); updateNotesMeta(); }
function exportNotes() { const text = document.getElementById('notes-area').value; if (!text.trim()) { showNotif('!', t('errorTitle'), t('errNotes'), 'error'); return; } const blob = new Blob([text], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); const now = new Date(); a.href = url; a.download = `focus-notes-${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}.txt`; document.body.appendChild(a); a.click(); URL.revokeObjectURL(url); document.body.removeChild(a); }
(function loadNotes() { const saved = localStorage.getItem('focus-notes'); if (saved) { document.getElementById('notes-area').value = saved; } updateNotesMeta(); })();

/* ── PANELS & GSAP ANIMATIONS ── */
function togglePanel(id, btn) {
  const panel = document.getElementById(id);
  const isOpen = panel.classList.contains('open');
  if (!isOpen) {
    closeAllPanels(() => {
      panel.classList.add('open');
      if (btn) btn.classList.add('active');
      if (id === 'music-panel') syncMusicEmbedHost();
      gsap.fromTo(panel, {opacity: 0, y: 10, scale: 0.97}, {opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'back.out(1.5)'});
    });
  } else {
    closePanel(id, btn ? btn.id : null);
  }
}

function closePanel(id, btnId) {
  const panel = document.getElementById(id);
  if(!panel.classList.contains('open')) return;
  if (btnId) { const b = document.getElementById(btnId); if(b) b.classList.remove('active'); }
  gsap.to(panel, {
    opacity: 0, y: 10, scale: 0.98, duration: 0.2, ease: 'power2.in',
    onComplete: () => {
      panel.classList.remove('open');
      if (id === 'music-panel') syncMusicEmbedHost();
      gsap.set(panel, {clearProps: "all"}); 
    }
  });
}

function closeAllPanels(onCompleteCallback) {
  let panelsOpen = false;
  document.querySelectorAll('.panel.open').forEach(p => {
    panelsOpen = true;
    gsap.to(p, {
      opacity: 0, y: 10, scale: 0.98, duration: 0.2, ease: 'power2.in',
      onComplete: () => { p.classList.remove('open'); if (p.id === 'music-panel') syncMusicEmbedHost(); gsap.set(p, {clearProps: "all"}); }
    });
  });
  document.querySelectorAll('.tool-btn, .todo-nav-btn').forEach(b => b.classList.remove('active'));
  closeMediaFan(true);
  closeModeDropdown();
  syncFloatingPlayerState();
  
  if(onCompleteCallback) {
    if(panelsOpen) setTimeout(onCompleteCallback, 220);
    else onCompleteCallback();
  }
}

document.addEventListener('click', e => {
  if (document.body.classList.contains('timer-running')) return;
  const panels = document.querySelectorAll('.panel');
  const btns = document.querySelectorAll('.tool-btn, #btn-settings, .todo-nav-btn, #nav-mode-wrap, #media-fan-wrap');
  let inside = false;
  panels.forEach(p => { if (p.contains(e.target)) inside = true; });
  btns.forEach(b => { if (b.contains(e.target)) inside = true; });
  if (!inside) closeAllPanels();
});

/* ── NOTIFICATION ── */
function showNotif(icon, title, msg, sound = 'success') { document.getElementById('notif-icon').textContent = icon; document.getElementById('notif-title').textContent = title; document.getElementById('notif-msg').textContent = msg; document.getElementById('notification').classList.add('show'); document.getElementById('notif-dismiss').onclick = dismissNotif; document.body.classList.remove('timer-running'); if (sound) playNotifSound(sound); }
function dismissNotif() { document.getElementById('notification').classList.remove('show'); }

/* ── FULLSCREEN ── */
function toggleZen() { const isFs = !!document.fullscreenElement; if (!isFs) { if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen(); else if (document.documentElement.webkitRequestFullscreen) document.documentElement.webkitRequestFullscreen(); document.getElementById('zen-icon-expand').style.display = 'none'; document.getElementById('zen-icon-collapse').style.display = 'block'; } else { if (document.exitFullscreen) document.exitFullscreen(); else if (document.webkitExitFullscreen) document.webkitExitFullscreen(); document.getElementById('zen-icon-expand').style.display = 'block'; document.getElementById('zen-icon-collapse').style.display = 'none'; } updateDynamicTooltips(); }
document.addEventListener('fullscreenchange', () => { if (!document.fullscreenElement) { document.getElementById('zen-icon-expand').style.display = 'block'; document.getElementById('zen-icon-collapse').style.display = 'none'; } updateDynamicTooltips(); });

/* ── FLOATING PLAYER ── */
let pipWindow = null;
function getInlineFloatingPlayer() { return document.getElementById('floating-player'); }
function isInlineFloatingPlayerOpen() { return getInlineFloatingPlayer().classList.contains('show'); }
function syncFloatingPlayerState() { const btnPip = document.getElementById('btn-pip'); if(btnPip) btnPip.classList.toggle('active', !!pipWindow || isInlineFloatingPlayerOpen()); }
function clampFloatingPlayerPosition(left, top) { const player = getInlineFloatingPlayer(); const width = player.offsetWidth || 280; const height = player.offsetHeight || 160; return { left: Math.min(Math.max(16, left), Math.max(16, window.innerWidth - width - 16)), top: Math.min(Math.max(16, top), Math.max(16, window.innerHeight - height - 16)) }; }
function setInlineFloatingPlayerPosition(left, top) { const player = getInlineFloatingPlayer(); const pos = clampFloatingPlayerPosition(left, top); player.style.left = pos.left + 'px'; player.style.top = pos.top + 'px'; player.style.right = 'auto'; player.style.bottom = 'auto'; }
function toggleInlineFloatingPlayer(force) { const player = getInlineFloatingPlayer(); const shouldShow = typeof force === 'boolean' ? force : !player.classList.contains('show'); player.classList.toggle('show', shouldShow); syncFloatingPlayerState(); savePrefs(); }
function closeFloatingPlayer() { if (pipWindow) { pipWindow.close(); return true; } if (isInlineFloatingPlayerOpen()) { toggleInlineFloatingPlayer(false); return true; } return false; }

async function toggleFloatingPlayer() {
  if (closeFloatingPlayer()) return;
  if (!('documentPictureInPicture' in window)) { toggleInlineFloatingPlayer(true); return; }
  try { pipWindow = await window.documentPictureInPicture.requestWindow({ width: 340, height: 180 }); } catch (e) { toggleInlineFloatingPlayer(true); return; }
  
  pipWindow.addEventListener("pagehide", () => { pipWindow = null; syncFloatingPlayerState(); savePrefs(); });
  syncFloatingPlayerState();
  
  const currentFontClass = Array.from(document.body.classList).find(c => c.startsWith('font-')) || '';
  const currentBgUrl = document.getElementById('bg-layer').style.backgroundImage;
  const isFocused = document.getElementById('bg-layer').classList.contains('focused');
  
  pipWindow.document.head.insertAdjacentHTML('beforeend', `
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      @font-face { font-family: 'SF Pro'; src: url('SF-Pro.woff2') format('woff2-variations'); font-weight: 100 900; font-stretch: 50% 200%; }
      :root { --clock-color: ${settings['clock-color'] || '#ffffff'}; --clock-opacity: ${settings['clock-opacity'] || 1}; --clock-blur: ${settings['clock-blur'] || 0}px; --focus-blur: ${settings['blur'] || 8}px; --focus-dim: ${settings['dim'] || 0.55}; }
      body { background: #080808; color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; overflow: hidden; margin:0; font-family: 'SF Pro', 'DM Mono', sans-serif; }
      body.font-mono * { font-family: 'DM Mono', monospace !important; } body.font-serif * { font-family: 'Prata', serif !important; }
      body.font-condensed #fp-time { font-family: 'SF Pro', monospace !important; font-variation-settings: 'wdth' 47, 'opsz' 28, 'wght' 120 !important; }
      #pip-bg { position: absolute; inset: -10px; background-size: cover; background-position: center; z-index: 0; opacity: 0.8; }
      #pip-bg::after { content: ''; position: absolute; inset: 0; background: rgba(0,0,0,0.42); }
      #pip-bg.focused { filter: blur(var(--focus-blur)); } #pip-bg.focused::after { background: rgba(0,0,0,var(--focus-dim)); }
      body.clock-dim #pip-bg { filter: blur(var(--focus-blur)); transform: scale(1.1); } body.clock-dim #pip-bg::after { background: rgba(0,0,0,var(--focus-dim)); }
      #content { position: relative; z-index: 1; text-align: center; }
      
      #fp-time { 
        font-family: 'SF Pro', 'DM Mono', monospace; 
        font-size: 58px; 
        font-weight: 200; 
        font-variation-settings: 'wdth' 130; 
        letter-spacing: -0.02em; 
        color: var(--clock-color) !important;
        opacity: var(--clock-opacity); 
        text-shadow: 0 0 var(--clock-blur) var(--clock-color); 
        font-feature-settings: 'tnum'; 
        line-height: 1; 
      }
      
      #fp-mode { font-family: sans-serif; font-size: 11px; letter-spacing: 0.18em; color: rgba(255,255,255,0.4); text-transform: uppercase; margin-top: 8px; }
    </style>
  `);
  
  pipWindow.document.body.className = currentFontClass;
  if(clockDimOn) pipWindow.document.body.classList.add('clock-dim');
  pipWindow.document.body.innerHTML = `<div id="pip-bg" style="background-image: ${currentBgUrl}" class="${isFocused ? 'focused' : ''}"></div><div id="content"><div id="fp-time">${document.getElementById('time-display').innerHTML}</div><div id="fp-mode">${document.getElementById('fp-mode').textContent}</div></div>`;
}

function startInlineFloatingPlayerDrag(e) { const player = getInlineFloatingPlayer(); if (!player.classList.contains('show')) return; if (e.target.closest('#fp-close')) return; const rect = player.getBoundingClientRect(); setInlineFloatingPlayerPosition(rect.left, rect.top); isDragging = true; dragOffX = e.clientX - rect.left; dragOffY = e.clientY - rect.top; player.setPointerCapture?.(e.pointerId); }
function moveInlineFloatingPlayerDrag(e) { if (!isDragging) return; setInlineFloatingPlayerPosition(e.clientX - dragOffX, e.clientY - dragOffY); }
function endInlineFloatingPlayerDrag() { if (!isDragging) return; isDragging = false; savePrefs(); }
getInlineFloatingPlayer().addEventListener('pointerdown', startInlineFloatingPlayerDrag); document.addEventListener('pointermove', moveInlineFloatingPlayerDrag); document.addEventListener('pointerup', endInlineFloatingPlayerDrag);
window.addEventListener('resize', () => { const player = getInlineFloatingPlayer(); if (!player.classList.contains('show') || !player.style.top || !player.style.left) return; const rect = player.getBoundingClientRect(); setInlineFloatingPlayerPosition(rect.left, rect.top); });

/* ── TOUCH / TAP MODE ── */
function setTouchMode(on) { touchMode = on; document.body.classList.toggle('touch-mode', on); if (!on) { lastTapTime = 0; clearTimeout(tapTimeout); clearTimeout(holdTimeout); holdTriggered = false; clockTouchPending = false; } updateTouchHint(); savePrefs(); }
function updateTouchHint() { const hint = document.getElementById('touch-hint'); if (!hint) return; if (lang === 'en') { if (mode === 'clock') hint.textContent = 'tap = dim · hold = fullscreen'; else if (running) hint.textContent = 'tap = pause/resume · 2 taps = reset'; else hint.textContent = 'tap = start · 2 taps = reset'; } else { if (mode === 'clock') hint.textContent = 'chạm = tối mờ · giữ = toàn màn hình'; else if (running || currentSecs > 0) hint.textContent = 'chạm = dừng/tiếp · chạm×2 = đặt lại'; else hint.textContent = 'chạm = bắt đầu · chạm×2 = đặt lại'; } }
function flashTapRing() { const ring = document.getElementById('tap-ring'); ring.classList.remove('pulse'); void ring.offsetWidth; ring.classList.add('pulse'); ring.addEventListener('animationend', () => ring.classList.remove('pulse'), { once: true }); }

function handleClockTap(e) { 
  if (!touchMode) return; 
  if (isDragging) return; 
  if (e.target.closest('.time-input')) return; 
  if (e.target.closest('input, button, .ctrl-btn, .panel, #nav, #bottom-left, #bottom-right, #floating-player, #notification, #break-badge, .tool-btn, .nav-btn, .music-tab, .toggle, select, textarea, #quote-box')) return; 
  
  e.preventDefault(); 
  e.stopPropagation(); 
  
  if (mode === 'clock') { 
    clockTouchPending = true; holdTriggered = false; clearTimeout(holdTimeout); 
    holdTimeout = setTimeout(() => { holdTriggered = true; clockTouchPending = false; toggleZen(); updateTouchHint(); }, 520); 
    return; 
  } 
  
  flashTapRing(); 
  const now = Date.now(); 
  if (now - lastTapTime < 300) { 
    clearTimeout(tapTimeout); lastTapTime = 0; if (mode !== 'clock') stop(); 
  } else { 
    lastTapTime = now; 
    tapTimeout = setTimeout(() => { 
      if (mode === 'clock') { toggleClockDim(); } 
      else { 
        if (running) pauseResume(); 
        else { 
            if (currentSecs > 0) pauseResume(); 
            else { if (mode === 'countdown') startCountdown(); else if (mode === 'pomodoro') startPomo(); } 
        } 
      } 
      updateTouchHint(); 
    }, 300); 
  } 
}

function completeClockTouch() { if (!touchMode || mode !== 'clock' || !clockTouchPending) return; clearTimeout(holdTimeout); clockTouchPending = false; if (holdTriggered) { holdTriggered = false; return; } flashTapRing(); toggleClockDim(); updateTouchHint(); }
document.addEventListener('pointerdown', handleClockTap); document.addEventListener('pointerup', completeClockTouch); document.addEventListener('pointercancel', () => { clearTimeout(holdTimeout); clockTouchPending = false; holdTriggered = false; });
document.addEventListener('pointerdown', e => { const btn = e.target.closest('.ctrl-btn, .nav-btn, .tool-btn, .small-btn, #notif-dismiss, .panel-close, .music-tab, .todo-add-btn, .settings-tab-btn, .font-opt'); if (!btn) return; const rect = btn.getBoundingClientRect(); const size = Math.max(rect.width, rect.height) * 1.5; const x = e.clientX - rect.left - size / 2; const y = e.clientY - rect.top - size / 2; const ripple = document.createElement('span'); ripple.className = 'ripple'; ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`; btn.appendChild(ripple); setTimeout(() => ripple.remove(), 520); });

/* ── GSAP NAV MODE DROPDOWN ── */
let modeDropdownOpen = false;

function openModeDropdown() { 
  if (modeDropdownOpen) return; 
  modeDropdownOpen = true; 
  document.getElementById('nav-mode-wrap').classList.add('open'); 
  const items = document.querySelectorAll('.mode-opt'); 
  gsap.set('#mode-dropdown', { pointerEvents: 'all' }); 
  gsap.fromTo(items, 
    { opacity: 0, y: -10, scale: 0.94 }, 
    { opacity: 1, y: 0, scale: 1, stagger: 0.07, duration: 0.32, ease: 'back.out(1.6)' }
  ); 
}

function closeModeDropdown() { 
  if (!modeDropdownOpen) return; 
  modeDropdownOpen = false; 
  document.getElementById('nav-mode-wrap').classList.remove('open'); 
  const items = document.querySelectorAll('.mode-opt'); 
  gsap.to(items, { opacity: 0, y: -6, scale: 0.94, duration: 0.18, ease: 'power2.in', stagger: 0.04 }); 
  gsap.set('#mode-dropdown', { delay: 0.25, pointerEvents: 'none' }); 
}

(function initModeDropdown() { 
  const wrap = document.getElementById('nav-mode-wrap'); 
  const btn = document.getElementById('btn-mode-current');
  if (!wrap || !btn) return; 

  btn.addEventListener('click', (e) => { 
    e.stopPropagation();
    if (modeDropdownOpen) closeModeDropdown(); 
    else openModeDropdown(); 
  }); 

  document.addEventListener('click', (e) => {
    if (modeDropdownOpen && !wrap.contains(e.target)) {
      closeModeDropdown();
    }
  });
})();

/* ── GSAP MEDIA FAN ── */
let mediaFanOpen = false;
function toggleMediaFan() { if (mediaFanOpen) closeMediaFan(true); else openMediaFan(); }

function openMediaFan() { 
  mediaFanOpen = true; 
  document.getElementById('btn-media').classList.add('fan-open'); 
  const items = [document.getElementById('fan-music'), document.getElementById('fan-notes'), document.getElementById('btn-pip')]; 
  
  // Trượt ngang (x) cho cả Desktop và Mobile
  gsap.fromTo(items, 
    { opacity: 0, x: -18, scale: 0.82 }, 
    { opacity: 1, x: 0, scale: 1, stagger: 0.08, duration: 0.34, ease: 'back.out(1.7)', onStart: () => items.forEach(i => {if(i) i.style.pointerEvents = 'all'}) }
  ); 
}

function closeMediaFan(animate) { 
  if (!mediaFanOpen) return; 
  mediaFanOpen = false; 
  document.getElementById('btn-media').classList.remove('fan-open'); 
  const items = [document.getElementById('fan-music'), document.getElementById('fan-notes'), document.getElementById('btn-pip')]; 
  
  if (animate && typeof gsap !== 'undefined') { 
      gsap.to(items, { opacity: 0, x: -14, scale: 0.88, duration: 0.18, ease: 'power2.in', stagger: 0.05, onComplete: () => items.forEach(i => { if(i) { i.style.pointerEvents = 'none'; i.style.opacity = '0'; } }) }); 
  } else { 
      items.forEach(i => { if(i) { i.style.opacity = '0'; i.style.pointerEvents = 'none'; } }); 
  } 
  ['fan-music','fan-notes', 'btn-pip'].forEach(id => { const el = document.getElementById(id); if (el) el.classList.remove('panel-active'); }); 
}


function openFanPanel(panelId, fanBtn) { 
  document.querySelectorAll('.panel').forEach(p => { 
    if (p.id !== panelId && p.classList.contains('open')) closePanel(p.id); 
  }); 
  document.querySelectorAll('.fan-item').forEach(b => b.classList.remove('panel-active')); 
  const panel = document.getElementById(panelId); 
  if (!panel.classList.contains('open')) { 
    panel.classList.add('open'); if (fanBtn) fanBtn.classList.add('panel-active'); 
    if (panelId === 'music-panel') syncMusicEmbedHost();
    gsap.fromTo(panel, {opacity: 0, y: 10, scale: 0.97}, {opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'back.out(1.5)'});
  } else { 
    closePanel(panelId, fanBtn ? fanBtn.id : null); 
  } 
}
document.getElementById('fan-music').addEventListener('click', function() { openFanPanel('music-panel', this); });
document.getElementById('fan-notes').addEventListener('click', function() { openFanPanel('notes-panel', this); });

/* ── PREFS LOAD & SAVE ── */
const PREFS_KEY = 'focus-prefs';

function toggleClockDim() {
  clockDimOn = !clockDimOn;
  
  document.body.classList.toggle('clock-dim', clockDimOn);
  
  const btnDim = document.getElementById('btn-dim');
  if (btnDim) btnDim.classList.toggle('active', clockDimOn);
  
  if (pipWindow) { 
    try { pipWindow.document.body.classList.toggle('clock-dim', clockDimOn); } catch(e) {} 
  }
  
  if (!clockDimOn && bgImages.length > 1 && !settings['bg-random']) {
    nextBg();
  }
  updateQuoteVisibility();
  savePrefs();
}

function savePrefs() {
  try {
    const player = getInlineFloatingPlayer();
    const prefs = {
      lang, font: document.querySelector('.font-opt.active')?.id?.replace('font-','') || 'default',
      touchMode, soundEnabled, clockDimOn,
      ytBgUrl: document.getElementById('yt-bg-input')?.value || '', ytBgActive: document.getElementById('yt-bg-toggle')?.checked || false,
      inlinePlayerOpen: player.classList.contains('show'),
      inlinePlayerPos: player.style.left && player.style.top ? { left: parseFloat(player.style.left) || 24, top: parseFloat(player.style.top) || 84 } : null,
      bgRandom: settings['bg-random'], bgInterval: settings['bg-interval'],
      hideDate: settings['hide-date'], hideHint: settings['hide-hint'], hideQuoteAuto: settings['hide-quote-auto']
    };
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch(e) {}
}

function loadPrefs() {
  try {
    const prefs = JSON.parse(localStorage.getItem(PREFS_KEY) || '{}');
    lang = prefs.lang === 'en' ? 'en' : 'vi'; document.documentElement.lang = lang; document.getElementById('lang-label').textContent = t('langCurrent'); applyLang();
    if (prefs.font && prefs.font !== 'default') { const btn = document.getElementById('font-' + prefs.font); if (btn) setFont(prefs.font, btn); }
    touchMode = !!prefs.touchMode; const touchTog = document.getElementById('touch-mode-toggle'); if (touchTog) touchTog.checked = touchMode; document.body.classList.toggle('touch-mode', touchMode); updateTouchHint();
    soundEnabled = prefs.soundEnabled !== false; updateSoundUi();
    
    clockDimOn = !!prefs.clockDimOn; document.body.classList.toggle('clock-dim', clockDimOn); const btnDim = document.getElementById('btn-dim'); if (btnDim) btnDim.classList.toggle('active', clockDimOn);

    if (prefs.ytBgActive && prefs.ytBgUrl) { const tog = document.getElementById('yt-bg-toggle'); if (tog) { tog.checked = true; toggleYtBg(true); } const inp = document.getElementById('yt-bg-input'); if (inp) inp.value = prefs.ytBgUrl; applyYtBg(); }
    if (prefs.inlinePlayerPos && Number.isFinite(prefs.inlinePlayerPos.left) && Number.isFinite(prefs.inlinePlayerPos.top)) { setInlineFloatingPlayerPosition(prefs.inlinePlayerPos.left, prefs.inlinePlayerPos.top); }
    if (prefs.inlinePlayerOpen) { toggleInlineFloatingPlayer(true); }
    
    settings['bg-random'] = !!prefs.bgRandom;
    const bgTog = document.getElementById('bg-random-toggle'); if(bgTog) bgTog.checked = settings['bg-random'];
    if(prefs.bgInterval) settings['bg-interval'] = prefs.bgInterval;
    
    settings['hide-date'] = !!prefs.hideDate; document.body.classList.toggle('hide-date', settings['hide-date']);
    const hdTog = document.getElementById('hide-date-toggle'); if(hdTog) hdTog.checked = settings['hide-date'];
    
    settings['hide-hint'] = !!prefs.hideHint; document.body.classList.toggle('hide-hint', settings['hide-hint']);
    const hhTog = document.getElementById('hide-hint-toggle'); if(hhTog) hhTog.checked = settings['hide-hint'];
    
    settings['hide-quote-auto'] = prefs.hideQuoteAuto !== false;
    const hqTog = document.getElementById('hide-quote-toggle'); if(hqTog) hqTog.checked = settings['hide-quote-auto'];
    
    syncFloatingPlayerState(); renderStats(); updateDynamicTooltips(); updateQuoteVisibility();
  } catch(e) {}
}

function syncSettings() {
  const sliderMap = {
    'pomo-work': 's-pomo-work', 'pomo-break': 's-pomo-break', 'pomo-long': 's-pomo-long', blur: 's-blur', dim: 's-dim', offset: 's-offset',
    'clock-scale': 's-clock-scale', 'ui-blur': 's-ui-blur', 'clock-color': 's-clock-color', 'clock-opacity': 's-clock-opacity', 'clock-blur': 's-clock-blur',
    'sound-volume': 's-sound-volume', 'bg-interval': 's-bg-interval'
  };
  Object.keys(sliderMap).forEach(k => {
    const el = document.getElementById(sliderMap[k]);
    if (el) { 
      el.value = settings[k]; 
      if(k === 'bg-interval') {
         const d = document.getElementById('v-bg-interval');
         if(d) d.textContent = settings[k] + 's';
      } else {
         updateSetting(k, settings[k]); 
      }
    }
  });
  applyClockTheme(settings['clock-color']);
}

loadPrefs();
syncSettings();
renderTodos();
render();
renderStats();
setLocalRepeatLabel();
updateLocalMediaMeta();
updateLocalPlayButton();
updateDynamicTooltips();
syncFloatingPlayerState();
syncBackgroundLayersVisibility();
syncMusicEmbedHost();
initBgSlideshow();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(startIntro).catch(startIntro);
else startIntro();
