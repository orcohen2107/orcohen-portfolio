"use server";

import { Resend } from "resend";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { dictionaries } from "@/i18n/dictionaries";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL ?? "orcohen2107@gmail.com";
const MAX_MESSAGE_LENGTH = 4000;
const MIN_MESSAGE_LENGTH = 20;

type ContactState = {
  success: boolean;
  message: string;
} | null;

function getLocale(formData: FormData): Locale {
  const raw = formData.get("locale");
  if (typeof raw === "string" && isLocale(raw)) return raw;
  return defaultLocale;
}

export async function sendMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const locale = getLocale(formData);
  const form = dictionaries[locale].contact.form;
  const honeypot = formData.get("company");

  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return { success: true, message: form.success };
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { success: false, message: form.errorRequired };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: form.errorEmail };
  }

  if (message.trim().length < MIN_MESSAGE_LENGTH) {
    return { success: false, message: form.errorRequired };
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return { success: false, message: form.errorGeneric };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      success: false,
      message: form.errorGeneric,
    };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject: `New message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return {
      success: true,
      message: form.success,
    };
  } catch {
    return {
      success: false,
      message: form.errorGeneric,
    };
  }
}
