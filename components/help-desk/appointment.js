import React, { useState } from 'react';
import style from '../../styles/HelpDesk.module.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Appointment() {
  const [value, onChange] = useState(new Date());
  return (
        <div className={style.right}>
            <p className={style.Title}>Book an appointment with IT Department</p>
            <div className={style.SecondContent}>
                <div className={style.top}>
                  <p className={style.title}>30 Minutes meeting</p>
                  <p className={style.desc}>Web conferencing details will be provided after confirmation</p>
                </div>
                <div className={style.bottom}>
                  <Calendar className={style.calendar} onChange={onChange} value={value}/>
                </div>
            </div>
            <div className={style.BtnDiv}>
              <button className={style.submitHelpDesk}>Book</button>
            </div>
        </div>
  )
}