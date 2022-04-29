import React from 'react';
import { Typography } from '@mui/material';
import { skill_classes } from '@utils/styles/javascript/skill';
import { main_class } from '@utils/styles/javascript/main';
import { HiBadgeCheck } from 'react-icons/hi';

const Skills = () => {
  const classes = main_class();
  const skill_class = skill_classes();
  return (
    <section id='skills'>
      <Typography variant='h5'>What skill do I have?</Typography>
      <Typography variant='h2' style={{ marginBottom: '4rem' }}>
        My Skills
      </Typography>
      <div className={`${classes.container} ${skill_class.skill_container}`}>
        <div className={skill_class.skill_frontend}>
          <Typography variant='h3'>Frontend Development</Typography>
          <div className={skill_class.skill_content}>
            <article className={skill_class.skill_details}>
              <HiBadgeCheck className={skill_class.skill_icon} />
              <div>
                <Typography variant='h4'>HTML</Typography>
                <small>Experienced</small>
              </div>
            </article>
            <article className={skill_class.skill_details}>
              <HiBadgeCheck className={skill_class.skill_icon} />
              <div>
                <Typography variant='h4'>CSS</Typography>
                <small>Intermediate</small>
              </div>
            </article>
            <article className={skill_class.skill_details}>
              <HiBadgeCheck className={skill_class.skill_icon} />
              <div>
                <Typography variant='h4'>Javascript</Typography>
                <small>Intermediate</small>
              </div>
            </article>
            <article className={skill_class.skill_details}>
              <HiBadgeCheck className={skill_class.skill_icon} />
              <div>
                <Typography variant='h4'>ReactJS</Typography>
                <small>Experienced</small>
              </div>
            </article>
            <article className={skill_class.skill_details}>
              <HiBadgeCheck className={skill_class.skill_icon} />
              <div>
                <Typography variant='h4'>Material UI</Typography>
                <small>Intermediate</small>
              </div>
            </article>
            <article className={skill_class.skill_details}>
              <HiBadgeCheck className={skill_class.skill_icon} />
              <div>
                <Typography variant='h4'>UI/UX-Figma</Typography>
                <small>Basic</small>
              </div>
            </article>
          </div>
        </div>
        <div className={skill_class.skill_backend}>
          <Typography variant='h3'>Backend Development</Typography>
          <div className={skill_class.skill_content}>
            <article className={skill_class.skill_details}>
              <HiBadgeCheck className={skill_class.skill_icon} />
              <div>
                <Typography variant='h4'>MongoDB</Typography>
                <small>Intermediate</small>
              </div>
            </article>
            <article className={skill_class.skill_details}>
              <HiBadgeCheck className={skill_class.skill_icon} />
              <div>
                <Typography variant='h4'>NodeJS</Typography>
                <small>Intermediate</small>
              </div>
            </article>
            <article className={skill_class.skill_details}>
              <HiBadgeCheck className={skill_class.skill_icon} />
              <div>
                <Typography variant='h4'>PHP</Typography>
                <small>Basic</small>
              </div>
            </article>
            <article className={skill_class.skill_details}>
              <HiBadgeCheck className={skill_class.skill_icon} />
              <div>
                <Typography variant='h4'>MySQL</Typography>
                <small>Basic</small>
              </div>
            </article>
            <article className={skill_class.skill_details}>
              <HiBadgeCheck className={skill_class.skill_icon} />
              <div>
                <Typography variant='h4'>Python</Typography>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
