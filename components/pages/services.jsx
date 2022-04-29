import React from 'react';
import { Typography } from '@mui/material';
import { main_class } from '@utils/styles/javascript/main';
import { service_classes } from '@utils/styles/javascript/services';

import { GiCheckMark } from 'react-icons/gi';

const Services = () => {
  const classes = main_class();
  const service_class = service_classes();
  return (
    <section id='services'>
      <Typography variant='h5'>What services do I offer?</Typography>
      <Typography variant='h2'>My Services</Typography>
      <div
        className={`${classes.container} ${service_class.service_container}`}
      >
        <article className={service_class.services}>
          <div className={`${service_class.service_header}`}>
            <Typography variant='h3'>UI/UX Design</Typography>
          </div>
          <ul className={`${service_class.service_list}`}>
            <li>
              <GiCheckMark className={service_class.service_list_icon} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className={service_class.service_list_icon} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className={service_class.service_list_icon} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className={service_class.service_list_icon} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className={service_class.services}>
          <div className={`${service_class.service_header}`}>
            <Typography variant='h3'>Web Development</Typography>
          </div>
          <ul className={`${service_class.service_list}`}>
            <li>
              <GiCheckMark className={service_class.service_list_icon} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className={service_class.service_list_icon} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className={service_class.service_list_icon} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className={service_class.service_list_icon} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}
        <article className={service_class.services}>
          <div className={`${service_class.service_header}`}>
            <Typography variant='h3'>Content Creation</Typography>
          </div>
          <ul className={`${service_class.service_list}`}>
            <li>
              <GiCheckMark className={service_class.service_list_icon} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className={service_class.service_list_icon} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className={service_class.service_list_icon} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <GiCheckMark className={service_class.service_list_icon} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
