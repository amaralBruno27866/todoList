# To-Do List Application

This is a to-do list application developed with React, TypeScript, and Vite. The application allows users to add, complete, and delete tasks, with data persistence in `localStorage`.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Data persistence in `localStorage`

## Installation

To install and run the application locally, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/to-do-list.git
    ```

2. Navigate to the project directory:

    ```sh
    cd to-do-list
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

## Usage

To start the application in development mode, run:

```sh
npm run dev
```

## Open http://localhost:3000 in your browser to view the application.

## Project Structure
The project structure is as follows:
```
.eslintrc.cjs
.gitignore
index.html
package.json
public/
    images/
        logo.svg
README.md
src/
    App.module.css
    App.tsx
    assets/
        clipboard.png
        logo.png
        plus.png
    components/
        Header.tsx
        TaskList.tsx
        Tasks.tsx
    global.css
    main.tsx
    styles/
        Header.module.css
        TaskList.module.css
        Tasks.module.css
    vite-env.d.ts
tsconfig.json
tsconfig.node.json
vite.config.ts
```

# src: Contains the application source code.

## components/: Contains the React components.
- Header: Header component that includes the form to add new tasks.
- TaskList: Component that displays the list of tasks.
- Tasks: Component that represents an individual task.
 assets/: Contains image files.
- styles/: Contains CSS files for the components.
- App.tsx: Main application component.
- main.tsx: Application entry point.
- global.css: Global styles for the application.


# Available Scripts
In the project directory, you can run:

npm run dev: Starts the application in development mode.
npm run build: Builds the application for production.
npm run lint: Runs the linter to check the code.
npm run preview: Previews the built application.

# Technologies Used
- React
- TypeScript
- Vite
- ESLint
- React Icons
- Contributing

## Contributions are welcome! Feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

This README covers the main information about the application, including features, installation, usage, project structure, available scripts, technologies used, contributing, and license.
