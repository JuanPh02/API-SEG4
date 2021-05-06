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

//Verificacion del servicio smtp - nodemailer
transporter.verify().then(() => {
    console.log("Ready 😎");
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
        html: `
        <table align="center" cellpadding="0" cellspacing="0" width="600px">
        <tbody>
            <tr>
                <td align="center" bgcolor="#5033DB" width="300" height="150">
                    <p style="font-family: 'Trebuchet MS'; font-size: 28px; color: #ffffff;">BIENVENIDO ${name}</p>
                    <br>
                    <p style="color: #bdbdbd; font-size: 16px;" ;>Gracias por registrarte para estar en contacto con MegaCell Medellín.</p>
                </td>
            </tr>
            <tr>
                <td style="font-family: 'Helvetica','Trebuchet MS';">
                    <br>
                    <p align="center" style="font-size: 20px;"> <strong>TU REGISTRO HA SIDO EXITOSO ✅</strong></p>
                    <br>
                    <br> <strong> ¡En hora buena!</strong>
                    <br>
                    <br> Ya que estamos en contacto, recibirás semanalmente catálogo de nuestros productos con precios actualizados, y además ofertas exclusivas para tí.
                    <br>
                    <br> No olvides reir 😁,
                    <br>
                    <br>
                    <br>
                    <img align="center" src="https://i.ibb.co/YbdqsX8/megacell.jpg" alt="MegaCell" border="0" width="60px">
                    <p>Equipo <strong>MegaCell</strong>📱</p>
                    <br>
                    <br>
                </td>
            </tr>
            <tr>
                <td align="center" bgcolor="#26A4D3" height="60px" style="font-family: 'Cambria', 'Cochin';">
                    &reg; &nbsp; MegaCell, Medellin - 2021<br> Visita nuestra página web ¯\_(ツ)_/¯
                </td>
            </tr>
            <tr>
                <td bgcolor="#606060" height="10px"></td>
            </tr>
        </tbody>
    </table>
        `, // html body
    });
};

module.exports = { sendEmail };