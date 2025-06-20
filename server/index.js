const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const gmailRoutes = require('./routes/gmail');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//routes
app.use('/api/gmail', gmailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
