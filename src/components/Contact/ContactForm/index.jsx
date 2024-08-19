"use client";

import { contact } from "@/services";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, TextArea } from "@/components/comman";
import { Input } from "@/components/comman/Input/Input";
import { contact as contactMock } from "@/utils/mockData";
import { Loader } from "@/components/comman/loader/Loader";
import { toast } from "react-toastify";

// input
const inputClass = "!bg-eerieBlack mt-[8px] sm:h-[66px] h-[50px] lg:w-[568px] md:w-full"

export const ContactForm = () => {

  const [isLoader, setIsLoader] = useState(false)

  const initialState = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: "",
  }

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm({
    defaultValues: initialState,
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      setIsLoader(true)
      await contact(data);
      setIsLoader(false)
      reset(initialState);
      toast.success("Message sent successfully!")
    } catch (error) {
      setIsLoader(false)
      toast.error(error)
    }
  };

  return (
    <div className="flex justify-center mt-[50px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap justify-between bg-chaosBlack xl:w-[1159px] md:w-[95%] w-[95%] xl:h-auto h-auto rounded-[13px] md:px-[40px] md:py-[58px] py-[16px] px-[16px]"
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
            label="Name"
            name="name"
            className={inputClass}
            type="text"
            placeholder="Name here"
            register={register}
            error={errors}
            required={true}
          />
          <Input
            label="Email"
            name="email"
            className={inputClass}
            type="email"
            placeholder="Email here"
            register={register}
            pattern={{
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            }}
            error={errors}
            required={true}
          />
          <Input
            label="Contact"
            name="number"
            className={inputClass}
            type="tel"
            placeholder="Contact here"
            register={register}
            error={errors}
            required={true}
          />
          <Input
            label="Subject"
            name="subject"
            className={inputClass}
            type="text"
            minLength={5}
            placeholder="Subject here"
            register={register}
            error={errors}
            required={true}
          />
          <TextArea
            label="Message"
            name="text"
            rows={6}
            minLength={10}
            className={"!bg-eerieBlack mt-[8px] lg:w-[568px] md:w-full md:!h-[190px] !h-[100px]"}
            placeholder="Enter here"
            register={register}
            error={errors}
            required={true}
          />
          <Button className="mt-[18px] " type="submit" disabled={isLoader} >
            {isLoader ? <Loader /> : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};
