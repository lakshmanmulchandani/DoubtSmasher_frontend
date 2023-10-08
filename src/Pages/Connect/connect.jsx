import React, { useState, useEffect } from "react";

const ConnectPage = ({ userProfiles }) => {
  const [matchingProfiles, setMatchingProfiles] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState("");

  useEffect(() => {
    if (selectedInterest) {
      const matches = userProfiles.filter((profile) =>
        profile.interests.includes(selectedInterest)
      );
      setMatchingProfiles(matches);
    } else {
      setMatchingProfiles([]);
    }
  }, [selectedInterest, userProfiles]);

  return (
    <div>
      <h2>Connect with People</h2>
      <div>
        <label>Select an Interest:</label>
        <select
          value={selectedInterest}
          onChange={(e) => setSelectedInterest(e.target.value)}
        >
          <option value="">All Interests</option>
          {userProfiles
            .flatMap((profile) => profile.interests)
            .filter((value, index, self) => self.indexOf(value) === index)
            .map((interest, index) => (
              <option key={index} value={interest}>
                {interest}
              </option>
            ))}
        </select>
      </div>
      <h3>Matching Profiles:</h3>
      <ul>
        {matchingProfiles.map((profile, index) => (
          <li key={index}>
            <strong>Interests:</strong> {profile.interests.join(", ")},{" "}
            <strong>Looking to Connect:</strong>{" "}
            {profile.lookingToConnect ? "Yes" : "No"},{" "}
            <strong>Location:</strong> {profile.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConnectPage;
