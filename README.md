# Counter Application – useState Project

A clean, beginner-friendly React Counter Application built with Vite to demonstrate the fundamentals of React `useState`, event handling, conditional rendering, and responsive pure CSS.

- 🌐 **Live Demo**: [https://pmuthumuniyandi3-alt.github.io/react-counter-application/](https://pmuthumuniyandi3-alt.github.io/react-counter-application/)
- 📦 **GitHub Repository**: [https://github.com/pmuthumuniyandi3-alt/react-counter-application](https://github.com/pmuthumuniyandi3-alt/react-counter-application)

---

## 🎯 Objective

The objective of this project is to provide a hands-on, practical example of:
- Building functional components in React.
- Initializing and updating state using the `useState` hook.
- Handling user click events with clean event handler functions.
- Implementing conditional rendering based on state values.
- Writing modern, responsive CSS without relying on external UI libraries.

---

## 🛠️ Technologies Used

- **React 18**: Modern JavaScript library for building user interfaces.
- **Vite**: Fast frontend build tool and development server.
- **CSS3**: Responsive flexbox layout, custom styling, transitions, and hover effects.
- **HTML5**: Semantic web markup.

---

## ✨ Features

- **Prominent Counter Display**: Displays the current count in a bold, readable format.
- **Increment Action**: Increases the count by 1 with each click.
- **Safe Decrement Action**: Decreases the count by 1, with safety logic preventing values below `0`.
- **Reset Action**: Instantly resets the counter value back to `0`.
- **Conditional Rendering**: Automatically displays `"Minimum limit reached"` only when the count is `0`.
- **Visually Distinct Reset Button**: Styled with a distinct accent to clearly differentiate it from increment and decrement.
- **Responsive Design**: Adapts cleanly across mobile, tablet, and desktop screens.
- **No External UI Frameworks**: Built using pure vanilla CSS.

---

## 💡 How `useState` Works in This Project

In React, the `useState` Hook allows functional components to maintain internal state across re-renders.

### 1. Initializing State
```jsx
import { useState } from 'react';

const [count, setCount] = useState(0);
```
- `count`: The current state variable holding the counter number (starts at `0`).
- `setCount`: The updater function used to update the value of `count`.
- `useState(0)`: Sets the initial value to `0`.

### 2. Updating State via Event Handlers
When a button is clicked, an event handler calls `setCount` with a new value:

- **Increment**:
  ```jsx
  const handleIncrement = () => {
    setCount(count + 1);
  };
  ```
- **Decrement (with safe minimum boundary)**:
  ```jsx
  const handleDecrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };
  ```
- **Reset**:
  ```jsx
  const handleReset = () => {
    setCount(0);
  };
  ```

### 3. Conditional Rendering
React re-evaluates the JSX whenever state updates. The minimum-limit message renders only when `count === 0`:
```jsx
{count === 0 && (
  <p className="limit-message">Minimum limit reached</p>
)}
```

---

## 📁 Project Structure

```text
counter-app/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Counter.jsx
│   │   └── Counter.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 How to Install and Run the Project

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or higher recommended).

### 1. Install Dependencies
Open a terminal in the project directory and run:
```bash
npm install
```

### 2. Start the Development Server
Run the following command to start Vite's local development server:
```bash
npm run dev
```

### 3. Open in Browser
Open your browser and navigate to the local address displayed in the terminal (typically `http://localhost:5173`).

---

## 🧪 Expected Behavior

| Action | Count Value | "Minimum limit reached" Message |
| :--- | :--- | :--- |
| **Initial load** | `0` | **Visible** |
| **Click Increment** | `1` | Hidden |
| **Click Increment** | `2` | Hidden |
| **Click Decrement** | `1` | Hidden |
| **Click Decrement** | `0` | **Visible** |
| **Click Decrement at 0** | `0` (stays 0) | **Visible** |
| **Click Reset** | `0` | **Visible** |