import React from 'react';
import { Typography } from '@mui/material';
import { main_class } from '@utils/styles/javascript/main';
import { contact_classes } from '@utils/styles/javascript/contact';

const Contacts = () => {
  const classes = main_class();
  const contact_class = contact_classes();
  return (
    <section id='contact'>
      <Typography variant='h5'>How can you reach me?</Typography>
      <Typography variant='h2'>My Contact</Typography>
      <div
        className={`${classes.container} ${contact_class.contact_container}`}
      ></div>
    </section>
  );
};

export default Contacts;
