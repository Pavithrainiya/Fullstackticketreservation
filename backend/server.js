// server.js
const express = require('express');
const cors = require('cors');
const classRoutes = require('./Routes/classRoutes');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use('/api', classRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
