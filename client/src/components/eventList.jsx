import React from "react";
import Event from "./Event";
import "./EventList.css";

export default function EventList({ events, onUpdate, onDelete }) {
  return events && events.length > 0 ? (
   <div className="event-list">
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
   </div>
  ) : (
    <p className="no-events">{events ? "No events found." : "Loading events..."}</p>
  );
}
