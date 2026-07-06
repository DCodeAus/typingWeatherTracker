document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input');
  const result = document.getElementById('result');
  const resetBtn = document.getElementById('reset');

  let keystrokes = [];
  let lastActive = Date.now();
  let analyzing = false;

  input.addEventListener('keydown', (e) => {
    keystrokes.push({ time: Date.now(), key: e.key });
    lastActive = Date.now();
    result.classList.remove('visible');
    analyzing = false;
  });

  setInterval(() => {
    if (!analyzing && Date.now() - lastActive > 1500 && keystrokes.length >= 5) {
      analyzeWeather();
    }
  }, 500);

  function analyzeWeather() {
    analyzing = true;
    const total = keystrokes.length;
    const backspaces = keystrokes.filter(k => k.key === 'Backspace').length;
    const editRatio = backspaces / total;
    
    let intervals = [];
    for (let i = 1; i < keystrokes.length; i++) {
      intervals.push(keystrokes[i].time - keystrokes[i-1].time);
    }
    const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
    const cpm = (total / (avgInterval / 1000)) * 60;

    let title, emoji, desc;
    if (cpm > 75 && editRatio < 0.12) {
      title = "Clear Skies"; emoji = "☀️";
      desc = "Flow state achieved. Thoughts are moving unimpeded.";
    } else if (cpm > 75 && editRatio > 0.25) {
      title = "Thunderstorms"; emoji = "⛈️";
      desc = "Fast but erratic. Ideas colliding like lightning.";
    } else if (cpm < 40 && editRatio < 0.08) {
      title = "Misty Morning"; emoji = "🌫️";
      desc = "Deliberate and calm. You're letting thoughts settle.";
    } else if (editRatio > 0.35) {
      title = "Dense Fog"; emoji = "🌫️";
      desc = "Heavy second-guessing. Breathe. The path will clear.";
    } else {
      title = "Partly Cloudy"; emoji = "⛅";
      desc = "A healthy mix of momentum and reflection. Nice balance.";
    }

    result.innerHTML = `
      <div class="weather-title">${emoji} ${title}</div>
      <div class="weather-desc">${desc}</div>
      <div class="metrics">${Math.round(cpm)} CPM | ${Math.round(editRatio * 100)}% edits | ${Math.round(avgInterval)}ms avg pause</div>
    `;
    result.classList.add('visible');
  }

  resetBtn.addEventListener('click', () => {
    keystrokes = [];
    lastActive = Date.now();
    analyzing = false;
    input.value = '';
    result.innerHTML = `
      <div class="weather-title">Waiting...</div>
      <div class="weather-desc">Keep typing to generate your forecast.</div>
      <div class="metrics"></div>
    `;
    result.classList.remove('visible');
  });
});
