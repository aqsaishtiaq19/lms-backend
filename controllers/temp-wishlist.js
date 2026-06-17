const Wishlist = require('../models/WishlistSchema');

// ADD TO WISHLIST
const addToWishlist = async (req, res) => {
    try {
        const { courseId } = req.body;
        const userId = req.user.id;

        if (!courseId) {
            return res.status(400).json({ message: "courseId required" });
        }

        const exists = await Wishlist.findOne({
            user: userId,
            course: courseId
        });

        if (exists) {
            return res.status(400).json({
                message: "Already in wishlist"
            });
        }

        const wishlist = await Wishlist.create({
            user: userId,
            course: courseId
        });

        res.status(201).json({
            success: true,
            wishlist
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// GET WISHLIST
const getWishlist = async (req, res) => {
    try {
        const userId = req.user.id;

        const wishlist = await Wishlist.find({ user: userId })
            .populate('course');

        const formatted = wishlist.map(item => ({
            _id: item._id,
            courseId: item.course?._id || null,
            title: item.course?.title || "Untitled",
            description: item.course?.description || "",
            image: item.course?.thumbnail || item.course?.image || "",
            price: item.course?.price || 0,
            instructor: item.course?.instructor || "",
            category: item.course?.category || ""
        }));

        res.status(200).json({
            success: true,
            wishlist: formatted
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};


// REMOVE FROM WISHLIST
const removeFromWishlist = async (req, res) => {
    try {
        const userId = req.user.id;
        const wishlistId = req.params.id;

        const deleted = await Wishlist.findOneAndDelete({
            _id: wishlistId,
            user: userId
        });

        if (!deleted) {
            return res.status(404).json({
                message: "Wishlist item not found"
            });
        }

        res.json({
            success: true,
            message: "Removed from wishlist"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addToWishlist,
    getWishlist,
    removeFromWishlist
};