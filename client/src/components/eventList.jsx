import Event from "./Event";

export default function EventList({ events, onUpdate, onDelete }) {
  return events && events.length > 0 ? (
    events.map(
      ({
        _id,
        OrganizerName,
        Name,
        Location,
        EventTitle,
        DateTime,
        Duration,
        Description,
        FilterTags,
        PictureOptionUpload,
        SocialMediaLink,
        TicketPrice,
        QuantityTickets,
      }) => {
        return (
          <Event
            key={_id}
            id={_id}
            OrganizerName={OrganizerName}
            Name={Name}
            Location={Location}
            EventTitle={EventTitle}
            DateTime={DateTime}
            Duration={Duration}
            Description={Description}
            FilterTags={FilterTags}
            PictureOptionUpload={PictureOptionUpload}
            SocialMediaLink={SocialMediaLink}
            TicketPrice={TicketPrice}
            QuantityTickets={QuantityTickets}
            onUpdate={() => onUpdate(_id)}
            onDelete={() => onDelete(_id)}
          />
        );
      }
    )
  ) : (
    <p>{events ? "No events found." : "Loading events..."}</p>
  );
}
