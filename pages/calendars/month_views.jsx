import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function FullCalendarApp() {
    const events = [
        {
            id: 1,
            title: "event 1",
            start: "2023-02-10",
            end: "2023-03212",
        },
        {
            id: 2,
            title: "event 2",
            start: "2023-02-15",
            end: "2023-02-16",
        },
        {
            id: 3,
            title: "event 3",
            start: "2023-02-20",
            end: "2023-02-21",
        },

    ];


  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          center: "dayGridMonth,timeGridWeek,timeGridDay new",
        }}
        customButtons={{
          new: {
            text: "new",
            click: () => console.log("new event"),
          },
        }}
        events={events}
        eventColor="red"
        nowIndicator
        dateClick={(e) => console.log(e.dateStr)}
        eventClick={(e) => console.log(e.event.id)}
      />
    </div>
  );
}
