## Boilerplate (Webpack 5 + Babel 7)

Lightweight starter for modern JS with Babel and Webpack 5.

### Prerequisites
- Node.js 18+ (recommended) and npm.

### Setup
1) Install deps: `npm install`
2) Create `.env` in repo root for local dev (optional):
   ```
   TITLE=My App
   API_KEY=dev-key
   ```

### Development
- Start dev server with HMR: `npm start`
  - Served from `http://localhost:8080`
  - Source: `src/index.js`
  - Output in memory at `/scripts/bundle.js`

### Production Build
- Build optimized assets: `npm run build`
  - Outputs to `public/scripts/bundle.js`
  - `process.env.TITLE` and `process.env.API_KEY` are inlined via `DefinePlugin`
  - Ensure these env vars are set in your shell/CI before running

### Environment handling
- Dev: `dotenv-webpack` loads variables from `.env`
- Prod: variables come from the shell environment at build time
- Code can read `process.env.TITLE` and `process.env.API_KEY`

### Structure
- `src/index.js` – app entry
- `public/` – static assets and HTML
- `webpack.common.config.js` – shared config (Babel, entry/output)
- `webpack.dev.config.js` – dev server + dotenv
- `webpack.prod.config.js` – production defines env vars
- `webpack.config.js` – selects dev/prod based on `--env dev|prod`

### Notes for newer apps
- Uses `core-js` and `regenerator-runtime` for polyfills (`useBuiltIns: entry`)
- Replace `src/index.js` with your app’s root module; keep entry array in `webpack.common.config.js` to preserve polyfills
- Adjust `public/index.html` and assets as needed

---

