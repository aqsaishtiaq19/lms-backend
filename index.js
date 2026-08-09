const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./Database/db');

connectDB();

const app = express();

// Allowed origins that never change (local dev + any custom-named deployments)
const staticAllowedOrigins = [
    "http://localhost:3000",
    "https://lms-frontend-momin2.vercel.app",
    "https://lms-frontend-git-main-momin2.vercel.app",
    "https://lms-frontend-seven-lilac.vercel.app"
];

// Matches any auto-generated Vercel preview URL for this project,
const previewUrlPattern = /^https:\/\/lms-frontend-[a-z0-9]+-momin2\.vercel\.app$/;

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (e.g. Postman, server-to-server calls)
        if (!origin) return callback(null, true);

        if (staticAllowedOrigins.includes(origin) || previewUrlPattern.test(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS: " + origin));
        }
    },
    credentials: true
}));

app.use(express.json());

const router = require('./routes/route');
app.use('/api', router);

app.get('/', (req, res) => {
    res.send('LMS Server Running!');
});

const PORT = process.env.PORT || 1919;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});