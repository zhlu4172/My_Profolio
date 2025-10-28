import React, { useState } from 'react';
import './MainPage.css';

const MainPage = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="main-page">
      <section 
        className="hero-section"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${process.env.PUBLIC_URL}/images/background.jpg) no-repeat center center/cover`
        }}
      >
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Hello, I'm Zhuyi Lu</h1>
            <p className="hero-subtitle">Software Engineer & ML Researcher</p>
            <div className="hero-description">
              <p>
                I am a software engineer and ML researcher with dual degrees from the University of Sydney: a First-Class Honours in Software Engineering and an MPhil in Computer Science specializing in machine learning and deep learning. My background spans both full-stack engineering and advanced deep learning research, allowing me to bridge practical development with innovative AI solutions.
              </p>
              
              <p>
                Currently, I work as a Junior Software Engineer at Resonate Solutions, a SaaS company, where I have spent almost a year building and enhancing client-facing features for leading brands such as Rebel, Macpac, and BCF. My role spans both frontend and backend development in an Agile, Azure-based environment, involving daily work with Vue.js, C#, MVC/MVP frameworks, SQL databases, and Azure DevOps, alongside CI/CD and cloud deployment practices.
              </p>
              
              <p>
                In parallel with my industry work, I conduct research in deep learning for medical image analysis as part of my MPhil. I have end-to-end experience designing and building machine learning pipelines, from data preprocessing and augmentation, to model training, evaluation, and result interpretation, which primarily use PyTorch and Python-based ML tools. My thesis work has involved designing segmentation architectures and applying texture-based analysis for clinical prediction.
              </p>
              
              <p>
                Additionally, I tutor machine learning and data science courses at the University of Sydney, where I guide students through both theory and practical implementation. This has further deepened my understanding of modern ML techniques and reinforced my ability to communicate complex technical concepts clearly. I'm a fast learner, strong communicator, and highly adaptable. Outside of work and research, I enjoy building iOS applications, which allows me to further explore software design and delivery from end to end.
              </p>
            </div>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <button className="btn btn-secondary" onClick={openContactModal}>Contact Me</button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/icon.png`} 
                  alt="Love Map Project" 
                  className="project-icon"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">Love Map</h3>
                <p className="project-description">
                Love Map is a mobile application designed to help users record their travel experiences, visualize the places they’ve visited, and share their adventures with friends or loved ones. It combines personal travel tracking with a social element, making it easy and fun to keep memories alive and foster friendly competition.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Swift</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Firebase</span>
                </div>
                <div className="project-links">
                  <button className="project-link" onClick={openVideoModal}>
                    Live Demo
                  </button>
                  <a 
                    href="https://github.com/zhlu4172/Love-Map" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="job-title">Junior Software Engineer</h3>
                <h4 className="company-name">Resonate Solutions</h4>
                <p className="job-period">2025.6 - 2025.8</p>
                <ul className="job-responsibilities">
                  <li>Engineered end-to-end software solutions for high-profile enterprise clients (Rebel, Macpac, BCF), leveraging C#, .NET, Vue.js, and SQL to meet complex and evolving business requirements</li>
                  <li>Orchestrated deployment pipelines and environment configuration using Azure tools (App Services, DevOps), enabling efficient CI/CD and stable cloud operations</li>
                  <li>Led feature development and system enhancements across both front-end and back-end stacks, ensuring seamless user experience and robust performance</li>
                  <li>Drove full-cycle delivery: from technical design and implementation to debugging, peer code reviews, and production deployment</li>
                  <li>Spearheaded improvements to internal platforms, significantly enhancing system usability, scalability, and maintainability</li>
                  <li>Performed efficiently in Agile sprints, consistently delivering high-quality code under tight deadlines and adapting to changing client needs</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="job-title">Software Engineer Intern</h3>
                <h4 className="company-name">Resonate Solutions</h4>
                <p className="job-period">2025.1 - 2025.6</p>
                <ul className="job-responsibilities">
                  <li>Engineered end-to-end software solutions for high-profile enterprise clients (Rebel, Macpac, BCF), leveraging C#, .NET, Vue.js, and SQL to meet complex and evolving business requirements</li>
                  <li>Orchestrated deployment pipelines and environment configuration using Azure tools (App Services, DevOps), enabling efficient CI/CD and stable cloud operations</li>
                  <li>Led feature development and system enhancements across both front-end and back-end stacks, ensuring seamless user experience and robust performance</li>
                  <li>Drove full-cycle delivery: from technical design and implementation to debugging, peer code reviews, and production deployment</li>
                  <li>Spearheaded improvements to internal platforms, significantly enhancing system usability, scalability, and maintainability</li>
                  <li>Performed efficiently in Agile sprints, consistently delivering high-quality code under tight deadlines and adapting to changing client needs</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="job-title">Academic Tutor</h3>
                <h4 className="company-name">The University of Sydney</h4>
                <p className="job-period">2024.3 - 2024.12</p>
                <ul className="job-responsibilities">
                  <li>Responsible for tutoring several computer science and IT courses focused on data science and machine learning in the healthcare domain</li>
                  <li>Tutored HTIN5006: Foundations of Healthcare Data Science</li>
                  <li>Tutored HTIN5005: Applied Healthcare Data Science</li>
                  <li>Tutored INFO5992: Understanding IT Innovations</li>
                  <li>Guided students through both theoretical concepts and practical implementation</li>
                  <li>Deepened understanding of modern ML techniques and reinforced ability to communicate complex technical concepts clearly</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="job-title">Software Engineering Intern</h3>
                <h4 className="company-name">HairCoSys - Hong Kong</h4>
                <p className="job-period">2022.12 - 2023.2</p>
                <ul className="job-responsibilities">
                  <li>Assisted in the execution of R&D projects and attended daily standup meetings with co-workers and supervisors</li>
                  <li>Developed strong oral communication skills in professional settings through clear and effective communication under heavy time constraints</li>
                  <li>Developed a comprehensive data development pipeline from data extraction, blending, cleansing, and processing to model creation and result visualization</li>
                  <li>Built an application to predict stock prices by learning from large ranges of stock data</li>
                  <li>Worked effectively with individuals across multi-level, multi-disciplinary, and multi-cultural dimensions, understanding the value of alternate viewpoints in improving project outcomes</li>
                  <li>Developed great interpersonal relationships with all co-workers and was asked to return to the workplace in the future</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">
                <div className="university-logo">
                  <img 
                    src="/images/uniLogo.webp" 
                    alt="University of Sydney Logo" 
                    className="logo-image"
                  />
                </div>
              </div>
              <div className="education-content">
                <h3 className="degree-title">Bachelor of Engineering Honours (Software)</h3>
                <h4 className="university-name">University of Sydney</h4>
                <p className="education-period">2020.2 - 2023.12</p>
                  <ul className="education-achievements">
                    <li>Achieved High Distinctions in key software engineering subjects including Software Development Project, Agile Practices, and Internet Software Platforms</li>
                    <li>Continued strong performance in final year with High Distinctions in Cloud Computing and Object-Oriented Frameworks</li>
                    <li>Developed an enhanced ultrasound segmentation model and an automated texture analysis pipeline for thesis, earning the Vern Kenna Award</li>
                    <li>Recognised on the Dean's List for Excellence in Academic Performance in final year</li>
                  </ul>
                  <div className="education-highlights">
                    <span className="highlight-tag">WAM: 79</span>
                    <span className="highlight-tag">Honours Class I Division I</span>
                    <span className="highlight-tag">Vern Kenna Award</span>
                    <span className="highlight-tag">2023 Dean's List</span>
                  </div>
              </div>
            </div>

            <div className="education-card">
              <div className="education-icon">
                <div className="university-logo">
                  <img 
                    src="/images/uniLogo.webp" 
                    alt="University of Sydney Logo" 
                    className="logo-image"
                  />
                </div>
              </div>
              <div className="education-content">
                <h3 className="degree-title">Master of Philosophy (Computer Science)</h3>
                <h4 className="university-name">University of Sydney</h4>
                <p className="education-period">2024.3 - 2025.9</p>
                <p className="education-description">
                Research fellow in  Biomedical Data Analysis and Visualisation (BDAV) Lab, mainly focused on ML, DL in ultrasound image segmentation and classification, fetal brain ultrasound scan. 
                </p>
                <div className="education-highlights">
                  <span className="highlight-tag">Ultrasound</span>
                  <span className="highlight-tag">Deep Learning/Machine Learning</span>
                  <span className="highlight-tag">BioMedical Image Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="video-modal-overlay" onClick={closeVideoModal}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideoModal}>
              ×
            </button>
            <div className="video-container">
              <video 
                controls 
                muted
                className="demo-video"
                preload="metadata"
              >
                <source src={`${process.env.PUBLIC_URL}/videos/liveDemo.mov`} type="video/quicktime" />
                <source src={`${process.env.PUBLIC_URL}/videos/liveDemo.mov`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-info">
              <h3>Love Map Demo</h3>
              <p>Watch the interactive 3D globe and travel tracking features in action!</p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="contact-modal-overlay" onClick={closeContactModal}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button className="contact-modal-close" onClick={closeContactModal}>
              ×
            </button>
            <div className="contact-content">
              <h3>Get In Touch</h3>
              <p>I'd love to hear from you! Feel free to reach out.</p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <a href="mailto:luzhuyi13169@gmail.com">luzhuyi13169@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <a href="tel:+61412345678">+61 406 418 613</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div className="contact-details">
                    <h4>Location</h4>
                    <p>Sydney, Australia</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">💼</span>
                  <div className="contact-details">
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/emma-lu-703646202/" target="_blank" rel="noopener noreferrer">
                    https://www.linkedin.com/in/emma-lu-703646202/ ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
