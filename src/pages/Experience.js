import './Experience.css';

const ENTRIES = [
  {
    cls: 'exp--anz',
    badge: 'Contract Full-time',
    title: 'Experience Design Developer',
    company: 'ANZ',
    period: '2026.2 – 2026.9',
    location: 'Sydney, Australia',
    description:
      'Leading the transformation of business-critical FX reporting workflows by building cloud-native Python solutions on AWS — replacing legacy VBA tools with automated, scalable ETL pipelines.',
    achievements: [
      'Built an automated Python pipeline that transformed FX trade reporting from a manual, error-prone process into a reliable, end-to-end system covering data cleaning, joining, calculation, and report generation.',
      'Designed and developed scalable ETL pipelines using Python, SQL, Amazon S3, and Athena to process and transform FX market data for reporting and analytics.',
      'Migrated legacy VBA applications to Python-based solutions on AWS, improving scalability, maintainability, and automation.',
      'Built automated data validation frameworks to improve data quality, accuracy, and operational efficiency.',
    ],
    skills: ['Python', 'SQL', 'AWS S3', 'Athena', 'ETL', 'CI/CD', 'Agile', 'Foreign Exchange (FX)'],
  },
  {
    cls: 'exp--resonate',
    badge: 'Full-time',
    title: 'Junior Software Engineer',
    company: 'Resonate Solutions',
    period: '2025.6 – 2025.8',
    location: 'Sydney, Australia',
    description:
      'Delivered production-ready features for enterprise retail clients across the full stack in an Agile, Azure-based SaaS environment.',
    achievements: [
      'Built and maintained end-to-end software features for high-profile enterprise clients (Rebel, Macpac, BCF), working closely with the team to meet changing business requirements.',
      'Managed Azure App Services and DevOps pipelines, improving CI/CD reliability and deployment efficiency.',
      'Delivered new features across full stack, focusing on smooth user experience.',
      'Took ownership of the full development cycle, from technical design and implementation to debugging, code reviews, and production deployment.',
      'Improved internal platforms by enhancing usability, scalability, and maintainability.',
      'Collaborated effectively in Agile sprints, consistently delivering quality work within deadlines and adjusting quickly to new client priorities.',
    ],
    skills: ['C#', '.NET', 'Vue.js', 'TypeScript', 'SQL', 'Azure', 'Python', 'CI/CD', 'Full Stack', 'Agile'],
  },
  {
    cls: 'exp--resonate',
    badge: 'Internship',
    title: 'Software Engineer Intern',
    company: 'Resonate Solutions',
    period: '2024.12 – 2025.6',
    location: 'Sydney, Australia',
    description:
      'Contributed to a large-scale SaaS platform used by leading Australian retail brands, developing features across both frontend and backend in an Agile team.',
    achievements: [
      'Built and maintained end-to-end software features for high-profile enterprise clients (Rebel, Macpac, BCF), working closely with the team to meet changing business requirements.',
      'Managed Azure App Services and DevOps pipelines, improving CI/CD reliability and deployment efficiency.',
      'Delivered new features across full stack, focusing on smooth user experience.',
      'Took ownership of the full development cycle, from technical design and implementation to debugging, code reviews, and production deployment.',
      'Improved internal platforms by enhancing usability, scalability, and maintainability.',
      'Collaborated effectively in Agile sprints, consistently delivering quality work within deadlines and adjusting quickly to new client priorities.',
    ],
    skills: ['C#', '.NET', 'Vue.js', 'TypeScript', 'SQL', 'Azure', 'Python', 'CI/CD', 'Full Stack', 'Agile'],
  },
  {
    cls: 'exp--research',
    badge: 'Research',
    title: 'Machine Learning Research Fellow',
    company: 'USYD & Nepean Hospital',
    period: '2023.12 – Present',
    location: 'Sydney, Australia',
    description:
      'Conducting deep learning research in the BDAV Lab, focused on medical image analysis for ultrasound segmentation and fetal brain scan classification.',
    achievements: [
      'Designed, trained, and optimised AMFA, an attention-based deep learning architecture for ultrasound sub-region segmentation, outperforming several existing baseline models.',
      'Independently led the full research pipeline end to end — from data labelling and preprocessing, to model architecture design, training, validation, and evaluation.',
      'Built reproducible research workflows in PyTorch, integrating model development, quantitative evaluation, and result interpretation for medical imaging studies.',
      'Collaborated with academic supervisors and clinical partners across multidisciplinary teams to align research outcomes with clinical needs.',
    ],
    skills: ['PyTorch', 'Python', 'NumPy', 'OpenCV', 'Deep Learning', 'Computer Vision', 'Data Augmentation', 'Texture Analysis'],
  },
  {
    cls: 'exp--tutor',
    badge: 'Part-time',
    title: 'Academic Tutor',
    company: 'University of Sydney',
    period: '2024.3 – 2024.12',
    location: 'Sydney, Australia',
    description:
      'Tutored computer science and IT courses focused on data science and machine learning in the healthcare domain.',
    achievements: [
      'Tutored HTIN5006: Foundations of Healthcare Data Science',
      'Tutored HTIN5005: Applied Healthcare Data Science',
      'Tutored INFO5992: Understanding IT Innovations',
      'Guided students through both theoretical concepts and practical implementation, bridging the gap between academia and real-world application.',
    ],
    skills: ['Healthcare Data Science', 'Machine Learning', 'Python', 'Data Analysis', 'Teaching'],
  },
  {
    cls: 'exp--haircosys',
    badge: 'Internship',
    title: 'Software Engineering Intern',
    company: 'HairCoSys',
    period: '2022.12 – 2023.2',
    location: 'Hong Kong',
    description:
      'Participated in R&D projects focused on data pipeline development and machine learning applications in a multi-cultural, multi-disciplinary environment.',
    achievements: [
      'Developed a data development pipeline from data extraction, blending, cleansing, and processing to model creation and result visualization.',
      'Built an application to predict stock prices by learning from a large range of stock data.',
      'Assisted in the execution of R&D projects and attended daily standup meetings with co-workers and supervisors.',
      'Developed oral communication skills in a professional setting and built strong interpersonal relationships across a multidisciplinary team.',
    ],
    skills: ['Python', 'Data Analysis', 'Tableau', 'Pandas', 'Automation Scripts', 'Machine Learning'],
  },
];

const SKILLS = [
  {
    category: 'Software Development',
    cls: 'cat--software',
    items: ['Vue.js', 'TypeScript', 'C#', '.NET', 'React', 'Python', 'SQL', 'REST APIs'],
  },
  {
    category: 'Data & Cloud',
    cls: 'cat--data',
    items: ['AWS S3', 'Athena', 'Azure', 'ETL Pipelines', 'CI/CD', 'SQL', 'Pandas', 'Tableau'],
  },
  {
    category: 'AI / ML',
    cls: 'cat--ai',
    items: ['PyTorch', 'NumPy', 'OpenCV', 'Deep Learning', 'Computer Vision', 'Data Augmentation', 'Segmentation'],
  },
  {
    category: 'Tools & Practices',
    cls: 'cat--tools',
    items: ['Git', 'Agile', 'Docker', 'Figma', 'Azure DevOps', 'Scrum'],
  },
];

const Experience = () => {
  return (
    <div className="experience-page">
      <div className="container">
        <h1 className="page-title">Professional Experience</h1>

        <div className="experience-detailed">
          {ENTRIES.map((entry, i) => (
            <div key={i} className={`experience-card ${entry.cls}`}>
              <div className="experience-header">
                <div className="exp-header-top">
                  <div>
                    <h2 className="exp-job-title">{entry.title}</h2>
                    <h3 className="exp-company">{entry.company}</h3>
                    <p className="exp-meta">{entry.period} · {entry.location}</p>
                  </div>
                  <span className="exp-badge">{entry.badge}</span>
                </div>
              </div>
              <div className="experience-content">
                <p className="job-description">{entry.description}</p>
                <div className="job-achievements">
                  <h4>Key Highlights</h4>
                  <ul>
                    {entry.achievements.map((a, j) => <li key={j}>{a}</li>)}
                  </ul>
                </div>
                <div className="job-technologies">
                  <h4>Skills</h4>
                  <div className="tech-tags">
                    {entry.skills.map(s => <span key={s} className="tech-tag">{s}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {SKILLS.map(({ category, cls, items }) => (
              <div key={category} className={`skill-category ${cls}`}>
                <h3>{category}</h3>
                <div className="skill-items">
                  {items.map(s => <span key={s} className="skill-item">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
