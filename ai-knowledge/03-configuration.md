# Configuration

## `package.json`
- Scripts:
  - `test:qa`: `cross-env ENV=qa playwright test`
  - `test:stage`: `cross-env ENV=stage playwright test`
  - `test:preprod`: `cross-env ENV=preprod playwright test`
- Dev dependencies:
  - `@playwright/test`
  - `@types/node`
  - `cross-env`

## `playwright.config.ts`
- Imports `defineConfig`, `devices`, `environments`
- Environment selection: `process.env.ENV || "qa"`
- Base URL: `environments[env as keyof typeof environments]`
- Test directory: `./tests`
- `fullyParallel`: `true`
- `forbidOnly`: `!!process.env.CI`
- `retries`: `process.env.CI ? 2 : 0`
- `workers`: `process.env.CI ? 1 : undefined`
- Reporter: `html`
- Use options: `headless: false`
- Projects: `chromium`

## `tsconfig.json`
- `target`: `ES2022`
- `module`: `NodeNext`
- `moduleResolution`: `NodeNext`
- `strict`: `true`
- `esModuleInterop`: `true`
- `resolveJsonModule`: `true`
- `types`: [`node`]
- `skipLibCheck`: `true`
- Include: `**/*.ts`
- Exclude: `node_modules`, `allure-report`, `playwright-report`, `test-results`

## Environment data
- `qa`: `https://naveenautomationlabs.com/opencart/`
- `stage`: `https://naveenautomationlabsStage.com/opencart/`
- `preprod`: `https://naveenautomationlabsPreProd.com/opencart/`
