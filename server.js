const express = require('express');
const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
const cors = require('cors');
const routes = require('./routes');
const router = express.Router(); 
require('dotenv').config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


mongoose.connection.on("connected", () => console.log("Connected to MongoDB"));
mongoose.connection.on("error", (err) => console.error("MongoDB connection error:", err));

mongoose.connect('mongodb://localhost:27017/job_pilot', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String,
});
const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  salary: String,
  type: String, 
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' }, 
});

const User = mongoose.model('User', userSchema);
const Job = mongoose.model("Job", jobSchema);

app.post('/api/login', async (req, res) => {
    const { username, password, role } = req.body;
    let user = await User.findOne({ username });
    if (!user) {
        user = new User({ username, password, role });
        await user.save();
    }
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, role: user.role });
});
app.get('/api/jobs', async (req, res) => {
  try {
      const jobs = await Job.find(); 
      res.json(jobs);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching jobs', error: error.message });
  }
});
app.post('/api/jobs', async (req, res) => {
    const { title, description, location, postedBy } = req.body;
  
    try {
      const newJob = new Job({ title, description, location, postedBy });
      await newJob.save();
      res.status(201).json(newJob);
    } catch (error) {
      res.status(500).json({ message: 'Error posting job', error: error.message });
    }
  });
  
  app.get('/api/jobs', async (req, res) => {
    try {
      const jobs = await Job.find();
      res.status(200).json(jobs);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching jobs', error: error.message });
    }
  });

app.use('/', routes); 

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});