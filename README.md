# ✅ Task Manager

A full-stack **Task Management System** built with **Node.js + Express + MySQL (backend)** and **React + Vite + TailwindCSS (frontend)**.  
Secure authentication with **JWT & bcrypt**, and a clean modern UI for managing tasks effortlessly.  

---

## ✨ Features

- 🔐 **User Authentication** – Register, Login, and Protected Routes  
- 📝 **Task Management** – Create, Update, Delete tasks  
- 📅 **Timestamps** – Track when users and tasks are created  
- ⚡ **Frontend** – React + TypeScript + TailwindCSS + ShadCN UI  
- 🗄️ **Backend** – Node.js, Express, MySQL2  
- 🔑 **Security** – Passwords hashed with bcrypt, JWT-based auth  

---

## 📂 Project Structure

Task-Manager/
│── task-manager-backend/ # Backend (Node.js, Express, MySQL)
│ ├── routes/ # API routes
│ ├── models/ # DB models
│ ├── controllers/ # Business logic
│ └── server.js # App entry point
│
│── task-manager-frontend/ # Frontend (React, Vite, Tailwind)
│ ├── src/pages/ # Pages (Login, Register, Dashboard)
│ ├── src/components/ # Reusable UI components
│ ├── src/contexts/ # Auth Context
│ └── main.tsx # Entry point

yaml
Copy
Edit

---

## 🚀 Getting Started

### 🔧 Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) v18+
- [MySQL](https://www.mysql.com/)
- [Git](https://git-scm.com/)

---

### ⚙️ Backend Setup

```bash
cd task-manager-backend
npm install
Create a database in MySQL:

sql
Copy
Edit
CREATE DATABASE taskManager;
USE taskManager;

CREATE TABLE users (
  id VARCHAR(36) PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks (
  id VARCHAR(36) PRIMARY KEY,
  user_id VARCHAR(36),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
Start the backend:

bash
Copy
Edit
npm start
Default backend runs on: http://localhost:5000

🎨 Frontend Setup
bash
Copy
Edit
cd task-manager-frontend
npm install
npm run dev
Frontend will run at: http://localhost:5173

🔑 API Endpoints
Auth
POST /api/auth/register → Register new user

POST /api/auth/login → Login and receive JWT

Tasks
GET /api/tasks → Get all tasks (for logged-in user)

POST /api/tasks → Create a new task

PUT /api/tasks/:id → Update task

DELETE /api/tasks/:id → Delete task

🛠️ Built With
Frontend: React, TypeScript, Vite, TailwindCSS, ShadCN UI

Backend: Node.js, Express, MySQL2, JWT, bcrypt

Tools: Git, Postman, VSCode

📸 Screenshots (Optional)
Add screenshots of Login, Register, Dashboard pages here.

🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and submit a PR.

🌟 Show your support
If you like this project, give it a ⭐ on GitHub — it helps a lot!

👤 Author
Pratyush Rai (@CenturionEaz)
