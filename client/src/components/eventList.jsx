import React from "react";
import Event from "./Event";
import "./EventList.css";

export default function EventList({ event }) {
  return event ? (
    <div className="event-list">
      {event.map(
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
      )}
    </div>
  ) : (
    <p className="no-events">No events found.</p>
  );
}
