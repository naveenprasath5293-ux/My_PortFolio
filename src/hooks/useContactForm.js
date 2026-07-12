import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.subject.trim()) errors.subject = "Subject is required.";
  if (!form.message.trim()) errors.message = "Message is required.";
  return errors;
}

/**
 * Manages contact form state, client-side validation, and EmailJS
 * submission. Returns everything Contact.jsx needs to render the form.
 */
export function useContactForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function submit(e) {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch {
      setStatus("error");
    }
  }

  return { form, errors, status, updateField, submit };
}
