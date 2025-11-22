const themeSelect = document.getElementById('themeSelect');
const modeToggle = document.getElementById('modeToggle');
const modeIcon = document.getElementById('modeIcon');
const modeLabel = document.getElementById('modeLabel');
const currentThemeLabel = document.getElementById('currentThemeLabel');
const currentModeLabel = document.getElementById('currentModeLabel');
const THEME_NAMES = {
  ember: 'Solarized Ember',
  apricot: 'Pastel Apricot',
  terra: 'Sage Terra'
};
function syncLabels() {
  const root = document.documentElement;
  const theme = root.dataset.theme || 'ember';
  const mode = root.dataset.mode || 'light';
  currentThemeLabel.textContent = THEME_NAMES[theme] || theme;
  currentModeLabel.textContent = mode === 'dark' ? 'Dark' : 'Light';
  modeIcon.textContent = mode === 'dark' ? '🌞' : '🌒';
  modeLabel.textContent = mode === 'dark' ? 'Light mode' : 'Dark mode';
  themeSelect.value = theme;
}
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  syncLabels();
}
function toggleMode() {
  const root = document.documentElement;
  root.dataset.mode = root.dataset.mode === 'dark' ? 'light' : 'dark';
  syncLabels();
}
themeSelect.addEventListener('change', (e) => {
  setTheme(e.target.value);
});
modeToggle.addEventListener('click', toggleMode);
document.documentElement.dataset.theme = 'ember';
document.documentElement.dataset.mode = 'light';
syncLabels();
