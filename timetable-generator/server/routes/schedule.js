const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const { generateTimetable } = require('../utils/timetableGenerator');

router.post('/add-course', auth, async (req, res) => {
  try {
    const { playlistUrl } = req.body;
    const user = await User.findById(req.userId);
    
    if (user.courses.length >= 7) {
      throw new Error('Maximum 7 courses allowed');
    }

    // Here you would typically fetch course details from YouTube API
    // For now, we'll simulate it
    const courseDetails = {
      playlistUrl,
      title: `Course ${user.courses.length + 1}`,
      duration: Math.floor(Math.random() * 20) + 10 // Random duration between 10-30 hours
    };

    user.courses.push(courseDetails);
    await user.save();
    
    res.json(courseDetails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/timetable', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const timetable = generateTimetable(user.courses, user.preferences.studyTime);
    res.json(timetable);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;