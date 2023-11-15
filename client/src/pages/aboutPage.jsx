import "./home.css";

export default function About() {

  return (
  
      <div className="About-Us">
        <h2 className="About-People">About The People Who Made This Page</h2>
        
        <div className="Vicky">
          <img
            src="https://i.ibb.co/Tc9X8kP/20191104-154249.jpg"
            alt="Vicky"
            className="vicky-photo"
          />
          <h3>Vicky</h3>
          <p>
            <strong>Location:</strong>  Liverfool
          </p>
          <p>
            <strong>Hobbies:</strong>  Rope dart, swing dancing, video and board games
          </p>
          <p>
            <strong>Why This Project Is Important To Me:</strong>
             Vienna by Ultravox
          </p>
        </div>

       
        <div className="Jonathan">
          <img src="https://i.ibb.co/7S4GZ0X/Screenshot-2023-11-15-at-12-02-02.png" alt="Jonathan"
            className="jonathan-photo"
          />
          <h3>Jonathan</h3>
          <p>
            <strong>Location:</strong>  Cambridge
          </p>
          <p>
            <strong>Hobbies:</strong>  Open water swimming, opera.
          </p>
          <p>
            <strong>Why This Project Is Important To Me:</strong>
             Having a website for the LGBT community is important to me because it provides a space for connection, support, and empowerment, offering valuable resources, representation, and a sense of belonging in a safe and inclusive environment.
          </p>
        </div>

        <div className="Cailum">
          <img src="https://i.ibb.co/MGtjVSh/Cailum-photo.png/" alt="Cailum" 
          className="cailum-photo"
          />
          <h3>Cailum</h3>
          <p>
            <strong>Location:</strong> Liverpool
          </p>
          <p>
            <strong>Hobbies:</strong> Hiking, skiing, leaving the house.
          </p>
          <p>
            <strong>Why This Project is Important To Me:</strong>
            As a member of the LGBTQ+ community, it is important to have sites like these encouraging and supporting underrepresented members of the tech industry and create spaces and opportunities so that it is the norm for the near future. Having events such as these and seeing people from marginalised communities fostering innovation is inspirational for those new to come in the world of tech.
          </p>
        </div>


       </div> 

  
       
  );
         }