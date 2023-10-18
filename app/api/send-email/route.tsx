import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "Whatever",
    to: "adeptinfosys@gmail.com",
    subject: "whatever",
    react: <WelcomeTemplate name="Ajay" />,
  });

  return NextResponse.json({});
}
