import styles from './AlumniIntern.module.scss';

function AlumniInternship() {
  return (
    <div className={styles.container}>
      <h1>Alumni Internship Mentorship</h1>
      <p className={styles.intro}>
        Most of the students step into the field of engineering with dreams and aspirations of getting placed in reputed organizations immediately after graduating, pursuing higher studies in foreign universities, or becoming a job-giver unlike being a job-seeker. For all the above cases, students need to have a prerequisite knowledge and a practical experience of how things are executed in the industry; in the real world, for which they start early right from their sophomore year by approaching the professors of reputed institutes, and the industries for training.
      </p>
      <p className={styles.intro}>
        The projects, trainings, and internship, will help them gain knowledge and will give them hands-on experience in the industry. In such cases, who will be better than the <span className={styles.highlight}>alumni</span> who have been once in their shoes, and graduated from the very same institute, NIT Durgapur and by now due to their extensive hard work have achieved excellence? Alumni Intern Mentorship is an initiative launched by Students’ Alumni Interaction Cell, NIT Durgapur which gives the students a golden opportunity to avail the mentorship and guidance required for the internship or training.
      </p>
      <p className={styles.intro}>
        How to apply, whom to look for, which organization to go for — now no more of such dilemmas or worries. Our highly qualified alumni who are experts in their domains, will help the students to gain some insight into these questions and thus will be able to guide the students in the best possible way.
      </p>
      <div className={styles.purpose}>
        <h2>Purpose of AIM</h2>
        <ul>
          <li>Awareness about the internship/training programs for experience.</li>
          <li>Opportunity to serve the organizations headed by our alumni as a trainee/intern.</li>
          <li>Develop bonding between students and alumni by working with them as a trainee.</li>
        </ul>
      </div>
      <div className={styles.credentials}>
        <h2>Credentials for Alumni</h2>
        <ul>
          <li>Guide the prospect engineers in career building.</li>
          <li>Interact with the current students and help them in gaining hands-on experience about the things they learn in classrooms/labs.</li>
          <li>Offer training roles (summer/winter trainee) to students in their organizations.</li>
        </ul>
      </div>
      <div className={styles.credentials}>
        <h2>Credentials for Students</h2>
        <ul>
          <li>Learn from the alumni of our institution as an intern.</li>
          <li>Participate in the internship drives launched by the alumni.</li>
          <li>Make life-long bonding with the alumni members who are part of reputed organizations.</li>
        </ul>
      </div>
    </div>
  );
}

export default AlumniInternship;
