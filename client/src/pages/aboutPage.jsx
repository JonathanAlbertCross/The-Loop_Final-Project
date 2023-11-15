import axios from "axios";
import { useState, useEffect } from "react";

export default function About() {
  // You can use state and useEffect here if you want to fetch data dynamically

  // const [peopleData, setPeopleData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("your-api-endpoint");
  //     setPeopleData(response.data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <div className="About-Us">
        <div className="h2-About-Us"></div>
        <h2 className="About-People">About The People Who Made This Page</h2>
        /* Person 1 */
        <div className="person">
          <img
            src="{/* URL for Person 1's photo */}"
            alt="Person 1"
            className="person-photo"
          />
          <h3>Vicky</h3>
          <p>
            <strong>Location:</strong> Liverfool
          </p>
          <p>
            <strong>Hobbies:</strong> Rope dart
          </p>
          <p>
            <strong>Why This Project Is Important To Me:</strong>{" "}
            /* Why this project is important to them */
          </p>
        </div>

        /* Person 2 */
        <div className="person">
          <img
            src="{/* URL for Person 2's photo */}"
            alt="Person 2"
            className="person-photo"
          />
          <h3>/* Name */</h3>
          <p>
            <strong>Location:</strong> 
          </p>
          <p>
            <strong>Hobbies:</strong> 
          </p>
          <p>
            <strong>Why This Project Is Important To Me:</strong>{" "}
           /* Why this project is important to them */
          </p>
        
        </div>

       </div> 

       </div>
         
         );
         }