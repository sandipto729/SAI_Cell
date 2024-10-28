import React, { useState } from "react";
import TeamCard from "../../Components/TeamCard/TeamCard";
import styles from "./Team.module.scss";
import teamData from "../../../public/Team.json"; // Import JSON data

const Team = () => {
  const [selectedType, setSelectedType] = useState("All"); // State to track selected type

  // Group members by type
  const groupedMembers = teamData.reduce((acc, member) => {
    const { type } = member;
    if (!acc[type]) acc[type] = [];
    acc[type].push(member);
    return acc;
  }, {});

  // Handler for filter buttons
  const handleFilterClick = (type) => {
    setSelectedType(type);
  };

  return (
    <div className={styles.teamPage}>
      <h2 className={styles.teamTitle}>Meet Our Team</h2>
      
      {/* Filter buttons */}
      <div className={styles.filterButtons}>
        {["All", ...Object.keys(groupedMembers)].map((type) => (
          <button
            key={type}
            onClick={() => handleFilterClick(type)}
            className={`${styles.filterButton} ${selectedType === type ? styles.active : ""}`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Display team members based on selected type */}
      {Object.keys(groupedMembers).map((type) => (
        (selectedType === "All" || selectedType === type) && (
          <div key={type} className={styles.teamSection}>
            <h3 className={styles.teamSectionTitle}>{type}</h3>
            <div className={styles.teamGrid}>
              {groupedMembers[type].map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default Team;
