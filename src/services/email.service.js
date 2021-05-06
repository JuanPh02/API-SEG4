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

//Verificacion del servicio nodemailer
transporter.verify().then(() => {
    console.log("Listos pa mandar correos 😎");
});

/**
 * Metodo para enviar email
 * @param {Person} person 
 */
const sendEmail = async(person) => {
    await transporter.sendMail({
        from: '"MegaCell Medellin " <megacell.med@gmail.com>', // sender address
        to: person.email, // list of receivers
        subject: "Ha realizado su registro correctamente ✔", // Subject line
        html: '', // html body
    });
};

module.exports = { sendEmail };