import React, { useEffect } from "react";
import "./nothing.css";

const AboutUS = () => {

  useEffect(() => {
    const setup3D = (containerClass) => {
      const container = document.querySelector(containerClass);
      if (!container) return;

      const img = container.querySelector("img");

      const move = (e) => {
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        const rotateY = (x - 0.5) * 20;
        const rotateX = (0.5 - y) * 10;

        container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        img.style.transform = "scale(1.05)";
      };

      const reset = () => {
        container.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        img.style.transform = "scale(1)";
      };

      container.addEventListener("mousemove", move);
      container.addEventListener("mouseleave", reset);

      return () => {
        container.removeEventListener("mousemove", move);
        container.removeEventListener("mouseleave", reset);
      };
    };

    const clean1 = setup3D(".image-container");
    const clean2 = setup3D(".image-container1");

    return () => {
      clean1 && clean1();
      clean2 && clean2();
    };
  }, []);

  return (
   <div>
  <div className="sec">
    <label className="l2"><b>Lastest Events</b></label>
    <p className="p1">
      Stay updated with the most exciting and recent happenings on campus! Our
      Latest Events section brings you a curated list of upcoming and recently
      held college events — from cultural fests and hackathons to seminars,
      workshops, sports meets, and club activities.
    </p>
    <div className="gallery">
      <div className="img1">
        <img src="https://newhorizoncollegeofengineering.in/wp-content/uploads/2024/07/DSC06494.jpg" className="im1" alt=""/>
      </div>
      <div className="img2">
        <img src="https://www.todaysorlando.com/sites/default/files/styles/cover/public/events/cover/art_festival_winter_park_juried_orlando.jpg?itok=K3ru1Suy" className="im2" alt="" />
      </div>
      <div className="img3">
        <img src="https://img.freepik.com/premium-photo/male-singer-stage-rock-concert-performance-with-blue-lights-vocalist-with-guitar_817921-39160.jpg?w=360" className="im3" alt="" />
      </div>
    </div>
  </div>
  <div className="HR">
  <hr style={{border: '2px solid #000000', opacity: 1}} />
  <br /><br />
  {/* First About Section */}
  <div className="about-section">
    <div className="image-container">
      <img src="https://etimg.etb2bimg.com/photo/91152948.cms" alt="" />
    </div>
    <div className="about-content">
      <input type="button" defaultValue="Vision" className="b1" />
      <br />
      <label className="l3">Driven By A Good Vision</label>
      <br />
      <p className="p2">"To create a dynamic, user-friendly digital platform that simplifies and enhances the planning, promotion, and participation of college events—fostering a vibrant and well-connected campus community through seamless communication and collaboration."</p>
    </div>
  </div>
  {/* Second About Section */}
  <div className="about-section">
    <div className="about-content">
      <input type="button" defaultValue="Work" className="b2" />
      <br />
      <label className="l4">What We Do?</label>
      <br />
      <p className="p3">We help manage college events easily through a single online platform. From creating events to handling registrations and updates, we make the entire process simple, fast, and organized for both students and event organizers.</p>
    </div>
    <div className="image-container1">
      <img src="https://i.pinimg.com/1200x/85/df/5b/85df5b9bda45d4edaa10c94b92e4b7e7.jpg" alt="" />
    </div>
  </div>
  </div>
  {/* About Us Section */}
  <div className="aboutus">
    <div className="aboutus-content">
      <label className="l5">We Make Your Work Easy And Efficient....!</label>
      <p className="p4">We make your tasks easier by providing a simple platform to create, manage, and promote college events. From registrations to updates, everything is handled smoothly in one place.</p>
    </div>
  </div>
</div>

  );
};

export default AboutUS;
