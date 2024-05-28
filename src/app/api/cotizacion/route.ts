import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req: NextRequest) {
  try {
    const {
      name,
      lastname,
      email,
      emprise,
      celnumeral,
      cel,
      country,
      comment,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "SMTP",
      host: "mail.pdtagencia.com",
      port: 465,
      secure: true,
      auth: {
        user: "contacto@pdtagencia.com",
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });

    const mailOption = {
      from: "contacto@pdtagencia.com",
      to: email,
      subject: "Enviando",
      html: comment,
    };

    await transporter.sendMail(mailOption);
    console.log(mailOption);
    

    return NextResponse.json({ message: mailOption }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed email" }, { status: 500 });
  }
}
