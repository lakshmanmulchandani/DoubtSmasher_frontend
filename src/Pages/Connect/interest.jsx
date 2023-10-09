import React, { useState } from "react";
import {useDispatch} from "react-redux";
import postInterest from "../../actions/interest";
const ProfileForm = ({ onSubmit }) => {
  const [interests, setInterests] = useState([]);
  const [lookingToConnect, setLookingToConnect] = useState(false);
  const [location, setLocation] = useState("within-campus");

 const dispatch = useDispatch();

  const handleInterestChange = (e) => {
    const value = e.target.value;
    console.log(e);
    // Split the input value by spaces
    const interestArray = value.split(" ");

    // Filter out empty values and store only interests separated by space
    const validInterests = interestArray.filter((interest) => interest !== "");

    setInterests(validInterests);
  };

  const handleInterestRemove = (value) => {
    setInterests(interests.filter((interest) => interest !== value));
  };

  const handleSubmit = (e) => {
     e.preventDefault();
    console.log("hel");
    dispatch(
     postInterest({ interests, lookingToConnect, location })
      )
  };

  return (
    <div>
      <h2>Profile Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Study Interests (Multiple tags):</label>
          <input
            type="text"
            placeholder="Enter an interest"
            onChange={handleInterestChange}
          />
          <div>
            {interests.map((interest, index) => (
              <span key={index} onClick={() => handleInterestRemove(interest)}>
                {interest} &#x2715;
              </span>
            ))}
          </div>
        </div>
        <div>
          <label>Looking to Connect:</label>
          <input
            type="checkbox"
            checked={lookingToConnect}
            onChange={() => setLookingToConnect(!lookingToConnect)}
          />
        </div>
        <div>
          <label>Location:</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="within-campus">Online</option>
            <option value="outside">Amul Parlor</option>
            <option value="within-campus">Library</option>
            <option value="outside">CDC</option>
            <option value="outside">Hostel</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfileForm;
