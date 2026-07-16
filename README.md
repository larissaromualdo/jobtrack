# JobTrack

Simple frontend project to manage job applications in a dashboard.

## 🎯 Purpose

The project was built to practice a complete frontend flow:
login screen + dashboard with create, edit, and delete of applications in-memory.

## 🚀 Technologies

- React
- JavaScript
- Vite
- CSS Modules

## ✅ Features

- Login form with basic validation.
- Dashboard with:
  - list of applications
  - create new application
  - edit existing application
  - delete application
- Conditional rendering between login and dashboard.
- Component-based structure in `src/pages`.
- Local state management with `useState` and `useEffect`.

## 🧱 Project structure

- `src/main.jsx` - app bootstrap
- `src/App.jsx` - global state and routing logic (login/dashboard)
- `src/pages/Login.jsx` - login screen
- `src/pages/Dashboard.jsx` - dashboard and application form
- `src/pages/Login.module.css` - login styles
- `src/pages/Dashboard.module.css` - dashboard styles

## 🛠️ Run locally

```bash
# install dependencies
npm install

# start development server
npm run dev
```

## 🗃️ Notes

- Backend is not connected yet.
- Data is currently stored in memory (React state) and resets on refresh.

## 🎓 What I learned with this project

- React component composition
- State lifting and controlled forms
- CRUD-style behavior in the frontend
- Conditional rendering and dynamic lists
- Styling with CSS Modules

## 🔜 Next steps

- Add backend (NestJS + MongoDB) with REST endpoints
- Persist applications in database
- Improve authentication flow
- Add form validation improvements and user feedback
