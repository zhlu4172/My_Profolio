import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-page">
      <div className="container">
        <h1 className="page-title">Professional Experience</h1>
        
        <div className="experience-detailed">

          <div className="experience-card">
            <div className="experience-header">
              <h2 className="job-title">Junior Software Engineer</h2>
              <h3 className="company-name">Resonate Solutions</h3>
              <p className="job-period">2025.6 - 2025.8</p>
            </div>
            <div className="experience-content">
              <p className="job-description">
                Developing end-to-end software solutions for high-profile enterprise clients in a SaaS environment, 
                working with both frontend and backend technologies in an Agile, Azure-based development environment.
              </p>
              <div className="job-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  <li>Engineered end-to-end software solutions for high-profile enterprise clients (Rebel, Macpac, BCF), leveraging C#, .NET, Vue.js, and SQL to meet complex and evolving business requirements</li>
                  <li>Orchestrated deployment pipelines and environment configuration using Azure tools (App Services, DevOps), enabling efficient CI/CD and stable cloud operations</li>
                  <li>Led feature development and system enhancements across both front-end and back-end stacks, ensuring seamless user experience and robust performance</li>
                  <li>Drove full-cycle delivery: from technical design and implementation to debugging, peer code reviews, and production deployment</li>
                  <li>Spearheaded improvements to internal platforms, significantly enhancing system usability, scalability, and maintainability</li>
                  <li>Performed efficiently in Agile sprints, consistently delivering high-quality code under tight deadlines and adapting to changing client needs</li>
                </ul>
              </div>
              <div className="job-technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  <span className="tech-tag">C#</span>
                  <span className="tech-tag">.NET</span>
                  <span className="tech-tag">Vue.js</span>
                  <span className="tech-tag">SQL</span>
                  <span className="tech-tag">Azure</span>
                  <span className="tech-tag">Azure DevOps</span>
                  <span className="tech-tag">CI/CD</span>
                  <span className="tech-tag">Agile</span>
                </div>
              </div>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <h2 className="job-title">Software Engineer Intern</h2>
              <h3 className="company-name">Resonate Solutions</h3>
              <p className="job-period">2025.1 - 2025.6</p>
            </div>
            <div className="experience-content">
              <p className="job-description">
                Collaborated with senior developers on full-stack web applications, 
                contributing to both frontend and backend development in a fast-paced startup environment.
              </p>
              <div className="job-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                <li>Engineered end-to-end software solutions for high-profile enterprise clients (Rebel, Macpac, BCF), leveraging C#, .NET, Vue.js, and SQL to meet complex and evolving business requirements</li>
                  <li>Orchestrated deployment pipelines and environment configuration using Azure tools (App Services, DevOps), enabling efficient CI/CD and stable cloud operations</li>
                  <li>Led feature development and system enhancements across both front-end and back-end stacks, ensuring seamless user experience and robust performance</li>
                  <li>Drove full-cycle delivery: from technical design and implementation to debugging, peer code reviews, and production deployment</li>
                  <li>Spearheaded improvements to internal platforms, significantly enhancing system usability, scalability, and maintainability</li>
                  <li>Performed efficiently in Agile sprints, consistently delivering high-quality code under tight deadlines and adapting to changing client needs</li>
                </ul>
              </div>
              <div className="job-technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">RESTful APIs</span>
                  <span className="tech-tag">Git</span>
                  <span className="tech-tag">Agile</span>
                  <span className="tech-tag">Full-stack Development</span>
                </div>
              </div>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <h2 className="job-title">Academic Tutor</h2>
              <h3 className="company-name">The University of Sydney</h3>
              <p className="job-period">2024.3 - 2024.12</p>
            </div>
            <div className="experience-content">
              <p className="job-description">
                Tutored computer science and IT courses focused on data science and machine learning 
                in the healthcare domain, guiding students through theoretical concepts and practical implementation.
              </p>
              <div className="job-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  <li>Responsible for tutoring several computer science and IT courses focused on data science and machine learning in the healthcare domain</li>
                  <li>Tutored HTIN5006: Foundations of Healthcare Data Science</li>
                  <li>Tutored HTIN5005: Applied Healthcare Data Science</li>
                  <li>Tutored INFO5992: Understanding IT Innovations</li>
                  <li>Guided students through both theoretical concepts and practical implementation</li>
                  <li>Deepened understanding of modern ML techniques and reinforced ability to communicate complex technical concepts clearly</li>
                </ul>
              </div>
              <div className="job-technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  <span className="tech-tag">Healthcare Data Science</span>
                  <span className="tech-tag">Machine Learning</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Data Analysis</span>
                  <span className="tech-tag">IT Innovation</span>
                  <span className="tech-tag">Teaching</span>
                </div>
              </div>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <h2 className="job-title">Software Engineering Intern</h2>
              <h3 className="company-name">HairCoSys - Hong Kong</h3>
              <p className="job-period">2022.12 - 2023.2</p>
            </div>
            <div className="experience-content">
              <p className="job-description">
                Participated in R&D projects and data science initiatives, working in a multi-cultural, 
                multi-disciplinary environment with focus on data pipeline development and machine learning applications.
              </p>
              <div className="job-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  <li>Assisted in the execution of R&D projects and attended daily standup meetings with co-workers and supervisors</li>
                  <li>Developed strong oral communication skills in professional settings through clear and effective communication under heavy time constraints</li>
                  <li>Developed a comprehensive data development pipeline from data extraction, blending, cleansing, and processing to model creation and result visualization</li>
                  <li>Built an application to predict stock prices by learning from large ranges of stock data</li>
                  <li>Worked effectively with individuals across multi-level, multi-disciplinary, and multi-cultural dimensions, understanding the value of alternate viewpoints in improving project outcomes</li>
                  <li>Developed great interpersonal relationships with all co-workers and was asked to return to the workplace in the future</li>
                </ul>
              </div>
              <div className="job-technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Data Science</span>
                  <span className="tech-tag">Machine Learning</span>
                  <span className="tech-tag">Data Pipeline</span>
                  <span className="tech-tag">Stock Analysis</span>
                  <span className="tech-tag">R&D</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-items">
                <span className="skill-item">React</span>
                <span className="skill-item">Vue.js</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">TypeScript</span>
                <span className="skill-item">HTML5</span>
                <span className="skill-item">CSS3</span>
                <span className="skill-item">Sass</span>
                <span className="skill-item">Tailwind CSS</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-items">
                <span className="skill-item">Node.js</span>
                <span className="skill-item">Express</span>
                <span className="skill-item">Python</span>
                <span className="skill-item">Django</span>
                <span className="skill-item">PostgreSQL</span>
                <span className="skill-item">MongoDB</span>
                <span className="skill-item">Redis</span>
                <span className="skill-item">GraphQL</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skill-items">
                <span className="skill-item">Git</span>
                <span className="skill-item">Docker</span>
                <span className="skill-item">AWS</span>
                <span className="skill-item">Jest</span>
                <span className="skill-item">Webpack</span>
                <span className="skill-item">Figma</span>
                <span className="skill-item">Agile</span>
                <span className="skill-item">Scrum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
