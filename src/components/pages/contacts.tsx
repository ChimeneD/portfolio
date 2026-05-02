import { TextField } from "@/components/text-field";
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
    <section id="contact" className="site-section pb-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl" data-reveal="text">
          <span className="section-kicker">Get In Touch</span>
          <h2 className="section-title mt-5">
            Let us build something unmistakable.
          </h2>
          <p className="mt-5 text-base text-text-alt sm:text-lg">
            Bring the brief, the challenge, or just the first spark. We will map
            the right path quickly.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="space-y-4" data-reveal="stagger-group">
            <article className="section-shell p-5" data-stagger-item>
              <MdOutlineMarkEmailUnread className="text-2xl text-primary" />
              <h3 className="mt-3 text-2xl">Email</h3>
              <p className="mt-2 text-sm text-text-alt">hello@chimene.dev</p>
              <a
                href="mailto:hello@chimene.dev"
                className="mt-4 inline-flex border border-primary bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-primary"
              >
                Send a message
              </a>
            </article>
            <article className="section-shell p-5" data-stagger-item>
              <RiWhatsappLine className="text-2xl text-primary" />
              <h3 className="mt-3 text-2xl">WhatsApp</h3>
              <p className="mt-2 text-sm text-text-alt">+27 78 335 5292</p>
              <a
                href="https://wa.me/+27783355292"
                className="mt-4 inline-flex border border-border bg-card/75 px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open chat
              </a>
            </article>
          </div>

          <form
            className="section-shell space-y-4 p-5"
            onSubmit={formik.handleSubmit}
            data-reveal="image"
          >
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
              minRows={6}
              fullWidth
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.message && formik.errors.message)}
              helperText={formik.touched.message ? formik.errors.message : ""}
            />
            <button
              type="submit"
              className="inline-flex cursor-pointer items-center border border-primary bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-primary disabled:cursor-not-allowed disabled:opacity-70"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
