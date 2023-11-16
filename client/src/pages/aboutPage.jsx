import "./home.css";

export default function About() {

  return (
  
     <div className="About-Us">
       <h2 className="About-People">About The People Who Made This Page</h2>
        <div className="theTeam">
        <div className="Vicky">
          <img
            src="https://i.ibb.co/Tc9X8kP/20191104-154249.jpg"
            alt="Vicky"
            className="photo"
          />
          <div className="VickyInfo">
          <u><h2>Vicky</h2></u>
          <p>
            <strong>Location:</strong>  Liverfool
          </p>
          <p>
            <strong>Hobbies:</strong>  Rope dart, swing dancing, video and board games
          </p>
          <p>
            <strong>Why This Project Is Important To Me:</strong>
             <p>Vienna by Ultravox</p>
          </p>
          </div>
        </div>

       
        <div className="Jonathan">
          <img src="https://i.ibb.co/7S4GZ0X/Screenshot-2023-11-15-at-12-02-02.png" alt="Jonathan"
            className="photo"
          />
          <u><h2>Jonathan</h2></u>
          <p>
            <strong>Location:</strong> Cambridge
          </p>
         
          <p>
            <strong>Hobbies:</strong>  Open water swimming, opera.
          </p>
          
          <p>
            <strong>Why This Project Is Important To Me:</strong>
             <p>Having a website for the LGBT community is important to me because it provides a space for connection, support, and empowerment, offering valuable resources, representation, and a sense of belonging in a safe and inclusive environment.</p>
          </p>
        
        </div>

        <div className="Cailum">
          <img src="https://i.ibb.co/MGtjVSh/Cailum-photo.png/" alt="Cailum" 
          className="photo"
          />
          <u><h2>Cailum</h2></u>
          <p>
            <strong>Location:</strong> Liverpool
          </p>
          <p>
            <strong>Hobbies:</strong> Hiking, skiing, leaving the house.
          </p>
          <p>
            <strong>Why This Project is Important To Me:</strong>
            <p>As a member of the LGBTQ+ community, it is important to have sites like these encouraging and supporting underrepresented members of the tech industry and create spaces and opportunities so that it is the norm for the near future. Having events such as these and seeing people from marginalised communities fostering innovation is inspirational for those new to come in the world of tech.
          </p>
          </p>

         </div>
        </div>


       </div> 

  
       
  );
         }