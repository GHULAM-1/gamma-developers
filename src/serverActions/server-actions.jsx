"use server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_CONNECTION_STRING);
import Email from "@/components/email-template";

export async function formSubmission(data) {
  const email = data.email;
  const name = data.name;
  const message = data.description;

  try {
    await resend.emails.send({
      from: "gammadevelopers <team@gammadevelopers.com>",
      to: ["ilyasghulam35@gmail.com"],
      subject: "Guys We Have A Client !!!",
      text: `client's email id is -----${email}----- and client's name ----- ${name} ----- and the message is -----${message} ---------`,
    });

    await resend.emails.send({
      from: "gammadevelopers <team@gammadevelopers.com",
      to: [email],
      subject: "Thank you for contacting",
      react: <Email name={name} />,
    });

    return { message: "success" };
  } catch (error) {
    return { message: "failure" };
  }
}
