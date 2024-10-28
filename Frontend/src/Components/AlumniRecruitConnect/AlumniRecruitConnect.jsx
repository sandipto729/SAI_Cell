import styles from './AlumniRecruitConnect.module.scss';

function AlumniRecruitConnect() {
  return (
    <div className={styles.container}>
      <h1>Alumni Recruit Connect</h1>
      <p className={styles.intro}>
        The current job scenario has turned out to be very unpredictable for engineering students due to some mild or not so mild global economic mistakes, which is indeed a matter of concern. Thinking too much about these things may prove counter-productive for the students.
      </p>
      <p className={styles.intro}>
        But the students of our institution need not worry so much about the things going on around them, and focus on their career goals. Every student has his/her “dream” company/institution but has to compromise due to lack of experience as they have no one to guide them.
      </p>
      <p className={styles.intro}>
        Students’ Alumni Interaction Cell, NIT Durgapur has launched an initiative, <span className={styles.highlight}>Alumni Recruit Connect</span>, which will facilitate the above purpose and help the students to gain some insight into the industry and prepare themselves accordingly for the upcoming challenges.
      </p>
      <p className={styles.intro}>
        Now, how will that happen, who will guide, whom to approach? Don’t worry. The ones who were there in the same boat a few years back as you are now, the alumni of NIT Durgapur, will help you in this daunting mission.
      </p>
      <div className={styles.purpose}>
        <h2>Purpose of ARC</h2>
        <ul>
          <li>Alumni-Student Interaction through seminars, eminent lectures, or meet-ups.</li>
          <li>Awareness of prospect graduates about their alumni serving at various organizations.</li>
          <li>Student-Alumni networking and interaction with alumni members.</li>
        </ul>
      </div>
      <div className={styles.credentials}>
        <h2>Credentials for Alumni</h2>
        <ul>
          <li>Help the students by guiding them for placements and career path.</li>
          <li>Interact with the current students and help them in networking.</li>
          <li>Offer positions to students in their organizations.</li>
        </ul>
      </div>
      <div className={styles.credentials}>
        <h2>Credentials for Students</h2>
        <ul>
          <li>Interact and network with their alumni.</li>
          <li>Learn from the experiences of their seniors and avoid common pitfalls.</li>
          <li>Maintain a good rapport with stakeholders of various organizations.</li>
        </ul>
      </div>
    </div>
  );
}

export default AlumniRecruitConnect;
