# Mo Focus
 
A clean, minimal Pomodoro timer that runs in the browser and installs on your phone as an app. Built as a single HTML file with no frameworks, no build step and no tracking.
 
## Features
 
- **Pomodoro cycle**: 25-minute focus sessions and 5-minute breaks, with a 15-minute long break after every 4 focus sessions.
- **One-tap flow**: press **Start** once to begin each focus session or break. The next phase is queued automatically.
- **Audible alerts**: four built-in sounds (Chime, Bell, Digital, Marimba), adjustable volume and repeat count. Optional vibration and system notifications.
- **Tasks**: add tasks with an estimated number of sessions, pick the one you are working on, and every finished focus session counts toward it.
- **Statistics**: today's progress against a daily goal, a 7-day chart, current streak, best day, totals, top tasks and recent sessions.
- **Settings**: change every duration, the cycle length, the daily goal, alert options and auto-start behavior.
- **Light and dark mode**: follows the system by default, with a one-tap toggle.
- **English and Arabic**: full right-to-left layout in Arabic.
- **Works offline**: once installed, it runs without an internet connection.
- **Private by design**: all data stays in the browser's local storage on your device.
## Getting started
 
### Run it on a computer
 
No installation needed. Download or clone the repository and open `index.html` in any modern browser.
 
```bash
git clone https://github.com/<your-username>/mo-focus.git
cd mo-focus
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```
 
### Install it on a phone
 
The app must be served over HTTPS to be installable. The easiest way is GitHub Pages:
 
1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Open the published link on your phone:
   - **iPhone**: Safari → Share → **Add to Home Screen**
   - **Android**: Chrome → menu → **Install app**
It then opens full-screen like a native app and works offline.
 
Any static host works too, such as Netlify, Vercel or Cloudflare Pages.
 
## Usage
 
| Action | How |
| --- | --- |
| Start or pause | **Start** button, or the `Space` key on a computer |
| Reset the current phase | **Reset** button |
| Skip to the next phase | **Skip** button |
| Switch phase manually | Focus / Short Break / Long Break control at the top |
| Change theme | Sun/moon button in the top bar, or **Settings → Appearance** |
| Change language | **Settings → Language** |
 
## Default timing
 
| Phase | Duration |
| --- | --- |
| Focus | 25 minutes |
| Short break | 5 minutes |
| Long break | 15 minutes |
| Long break after | 4 focus sessions |
| Daily goal | 8 sessions |
 
All values can be changed in **Settings**.
 
## Project structure
 
```
.
├── index.html             # The entire app: markup, styles and script
├── manifest.webmanifest   # App name, icons and display mode for installation
├── sw.js                  # Service worker for offline support
└── icons/
    ├── icon-192.png
    ├── icon-512.png
    ├── apple-touch-icon.png
    └── favicon-32.png
```
 
## Notes
 
- **Alerts** play while the app is open, including in a background tab. On iPhone, keep the app on screen during a session. The **Keep screen awake** setting helps with this.
- **Data** is stored per device and per browser. It does not sync between devices.
- **Fonts**: the app uses the system font on Apple devices and loads Inter and IBM Plex Sans Arabic from Google Fonts elsewhere. Offline, it falls back to the system font.
- **Offline support** needs the app to be served over HTTP or HTTPS. Opening `index.html` directly works fine, but the service worker only activates when hosted.
## Browser support
 
Recent versions of Safari, Chrome, Edge and Firefox on desktop and mobile.
 
## Contributing
 
Issues and pull requests are welcome. Since the app is a single file, changes usually only touch `index.html`. If you change cached files, bump the cache name in `sw.js` so installed copies update.
 
## License
 
Add a license of your choice, for example [MIT](https://choosealicense.com/licenses/mit/).