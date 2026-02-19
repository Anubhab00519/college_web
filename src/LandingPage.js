import React from 'react';

const LandingPage = ({ onLoginClick }) => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-dark text-slate-300 overflow-x-hidden font-outfit">
      {/* Background Animation */}
      <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[200%] h-[200%] animate-bg-move"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)
            `
          }}
        />
      </div>

      {/* Floating Shapes */}
      <div className="fixed w-[300px] h-[300px] rounded-full bg-primary opacity-5 top-[10%] left-[5%] animate-float z-[1]" />
      <div className="fixed w-[200px] h-[200px] rounded-full bg-secondary opacity-5 top-[60%] right-[10%] animate-float z-[1]" 
        style={{ animationDelay: '7s' }} />
      <div className="fixed w-[150px] h-[150px] rounded-full bg-accent opacity-5 bottom-[10%] left-[50%] animate-float z-[1]" 
        style={{ animationDelay: '3s' }} />

      <div className="relative z-10">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center px-[5%] py-8 gap-4 animate-[slideDown_0.8s_ease-out]">
          <div className="font-syne text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-tight">
            CollegeWeb
          </div>
          <nav className="flex flex-wrap gap-4 justify-center">
            <button 
              className="px-6 py-3 rounded-xl font-semibold text-base border-2 border-white/10 bg-transparent hover:bg-white/5 hover:border-primary transition-all duration-300 hover:-translate-y-0.5"
              onClick={scrollToFeatures}
            >
              Features
            </button>
            <button 
              className="px-6 py-3 rounded-xl font-semibold text-base bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              onClick={onLoginClick}
            >
              Get Started
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-[5%] py-12 md:py-24 gap-8">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary font-semibold animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            <span className="w-2 h-2 bg-accent rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
            Next-Gen Campus Management
          </div>
          
          {/* Main Heading */}
          <h1 className="font-syne text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent tracking-tight animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
            Transform Your<br />Campus Experience
          </h1>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-[700px] opacity-80 animate-[fadeInUp_0.8s_ease-out_0.6s_both] px-4">
            Streamline administration, empower students with 24/7 access to notes and assignments, 
            and enable seamless collaboration between faculty and learners—all powered by AI.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-[600px] px-4 animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
            <button 
              className="flex-1 px-8 py-4 text-lg font-semibold bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl shadow-lg shadow-primary/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              onClick={onLoginClick}
            >
              🚀 Launch Platform
            </button>
            <button 
              className="flex-1 px-8 py-4 text-lg font-semibold border-2 border-white/10 bg-transparent hover:bg-white/5 hover:border-primary transition-all duration-300 rounded-xl hover:-translate-y-0.5"
              onClick={scrollToFeatures}
            >
              Explore Features
            </button>
          </div>
        </section>

        {/* Features Grid */}
        <section 
          id="features" 
          className="px-[5%] py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto"
        >
          {/* Feature Card 1 */}
          <div className="bg-dark-secondary/50 backdrop-blur-lg border border-white/5 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-dark-secondary/80 hover:border-primary hover:shadow-2xl animate-[fadeInUp_0.8s_ease-out_0.9s_both]">
            <div className="w-[60px] h-[60px] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-3xl mb-6">
              👨‍💼
            </div>
            <h3 className="font-syne text-2xl font-bold text-white mb-2">
              Admin Control
            </h3>
            <p className="text-slate-300 opacity-80 leading-relaxed">
              Comprehensive dashboard for managing student records, faculty information, course schedules, and institutional data with powerful analytics.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-dark-secondary/50 backdrop-blur-lg border border-white/5 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-dark-secondary/80 hover:border-primary hover:shadow-2xl animate-[fadeInUp_0.8s_ease-out_1s_both]">
            <div className="w-[60px] h-[60px] rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center text-3xl mb-6">
              📚
            </div>
            <h3 className="font-syne text-2xl font-bold text-white mb-2">
              Student Portal
            </h3>
            <p className="text-slate-300 opacity-80 leading-relaxed">
              Access notes, assignments, grades, and course materials anytime. Submit work, track progress, and stay connected with your academic journey.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-dark-secondary/50 backdrop-blur-lg border border-white/5 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-dark-secondary/80 hover:border-primary hover:shadow-2xl animate-[fadeInUp_0.8s_ease-out_1.1s_both]">
            <div className="w-[60px] h-[60px] rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-3xl mb-6">
              🎓
            </div>
            <h3 className="font-syne text-2xl font-bold text-white mb-2">
              Faculty Dashboard
            </h3>
            <p className="text-slate-300 opacity-80 leading-relaxed">
              Upload course materials, create assignments, grade submissions, and manage class rosters efficiently with intuitive tools designed for educators.
            </p>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;