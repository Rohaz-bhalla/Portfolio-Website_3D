import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GSoC-Contributor</h4>
                <h5>Google</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
            Google Summer of Code (GSoC) Contributor – [Organization Name] (2024)
             Worked on an open-source project under [GFOSS]
            Collaborated with mentors and developers globally to improve and optimize the codebase.
             Implemented [Code Optimization], resulting in [Smooth UI/UX].
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Spark Contibutor</h4>
                <h5>Statusbrew</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            [SkillSprints By StatusBrew] – [StatusBrew] (2024)
             Developed [Women SOS], a [An App Based on Women Safety], using [Node.js & MySQL].
              Achieved [2nd Runner ups] among [18] participants.
               Collaborated with a team of [4] developers to solve real-world problems efficiently.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student</h4>
                <h5>Guru Nanak Dev University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            Electronics and Computer Engineering – [Guru Nanak Dev University] (2019-2023)
             Pursuing a Bachelor’s degree in Electronics and Computer Engineering.
              Achieved a CGPA of [6.78] in [6] semesters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
