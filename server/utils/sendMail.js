const { createTransport } = require("nodemailer");

const sendMail = async (to, subject, text) => {
  const transporter = createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    secureConnection: false,
    auth: {
      user: "solacecare.team@gmail.com",
      pass: "atij qntd mrdp gcan",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  await transporter.sendMail({
    to,
    subject,
    text,
    from: "solacecare.team@gmail.com",
  });
};
module.exports = sendMail;
