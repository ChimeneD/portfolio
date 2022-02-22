import nc from 'next-connect';
import sgMail from '@sendgrid/mail';
import nodemailer from 'nodemailer';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const handler = nc();
handler.post(async (req, res) => {
  const { email, subject, message, name } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        password: process.env.PASSWORD,
      },
    });
    const mailOptions = {
      from: email,
      to: 'chimenejnr@gmail.com',
      subject: subject,
      text: `${message}`,
      html: `${name}`,
    };

    //send the email
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) return res.send(err.message);
      else {
        console.log(data);
        return res.send(data);
      }
    });
    res.send({
      status: 'success',
      message: 'Message Sent !',
    });
  } catch (err) {
    res.status(401).send(err.message);
  }
});

export default handler;
