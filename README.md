# 🌦️ Typing Weather
*Your keystrokes forecast your mental climate.*

A lightweight, interactive web app that analyzes your typing rhythm, speed, and edit patterns in real-time. Pause for just 1.5 seconds, and it generates a "weather forecast" that metaphorically reflects your current flow state.

> 🔒 **100% client-side.** No data leaves your browser. Everything runs locally.

---

### 🖥️ How to Use
1. Open the app in your browser
2. Start typing anything (a paragraph, a draft, random thoughts)
3. Pause for ~1.5 seconds
4. Watch your "mental weather" generate automatically
5. Click **Reset Session** to start fresh

---

### ⚙️ How It Works
The app tracks three core metrics from your keystrokes:
- **Typing Speed (CPM):** Estimated characters per minute based on average interval between keys
- **Edit Ratio:** Percentage of `Backspace` presses vs total keystrokes
- **Rhythm Consistency:** Variance in pause length between characters

These are mapped to weather metaphors:

| Condition | Weather | Meaning |
|-----------|---------|---------|
| Fast + Low edits | ☀️ Clear Skies | Deep flow state |
| Fast + High edits | ⛈️ Thunderstorms | Chaotic creativity |
| Slow + Low edits | 🌫️ Misty Morning | Deliberate, calm thinking |
| High edits overall | 🌫️ Dense Fog | Heavy second-guessing |
| Balanced metrics | ⛅ Partly Cloudy | Healthy momentum & reflection |

---

### 📁 Project Structure
```
typing-weather/
├── index.html      # Main entry point
├── css/
│   └── style.css   # Dark-mode UI & transitions
└── js/
└── script.js   # Typing tracker & weather algorithm
```

---

### 🛠️ Run Locally
No build step required. Just open `index.html` in any modern browser:
```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```
# 🔹 Recommended: local dev server (for accurate timing)
The recommendation would be to run this on your own box if you are critical about time and process.
The delay in a browser can cause measurements to be off and cause inconsistant behaviour now its split out into Javascript.

The tool measures milliseconds between keystrokes to calculate the users (your) typing rythm.

To run it locally and have the best possible timings on your own machine:
```
Option 1:
Using node.js
opens at the local host directory on your machine, will print out in VScode if thats what you are using.
localhost:3000 is default ?I think?

Option 2
python
python3 -m http.server / could also be python -m http.server
localhost:8000 or whichever you setup in config
```
Or you can even self host on github pages, ensure the repo is public else it wont work
🚀 Deploy to GitHub Pages
Push this repository to GitHub
Go to Settings → Pages
Set Source to Deploy from a branch → main branch → /(root)
Click Save. Your site will be live at https://<username>.github.io/<repo-name>/ in ~30 seconds.

🧰 Tech Stack
Vanilla JavaScript (ES6+)
CSS3 (Flexbox, transitions, dark theme)
Zero dependencies / No framework
Fully client-side & privacy-first

📜 License
MIT License. Feel free to fork, modify, and make it yours.




💡 Tip: Try writing a paragraph, then pause. Notice how your "weather" changes as you shift from drafting to editing.
