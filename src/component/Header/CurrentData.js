import React, { useState, useEffect } from 'react';

import classes from './CurrentData.module.css';

const date = new Date();
const week = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];

const CurrentData = () => {
  const [currentDate, setCurrentDate] = useState({});

  useEffect(() => {
    setCurrentDate({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      date: date.getDate(),
      day: week[date.getDay()],
    });
  }, []);

  return (
    <div>
      <div className={classes.day}>
        {currentDate.year}년 {currentDate.month}월 {currentDate.date}일
      </div>
      <div className={classes.weekday}>{currentDate.day}</div>
    </div>
  );
};

export default CurrentData;
