# WorkLedger

A role-based project and task management system built with the MERN stack. TaskForge is designed to simulate a real-world team collaboration platform with proper authentication, authorization, server/client state separation, and detailed activity logging.

---

## 🚀 Overview

WorkLedger allows teams to manage projects and tasks with clear role separation between **Project Managers (Admins)** and **Team Members (Users)**. Every meaningful action performed in the system is logged, making the platform auditable and production-oriented rather than a simple CRUD application.

This project is built to demonstrate modern full-stack development practices and is intended to be resume-ready.

---

## 🧩 Key Features

### Authentication & Authorization

* JWT-based authentication (access & refresh tokens)
* Secure password hashing
* Role-based access control (RBAC)
* Protected backend routes and frontend views

### Roles

#### Project Manager / Admin

* Create and manage projects
* Add or remove team members
* Assign tasks to users
* Update task status and priority
* View system-wide activity logs

#### Team Member / User

* View assigned projects
* View and update assigned tasks
* Change task status
* Add comments to tasks
* View personal activity logs

---

## 📋 Task Management

* Create, update, and delete tasks
* Task priorities and due dates
* Status workflow (Todo, In Progress, Review, Done)
* Task assignment to team members
* Commenting system for collaboration

---

## 🧾 Activity Logging System

Every important user action is automatically logged, including:

* User login and logout
* Project creation and updates
* Task creation, updates, and status changes
* Task assignment
* Comments added

### Log Data Includes

* Actor (user who performed the action)
* Role of the actor
* Action type
* Target entity (project, task, user)
* Metadata (old value, new value when applicable)
* Timestamp

Logs are stored in MongoDB and can be filtered and viewed by authorized users.

---

## 🛠️ Tech Stack

### Frontend

* React
* shadcn/ui
* Redux Toolkit (client state)
* TanStack Query (server state)
* React Router

### Backend

* Node.js
* Express.js
* MongoDB & Mongoose
* JWT for authentication

---

## 🧠 State Management Strategy

* **Redux Toolkit** is used for client-side state such as authentication, user role, and global UI state.
* **TanStack Query** is used for all server-side data including projects, tasks, and logs, handling caching, re-fetching, and mutations efficiently.

This separation keeps the application predictable and scalable.

---

## 🗂️ Project Structure (High Level)

```
client/
  ├─ src/
  │  ├─ components/
  │  ├─ pages/
  │  ├─ store/ (Redux Toolkit)
  │  ├─ services/ (TanStack Query)
  │  └─ utils/

server/
  ├─ controllers/
  ├─ services/
  ├─ models/
  ├─ routes/
  ├─ middleware/
  └─ utils/
```

---

## 🔐 Security Considerations

* Password hashing using bcrypt
* Backend role enforcement
* Centralized error handling
* Request validation

---

## 📈 Why This Project?

TaskForge is built to reflect how real-world systems are designed:

* Clear separation of concerns
* Realistic role-based permissions
* Auditable system actions
* Modern data-fetching patterns

This makes it suitable for showcasing full-stack engineering skills in interviews and on resumes.

---

## 📄 License

This project is open-source and available for learning and demonstration purposes.

---

## 👤 Author

**Yasir Ali**

Software Engineer
