import axios from "axios";

export const contact = async (contact) => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const { email, subject, text } = contact;
  const payload = { email, subject, text };

  try {
    let response = await axios.post(url, payload);
    return response;
  } catch (error) {
    throw error;
  }
};