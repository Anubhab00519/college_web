import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onLoginClick }) => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-container">
      {/* Background Animation */}
      <div className="bg-animation"></div>
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>

      <div className="content-wrapper">
        {/* Header */}
        <header className="header">
          <div className="logo">CollegeWeb</div>
          <nav className="nav-buttons">
            <button className="btn btn-outline" onClick={scrollToFeatures}>
              Features
            </button>
            <button className="btn btn-primary" onClick={onLoginClick}>
              Get Started
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-badge">
            <span className="dot"></span>
            Next-Gen Campus Management
          </div>
          
          <h1>Transform Your<br />Campus Experience</h1>
          
          <p className="hero-subtitle">
            Streamline administration, empower students with 24/7 access to notes and assignments, 
            and enable seamless collaboration between faculty and learners—all powered by AI.
          </p>
          
          <div className="hero-cta">
            <button className="btn btn-primary btn-large" onClick={onLoginClick}>
              🚀 Launch Platform
            </button>
            <button className="btn btn-outline btn-large" onClick={scrollToFeatures}>
              Explore Features
            </button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="features" id="features">
          <div className="feature-card">
            <div className="feature-icon">👨‍💼</div>
            <h3>Admin Control</h3>
            <p>Comprehensive dashboard for managing student records, faculty information, course schedules, and institutional data with powerful analytics.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Student Portal</h3>
            <p>Access notes, assignments, grades, and course materials anytime. Submit work, track progress, and stay connected with your academic journey.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Faculty Dashboard</h3>
            <p>Upload course materials, create assignments, grade submissions, and manage class rosters efficiently with intuitive tools designed for educators.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;