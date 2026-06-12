const Course = require('../models/CourseSchema')

// Get ALL courses
const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({})
        res.status(200).json({ success: true, courses })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}


// ADD COURSE
    const addCourse = async (req, res) => {
    try {
        const { title, description, instructor, category, price } = req.body;

        const newCourse = new Course({
            title,
            description,
            instructor,
            category,
            price
        });

        const savedCourse = await newCourse.save();

        res.status(201).json({
            success: true,
            message: "Course created successfully",
            course: savedCourse
        });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}


// Get TRENDING courses
const getTrendingCourses = async (req, res) => {
    try {
        const courses = await Course.find({ isTrending: true })
        res.status(200).json({ success: true, courses })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

// Get POPULAR courses
const getPopularCourses = async (req, res) => {
    try {
        const courses = await Course.find({ isPopular: true })
        res.status(200).json({ success: true, courses })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

// Get NEWLY ADDED courses
const getNewCourses = async (req, res) => {
    try {
        const courses = await Course.find().sort({ createdAt: -1 })
        res.status(200).json({ success: true, courses })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

// SEARCH courses
const searchCourses = async (req, res) => {
    try {
        const { q } = req.query
        const courses = await Course.find({
            title: { $regex: q, $options: 'i' }
        })
        res.status(200).json({ success: true, courses })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

// DELETE a course by ID
const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id)

        if (!course) {
            return res.status(404).json({ message: "Course not found" })
        }

        res.status(200).json({
            success: true,
            message: "Course deleted successfully"
        })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

module.exports = {
    getAllCourses,
    getTrendingCourses,
    getPopularCourses,
    getNewCourses,
    searchCourses,
    deleteCourse,
    addCourse  }