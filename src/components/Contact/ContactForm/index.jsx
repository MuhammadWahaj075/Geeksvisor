"use client";

import { useForm } from "react-hook-form";
import { contact as contactMock } from "@/utils/mockData";
import { contact } from "@/services";
import { Input } from "@/components/comman/Input/Input";
import { Button, TextArea } from "@/components/comman";
import { Loader } from "@/components/comman/loader/Loader";

// input
const inputClass =
  "!bg-eerieBlack mt-[8px] sm:h-[66px] h-[50px] lg:w-[568px] md:w-full";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      subject: "",
      text: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    try {
      let response = await contact(data);
      if (response.status === 200) {
        alert("Message sent successfully!");
        reset(); // Reset form fields after successful submission
      } else {
        alert("Failed to send the message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send the message. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center mt-[50px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap justify-between bg-chaosBlack xl:w-[1159px] md:w-[95%] w-[95%] xl:h-[630px] h-auto rounded-[13px] md:px-[40px] md:py-[58px] py-[16px] px-[16px]"
      >
        <div className="xl:w-[405px] md:text-left text-center">
          <h1 className="title_text !text-primary-normal max-w-[737px] md:text-left text-center">
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
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email format",
              },
            })}
            error={errors.email && errors.email.message}
          />
          <Input
            label="Subject"
            name="subject"
            className={inputClass}
            placeholder="Subject here"
            {...register("subject", {
              required: "Subject is required",
            })}
            error={errors.subject && errors.subject.message}
          />
          <TextArea
            label="Message"
            name="text"
            rows={6}
            className={"!bg-eerieBlack mt-[8px] lg:w-[568px] md:w-full"}
            placeholder="Enter here"
            {...register("text", {
              required: "Message is required",
            })}
            error={errors.text && errors.text.message}
          />
          <Button className="mt-[18px]" type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Loader /> : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};
