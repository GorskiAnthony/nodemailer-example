const sendmail = require("./src/sendMail");

sendmail.main().catch(console.error);
