import emailjs from "@emailjs/browser";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  try {
    const result = await emailjs.send(
      "service_9yzaack",
      "template_s1tkwvy",
      body,
      "0HB1tAOW6O6lCcLXz"
    );
    console.log(result.text);
    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully", details: result }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error.text);
    return new NextResponse(
      JSON.stringify({ message: "Failed to send email", error: error.text }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
