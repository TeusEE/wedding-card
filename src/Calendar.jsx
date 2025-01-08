import React from 'react';
import './Calendar.css'; // CSS 파일을 임포트합니다.

const Calendar = () => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const daysInMonth = 31;
  const firstDayOfMonth = new Date(2025, 6, 1).getDay(); // 6월은 0부터 시작하므로 6은 7월

  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<td key={`empty-${i}`}></td>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(
      <td key={day} className={day === 13 ? 'special-day' : ''}>
        {day}
      </td>
    );
  }

  const rows = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    const week = calendarDays.slice(i, i + 7);
    rows.push(
      <tr key={`row-${i}`}>
        {week.map((day, index) => (
          <td key={index} className={(day.key==="13") ? "special-day": (index===0)?'sunday' : ''}>
            {day.props.children}
          </td>
        ))}
      </tr>
    );
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}> 
      <table className="calendar">
        <thead>
          <tr>
            {daysOfWeek.map((day, index) => (
              <th key={index} className={index === 0 ? 'sunday' : ''}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;