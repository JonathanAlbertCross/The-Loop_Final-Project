import Event from "./Event";

export default function EventList({ event }) {
  return event ? (
    event.map(
      ({
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
          />
        );
      }
    )
  ) : (
    <p>No events found.</p>
  );
}
