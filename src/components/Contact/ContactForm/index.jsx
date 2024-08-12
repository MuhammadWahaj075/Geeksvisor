"use client";

import { useState } from "react";
import { contact as contactMock } from "@/utils/mockData";
import { Button, TextArea } from "../../comman";
import { Input } from "../../comman/Input/Input";
import { contact } from "@/services";

const inputClass =
  "!bg-eerieBlack mt-[8px] sm:h-[66px] h-[50px] lg:w-[568px] md:w-full";

export const ContactForm = () => {
  const [contactDetail, setContactDetail] = useState({
    email: "",
    subject: "",
    text: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetail({
      ...contactDetail,
      [name]: value,
    });
  };

  const alertContentFail = () =>
    alert("Failed to send the message. Please try again later.");

  const alertContentsuccess = () => alert("Message sent successfully!");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let response = await contact(contactDetail);
      setContactDetail({
        email: "",
        subject: "",
        text: "",
      });
      if (response.status === 200) {
        alertContentsuccess();
      } else {
        alertContentFail();
      }
    } catch (error) {
      console.log(error);
      alertContentFail();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-[50px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-between bg-chaosBlack xl:w-[1159px] md:w-[95%] w-[95%] xl:h-[755px] h-auto rounded-[13px] md:px-[40px] md:py-[58px] py-[16px] px-[16px] "
      >
        <div className="xl:w-[405px] md:text-left text-center">
          <h1 className="title_text !text-primary-normal max-w-[737px]  md:text-left text-center">
            {contactMock.title}
          </h1>
          <p className="description_text mt-[24px]">
            {contactMock.description}
          </p>
        </div>
        <div className="lg:w-[568px] md-w-[100%] w-[100%] xl:mt-[-18px] md:mt-[0px] flex flex-col">
          <Input
            label="Email"
            name="email"
            className={inputClass}
            placeholder="Email here"
            value={contactDetail.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Subject"
            name="subject"
            className={inputClass}
            placeholder="Subject here"
            value={contactDetail.subject}
            onChange={handleChange}
            required
          />
          <TextArea
            label="Message"
            name="text"
            rows={6}
            className={"!bg-eerieBlack mt-[8px] lg:w-[568px] md:w-full"}
            placeholder="Enter here"
            value={contactDetail.text}
            onChange={handleChange}
            required
          />
          <Button className="mt-[18px]" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};
