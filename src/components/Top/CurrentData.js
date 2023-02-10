import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';

const CurrentDateBox = styled.div`
  padding: 0;
  margin: 0;
  font-size: 30px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

const CurrentDayBox = styled.div`
  padding: 0;
  margin-top: 10px;
  color: gray;
  font-family: Arial, Helvetica, sans-serif;
`;

const CurrentDate = () => {
  const [today, setToday] = useState({});

  useEffect(() => {
    setToday(() => {
      const currentDate = new Date();
      const week = ['일', '월', '화', '수', '목', '금', '토'];

      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();
      const weekDay = week[currentDate.getDay()];

      return {
        year: year,
        month: month,
        day: day,
        weekDay,
      };
    });
  }, []);

  return (
    <Fragment>
      <CurrentDateBox>
        {today.year}년 {today.month}월 {today.day}일
      </CurrentDateBox>
      <CurrentDayBox>{today.weekDay}요일</CurrentDayBox>
    </Fragment>
  );
};

export default CurrentDate;
