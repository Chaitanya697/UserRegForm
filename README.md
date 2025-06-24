# User Registration App 📝

This is a basic full-stack user registration form built using **React (frontend)**, **.NET Core Web API (backend)**, and **Microsoft SQL Server (database)**.

> 🚀 This project was created as a hands-on implementation to understand how the frontend and backend interact via APIs and how data is stored in a real database.

---

## ✨ Features

- User-friendly registration form
- Frontend built with React (including form state management)
- Backend API built using .NET Core (ASP.NET Web API)
- Data stored in SQL Server using Entity Framework Core
- CORS setup for frontend-backend communication
- Form includes:
  - Text inputs (Name, Email, etc.)
  - Radio buttons (Gender)
  - Dropdown (Country)
  - Date picker (Date of Birth or Registration)
  - Checkbox (Agreement)

---

## 📂 Tech Stack

| Layer     | Technology             |
|-----------|------------------------|
| Frontend  | React JS               |
| Backend   | .NET Core Web API      |
| Database  | Microsoft SQL Server   |
| ORM       | Entity Framework Core  |
| Styling   | Basic CSS              |

---

## 🛠 How to Run the Project

### 🔹 Prerequisites

- Node.js & npm
- .NET SDK
- Microsoft SQL Server

### 🔹 Backend (.NET API)

1. Open the `.NET` project in Visual Studio
2. Check your connection string in `appsettings.json`
3. Run migrations to update the database:

    ```bash
    dotnet ef migrations add InitialCreate
    dotnet ef database update
    ```

4. Run the backend project. It should start at something like `https://localhost:7026`.

### 🔹 Frontend (React)

1. Navigate to the `Client` folder:

    ```bash
    cd Client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Your React app should run at `http://localhost:3002` (or similar).

---

## 📌 Note

This is a **beginner-level project** built to understand full-stack integration. It’s not production-grade but helps solidify core concepts of API communication and database integration.

---

## ✅ Future Improvements

- Add client-side form validation with Yup
- Add login functionality
- Store passwords securely (hashing)
- Responsive design and better styling
