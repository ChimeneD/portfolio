import { TextField } from "@/components/text-field";
import { Typography } from "@/components/typography";
import { main_class } from "../../utils/styles/javascript/main";
import { contact_classes } from "../../utils/styles/javascript/contact";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { toast } from "sonner";
import * as Yup from "yup";

type ContactFormValues = {
  email: string;
  name: string;
  subject: string;
  message: string;
};

const initialValues: ContactFormValues = {
  email: "",
  name: "",
  subject: "",
  message: "",
};

const contactValidationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("Email is not valid")
    .required("Email is required"),
  name: Yup.string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .required("Full name is required"),
  subject: Yup.string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .required("Subject is required"),
  message: Yup.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const Contacts = () => {
  const classes = main_class();
  const contact_class = contact_classes();
  const formik = useFormik<ContactFormValues>({
    initialValues,
    validationSchema: contactValidationSchema,
    onSubmit: async ({ email, name, subject, message }, { resetForm }) => {
      try {
        const serviceId = process.env.SERVICE_ID;
        const templateId = process.env.TEMPLATE_ID;
        const userId = process.env.USER_ID;

        if (!serviceId || !templateId || !userId) {
          toast.error("Email service is not configured.");
          return;
        }

        const templateParams = {
          from_name: name,
          to_name: "Daniel Amadi",
          subject,
          reply_to: email,
          message,
        };

        const response = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          userId,
        );

        if (response.status === 200) {
          resetForm();
          toast.success("SUCCESS... Message Sent!!!");
        }
      } catch (err) {
        const message =
          err && typeof err === "object" && "text" in err
            ? String(err.text)
            : err instanceof Error
              ? err.message
              : "Message failed to send.";

        toast.error(`FAILED... ${message}`);
      }
    },
  });

  return (
    <section id="contact" className="py-28 pb-36 max-lg:py-20">
      <div className={`${classes.container} mb-14`} data-reveal="text">
        <Typography className="text-center" variant="h5">
          Contact
        </Typography>
        <Typography className="mx-auto mt-4 max-w-3xl text-center" variant="h2">
          Have a sharp idea, tricky product, or polished web build in mind?
        </Typography>
      </div>
      <div
        className={`${classes.container} ${contact_class.contact_container}`}
      >
        <div className={contact_class.contact_options} data-reveal="stagger-group">
          <article className={contact_class.contact_option} data-stagger-item>
            <MdOutlineMarkEmailUnread className={contact_class.contact_icon} />
            <Typography variant="h4">Email</Typography>
            <Typography variant="body2">hello@chimene.dev</Typography>
            <a
              href="mailto:hello@chimene.dev"
              className={`${classes.btn} ${classes.btn_contained}`}
            >
              Send a message
            </a>
          </article>
          <article className={contact_class.contact_option} data-stagger-item>
            <RiWhatsappLine className={contact_class.contact_icon} />
            <Typography variant="h4">Whatsapp</Typography>
            <Typography variant="body2">+27783355292</Typography>
            <a
              href="https://wa.me/+27783355292"
              className={`${classes.btn} ${classes.btn_contained}`}
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form onSubmit={formik.handleSubmit} data-reveal="image">
          <TextField
            name="email"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.email && formik.errors.email)}
            helperText={formik.touched.email ? formik.errors.email : ""}
          />
          <TextField
            name="name"
            id="name"
            label="Full Name"
            type="text"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.name && formik.errors.name)}
            helperText={formik.touched.name ? formik.errors.name : ""}
          />
          <TextField
            name="subject"
            id="subject"
            label="Subject"
            type="text"
            fullWidth
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.subject && formik.errors.subject)}
            helperText={formik.touched.subject ? formik.errors.subject : ""}
          />
          <TextField
            name="message"
            id="message"
            label="Message"
            type="text"
            multiline
            minRows={5}
            fullWidth
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.message && formik.errors.message)}
            helperText={formik.touched.message ? formik.errors.message : ""}
          />
          <button
            type="submit"
            className={`${classes.btn} ${classes.btn_contained}`}
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
