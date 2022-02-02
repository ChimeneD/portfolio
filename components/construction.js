import React, { useState, useEffect } from 'react';
import Layout from './layout';
import { Card, CircularProgress, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { classes } from '@utils/classes';

const Construction = () => {
  const theClass = classes();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [text, setText] = useState('');
  const countDown = () => {
    // Set the date we're counting down to
    let countDownDate = new Date('Feb 22, 2022 15:37:25').getTime();
    // Update the count down every 1 second
    let x = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();
      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Output the result in an element with id="demo"
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        setText('EXPIRED!');
      }
    }, 1000);
  };
  useEffect(() => {
    countDown();
  }, [seconds]);
  return (
    <Layout title="Home">
      <Card
        className={theClass.cardContainer}
        style={{ justifyContent: 'center' }}
      >
        <CircularProgress />
        <Typography>Website still under construction</Typography>
        <Typography variant="h3">February 22nd:</Typography>
        <Typography variant="h1">{`${days}d ${hours}h ${minutes}m ${seconds}s`}</Typography>
        {text ? <Typography>{text}</Typography> : ''}
      </Card>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(Construction), { ssr: false });
