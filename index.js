const nodemailer = require("nodemailer");
require("dotenv").config();

const account = process.env.OUTLOOK_ACCOUNT;
const password = process.env.OUTLOOK_PASSWORD;
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER_HOST,
  port: 587,
  //   service: "Outlook365",
  secure: false,
  auth: {
    user: account,
    pass: password,
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  logger: true,
  debug: true,
});

transporter.sendMail(
  {
    text: "안녕하세요. 개인 이메일로 보내는 테스트 이메일입니다.",
    to: "chodenis@naver.com",
    from: process.env.OUTLOOK_ACCOUNT,
    subject: "[STOVE INDIE] 테스트 이메일 발송",
  },
  (err) => {
    console.log(err);
  }
);
