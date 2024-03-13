import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";
import { generateEmailContentFromForm } from "./generateEmail";

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

    const emailContent = generateEmailContentFromForm(
      name,
      userMessage,
      projectType,
      email,
      telnr,
      company,
      contactByEmail,
      contactByMobile
    );

    try {
      await resend.emails.send({
        from: "Support InFiNet Code AB <support@infinetcode.se>",
        to: ["nemanja.milosavljevic@infinetcode.se"],
        subject: `Inquiry from ${name} - ${company}`,
        html: emailContent,
      });
      res.status(200).json({ success: true });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ success: false, message: error.message });
      } else {
        console.error(error);
        res
          .status(500)
          .json({ success: false, message: "An unexpected error occurred." });
      }
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
};
