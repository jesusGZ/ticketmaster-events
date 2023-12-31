import EventItem from "./components/EventItem";
const data;

const { _embedded: { events } } = data;

const Events = ({ searchTerm }) => {
    const handleEventItemClick = (id) => {
        console.log(id);
    };

    const renderEvents = () => {

        let eventsFiltered = events;

        if (searchTerm.length > 0) {
            eventsFiltered = eventsFiltered.filter((item) => { item.name.toLocaleLowerCase().includes(searchTerm) })
        }
        return (
            eventsFiltered.map((eventItem) => {
                <EventItem
                    key={`event-item-${eventItem.id}`}
                    name={eventItem.name}
                    info={eventItem.info}
                    image={eventItem.images[0].url}
                    onEventClick={handleEventItemClick}
                    id={eventItem.id}
                />
            })
        );
    };
    return (
        <div>
            Eventos
            {renderEvents()}
        </div>
    );
};

export default Events;