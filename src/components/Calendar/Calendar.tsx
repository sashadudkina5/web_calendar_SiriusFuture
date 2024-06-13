import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import "./styles.scss";
import { useAppSelector } from '../../service/store';
import { getSelectedSubject, getUserSchedule } from '../../service/selectors';
import { transformEvents } from '../../utils/helper-fuctions';
import { EventContentArg } from '@fullcalendar/core';


export default function Calendar () {
    const scheduleInfo =  useAppSelector(getUserSchedule);
const selectedSubject = useAppSelector(getSelectedSubject);

const events = transformEvents(
    selectedSubject ? scheduleInfo.filter(event => event.subjectName === selectedSubject) : scheduleInfo
  );

    const renderEventContent = (eventInfo: EventContentArg) => {
        const { start, end, title, extendedProps } = eventInfo.event;
        const startTime = new Date(start as Date).toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' });
        const endTime = end ? new Date(end as Date).toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' }) : '';
        const status = extendedProps.status;

        //styles depending on status
        let backgroundColor;
        let textDecoration;
        switch (status) {
            case 'attend':
                backgroundColor = '#D7F0D6';
                break;
            case 'rejected':
                backgroundColor = '#FFFFFF';
                textDecoration = "line-through";
                break;
            case 'pending':
                backgroundColor = '#F5F5F5';
                break;
            default:
                backgroundColor = '#FFFFFF';
        }

        return (
            <div style={{ backgroundColor, textDecoration, padding: '5px', borderRadius: '5px' }}>
                <div className="event-time">
                    {startTime} - {endTime}
                </div>
                <div className="event-title">
                    {title}
                </div>
            </div>
        );
    };


    return (
        <section className="calendar_section">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                locale="ru" 
                headerToolbar={{
                    left: 'prev',
                    center: 'title',
                    right: 'next today'
                }}
                events={events}
                eventContent={renderEventContent}
                firstDay={1}
                buttonText={{
                    today: 'Сегодня',
                    month: 'Месяц',
                    week: 'Неделя',
                    day: 'День',
                    list: 'Список'
                }}
                dayMaxEventRows={true}
                handleWindowResize={true}
            />
        </section>
    )
}   