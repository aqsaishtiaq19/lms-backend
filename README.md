LMS Backend API
A RESTful backend API for a Learning Management 
System built with Node.js, Express.js and MongoDB.

Features
- User Authentication (Register/Login/Logout)
- JWT Token based security
- Password hashing with bcrypt
- Course management APIs
- Wishlist functionality
- Protected routes with middleware

Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs
- CORS

API Endpoints

Auth
- POST /api/auth/register
- POST /api/auth/login
- GET  /api/profile (protected)

Courses
- GET /api/courses
- GET /api/courses/trending
- GET /api/courses/popular
- GET /api/courses/new
- GET /api/courses/search?q=keyword

Wishlist (Protected)
- GET    /api/wishlist
- POST   /api/wishlist
- DELETE /api/wishlist/:courseId

## Environment Variables
