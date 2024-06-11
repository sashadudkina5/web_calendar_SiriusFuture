import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import "./styles.scss";


export default function Calendar () {


    const events = [
        {
            title: 'Meeting with Team',
            start: '2024-06-12T10:00:00',
            end: '2024-06-12T11:00:00',
            status: 'attend'
        },
        {
            title: 'Lunch Break',
            start: '2024-06-12T12:00:00',
            end: '2024-06-12T13:00:00',
            status: 'pending'
        },
        {
            title: 'Conference Call',
            start: '2024-06-13T15:00:00',
            end: '2024-06-13T16:00:00',
            status: 'rejected'
        },
        {
            title: 'Birthday Party',
            start: '2024-06-15T18:00:00',
            end: '2024-06-15T21:00:00',
            status: 'attend'
        }
    ];


    const renderEventContent = (eventInfo: any) => {
        const { start, end, title, extendedProps } = eventInfo.event;
        const startTime = start.toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' });
        const endTime = end ? end.toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' }) : '';
        const status = extendedProps.status;

        // Determine the background color based on the status
        let backgroundColor;
        switch (status) {
            case 'attend':
                backgroundColor = '#8BC34A'; // Green
                break;
            case 'rejected':
                backgroundColor = '#F44336'; // Red
                break;
            case 'pending':
                backgroundColor = '#FFC107'; // Yellow
                break;
            default:
                backgroundColor = '#FFFFFF'; // Default color
        }

        return (
            <div style={{ backgroundColor, padding: '5px', borderRadius: '5px' }}>
                <div>
                    {startTime} - {endTime}
                </div>
                <div>
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
            />
        </section>
    )
}   