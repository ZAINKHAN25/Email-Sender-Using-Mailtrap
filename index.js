// Import Express module
import express from 'express';
import nodemailer from 'nodemailer';

// Create an Express application
const app = express();

// Define a route for the home page
app.get('/', (req, res) => {

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: '22c573c9c471d1',
          pass: 'd10c759a270c1c'
        }
      });

    // Email options
    const mailOptions = {
        from: 'zainarfeen87@gmail.com',
        to: 'homezain735@gmail.com',
        subject: 'Test Email',
        text: 'Hello i am Zain'
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
