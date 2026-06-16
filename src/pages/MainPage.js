import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import SkillRadar from '../components/SkillRadar/SkillRadar';

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
            <div className="hero-radar-wrapper">
              <SkillRadar />
            </div>

            <div className="hero-description">
              <p>
                I am a Software Engineer, Data Engineer, Machine Learning Researcher, and problem solver passionate about building intelligent systems that turn complex processes into scalable, practical solutions.
                My work spans software engineering, data and cloud platforms, machine learning, and AI research. From modernizing legacy reporting systems at ANZ to developing deep learning models for medical image analysis, I enjoy working at the intersection of engineering, automation, and data-driven decision making.
              </p>
              <p>
                At ANZ, I lead the transformation of business-critical workflows by migrating legacy VBA applications into cloud-native Python solutions on AWS. This involves designing automated ETL pipelines, building tools that replace manual reporting processes, and delivering technology solutions that balance business needs with long-term maintainability.
              </p>
              <p>
                Previously at Resonate Solutions, I contributed to large-scale SaaS platforms used by leading retail brands, developing customer-facing features with Vue.js, TypeScript, C#, SQL, and Azure-based cloud services. Working in Agile environments strengthened my ability to deliver production-ready software while collaborating across technical and business teams.
              </p>
              <p>
                Alongside industry work, my research focuses on deep learning and medical image analysis. I design and develop machine learning pipelines, segmentation architectures, and computer vision systems using PyTorch, with a particular interest in applying AI to real-world healthcare challenges.
              </p>
              <p>
                What I bring beyond technical skills is strong communication and problem-solving. I learn quickly, stay organised, and approach complex problems by breaking them down logically and working through them step by step.
              </p>
              <p>
                I am also passionate about mentoring and education. As a University of Sydney tutor, I have guided students through software engineering, machine learning, and data science projects, helping bridge the gap between theory and practical implementation.
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
                  <span className="tech-tag">Firebase Authentication</span>
                  <span className="tech-tag">NoSQL</span>
                  <span className="tech-tag">API</span>
                </div>
                <div className="project-links">
                  <button className="project-link" onClick={openVideoModal}>
                    Demo Video
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

            <div className="project-card">
              <div className="project-image project-image-full">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/showcase.png`} 
                  alt="Image Segmentation Portal" 
                  className="project-image-full-img"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">Image Segmentation Portal</h3>
                <p className="project-description">
                  Interactive web portal for image segmentation using SAM (Segment Anything Model). 
                  Upload images and generate segmentation masks with overlay visualization. Perfect for 
                  medical image analysis, object detection, and computer vision applications.
                </p>
                <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">Gradio</span>
                <span className="tech-tag">SAM</span>
                <span className="tech-tag">Hugging Face</span>
                <span className="tech-tag">Computer Vision</span>
                <span className="tech-tag">Image Processing</span>
                <span className="tech-tag">AI Application</span>
                <span className="tech-tag">Cloud Inference</span>
                </div>
                <div className="project-links">
                  <Link to="/segmentation" className="project-link">
                    Open Portal ↗
                  </Link>

                <a 
                    href="https://github.com/zhlu4172/SAM_Integration" 
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
          <h2 className="section-title exp-title">Professional Experience</h2>
          <div className="experience-timeline">

            <div className="timeline-item timeline-item--anz">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="card-header">
                  <div className="card-header-left">
                    <h3 className="job-title">Experience Design Developer</h3>
                    <div className="job-meta">
                      <span className="company-name">ANZ</span>
                      <span className="meta-sep">·</span>
                      <span className="job-period">2026.2 – 2026.9</span>
                      <span className="meta-sep">·</span>
                      <span className="job-location">Sydney, Australia</span>
                    </div>
                  </div>
                  <span className="role-badge">Contract Full-time</span>
                </div>
                <div className="job-skills">
                  {["Python", "SQL", "CI/CD", "AWS S3 & Athena", "Agile", "ETL", "Foreign Exchange (FX)"].map(s => (
                    <span key={s} className="tech-tag">{s}</span>
                  ))}
                </div>
                <ul className="job-responsibilities">
                  <li>Built an automated Python pipeline that transformed FX trade reporting from a manual, error-prone process into a reliable, end-to-end system covering data cleaning, joining, calculation, and report generation.</li>
                  <li>Designed and developed scalable ETL pipelines using Python, SQL, Amazon S3, and Athena to process and transform FX market data for reporting and analytics.</li>
                  <li>Migrated legacy VBA applications to Python-based solutions on AWS, improving scalability, maintainability, and automation.</li>
                  <li>Built automated data validation frameworks to improve data quality, accuracy, and operational efficiency.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item timeline-item--resonate">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="card-header">
                  <div className="card-header-left">
                    <h3 className="job-title">Junior Software Engineer</h3>
                    <div className="job-meta">
                      <span className="company-name">Resonate Solutions</span>
                      <span className="meta-sep">·</span>
                      <span className="job-period">2025.6 – 2025.8</span>
                      <span className="meta-sep">·</span>
                      <span className="job-location">Sydney, Australia</span>
                    </div>
                  </div>
                  <span className="role-badge">Full-time</span>
                </div>
                <div className="job-skills">
                  {["C#", ".NET", "Vue.js", "TypeScript", "SQL", "Azure", "Python", "CI/CD", "Full Stack", "Agile"].map(s => (
                    <span key={s} className="tech-tag">{s}</span>
                  ))}
                </div>
                <ul className="job-responsibilities">
                  <li>Built and maintained end-to-end software features for high-profile enterprise clients (Rebel, Macpac, BCF), working closely with the team to meet changing business requirements.</li>
                  <li>Managed Azure App Services and DevOps pipelines, improving CI/CD reliability and deployment efficiency.</li>
                  <li>Delivered new features across full stack, focusing on smooth user experience.</li>
                  <li>Took ownership of the full development cycle, from technical design and implementation to debugging, code reviews, and production deployment.</li>
                  <li>Improved internal platforms by enhancing usability, scalability, and maintainability.</li>
                  <li>Collaborated effectively in Agile sprints, consistently delivering quality work within deadlines and adjusting quickly to new client priorities.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item timeline-item--resonate">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="card-header">
                  <div className="card-header-left">
                    <h3 className="job-title">Software Engineer Intern</h3>
                    <div className="job-meta">
                      <span className="company-name">Resonate Solutions</span>
                      <span className="meta-sep">·</span>
                      <span className="job-period">2024.12 – 2025.6</span>
                      <span className="meta-sep">·</span>
                      <span className="job-location">Sydney, Australia</span>
                    </div>
                  </div>
                  <span className="role-badge">Internship</span>
                </div>
                <div className="job-skills">
                  {["C#", ".NET", "Vue.js", "TypeScript", "SQL", "Azure", "Python", "CI/CD", "Full Stack", "Agile"].map(s => (
                    <span key={s} className="tech-tag">{s}</span>
                  ))}
                </div>
                <ul className="job-responsibilities">
                  <li>Built and maintained end-to-end software features for high-profile enterprise clients (Rebel, Macpac, BCF), working closely with the team to meet changing business requirements.</li>
                  <li>Managed Azure App Services and DevOps pipelines, improving CI/CD reliability and deployment efficiency.</li>
                  <li>Delivered new features across full stack, focusing on smooth user experience.</li>
                  <li>Took ownership of the full development cycle, from technical design and implementation to debugging, code reviews, and production deployment.</li>
                  <li>Improved internal platforms by enhancing usability, scalability, and maintainability.</li>
                  <li>Collaborated effectively in Agile sprints, consistently delivering quality work within deadlines and adjusting quickly to new client priorities.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item timeline-item--research">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="card-header">
                  <div className="card-header-left">
                    <h3 className="job-title">Machine Learning Research Fellow</h3>
                    <div className="job-meta">
                      <span className="company-name">USYD & Nepean Hospital</span>
                      <span className="meta-sep">·</span>
                      <span className="job-period">2023.12 – Present</span>
                    </div>
                  </div>
                  <span className="role-badge">Research</span>
                </div>
                <div className="job-skills">
                  {["PyTorch", "Python", "NumPy", "OpenCV", "Data Analysis", "Model Training", "Data Preprocessing", "Data Augmentation", "Texture Analysis"].map(s => (
                    <span key={s} className="tech-tag">{s}</span>
                  ))}
                </div>
                <ul className="job-responsibilities">
                  <li>Designed, trained, and optimised AMFA, an attention-based deep learning architecture for ultrasound sub-region segmentation, outperforming several existing baseline models.</li>
                  <li>Independently led the full research pipeline end to end — from data labelling and preprocessing, to model architecture design, training, validation, and evaluation.</li>
                  <li>Built reproducible research workflows in PyTorch, integrating model development, quantitative evaluation, and result interpretation for medical imaging studies.</li>
                  <li>Collaborated with academic supervisors and clinical partners across multidisciplinary teams to align research outcomes with clinical needs.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item timeline-item--tutor">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="card-header">
                  <div className="card-header-left">
                    <h3 className="job-title">Academic Tutor</h3>
                    <div className="job-meta">
                      <span className="company-name">University of Sydney</span>
                      <span className="meta-sep">·</span>
                      <span className="job-period">2024.3 – 2024.12</span>
                    </div>
                  </div>
                  <span className="role-badge">Part-time</span>
                </div>
                <ul className="job-responsibilities">
                  <li>Tutored computer science and IT courses focused on data science and machine learning in the healthcare domain.</li>
                  <li>HTIN5006: Foundations of Healthcare Data Science</li>
                  <li>HTIN5005: Applied Healthcare Data Science</li>
                  <li>INFO5992: Understanding IT Innovations</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item timeline-item--haircosys">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="card-header">
                  <div className="card-header-left">
                    <h3 className="job-title">Software Engineering Intern</h3>
                    <div className="job-meta">
                      <span className="company-name">HairCoSys</span>
                      <span className="meta-sep">·</span>
                      <span className="job-period">2022.12 – 2023.2</span>
                      <span className="meta-sep">·</span>
                      <span className="job-location">Hong Kong</span>
                    </div>
                  </div>
                  <span className="role-badge">Internship</span>
                </div>
                <div className="job-skills">
                  {["Python", "Data Analysis", "Tableau", "Pandas", "Automation Scripts", "Machine Learning"].map(s => (
                    <span key={s} className="tech-tag">{s}</span>
                  ))}
                </div>
                <ul className="job-responsibilities">
                  <li>Developed a data development pipeline from data extraction, blending, cleansing, and processing to model creation and result visualization.</li>
                  <li>Built an application to predict stock prices by learning from a large range of stock data.</li>
                  <li>Assisted in the execution of R&D projects and attended daily standup meetings with co-workers and supervisors.</li>
                  <li>Developed oral communication skills in a professional setting and built strong interpersonal relationships across a multidisciplinary team.</li>
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
