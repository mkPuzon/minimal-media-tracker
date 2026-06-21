# .logs -- A Media Tracking Web App
A minimal media tracker made through learning the basics of Svelte.

This app makes use of the browser's `localStorage` (Web Storage/DOM Storage/HTML5 Storage) to store memory across site refreshes, browsers closing, and even computer restarts. Note that `localStorage` is deleted when clearing recent history & cookies.

Setting up a new Svelte project:
```bash
npx sv create <app-name>
cd <app-name>
npm install
npm run dev -- --open
```

# TODOs
- [ ] Add option to select date for each log entry.
- [ ] Wait for update to take effect until user saves and closes each log.

- [ ] Update interface
    - [ ] Tweak spacing of visual elements.
    - [ ] Style buttons.
    - [ ] Turn header into proper navbar.
    - [ ] Make footer stick to bottom of the page. 

- [ ] Update README.md with final project state.