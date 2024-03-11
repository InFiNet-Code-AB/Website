import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    email,
    projectType,
    name,
    company,
    telnr,
    contactByEmail,
    contactByMobile,
    userMessage,
  } = req.body;
  const { method } = req;

  if (method === "POST") {
    if (!email) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const emailContent = `
      <!DOCTYPE html>
      <html>
          <head>
              <title>Contact Inquiry Received</title>
          </head>
          <body
              style="
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f4;
              "
          >
              <div
                  style="
                      background-color: #fff;
                      padding: 40px;
                      margin: 20px auto;
                      max-width: 600px;
                      border-radius: 10px;
                      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  "
              >
                  <div style="text-align: center; margin-bottom: 20px">
                      <img
                          src="https://infinetcode.se/logo-dark-long.png"
                          alt="InFiNet Code AB logo"
                          width="200"
                          height="50"
                          style="display: inline-block"
                      />
                  </div>
                  <h1 style="color: #333; font-size: 24px; text-align: center">
                      New Potential Customer
                  </h1>
                  <p style="font-size: 18px; color: #333; margin-bottom: 20px">
                      A new customer has reached out to us
                  </p>
                  <p style="font-size: 16px; color: #666; margin-bottom: 10px">
                      <strong>Name:</strong> ${name}
                  </p>
                  <p style="font-size: 16px; color: #666; margin-bottom: 10px">
                      <strong>Email:</strong> ${email}
                  </p>
                  <p style="font-size: 16px; color: #666; margin-bottom: 10px">
                      <strong>Company:</strong> ${company}
                  </p>
                  <p style="font-size: 16px; color: #666; margin-bottom: 10px">
                      <strong>Telephone Number:</strong> ${telnr}
                  </p>
                  <p style="font-size: 16px; color: #666; margin-bottom: 10px">
                      <strong>Preferred Contact Method:</strong> ${
                        contactByEmail
                          ? "Email"
                          : contactByMobile
                          ? "Mobile"
                          : "Not specified"
                      }
                  </p>
                  <p style="font-size: 16px; color: #666; margin-bottom: 10px">
                      <strong>Project Type:</strong> ${projectType.slice(1)}
                  </p>
                  <p style="font-size: 16px; color: #666; margin-bottom: 10px">
                      <strong>Message:</strong><br />${userMessage}
                  </p>
              </div>
              <div
                  style="background-color: #f4f4f4; padding: 20px; text-align: center"
              >
                  <p style="font-size: 14px; color: #666">
                      Sending love from InFiNet Code AB
                  </p>
              </div>
          </body>
      </html>
    `;

    try {
      await resend.emails.send({
        from: "Support InFiNet Code AB <support@infinetcode.se>",
        to: [
          "nemanja.milosavljevic@infinetcode.se",
          "anica.milosavljevic@infinetcode.se",
          "tijana.ilic@infinetcode.se",
        ],
        subject: `Inquiry from ${name} - ${company}`,
        html: emailContent,
      });
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
};
