import './About.css';

const STRENGTHS = [
  {
    icon: 'neurology',
    title: 'Logical Mind & Problem Solving',
    desc: 'I naturally break down complex problems into clear, manageable steps. Whether it\'s designing a data pipeline, debugging an edge case, or architecting a model, I approach challenges methodically and stay calm under pressure.',
  },
  {
    icon: 'forum',
    title: 'Communication Skills',
    desc: 'Technical work only matters if it can be understood and acted on. I\'ve built this through tutoring at USYD, collaborating across engineering and business teams at ANZ and Resonate, and translating research findings for clinical partners.',
  },
  {
    icon: 'bolt',
    title: 'Fast Learner',
    desc: "I pick up new tools, domains, and codebases quickly. From Vue.js and C# at Resonate to AWS and FX systems at ANZ, I've consistently got up to speed fast and started contributing early.",
  },
];


const About = () => {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-inner">
            <div className="about-photo-wrap">
              <img
                src="/images/professional_image.PNG"
                alt="Zhuyi (Emma) Lu"
                className="about-photo"
              />
            </div>
            <div className="about-hero-text">
              <span className="about-greeting">More about me</span>
              <h1 className="about-name">Zhuyi (Emma) Lu</h1>
              <p className="about-tagline">
                Software Engineer · Data Engineer · ML Researcher
              </p>
              <p className="about-intro">
                I'm based in Sydney, Australia, originally from China, and I've spent the last few years building at the intersection of software engineering, data, and machine learning. I love complex problems, clean systems, and the moments when research and engineering meet in something that actually ships.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* My Strengths */}
      <section className="about-values-section">
        <div className="container">
          <h2 className="about-section-title">My Strengths</h2>
          <div className="values-grid">
            {STRENGTHS.map((s, i) => (
              <div key={i} className="value-card">
                <span className="material-symbols-rounded value-icon">{s.icon}</span>
                <h3 className="value-title">{s.title}</h3>
                <p className="value-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life outside work */}
      <section className="about-life-section">
        <div className="container">
          <h2 className="about-section-title">Outside of Work</h2>
          <div className="life-inner">
            <div className="life-text">
              <p>
                Outside of work, gym training is a consistent part of my routine. It keeps everything else running better and is how I reset after a long day.
              </p>
              <p>
                I also play badminton and tennis regularly. There's something about the focus they demand that I find genuinely refreshing. And when I'm not moving, I'm usually behind a camera — photography is another way I slow down and pay attention to the world around me.
              </p>
              <div className="life-tags">
                <span className="life-tag"><span className="material-symbols-rounded">fitness_center</span>Gym</span>
                <span className="life-tag"><span className="material-symbols-rounded">sports_tennis</span>Badminton</span>
                <span className="life-tag"><span className="material-symbols-rounded">sports_tennis</span>Tennis</span>
                <span className="life-tag"><span className="material-symbols-rounded">photo_camera</span>Photography</span>
              </div>
            </div>
            <div className="life-photo-wrap">
              <img
                src="/images/lifestyle_image.png"
                alt="Life outside work"
                className="life-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta">
            <h2>Let's work together</h2>
            <p>Open to interesting problems in data engineering, ML, and software — whether that's a full-time role, a collaboration, or just a good conversation.</p>
            <div className="cta-links">
              <a href="mailto:luzhuyi13169@gmail.com" className="cta-btn cta-btn--primary">
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/emma-lu-703646202/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--secondary"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
