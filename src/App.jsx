import "./App.css";

function App() {
  const skills = [
    "Python",
    "Java",
    "SQL",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Linux",
    "Machine Learning",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "YOLOv8",
  ];

  return (
    <main>
      <section className="hero">
        <img
          src="./images/profile.jpg"
          alt="Devina Yashwanth Kumar"
          className="profile-img"
        />

        <h1>Devina Yashwanth Kumar</h1>
        <h3>Software Engineer | Backend Developer | Python & Java Developer</h3>

        <p>
          Building scalable applications, AI-powered solutions, and real-world
          software systems using Python, Java, SQL, React, and Machine Learning.
        </p>

        <div className="buttons">
          <a href="./resume/resume.pdf" target="_blank">
            Resume
          </a>
          <a href="https://github.com/yashwanth562" target="_blank">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yashwanth-kumar-devina"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="card">
        <h2>About Me</h2>
        <p>
          Aspiring Software Engineer with strong skills in Python, Java, SQL,
          React, Machine Learning and Computer Vision. Passionate about building
          scalable applications and solving real-world problems through
          technology.
        </p>
      </section>

      <section className="card">
        <h2>Technical Skills</h2>
        <div className="skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Projects</h2>

        <div className="project">
          <h3>Real-Time Multi-Modal Traffic Violation Detection System</h3>
          <p className="tech">
            Python • YOLOv8 • TensorFlow • PyTorch • OpenCV
          </p>
          <p>
            Developed a real-time traffic violation detection system for helmet
            detection, driver monitoring, traffic light violation detection, and
            vehicle speed estimation using deep learning and computer vision.
          </p>
        </div>

        <div className="project">
          <h3>Customer Segmentation Using RFM Analysis</h3>
          <p className="tech">Python • SQL • Data Analysis</p>
          <p>
            Built a customer segmentation solution using RFM analysis to study
            customer purchasing behavior and identify high-value customer groups
            for business decision-making.
          </p>
        </div>

        <div className="project">
          <h3>Crowd Counting Using CNN</h3>
          <p className="tech">Python • CNN • OpenCV • Deep Learning</p>
          <p>
            Developed a crowd counting system using Convolutional Neural
            Networks to estimate crowd density from images and support public
            space monitoring.
          </p>
        </div>
      </section>

      <section className="card">
        <h2>Education</h2>
        <p>
          <strong>B.Tech in Computer Science Engineering</strong>
          <br />
          Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and
          Technology
          <br />
          CGPA: 8.3 | 2022 - 2026
        </p>
      </section>

      <section className="card">
        <h2>Certifications</h2>
        <p>Java Programming Fundamentals, Infosys Springboard</p>
        <p>Introduction to IBM z/OS</p>
      </section>

      <section className="card contact">
        <h2>Contact</h2>
        <p>Email: yashwanthkumar4867@gmail.com</p>
        <p>GitHub: github.com/yashwanth562</p>
        <p>LinkedIn: linkedin.com/in/yashwanth-kumar-devina</p>
      </section>
    </main>
  );
}

export default App;
