// Import Express module
import express from 'express';
import nodemailer from 'nodemailer';

// Create an Express application
const app = express();

// Define a route for the home page
app.get('/', (req, res) => {

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'zainarfeen87@gmail.com',
          pass: 'koxs uhlr iche nlsj'
        }
      });

    // Email options
    const mailOptions = {
        from: 'zainarfeen87@gmail.com',
        to: 'homezain735@gmail.com',
        subject: 'Test Email',
        text: 'Hello i am Zain 2.0'
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
        } else {
            console.log('Email sent:', info.response);
            res.send('Kam hogya')
        }
    });

});

// Start the server on port 3000
const port = 3000;


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
