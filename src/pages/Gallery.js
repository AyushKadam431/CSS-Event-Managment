import React, { useState } from "react";
import "./Gallery.css";

// List of events
const allEvents = [
  { title: "Annual Music Fest", date: "March 15, 2026", location: "IIT Bombay, Powai, Mumbai", prize: "₹5,000", image: "https://www.hindustantimes.com/ht-img/img/2025/12/16/original/mood_1765877134709_1765877145891.JPEG", mapLink: "https://www.google.com/maps?q=IIT+Bombay,+Mumbai" },
  { title: "College Tech Expo", date: "April 10, 2026", location: "St. Xavier's College, Fort, Mumbai", prize: "₹3,000", image: "https://www.techbuzznews.com/content/images/2025/04/Screenshot-2025-04-24-at-4.25.02-PM.png", mapLink: "https://www.google.com/maps?q=St.+Xavier's+College,+Mumbai" },
  { title: "Dance Competition", date: "May 5, 2026", location: "Mithibai College, Vile Parle West, Mumbai", prize: "₹2,500", image: "https://www.dancewavescompetition.com/media/images/20170808072349_home_banner_01.jpg", mapLink: "https://www.google.com/maps?q=Mithibai+College,+Mumbai" },
  { title: "Art Festival", date: "June 20, 2026", location: "H.R. College, Churchgate, Mumbai", prize: "₹1,500", image: "https://pabucketlist.com/wp-content/uploads/2022/07/State-College-Arts-Fest-Centre-County-PA.jpg", mapLink: "https://www.google.com/maps?q=H.R.+College,+Mumbai" },
  { title: "Fashion Show", date: "July 10, 2026", location: "KC College, Churchgate, Mumbai", prize: "₹2,000", image: "https://newhorizonindia.edu/extra-curricular/fashion/wp-content/uploads/sites/7/2024/12/mahabharat-e1734705689782-1024x583.jpg", mapLink: "https://www.google.com/maps?q=KC+College,+Mumbai" },
  { title: "Coding Hackathon", date: "August 5, 2026", location: "VJTI, Matunga, Mumbai", prize: "₹3,500", image: "https://user-images.githubusercontent.com/32462195/71546083-0a7eeb80-29b9-11ea-9666-c5becb26fce3.jpg", mapLink: "https://www.google.com/maps?q=VJTI+Mumbai" },
  { title: "Photography Contest", date: "September 12, 2026", location: "NMIMS, Vile Parle, Mumbai", prize: "₹1,200", image: "https://i0.wp.com/www.nrtec.in/wp-content/uploads/2018/12/photography-contest-NEC.jpg?resize=1170%2C780&ssl=1", mapLink: "https://www.google.com/maps?q=NMIMS+Mumbai" },
  { title: "Sports Fest", date: "October 1, 2026", location: "University of Mumbai, Fort, Mumbai", prize: "₹4,000", image: "https://www.wellbeing4life.co.uk/wellbeingforlife/images/Sports_Fest_timetable_800x600.jpg", mapLink: "https://www.google.com/maps?q=University+of+Mumbai" },
  { title: "Theatre Drama", date: "November 15, 2026", location: "St. Xavier's College, Mumbai", prize: "₹1,800", image: "https://media.istockphoto.com/id/1295114854/photo/empty-red-armchairs-of-a-theater-ready-for-a-show.jpg?s=612x612&w=0&k=20&c=0rDtwzMmLbqe_8GuGw2dpjkD0MsXGywJmdmg0jDbMxQ=", mapLink: "https://www.google.com/maps?q=St.+Xavier's+College,+Mumbai" },
  { title: "Startup Pitch", date: "December 5, 2026", location: "NMIMS, Vile Parle West, Mumbai", prize: "₹5,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_LIcwJLtEnFqx74NB1CzHo5RjSy3bPaa-g&s", mapLink: "https://www.google.com/maps?q=NMIMS+Mumbai" },
  { title: "Cultural Fest", date: "January 20, 2027", location: "Mithibai College, Mumbai", prize: "₹2,500", image: "https://img1.wsimg.com/isteam/stock/ub69pPpJ27t6nR13E/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true", mapLink: "https://www.google.com/maps?q=Mithibai+College,+Mumbai" },
  { title: "Business Quiz", date: "February 10, 2027", location: "JBIMS, Churchgate, Mumbai", prize: "₹3,000", image: "https://idaa2k17.wordpress.com/wp-content/uploads/2017/02/quiz.png", mapLink: "https://www.google.com/maps?q=JBIMS,+Mumbai" }
];

const Gallery = () => {
  const [visible, setVisible] = useState(8);

  const handleViewMore = () => {
    setVisible(prev => prev + 5);
  };

  return (
    <section className="gallery-section">
      <h1 className="gallery-title">Our Events & Locations</h1>

      <div className="event-info-container">
        {allEvents.slice(0, visible).map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-card-content">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                <p>
                  <strong>Location:</strong>{" "}
                  <a href={event.mapLink} target="_blank" rel="noopener noreferrer">
                    {event.location}
                  </a>
                </p>
                <p><strong>Prize:</strong> {event.prize}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visible < allEvents.length && (
        <div className="view-more-container">
          <button className="b1" onClick={handleViewMore}>View More</button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
