const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'megacell.med@gmail.com', // generated ethereal user
      pass: 'igdxdnpgrdbwgzht', // generated ethereal password
    },
  });

transporter.verify().then(() => {
    console.log("Listo pa mandar correos pai");
});