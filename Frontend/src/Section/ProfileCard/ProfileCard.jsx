import React, { useState } from 'react';
import styles from './ProfileCard.module.scss';

const TeacherCard = ({ teacher, customStyles }) => {

  return (
    <div className={styles.teacherCard} style={customStyles?.card}>
      <img src={teacher.profileImage} alt={teacher.name} className={styles.profilePic} style={customStyles?.profilePic} />
      <h3 style={customStyles?.name}>{teacher.name}</h3>
    </div>
  );
};

export default TeacherCard;