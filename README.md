# 🌙 Theme Toggle Demo

This project demonstrates a theme toggle implementation using React Context API, Tailwind CSS, and a debounced function to optimize performance.

## 🚀 Features
- **Global Theme State**: Uses React Context API to manage a global theme state (light/dark mode).
- **Debounced Theme Toggle**: Prevents rapid state updates using a custom React hook.
- **Persistent Theme Preference**: Stores the user's theme choice in `localStorage`.
- **System Preference Detection**: Automatically applies the system's preferred theme.
- **Smooth Transitions**: Ensures a visually appealing theme change experience.

## [📸 Live Demo](https://interview-task-theta-six.vercel.app/)

## 🛠️ Technologies Used
- **React.js** (Context API for global state management)
- **Tailwind CSS** (Styling and responsive design)
- **Custom Hooks** (Debounced theme switching)
- **localStorage** (Persistent theme preference)

## 📂 Project Structure
```
├── src
│   ├── components
│   │   ├── ThemeToggleButton.js  # Button to toggle the theme
│   │   ├── ThemeProvider.js       # Provides theme context to the entire app
│   ├── hooks
│   │   ├── useDebounce.js         # Custom debounce hook to optimize theme toggle
│   ├── App.js                     # Main application file
│   ├── index.js                   # Entry point
├── public
│   ├── index.html
├── tailwind.config.js              # Tailwind CSS configuration
├── package.json
├── README.md
```

## 🏗️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/aniket-2003-das/Interview_Task.git
cd Interview_Task
```

### 2️⃣ Install Dependencies
```sh
npm install --legacy-peer-deps
```

### 3️⃣ Start the Development Server
```sh
npm start
```

## 🚀 Deployment
This project can be deployed on **Vercel, Netlify, or GitHub Pages**.

### Deploying on Vercel
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy the app:
   ```sh
   vercel --prod
   ```

---

### 🔗 Connect with Me
**GitHub**: [aniket-2003-das](https://github.com/aniket-2003-das)

Happy coding! 🚀
