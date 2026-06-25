const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    instructor: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: false,
        default: 0
    },

    thumbnail: {
        type: String
    },

    duration: {
        type: String
    },

    level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        default: 'Beginner'
    },

    teachingMode: {
        type: String,
        enum: ['Online', 'Offline', 'Hybrid'],
        default: 'Online'
    },

    language: {
        type: String,
        default: 'English'
    },

    rating: {
        type: Number,
        default: 0
    },

    studentsEnrolled: {
        type: Number,
        default: 0
    },

    isPublished: {
        type: Boolean,
        default: false
    },

    isTrending: {
        type: Boolean,
        default: false
    },

    isPopular: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema, 'Course');

module.exports = Course;