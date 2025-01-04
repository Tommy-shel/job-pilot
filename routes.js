const express = require('express');
const { authenticate, authorize } = require('./middleware');
const sendEmail = require('./email'); 
const router = express.Router(); 
router.post('/api/apply-job', authenticate, authorize(['candidate']), async (req, res) => {
  console.log('Request Headers:', req.headers);
  console.log('User :', req.user);

  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (!req.user.role.includes('candidate')) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const { name, email, phone } = req.body;

  try {
    const subject = 'Application Submitted Successfully';
    const text = `Dear ${name},\n\nYour application has been submitted successfully. We will review it and get back to you soon.\n\nBest regards,\nThe JobPilot Team`;
    await sendEmail(email, subject, text);

    res.status(200).json({ message: 'Job applied successfully by candidate' });
  } catch (error) {
    console.error('Error applying for job:', error);
    res.status(500).json({ message: 'Failed to apply for the job', error: error.message });
  }
});
module.exports = router;