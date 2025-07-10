/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { main_class } from "@utils/styles/javascript/main";
import { contact_classes } from "@utils/styles/javascript/contact";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import { styled } from "@mui/material/styles";
import { Controller, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contacts = () => {
  const classes = main_class();
  const contact_class = contact_classes();

  const [fetchLoading, setFetchLoading] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: `2px solid ${theme.palette.secondary.main}`,
        borderRadius: "0.8rem",
      },
    },
  }));

  const sendMessage = async ({ email, name, subject, message }) => {
    try {
      setFetchLoading(true);
      const templateParams = {
        from_name: name,
        to_name: "Daniel Amadi",
        subject: subject,
        reply_to: email,
        message: message,
      };

      // const send =emailjs.send()
      await emailjs
        .send(
          process.env.SERVICE_ID,
          process.env.TEMPLATE_ID,
          templateParams,
          process.env.USER_ID,
        )
        .then(
          (response) => {
            if (response.status === 200) {
              setFetchLoading(false);
              setValue("email", "");
              setValue("name", "");
              setValue("subject", "");
              setValue("message", "");
              toast.success(`SUCCESS... Message Sent!!!`);
            }
          },
          (err) => {
            setFetchLoading(false);
            toast.error(`FAILED... ${err.text}`);
          },
        );
    } catch (err) {
      setFetchLoading(false);
      toast.error(
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message,
      );
    }
  };

  return (
    <section id="contact">
      <Typography variant="h5">How can you reach me?</Typography>
      <Typography variant="h2" style={{ marginBottom: "4rem" }}>
        Get in touch
      </Typography>
      <div
        className={`${classes.container} ${contact_class.contact_container}`}
      >
        <div className={contact_class.contact_options}>
          <article className={contact_class.contact_option}>
            <MdOutlineMarkEmailUnread className={contact_class.contact_icon} />
            <Typography variant="h4">Email</Typography>
            <Typography variant="h5">hello@chimene.dev</Typography>
            <a
              href="mailto:hello@chimene.dev"
              className={`${classes.btn} ${classes.btn_contained}`}
            >
              Send a message
            </a>
          </article>
          <article className={contact_class.contact_option}>
            <RiWhatsappLine className={contact_class.contact_icon} />
            <Typography variant="h4">Whatsapp</Typography>
            <Typography variant="h5">+27783355292</Typography>
            <a
              href="https://wa.me/+27783355292"
              className={`${classes.btn} ${classes.btn_contained}`}
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form onSubmit={handleSubmit(sendMessage)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            }}
            render={({ field }) => (
              <StyledTextField
                variant="outlined"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                error={Boolean(errors.email)}
                helperText={
                  errors.email
                    ? errors.email.type === "pattern"
                      ? "Email is not valid"
                      : "Email is required"
                    : ""
                }
                {...field}
              />
            )}
          />
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <StyledTextField
                variant="outlined"
                id="name"
                label="Full Name"
                type="text"
                fullWidth
                error={Boolean(errors.name)}
                helperText={errors.name ? "Full name is required" : ""}
                {...field}
              />
            )}
          />
          <Controller
            name="subject"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <StyledTextField
                variant="outlined"
                id="subject"
                label="Subject"
                type="text"
                fullWidth
                error={Boolean(errors.name)}
                helperText={errors.name ? "Subject is required" : ""}
                {...field}
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <StyledTextField
                variant="outlined"
                id="message"
                label="Message"
                type="text"
                multiline
                minRows={5}
                fullWidth
                error={Boolean(errors.name)}
                helperText={errors.name ? "Message is required" : ""}
                {...field}
              />
            )}
          />
          <button
            type="submit"
            variant="contained"
            className={`${classes.btn} ${classes.btn_contained}`}
            disabled={fetchLoading}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
