import Navbar from "./components/NavBar";
import Contactinfo from "./components/ContactInfo";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Title />
      <AboutMe />
      <SkillsAchievementsGoals />
      <Resume />
      <Contactinfo />
    </div>
  );
}

export default App;

const Title = () =>{
  return (
    <h1 className="title">Jorge Lujan</h1>
  );
}

const AboutMe = () =>{
  return (
    <section className="AboutMe">
      <h2 className="AboutMetitle">About Me</h2>
      <ul>
          <li className="abme">I am currently a Junior at the University of Arizona completing a Bachelor of Science in
              Software
              Engineering.</li>
          <li className="abme">I was born in the city of Tucson, AZ, but I was raised in a small border town in Mexico
              where I lived
              until I was 18 years old.</li>
          <li className="abme">During the past two years, I have gained experience on several programming languages such
              as: C, C++,
              Python, Javascript, Java, HTML, CSS, and Verilog. This experience has come from some of my courses as
              well as personal projects.</li>
          <li className="abme">In the next year, I am expecting to complete courses and personal projects that will allow
              me to become
              more profficient in C++, Java, and Python, as well as gaining some basic knowledge of Assembly language.
          </li>
          <li className="abme">During my first three semesters at the University of Arizona, I worked for the department
              of Campus
              Recreation, where I began as a Facility Attendant and eventually got promoted to Facility Manager after
              being named the 2021 Attendant of the Year.</li>
          <li className="abme">I am currently working a student position as an IT Support Analyst for the University's
              department of
              Facilities Management, which has taught me many valuable skills when it comes to troubleshooting and
              operating a Windows environment.</li>
          <li className="abme">I am currently looking for opportunities as an intern to gain more knowledge and experience
              in the
              field.</li>
      </ul>
    </section>
  );
}

const SkillsAchievementsGoals = () =>{
  return (
    <div className="ASG-container">
      <Achievements />
      <Skills />
      <Goals />
    </div>
  );
}

const Achievements = () =>{
  return (
    <div className="ASG">
      <h2 className="ASG-titles">Achievements</h2>
      <ul className="ASG-list">
          <li className="ASG-points">2x AZ Merit Excellence Award in English and Math (2018, 2019)</li>
          <li className="ASG-points">4x Diamond Scholar Award (2018, 2019, 2020, 2021)</li>
          <li className="ASG-points">Ranked top 5% of class at Douglas High School. (2021)</li>
          <li className="ASG-points">Graduated from Douglas High School with Honors and a 3.98 GPA. (2021)</li>
          <li className="ASG-points">Received a score of 4.0 on AP Physics II Exam. (2021)</li>
          <li className="ASG-points">Winter Sports Athlete of the Year at Douglas High School (2021)</li>
          <li className="ASG-points">James and Grace Logie Scholar (2021)</li>
          <li className="ASG-points">Dean's List (2021)</li>
          <li className="ASG-points">Henry W. Oliver Scholar (2022)</li>
          <li className="ASG-points">Tim Christopherson Scholar (2022, 2023)</li>
          <li className="ASG-points">Charles Blixt Memorial Scholar (2022, 2023)</li>
          <li className="ASG-points">Academic Year Academic Distinction (2022, 2023)</li>
          <li className="ASG-points">Dean's List with Distinction (2022, 2023)</li>
          <li className="ASG-points">Cupiss Scholar (2023)</li>
          <li className="ASG-points">Goodding-Anderson Scholar (2023)</li>
      </ul>
    </div>
  );
}

const Skills = () =>{
  return (
    <div className="ASG">
      <h2 className="ASG-titles">Skills</h2>
            <ul className="ASG-list">
                <li className="ASG-points">Python</li>
                <li className="ASG-points">C</li>
                <li className="ASG-points">C++</li>
                <li className="ASG-points">Java</li>
                <li className="ASG-points">Javascript</li>
                <li className="ASG-points">HTML5</li>
                <li className="ASG-points">CSS</li>
                <li className="ASG-points">Verilog</li>
                <li className="ASG-points">Git</li>
                <li className="ASG-points">Git Bash</li>
                <li className="ASG-points">Command Prompt</li>
                <li className="ASG-points">Github</li>
                <li className="ASG-points">Visual Studio Code</li>
                <li className="ASG-points">Visual Studio Enterprise</li>
                <li className="ASG-points">Jupyter Notebook</li>
                <li className="ASG-points">Microsoft Azure</li>
                <li className="ASG-points">Microsoft Active Directory</li>
                <li className="ASG-points">Microsoft Office</li>
                <li className="ASG-points">Vivado</li>
            </ul>
    </div>
  );
}

const Goals = () => {
  return (
    <div className="ASG">
      <h2 className="ASG-titles">Goals</h2>
      <ul className="ASG-list">
          <li className="ASG-points">Gain more profficiency in C++, Java, and Python.</li>
          <li className="ASG-points">Learn the basics of cybersecurity.</li>
          <li className="ASG-points">Improve my physical condition and strength.</li>
          <li className="ASG-points">Improve my written and verbal communication skills.</li>
      </ul>
    </div>
  );
}

const Resume = () =>{
  return (
    <>
      <h2 className="resume-title">Resume</h2>
      <div className="res">
        <iframe src="./Resume.pdf" loading="lazy" width="100%" height="50%" className="Resume" title="resume"></iframe>
      </div>
      <p className="download"><a id="dwnld" href="./Resume.pdf" download="Resume.pdf">Download</a></p>
    </>
  );
}
