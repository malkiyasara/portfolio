import emailjs from "@emailjs/browser";

export const sendEmail = async (
  name: string,
  email: string,
  message: string,
) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: name,
      from_email: email,
      message: message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  );
};
