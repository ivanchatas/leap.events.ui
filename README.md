# Leap Events UI

## Overview

This project represents the frontend application, designed to provide a user-friendly interface for [briefly describe what the app does, e.g., managing events and ticket sales, viewing reports]. It follows a modular architecture, dividing its codebase into distinct sections to ensure clarity, maintainability, and reusability.

## Project Structure

The application's architecture is organized into the following four primary sections:

* **Features**
* **Models**
* **Services**
* **Shared**

Below is a detailed explanation of each section:

### 1. Features

This section contains all the user-facing pages or views that users can navigate within the application. Each page is implemented as a dedicated component, ensuring encapsulated functionality and UI.

* **Events:** Displays a comprehensive list of all available events.
* **Reports:** Presents a summary of sales data.
* **TicketSale:** Details tickets sold per specific event.

### 2. Models

This section defines the data structures (objects) used throughout the application, particularly those that represent the data displayed on various pages. These models ensure type safety and consistency in data handling across the frontend.

### 3. Services

This section houses the application's services, primarily responsible for making API calls to the backend.

* These services inherit from a base service that implements centralized exception handling for API communication.
* In the event of an API error, a modal dialog is automatically triggered and displayed to the user, presenting the relevant error message.

### 4. Shared

This section is dedicated to cross-cutting concerns and reusable components that can be utilized across different parts of the project, promoting efficiency and consistency.

* **Table Component:**
    * A generic table component that supports client-side pagination and filtering.
    * **Note:** All pagination and filtering operations are performed at render time on the client-side; no server-side pagination is implemented.
* **Error Dialog Component:**
    * The modal component displayed to the user when an exception occurs during API calls.

---

**Optional Sections to Add (Highly Recommended for a complete README):**

## Technologies Used

* [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.
* TypeScript
* HTML5
* CSS/SCSS (Bootstrap, Material)

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
