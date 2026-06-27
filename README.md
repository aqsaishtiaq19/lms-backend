# 🎓 LMS Backend API

A robust, secure RESTful backend API for a **Learning Management System** built with **Node.js**, **Express.js**, and **MongoDB** — featuring JWT authentication, course management, and wishlist functionality.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)

---

## 🌐 Live API

👉 **[https://lms-backend-production-ada7.up.railway.app](https://lms-backend-production-ada7.up.railway.app)**

---

## ✨ Features

- 🔐 User Authentication — Register, Login & Logout
- 🛡️ JWT Token-based security for protected routes
- 🔒 Password hashing with **bcrypt**
- 📚 Full Course Management APIs
- ❤️ Wishlist functionality (add, view & remove)
- 🗄️ Data stored in **MongoDB Atlas** cloud database
- 🚦 Middleware-protected routes
- 🚀 Deployed on **Railway** with auto-deploy on push

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB Atlas | Cloud-hosted database |
| Mongoose | ODM for MongoDB |
| JWT (jsonwebtoken) | Authentication tokens |
| bcryptjs | Password hashing |
| CORS | Cross-origin resource sharing |
| Railway | Deployment & hosting |

---

## 📡 API Endpoints

### 🔑 Auth

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login & receive JWT |
| `GET` | `/api/profile` | Get user profile *(protected)* |

### 📚 Courses

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/courses` | Get all courses |
| `GET` | `/api/courses/trending` | Get trending courses |
| `GET` | `/api/courses/popular` | Get popular courses |
| `GET` | `/api/courses/new` | Get newest courses |
| `GET` | `/api/courses/search?q=keyword` | Search courses by keyword |

### ❤️ Wishlist *(Protected)*

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/wishlist` | Get user's wishlist |
| `POST` | `/api/wishlist` | Add course to wishlist |
| `DELETE` | `/api/wishlist/:courseId` | Remove course from wishlist |

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- npm or yarn
- MongoDB Atlas account & cluster

### Installation

```bash
# Clone the repository
git clone https://github.com/aqsaishtiaq19/lms-backend.git

# Navigate to project folder
cd lms-backend

# Install dependencies
npm install

# Start development server
npm start
```

The API will be running at [http://localhost:5000](http://localhost:5000)

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

## 📁 Project Structure

```
lms-backend/
├── controllers/
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   └── Course.js
├── routes/
│   ├── authRoutes.js
│   ├── courseRoutes.js
│   └── wishlistRoutes.js
├── .env
├── .gitignore
├── server.js
├── package.json
└── README.md
```

---

## 🔗 Related Repository

🌐 **Frontend Repository** → *(Coming Soon)*
⚙️ **Live API Base URL** → `https://lms-backend-production-ada7.up.railway.app`

---

## 👩‍💻 Developer

**Aqsa Ishtiaq**

- 🌐 GitHub: [@aqsaishtiaq19](https://github.com/aqsaishtiaq19)
- 💼 LinkedIn: [Aqsa Ishtiaq](https://www.linkedin.com/in/aqsa-ishtiaq)
- 🏅 Certiport IT Specialist – JavaScript *(Pearson VUE, 140+ countries)*
- 🤖 Microsoft Learn — AI Concepts for Developers *(June 2026)*

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
