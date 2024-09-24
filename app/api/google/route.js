import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const reqBody = await request.json();
  const secret_key = process.env.RECAPTCHA_SECRET_KEY;  // Make sure this is a server-side secret, not exposed publicly

  try {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${reqBody.token}`;

    const res = await axios.post(url);
    
    // Check if the captcha was successful
    if (res.data.success) {
      return NextResponse.json({
        message: "Captcha verification success!!",
        success: true,
      });
    }

    // If captcha fails, return error and include Google error codes for debugging
    return NextResponse.json({
      error: "Captcha verification failed!",
      success: false,
      'error-codes': res.data['error-codes'],  // Include error codes for better debugging
    }, { status: 500 });
  } catch (error) {
    return NextResponse.json({
      error: "Captcha verification failed!",
      success: false,
      details: error.message,  // Include error message for better troubleshooting
    }, { status: 500 });
  }
};