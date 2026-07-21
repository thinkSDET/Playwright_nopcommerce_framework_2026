# Playwright NopCommerce Framework 2026

This repository contains a TypeScript-based Playwright automation framework for validating the NopCommerce UI. The current implementation focuses on end-to-end checks for the landing page, login flow, and forgot password flow using the Page Object Model (POM), custom fixtures, and JSON-based test data.

## Table of Contents

- [Project Overview](#project-overview)
- [Current Implementation Scope](#current-implementation-scope)
- [Architecture and Folder Structure](#architecture-and-folder-structure)
- [Technology Stack](#technology-stack)
- [Setup and Installation](#setup-and-installation)
- [Environment Configuration](#environment-configuration)
- [How to Run Tests](#how-to-run-tests)
- [Framework Design](#framework-design)
- [Page Object Model](#page-object-model)
- [Fixtures](#fixtures)
- [Test Data Strategy](#test-data-strategy)
- [Utilities and Helpers](#utilities-and-helpers)
- [Reporting and Artifacts](#reporting-and-artifacts)
- [Coding Conventions and Best Practices](#coding-conventions-and-best-practices)
- [How to Add New Coverage](#how-to-add-new-coverage)
- [Important Configuration Files](#important-configuration-files)
- [Execution Flow](#execution-flow)
- [Current Limitations](#current-limitations)

## Project Overview

The framework is built to automate UI validation for a NopCommerce demo site using Playwright. It is structured around reusable page objects, a shared fixture layer, externalized configuration, and JSON-driven test data.

### What is currently implemented

The repository currently contains automated tests for:

- landing page launch and basic page validation
- login with invalid credentials
- login with valid credentials
- forgot password flow with empty and invalid email input

The registration page object and supporting factory/data files are present, but their corresponding test specs are currently commented out in the workspace.

## Architecture and Folder Structure

The project is organized into the following main areas:

```text
.
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── src
│   ├── basePage/            # Shared base class for page objects
│   ├── config/              # Environment, browser, and runtime config
│   ├── fixtures/            # Custom Playwright fixtures
│   ├── pages/               # Page Object classes
│   ├── testdata/            # Input/expected data and data factories
│   └── utils/               # Helper utilities
├── tests/                   # Test specifications grouped by feature area
├── allure-results/          # Allure result output
├── playwright-report/       # HTML report output
└── test-results/            # Playwright artifacts
```

### Folder responsibilities

- src/basePage: contains the shared Basepage class with common text normalization logic.
- src/config: stores environment URLs, browser definitions, and runtime settings.
- src/fixtures: exports a custom test fixture set used by all tests.
- src/pages: contains page-specific classes for landing, login, forgot password, registration, and account success pages.
- src/testdata: stores JSON data for expected values, input values, and dynamic registration data generation.
- src/utils: contains reusable helper logic such as unique test data generation.
- tests: holds the actual Playwright test cases by feature area.

## Technology Stack

The implementation uses the following technologies:

- TypeScript
- Playwright Test
- Allure Playwright reporter
- cross-env for environment-based script execution
- Node.js and npm

## Setup and Installation

Prerequisites:

- Node.js installed on the machine
- npm available in the environment

Install dependencies:

```bash
npm install
```

## Environment Configuration

Environments are managed through runtime environment variables and a centralized configuration module.

### Environment definitions

The environment URLs are defined in src/config/environments.ts:

- qa: https://naveenautomationlabs.com/opencart/
- stage: https://naveenautomationlabsStage.com/opencart/
- preprod: https://naveenautomationlabsPreProd.com/opencart/

### Runtime configuration

The runtime configuration is defined in src/config/execution.ts:

- ENV defaults to qa
- BROWSER defaults to chromium
- WORKERS defaults to 3
- HEADLESS defaults to false unless explicitly set to true

These values are consumed by playwright.config.ts.

## How to Run Tests

The package.json file exposes the following scripts:

```bash
npm run test:qa
npm run test:stage
npm run test:preprod
npm run test:run
npm run test:qa:firefox
npm run test:qa:webkit
npm run test:stage:firefox
npm run test:stage:webkit
npm run test:preprod:firefox
npm run test:preprod:webkit
npm run test:qa:parallel:headless
```

### Examples

Run the default QA suite:

```bash
npm run test:qa
```

Run the QA suite in Firefox:

```bash
npm run test:qa:firefox
```

Run the QA suite with 3 workers in headless mode:

```bash
npm run test:qa:parallel:headless
```

## Framework Design

The framework follows a practical automation structure built around the following ideas:

- test cases are isolated and readable
- page interactions are encapsulated in page object classes
- test data is externalized from assertions and test logic
- shared behavior is centralized in the base page class and fixtures
- reports and artifacts are generated automatically for failed runs

## Page Object Model

Each page has its own class under src/pages, and the page object methods encapsulate the UI interactions for that page.

Implemented page objects:

- src/pages/landingPage/LandingPage.ts
- src/pages/loginPage/LoginPage.ts
- src/pages/forgetPasswordPage/forgetPasswordPage.ts
- src/pages/registerPage/registerPage.ts
- src/pages/accountSuccessPage/accountSuccessPage.ts

### Base page class

The shared Basepage class in src/basePage/basePage.ts provides common behavior such as normalized text extraction for assertions.

## Fixtures

Custom fixtures are defined in src/fixtures/testFixture.ts.

The fixture module exports:

- landingPage
- loginPage
- forgetPasswordPage
- registerAccountPage
- accountSuccesspage

It extends Playwright's base test and re-exports expect. A beforeEach hook sets the viewport to 1920x1080 for each test.

## Test Data Strategy

Test data is stored separately from the test logic to make the suite easier to maintain.

### Data locations

- src/testdata/inputTestData: raw input data for tests
- src/testdata/expectedData: expected values used in assertions
- src/testdata/testDataFactory: dynamic test data generation helpers

### Current examples

- loginPage.json contains invalid and valid login inputs
- fogetPasswordPage.json contains invalid email data
- registerPage.json contains base registration details
- RegisterDataFactory generates unique email and phone values for registration scenarios

## Utilities and Helpers

The framework currently includes:

- Basepage: shared page-object helper methods
- TestDataGenerator: utility methods for generating unique email and phone values

## Reporting and Artifacts

The Playwright configuration is set up to generate both HTML and Allure reports.

### Reporters

- HTML report via Playwright
- Allure report via allure-playwright

### Artifacts

The current configuration captures:

- screenshots on failure
- videos on failure
- traces on failure

### Report commands

```bash
npm run report:html
npm run report:allure
npm run report:allure:generate
npm run report:allure:open
```

## Coding Conventions and Best Practices

The current implementation follows a straightforward enterprise-style structure:

- page objects are created per page or screen
- locators are stored as private readonly properties inside page object classes
- test data is not embedded directly into test specs where possible
- assertions compare the UI output against expected values from JSON files
- test names follow a descriptive pattern such as TC_01 or TC_001

## How to Add New Coverage

### Add a new test case

1. Create or extend a spec file under tests/.
2. Import the shared fixture from src/fixtures/testFixture.ts.
3. Use the relevant page object fixture for the workflow under test.
4. Add assertions and expected data as needed.

### Add a new page object

1. Create a new folder under src/pages with a page object class.
2. Extend the Basepage class.
3. Define locators as private readonly properties.
4. Add reusable methods that encapsulate page interactions.

### Add new locators

- Place them within the relevant page object class.
- Prefer explicit and stable selectors where possible.
- Keep locator definitions near the methods that use them.

### Add new reusable methods

- Add methods to the relevant page object class rather than to the test file.
- Keep methods focused on a single page action or validation step.

### Add new test data

- Add JSON values under src/testdata/inputTestData or src/testdata/expectedData.
- If the data needs to be generated dynamically, extend src/utils/TestDataGenerator.ts or use the data factory pattern in src/testdata/testDataFactory.

## Important Configuration Files

- package.json: defines scripts, dependencies, and project metadata.
- playwright.config.ts: main Playwright configuration, reporters, base URL, screenshot/video/trace behavior, and project setup.
- tsconfig.json: TypeScript compiler options and file inclusion/exclusion rules.
- src/config/environments.ts: environment URL mapping.
- src/config/execution.ts: runtime variables such as environment, browser, workers, and headless mode.
- src/config/browsers.ts: browser project definitions for chromium, firefox, and webkit.

## Execution Flow

The current flow is as follows:

1. A command such as npm run test:qa is executed from the terminal.
2. package.json forwards the request to Playwright.
3. playwright.config.ts reads configuration from the environment and runtime modules.
4. The selected base URL is resolved from src/config/environments.ts.
5. The shared fixtures create page object instances for the active test.
6. The test interacts with the page through page object methods.
7. Assertions compare the UI behavior against expected values from the JSON test data files.
8. On failure, Playwright stores screenshots, traces, and videos based on the configured artifact settings.

## Current Limitations

The current workspace shows the following practical limitations:

- The implemented automated coverage is centered on landing, login, and forgot password scenarios.
- The registration workflow has page object support and data generation helpers, but the test cases are currently commented out and are not part of the active execution suite.
- The repository does not currently expose a separate environment file such as .env; environment selection is driven by runtime variables and the configuration modules in src/config.
