# 🎓 LMS Backend API

A RESTful backend for a Learning Management System: user authentication, course discovery, and a personal wishlist, secured with JWT.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 🌐 Live

| | Link |
|---|---|
| 🔌 API | https://lms-backend-momin2.vercel.app/ |
| 🖥️ Frontend | https://lms-frontend-momin2.vercel.app/ |
| 📦 Frontend repo | [lms-frontend](https://github.com/aqsaishtiaq19/lms-frontend) |

---

## ✨ Features

- 🔐 Register and login with JWT-based authentication
- 🔑 Passwords hashed with bcrypt, never stored in plain text
- 🛡️ Protected routes using authentication middleware
- 📚 Course APIs: browse, trending, popular, new, and keyword search
- ❤️ Personal wishlist: add, view and remove courses
- 🌍 CORS enabled for the React frontend

> **Logout:** JWT is stateless, so logout is handled on the client by discarding the token.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | Server and routing |
| MongoDB + Mongoose | Database and data modeling |
| JSON Web Tokens | Authentication |
| bcryptjs | Password hashing |
| CORS | Cross-origin requests |

---

## 📡 API Endpoints

### Auth

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/auth/register` | Create a new account | Public |
| POST | `/api/auth/login` | Login and receive a JWT | Public |
| GET | `/api/profile` | Get the logged-in user's profile | 🔒 Protected |

### Courses

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/api/courses` | Get all courses | Public |
| GET | `/api/courses/trending` | Get trending courses | Public |
| GET | `/api/courses/popular` | Get popular courses | Public |
| GET | `/api/courses/new` | Get newly added courses | Public |
| GET | `/api/courses/search?q=keyword` | Search courses by keyword | Public |

### Wishlist

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/api/wishlist` | Get the user's wishlist | 🔒 Protected |
| POST | `/api/wishlist` | Add a course to the wishlist | 🔒 Protected |
| DELETE | `/api/wishlist/:courseId` | Remove a course from the wishlist | 🔒 Protected |

---

## 🔑 Authentication

Protected routes need the token in the request header:

```
Authorization: Bearer <your_jwt_token>
```

**Example: login request**

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Example: add to wishlist**

```http
POST /api/wishlist
Authorization: Bearer <token>
Content-Type: application/json

{
  "courseId": "64f1a2b3c4d5e6f7a8b9c0d1"
}
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root folder:

```
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_long_random_secret
```

Never commit your `.env` file. It's listed in `.gitignore`.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/aqsaishtiaq19/lms-backend.git

# Go to the project folder
cd lms-backend

# Install dependencies
npm install

# Start the server
npm start
```

The API runs at `http://localhost:5000`.

---

## 📁 Project Structure

```
lms-backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env.example
├── .gitignore
├── package.json
└── server.js
```

---

## 🔮 Planned Improvements

- [ ] Input validation with Zod
- [ ] Pagination for course lists
- [ ] Automated tests with Jest and Supertest
- [ ] Rate limiting on auth routes

---

## 👩‍💻 Developer

**Aqsa Ishtiaq**
- 🌐 GitHub: [@aqsaishtiaq19](https://github.com/aqsaishtiaq19)
- 💼 LinkedIn: [Aqsa Ishtiaq](https://www.linkedin.com/in/aqsa-ishtiaq-67523627a)

---

## 📄 License

This project is open
