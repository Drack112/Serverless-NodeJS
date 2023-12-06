import twilio from "twilio";

const accountSid = "AC9451fec25ea47f6741719b4d9403909c";
const authToken = "b2ed0a5c71848d94fde15faee1e0a1ea";

const client = twilio(accountSid, authToken);

export const GenerateAccessCode = () => {
  const code = Math.floor(1000 + Math.random() * 90000);
  let expiry = new Date();
  expiry.setTime(new Date().getTime() + 30 * 60 * 1000);
  return { code, expiry };
};

export const SendVerificationCode = async (
  code: number,
  toPhoneNumber: string
) => {
  const response = await client.messages.create({
    body: `Your verification code is ${code} it will expire within 30 minutes.`,
    from: "+18138963397",
    to: toPhoneNumber.trim(),
  });
  console.log(response);
  return response;
};
