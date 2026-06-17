const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/authController');

const {
    getAllCourses,
    getTrendingCourses,
    getPopularCourses,
    getNewCourses,
    searchCourses,
    deleteCourse,
    addCourse 

} = require('../controllers/courseController');

const {
    addToWishlist,
    getWishlist,
    removeFromWishlist
} = require('../controllers/WishlistController');

const protect = require('../middleware/authMiddleware');


// Auth Routes
router.post('/register', register);
router.post('/login', login);
// router.delete('/user/:id', deleteUser);

// Profile Route
router.get('/profile', protect, (req, res) => {
    res.json(req.user);
});


// Course Routes

// Get all courses
router.get('/courses', getAllCourses);

// Get trending courses
router.get('/courses/trending', getTrendingCourses);

// Get popular courses
router.get('/courses/popular', getPopularCourses);

// Get newly added courses
router.get('/courses/new', getNewCourses);

router.post('/courses', addCourse);
// Search courses → /courses/search?q=react
router.get('/courses/search', searchCourses);

// Delete a course by ID
router.delete('/courses/:id', protect, deleteCourse);


// Wishlist Routes
router.post('/wishlist', protect, addToWishlist);
router.get('/wishlist', protect, getWishlist);

router.delete('/wishlist/:id', protect, removeFromWishlist);

module.exports = router;