
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="slideshow">
        <div className="red"></div>
        <h1 className="l1">College Event <br/> Management Website</h1>
        <img
          src="https://1015.com/wp-content/uploads/2020/01/NYE1015GRYFFIN_20191231_137.jpg"
          className="slide"
          alt=""
        />
        <img
          src="https://1015.com/wp-content/uploads/2019/11/DSC_1836.jpg"
          className="slide"
          alt=""
        />
        <img
          src="https://1015.com/wp-content/uploads/2020/01/DSC_7248.jpg"
          className="slide"
          alt=""
        />
        <button className="button1">Explore More</button>
      </div>

      <div className="sec">
        <h2 className="l2">Latest Events</h2>
        <p className="p1">
          Stay updated with the most exciting and recent happenings on campus! Our
          Latest Events section brings you a curated list of upcoming and recently
          held college events — from cultural fests and hackathons to seminars,
          workshops, sports meets, and club activities.
        </p>

        <div className="gallery">
          <div className="img1">
            <img
              src="https://www.seismicdanceevent.com/wp-content/uploads/2024/04/20230519_Day-1_CT_4534.jpg"
              className="im1"
              alt=""
            />
            <div className="messsage1">
              <label className="lable3">Danco Fest 25'</label>
            </div>
          </div>
          <div className="img2">
            <img
              src="https://horecfex.com/en/wp-content/uploads/2024/08/Horecfex-1.jpg"
              className="im2"
              alt=""
            />
            <div className="messsage2">
              <label className="lable4">Hackaton 25'</label>
            </div>
          </div>
          <div className="img3">
            <img
              src="https://ogden_images.s3.amazonaws.com/www.altoonamirror.com/images/2019/07/03093401/Sidewalk-sale-with-banners-1100x732.jpg"
              className="im3"
              alt=""
            />
            <div className="messsage3">
              <label className="lable5">Artusium 25'</label>
            </div>
          </div>
        </div>
      </div>

      <div className="abouthome">
        <div className="aboutushome">
          <h2 className="lable6">ABOUT US</h2>
          <p className="psg2">
            This platform serves as a centralized hub for students, faculty, and
            organizers to stay connected and informed about all college
            happenings. From cultural festivals and technical symposiums to
            workshops and guest lectures — we ensure every event is well-organized
            and accessible to all. <br /><br />
            Driven by technology and designed with
            simplicity, our goal is to make event management smarter, faster, and
            more engaging. Join us in building a more connected and vibrant
            college experience.
          </p>
        </div>

        <div className="white">
          <img src="https://cdn-icons-png.flaticon.com/128/4883/4883508.png" className="img4" alt="Security"/>
          <label><b>Security & Privacy</b></label>
          <label>Show users that their data is protected</label>
          <img src="https://cdn-icons-png.flaticon.com/128/3316/3316606.png" className="img5" alt="Mission"/>
          <label><b>Mission & Vision</b></label>
          <label>Why your platform exists and what future <br/> you aim for.</label>
          <img src="https://cdn-icons-png.flaticon.com/128/1344/1344761.png" className="img6" alt="Multi-college"/>
          <label><b>Multi-College Support</b></label>
          <label>Explain how each college gets its own admin panel and students can easily find their college's events.</label>
        </div>
      </div>

      
    </>
  );
}
