const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./Database/db');

connectDB();

const app = express();


app.use(cors({
    origin: 'http://localhost:3000',
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