# Playwright + TypeScript Framework Learning Guide

This guide is not a generic Playwright lesson. It is a trainer-style learning path built from your actual workspace in this repository.

The goal is simple: by the end of this guide, you should be able to explain this framework confidently to others, not just run tests.

---

## 1. Start Here: Understand the Framework Architecture

Before we talk about files, let us understand the big picture.

Your framework is built around one core idea:

> Test cases should stay simple, while the complexity of browser interaction, test data, and configuration should live in separate layers.

That is why this repository has a layered structure:

- Tests describe the business scenario.
- Page objects describe how to interact with the UI.
- Fixtures provide ready-made page objects to tests.
- Configuration decides where and how the tests run.
- Test data keeps inputs and expected values outside the test logic.

### Why this architecture exists

If you put everything in the test file, the suite becomes messy very quickly.

Real-world problems this architecture solves:

- Reusability: one login flow can be used by many tests.
- Maintainability: when the UI changes, you update one page object instead of many tests.
- Readability: test cases read like business steps.
- Scalability: new features can be added without breaking old ones.

### How the pieces connect

Think of it like this:

- A test file says: “Go to login page, submit credentials, verify warning message.”
- The fixture provides the login page object.
- The login page object knows how to fill the form.
- The test data file supplies the email and password.
- The config file decides the environment, browser, and base URL.

### Runtime execution flow

This is the real runtime flow in your framework:

1. You run a script from package.json.
2. The script sets environment variables such as ENV, BROWSER, and WORKERS.
3. Playwright reads playwright.config.ts.
4. The config loads runtime settings from src/config.
5. Playwright discovers tests under the tests folder.
6. The custom fixture creates page object instances.
7. The test calls page object methods.
8. Assertions check the actual UI result.
9. Reports and artifacts are generated.

### Industry best practice

This is the same pattern used in mature automation teams:

- keep test logic thin
- keep page interactions encapsulated
- keep configuration externalized
- keep data separate from code

### Common mistake

A beginner often writes all locators and actions directly inside the test file. That works for one test, but it becomes a maintenance nightmare.

Pause point: Are you ready to move to the next topic?

---

## 2. The Root Files: The Control Center of the Framework

These files sit at the top of the repository and act like the control room.

### package.json

Why this file exists

This file defines the execution entry points for your tests. It is where you define scripts such as:

- npm run test:qa
- npm run test:stage
- npm run test:qa:firefox

What problem it solves

Without this file, you would need to remember long Playwright commands every time. This file makes running tests simple and repeatable.

Who calls it

It is called by you when you run npm commands in the terminal.

When it gets executed

It is executed before the test run begins.

Why this approach is used

This is standard in Node.js projects because it centralizes commands and avoids repeating shell commands in documentation or CI pipelines.

What happens if this file is removed

You lose the simple test runner scripts. You would need to run Playwright commands manually every time.

### playwright.config.ts

Why this file exists

This is the main Playwright configuration file. It tells Playwright where your tests are, which browser to run, how to report, and what runtime settings to use.

Who calls it

Playwright calls it automatically when you run a test command.

When it gets executed

It is executed at the start of every test run.

Why this approach is used

This file keeps test execution behavior centralized. If you want to change report behavior or browser settings, you do it here instead of in every test.

What happens if this file is removed

Playwright will not know your test directory, base URL, reporter settings, or browser configuration.

### tsconfig.json

Why this file exists

This file configures TypeScript compilation rules for the project.

What problem it solves

It ensures TypeScript understands imports, JSON modules, and modern syntax. It also helps enforce stricter coding habits.

Why this approach is used

TypeScript offers better code quality and editor support. This project uses it to make automation code easier to maintain.

### Best practice

Keep the root configuration clean and minimal. Let the deeper folders handle the real framework concerns.

### Common mistake

Changing test behavior in the wrong place. For example, putting browser or environment logic inside individual tests instead of the config layer.

Pause point: Are you ready to move to the next topic?

---

## 3. Folder 1: src/config — The Environment and Runtime Brain

This folder is one of the most important parts of your framework.

### Why it exists

It centralizes all environment-related logic.

What problem it solves

Without this folder, your tests would hardcode URLs, browser settings, and runtime variables in multiple places. That makes the suite brittle.

How it connects to other folders

- playwright.config.ts reads these files.
- Tests do not directly read them.
- They depend on Playwright config and runtime settings.

### File-by-file explanation

#### src/config/environments.ts

Why this file exists

It stores environment URLs.

Who calls it

playwright.config.ts uses it to decide the base URL for the test run.

When it gets executed

When the Playwright config is loaded.

Why this approach is used

It makes environment switching simple. You can move from QA to stage or preprod without changing tests.

What happens if this file is removed

The config cannot resolve the base URL, and the framework loses environment flexibility.

#### src/config/execution.ts

Why this file exists

It defines runtime variables such as ENV, BROWSER, WORKERS, and HEADLESS.

Who calls it

playwright.config.ts uses it.

When it gets executed

When the test run starts and the config is evaluated.

Why this approach is used

It turns runtime behavior into a single, readable configuration object.

What happens if this file is removed

The framework cannot resolve environment-specific execution settings.

#### src/config/browsers.ts

Why this file exists

It defines Playwright projects for Chromium, Firefox, and WebKit.

Who calls it

playwright.config.ts imports it.

When it gets executed

At the start of the test run.

Why this approach is used

It keeps browser setup explicit and reusable.

What happens if this file is removed

The framework has no browser project definitions.

### Execution flow in this folder

The sequence is:

1. Script sets ENV and BROWSER.
2. runtime object reads these variables.
3. playwright.config.ts uses the runtime values.
4. The correct environment URL and browser project are selected.

### Industry best practice

Keep environment and runtime settings in one place so your test suite does not become environment-dependent in random spots.

### Common mistake

Hardcoding URLs inside tests or page objects. That makes cross-environment execution fragile.

Pause point: Are you ready to move to the next topic?

---

## 4. Folder 2: src/basePage — The Shared Foundation

This folder is small, but it is powerful.

### Why it exists

It provides common behavior for all page objects.

What problem it solves

Every page object needs a page instance and sometimes needs common helper methods. Instead of repeating that logic everywhere, the base class centralizes it.

How it connects to other folders

- Page classes extend this base class.
- The page objects use it for shared helper logic.

### File explanation

#### src/basePage/basePage.ts

Why this file exists

It gives page objects a shared structure and a helper method to normalize text.

Who calls it

The page object classes call it indirectly by extending Basepage.

When it gets executed

When a page object is instantiated.

Why this approach is used

It reduces duplication and keeps page objects cleaner.

What happens if this file is removed

All page objects would lose the shared base logic and would need to duplicate common setup.

### Why the normalize method matters

The getNormalizedText method removes extra whitespace from text. This is valuable when validating UI text because HTML spacing can be inconsistent.

### Industry best practice

Use a base page for common helper methods, but do not put too much logic there. Keep it focused on shared behavior only.

### Common mistake

Putting test-specific logic into the base page. That makes the base class too heavy and confusing.

Pause point: Are you ready to move to the next topic?

---

## 5. Folder 3: src/pages — The UI Interaction Layer

This is the heart of the Page Object Model in your framework.

### Why it exists

Page objects hide the technical details of the UI so tests stay readable.

What problem it solves

If tests directly interact with locators, the suite becomes tightly coupled to the UI structure. Page objects make this layer reusable.

How it connects to other folders

- Tests import fixtures, which provide page objects.
- Page objects use locators and helper methods from Basepage.
- They are usually driven by data from src/testdata.

### Why this is important in industry

In real automation teams, page objects are the boundary between business test logic and UI implementation details.

### File-by-file explanation

#### src/pages/landingPage/LandingPage.ts

Why this file exists

It represents the landing page and contains methods for navigation and basic page checks.

Who calls it

The landingPage fixture and the tests under tests/landing and tests/authentication call it.

When it gets executed

When a test needs to open the application or navigate to login or registration.

Why this approach is used

It keeps the starting page interactions easy to reuse across many tests.

What happens if this file is removed

Tests can no longer use a clean, reusable entry point for the application home page.

#### src/pages/loginPage/LoginPage.ts

Why this file exists

It encapsulates the login form interactions such as entering credentials and clicking login.

Who calls it

The loginPage fixture and the login test cases use it.

When it gets executed

When a test performs login.

Why this approach is used

It isolates complicated element interactions behind simple methods like submitLogin.

What happens if this file is removed

Login coverage would need to be rewritten directly in test files.

#### src/pages/forgetPasswordPage/forgetPasswordPage.ts

Why this file exists

It manages the forgotten password flow.

Who calls it

The forgotPasswordPage fixture and the forgot-password test file use it.

When it gets executed

When the test flows into forgotten password scenarios.

Why this approach is used

It gives a focused page object for a specific feature area.

What happens if this file is removed

Forgot password scenarios would become harder to maintain and less readable.

#### src/pages/registerPage/registerPage.ts

Why this file exists

It handles registration form interactions and validation messages.

Who calls it

The registerAccountPage fixture is used by the registration test file when it is active.

When it gets executed

When the register flow is covered.

Why this approach is used

It keeps form filling and validation handling inside one reusable class.

What happens if this file is removed

Registration automation becomes scattered and less maintainable.

#### src/pages/accountSuccessPage/accountSuccessPage.ts

Why this file exists

It represents the success page displayed after account creation.

Who calls it

The accountSuccesspage fixture is used by registration tests.

When it gets executed

After a successful registration submission.

Why this approach is used

It isolates success-page assertions into a dedicated object.

What happens if this file is removed

Success assertions would need to be handled elsewhere, reducing clarity.

### Best practice

Keep page object methods focused on a single responsibility.

Good example:

- submitLogin
- clickForgotPassword
- fillMandatoryRegistrationDetails

Bad example:

- a method that performs login, checks the page title, and verifies the menu at the same time

### Common mistake

Putting assertions directly in page objects. Page objects should mainly interact with the UI, while tests should own the expectations.

Pause point: Are you ready to move to the next topic?

---

## 6. Folder 4: src/fixtures — The Test Supply Layer

This folder is the glue between the test and the page objects.

### Why it exists

It gives tests ready-to-use objects without the test needing to create them manually.

What problem it solves

Without fixtures, each test would need to instantiate page objects itself. That adds noise and duplication.

How it connects to other folders

- Tests import from src/fixtures/testFixture.ts.
- The fixture creates instances of the page objects from src/pages.

### File explanation

#### src/fixtures/testFixture.ts

Why this file exists

It extends Playwright’s base test to provide custom fixtures such as landingPage, loginPage, and registerAccountPage.

Who calls it

The test files in the tests folder import from it.

When it gets executed

Before each test and during fixture setup.

Why this approach is used

It makes test code cleaner and more readable. Tests receive page objects directly as parameters.

What happens if this file is removed

Tests would need to manually construct page objects, making the suite more verbose and less maintainable.

### What happens at runtime

When a test runs:

1. The fixture creates a page object instance.
2. The test receives it as a parameter.
3. The test uses it to perform actions.

### Industry best practice

Do not overuse fixture complexity. Keep fixtures simple and focused on providing test dependencies.

### Common mistake

Creating too many fixtures for trivial objects. Use them when they really reduce duplication.

Pause point: Are you ready to move to the next topic?

---

## 7. Folder 5: src/testdata — The Data Layer

This folder separates input values and expected values from the test logic.

### Why it exists

Automation becomes much easier to manage when test data is not embedded inside test files.

What problem it solves

If you hardcode data into tests, every minor change forces updates in many places.

How it connects to other folders

- Tests import data from this folder.
- Page objects do not usually need to know about data files directly.

### Folder structure and purpose

#### src/testdata/inputTestData

This folder holds raw input values used by tests.

Examples:

- loginPage.json
- fogetPasswordPage.json
- registerPage.json

#### src/testdata/expectedData

This folder stores expected results used to validate the UI.

Examples:

- landingPage.json
- loginPage.json
- registerPage.json

### File explanation

#### src/testdata/inputTestData/loginPage.json

Why this file exists

It stores login test input values.

Who calls it

The login test file imports it.

When it gets executed

During the test run when the test needs login data.

Why this approach is used

It keeps test data separate from the test flow.

What happens if this file is removed

The test would no longer have a clean, shared source of login input values.

#### src/testdata/expectedData/loginPage.json

Why this file exists

It stores the expected warning message for login failures.

Who calls it

The login tests use it for assertions.

When it gets executed

When the assertion is performed.

Why this approach is used

It makes expected outcomes explicit and reusable.

What happens if this file is removed

The assertion would lose a clear source of truth.

### Industry best practice

Separate input data and expected data. They serve different purposes.

### Common mistake

Mixing test inputs and expected results in a single object or test file.

Pause point: Are you ready to move to the next topic?

---

## 8. Folder 6: src/utils — Small Helpers for Reusable Logic

This folder is smaller than the others, but it still matters.

### Why it exists

It holds reusable helper logic that is not tied to a single page object.

What problem it solves

If every page or test had to generate test data itself, the suite would be repetitive.

### File explanation

#### src/utils/TestDataGenerator.ts

Why this file exists

It generates unique values such as email addresses and phone numbers.

Who calls it

It is intended to support dynamic test data generation for registration scenarios.

When it gets executed

When a test needs unique test data.

Why this approach is used

This is important for avoiding duplicate data in repeated runs.

What happens if this file is removed

Dynamic data generation becomes less reusable and more manual.

### Industry best practice

Use helper utilities only for logic that is shared across multiple places.

### Common mistake

Overloading the utility folder with page-specific logic. Keep it generic.

Pause point: Are you ready to move to the next topic?

---

## 9. Folder 7: tests — The Business Scenario Layer

This is where the actual test stories live.

### Why it exists

Tests should describe user behavior, not implementation details.

What problem it solves

If the business flow is clear in the test, the suite becomes easier to read and review.

How it connects to other folders

- Tests import the custom fixture.
- They use page object methods from src/pages.
- They read data from src/testdata.

### File-by-file explanation

#### tests/landing/landing.spec.ts

Why this file exists

It validates that the application launches and that the landing page content is correct.

Who calls it

Playwright discovers and executes it during the test run.

When it gets executed

At the start of the suite for the landing-page scenario.

Why this approach is used

It gives a simple first test that proves the application is reachable and the page object layer is working.

What happens if this file is removed

You lose the basic smoke coverage for the landing page.

#### tests/authentication/login.spec.ts

Why this file exists

It covers login success and failure scenarios.

Who calls it

Playwright runs it as part of the authentication suite.

When it gets executed

When the login flow is exercised.

Why this approach is used

It keeps the business scenario visible while the page interaction stays hidden inside the page object layer.

What happens if this file is removed

You lose login coverage.

#### tests/authentication/forgot-password.spec.ts

Why this file exists

It covers forgot-password scenarios.

Who calls it

Playwright runs it when the authentication suite is executed.

When it gets executed

When the user flows into the forgotten-password journey.

Why this approach is used

It keeps the feature behavior easy to understand and separate from the UI implementation.

What happens if this file is removed

Forgot-password behavior is no longer covered.

#### tests/authentication/register.spec.ts

Why this file exists

It was prepared for registration test coverage but is currently commented out.

Who calls it

Right now, it is not active in the execution flow.

When it gets executed

It would run if the code is uncommented and the related factory/data files are wired correctly.

Why this approach is used

It is a good example of how a framework can be prepared for future tests without forcing them into the current suite.

What happens if this file is removed

The test suite loses the planned registration scenarios.

### Industry best practice

Keep test cases short and business-focused.

Good example:

- navigate to login page
- submit credentials
- verify warning message

Bad example:

- 20 lines of locator code inside the test file

### Common mistake

Making tests too detailed and too coupled to the UI structure.

Pause point: Are you ready to move to the next topic?

---

## 10. Full Runtime Execution Flow: How the Framework Actually Runs

This is the moment where everything comes together.

### Step 1: Start the test run

You run a script from package.json.

### Step 2: Load environment and browser settings

Playwright reads the runtime config from src/config.

### Step 3: Discover tests

Playwright scans the tests folder and identifies the test files.

### Step 4: Create the test context

The custom fixture provides page objects to the test.

### Step 5: Execute the test steps

The test calls page object methods, such as:

- landingPage.navigateToLandingPage()
- loginPage.submitLogin()
- forgetPasswordPage.submitForgetEmailAddress()

### Step 6: Assert the result

The test compares actual UI behavior against expected values from the data layer.

### Step 7: Generate reports

Playwright and Allure capture the result, screenshots, traces, and artifacts.

### Why this flow matters

This is the pattern you should explain when someone asks:

“How does your framework work?”

A strong answer would be:

> The framework uses Playwright Test with a layered structure. Tests are business-focused, page objects handle UI interactions, fixtures inject reusable page objects, configuration manages environment and browser behavior, and data files separate inputs from assertions.

Pause point: Are you ready to move to the next topic?

---

## 11. Beginner-to-Advanced Learning Path for This Repository

### Beginner level

Focus on these questions:

- What does each top-level folder do?
- How does a test reach a page object?
- What is the role of the fixture layer?

### Intermediate level

Focus on these questions:

- Why is the config layer separated from tests?
- Why are expected values stored separately from input values?
- How would you add a new feature page object?

### Advanced level

Focus on these questions:

- How would you scale this framework for more features and environments?
- How would you improve this structure for CI/CD?
- How would you introduce better data-driven patterns and reusable utilities?

---

## 12. Industry Best Practices You Should Practice in This Framework

Here are the habits that make this framework stronger:

- Keep tests readable and focused on behavior.
- Keep page objects focused on UI actions.
- Keep data outside the test logic.
- Keep configuration centralized.
- Avoid hardcoded values in multiple places.
- Prefer reusable helper methods over duplicate code.
- Use meaningful names for tests and page methods.

---

## 13. Common Mistakes to Watch For

- Putting locators directly in the test file
- Mixing assertion logic with page object logic
- Hardcoding URLs and environment values inside test cases
- Duplicating input values across multiple specs
- Making the base page class too heavy
- Writing huge test methods that do too many things

---

## 14. A Simple Way to Explain This Framework to Others

If you are asked to describe the framework in one minute, use this version:

> This is a Playwright + TypeScript automation framework built on the Page Object Model. Tests are written in the tests folder, page-specific interactions are abstracted into page objects under src/pages, reusable fixtures provide those page objects to tests, configuration under src/config handles environment and browser settings, and test data is stored separately from the logic so the suite remains maintainable and scalable.

---

## 15. Final Learning Challenge

Try this exercise:

1. Open the login test.
2. Trace how the test reaches the page object.
3. Identify where the input data comes from.
4. Identify where the expected result comes from.
5. Explain the execution path out loud as if you were teaching a trainee.

If you can do that clearly, you already understand the framework at a practical level.

Pause point: Are you ready to move to the next topic?
