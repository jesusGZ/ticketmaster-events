import EventItem from "./components/EventItem";
const data;

const { _embedded: { events } } = data;

const Events = () => {
    const handleEventItemClick = (id) => {
        console.log(id);
    };

    return (
        <div>
            Eventos
            {events.map((eventItem) => {
                <EventItem
                    key={`event-item-${eventItem.id}`}
                    name={eventItem.name}
                    info={eventItem.info}
                    image={eventItem.images[0].url}
                    onEventClick={handleEventItemClick}
                    id={eventItem.id}
                />
            })}
        </div>
    );
};

export default Events;