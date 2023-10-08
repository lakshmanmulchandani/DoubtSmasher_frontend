import React, { useState } from "react";

const ProfileForm = ({ onSubmit }) => {
  const [interests, setInterests] = useState([]);
  const [lookingToConnect, setLookingToConnect] = useState(false);
  const [location, setLocation] = useState("within-campus");

  const handleInterestChange = (e) => {
    const value = e.target.value;
    if (!interests.includes(value)) {
      setInterests([...interests, value]);
    }
  };

  const handleInterestRemove = (value) => {
    setInterests(interests.filter((interest) => interest !== value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ interests, lookingToConnect, location });
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
            <option value="within-campus">Within Campus</option>
            <option value="outside">Outside</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfileForm;
