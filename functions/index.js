const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const cors = require('cors')({ origin: true })

const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
})

exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== 'POST') {
      return res.status(400).send('Request must be a POST')
    }

    const { name, email, message } = req.body

    const mailOptions = {
      from: email,
      replyTo: email,
      to: 'kalaskyr@gmail.com',
      subject: `New message from ${name} at ${email}`,
      text: message,
      html: `<p>${message}</p>`,
    }

    try {
      await mailTransport.sendMail(mailOptions)
      console.log('Mail sent successfully')
      return res.status(200).send('Mail sent successfully')
    } catch (error) {
      console.error('There was an error while sending the email:', error)
      return res.status(500).send('There was an error while sending the email')
    }
  })
})
