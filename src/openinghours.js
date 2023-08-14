import React, { useState, useEffect } from 'react';

function Openinghours() {
    const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const [currentDay, setCurrentDay] = useState('');
    const [isOpen, setIsOpen] = useState("false");

    const openingHours = [
        { day: 'Lundi', opens: 'Fermé', closes: 'Fermé' },
        { day: 'Mardi', opens: '06:00', closes: '19:00' },
        { day: 'Mercredi', opens: '06:00', closes: '19:00' },
        { day: 'Jeudi', opens: '06:00', closes: '19:00' },
        { day: 'Vendredi', opens: '06:00', closes: '19:00' },
        { day: 'Samedi', opens: '06:00', closes: '19:00' },
        { day: 'Dimanche', opens: '06:00', closes: '19:00' },
    ];

    const getCurrentDay = () => {
        const today = new Date().getDay();
        setCurrentDay(daysOfWeek[today]);
    };

    const checkIsOpen = () => {
        const now = new Date();
        const currentDaySchedule = openingHours.find(schedule => schedule.day === currentDay);

        if (currentDaySchedule) {
            const currentTime = now.getHours() * 60 + now.getMinutes();
            const opensTime = parseTime(currentDaySchedule.opens);
            const closesTime = parseTime(currentDaySchedule.closes);

            setIsOpen(currentTime >= opensTime && currentTime <= closesTime);
        } else {
            setIsOpen(false);
        }
    };
    const parseTime = (timeStr) => {
        const [hours, minutes] = timeStr.split(':').map(part => parseInt(part));
        return hours * 60 + minutes;
    };


    useEffect(() => {
        getCurrentDay();
        checkIsOpen();
        const interval = setInterval(checkIsOpen, 30000);
        return () => clearInterval(interval);
    }, [checkIsOpen, getCurrentDay]);

    const getRowContent = (schedule) => {
        if (schedule.opens === 'Fermé') {
            return <span className="centered-text">Fermé</span>;
        }
        return `${schedule.opens} - ${schedule.closes}`;
    };

    const getRowBackgroundColor = (scheduleDay) => {
        if (scheduleDay === currentDay) {
            return isOpen ? 'green' : 'red';
        }
        return '';
    };

    return (
        <section className="openinghours">
            <div className="openinghourscontent section">
                <div className="header">
                    <h2 className='header-heure'>Heure d'ouverture</h2>
                    <span id="open-status">
                        <small className={`openorclosed ${isOpen ? 'open' : 'closed'}`}>
                            {isOpen ? 'Nous sommes Ouvert' : 'Nous sommes Fermé'}
                        </small>
                    </span>
                </div>
                <table className="opening-hours-table">
                    <tbody>
                        {openingHours.map((schedule, index) => (
                            <tr
                                key={index}
                                id={schedule.day}
                                itemProp="openingHours"
                                style={{ color: getRowBackgroundColor(schedule.day) }}
                            >
                                <td>{schedule.day}</td>
                                <td className="opens">{getRowContent(schedule)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Openinghours;
