import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

export const contact = async (payload) => {
  try {
    const response = await axios.post(url + "/sendemail", payload, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
      }
    });
    return response;
  } catch (err) {
    throw err
  }
};