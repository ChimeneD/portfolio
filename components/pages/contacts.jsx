/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { TextField, Typography } from '@mui/material';
import { main_class } from '@utils/styles/javascript/main';
import { contact_classes } from '@utils/styles/javascript/contact';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { RiWhatsappLine } from 'react-icons/ri';

const Contacts = () => {
  const classes = main_class();
  const contact_class = contact_classes();
  return (
    <section id='contact'>
      <Typography variant='h5'>How can you reach me?</Typography>
      <Typography variant='h2' style={{ marginBottom: '4rem' }}>
        Get in touch
      </Typography>
      <div
        className={`${classes.container} ${contact_class.contact_container}`}
      >
        <div className={contact_class.contact_options}>
          <article className={contact_class.contact_option}>
            <MdOutlineMarkEmailUnread className={contact_class.contact_icon} />
            <Typography variant='h4'>Email</Typography>
            <Typography variant='h5'>chimenejnr@gmail.com</Typography>
            <a
              href='mailto:chimenejnr@gmail.com'
              className={`${classes.btn} ${classes.btn_contained}`}
            >
              Send a message
            </a>
          </article>
          <article className={contact_class.contact_option}>
            <RiWhatsappLine className={contact_class.contact_icon} />
            <Typography variant='h4'>Whatsapp</Typography>
            <Typography variant='h5'>+27783355292</Typography>
            <a
              href='https://wa.me/+27783355292'
              className={`${classes.btn} ${classes.btn_contained}`}
              target='_blank'
            >
              Send a message
            </a>
          </article>
        </div>
        <form>
          <TextField
            placeholder='Full Name'
            label='Full Name'
            variant='outlined'
            fullWidth
          />
          <TextField
            placeholder='Email Address'
            label='Email Address'
            fullWidth
          />
          <TextField placeholder='Subject' label='Email Subject' fullWidth />
          <TextField
            placeholder='Message'
            multiline
            minRows={4}
            label='Email Message'
            fullWidth
          />
          <button
            type='submit'
            variant='contained'
            className={`${classes.btn} ${classes.btn_contained}`}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
