const AWS = require("aws-sdk");
const ses = new AWS.SES();

const sendEmailData = async ({ arguments }) => {
  const { input } = arguments;
  const { firstName, lastName, email, phone, message } = input;

  console.log(
    "sending email........: ",
    firstName,
    lastName,
    email,
    phone,
    message
  );

  const params = {
    Destination: {
      ToAddresses: ["ravi@mywallstudio.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone Number: ${phone}\nMessage: ${message}`,
        },
      },
      Subject: { Data: "New Contact Form Submission" },
    },
    Source: "emma@mywallstudio.com",
  };
  try {
    await ses.sendEmail(params).promise();
    return { code: "SUCCESS", message: "SUCCESS" };
  } catch (error) {
    return { code: "FAILED", message: error.message };
  }
};

module.exports = { sendEmailData };
