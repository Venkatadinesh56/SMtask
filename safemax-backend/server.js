const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/safemax', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB:', err);
});

// Appointment schema
const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },  // Ensure email is unique
  date: { type: Date, required: true },
  time: { type: String, required: true },
  message: { type: String, required: true },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// Route to handle form submissions
app.post('/api/appointments', async (req, res) => {
  try {
    const { name, email, date, time, message } = req.body;

    // Check if the email already exists
    const existingAppointment = await Appointment.findOne({ email });
    if (existingAppointment) {
      return res.status(400).json({ error: 'This email has already been used for an appointment.' });
    }

    // Create a new appointment document
    const newAppointment = new Appointment({ name, email, date, time, message });
    await newAppointment.save();

    res.status(201).json({ message: 'Appointment booked successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to book appointment' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
