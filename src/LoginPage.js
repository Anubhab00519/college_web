import React, { useState } from 'react';

const LoginPage = ({ onBack }) => {
  const [activeMode, setActiveMode] = useState('signin');
  const [selectedRole, setSelectedRole] = useState('student');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (selectedRole !== 'admin') {
      const emailPattern = /.+@.+\.edu$/;
      if (!emailPattern.test(formData.email)) {
        alert('Please use a valid college email address ending with .edu');
        return;
      }
    }

    const action = activeMode === 'signin' ? 'Signed in' : 'Account created';
    alert(`${action} successfully as ${selectedRole}!\n\nIn production, this would redirect to the ${selectedRole} dashboard.`);
    
    setFormData({
      name: '',
      email: '',
      password: ''
    });
  };

  const getRoleInfo = () => {
    const roleData = {
      admin: {
        icon: '👨‍💼',
        title: 'Admin',
        description: 'Manage the entire college system',
        emailPlaceholder: 'admin@example.com',
        showNote: false
      },
      student: {
        icon: '📚',
        title: 'Student',
        description: 'Access notes, assignments & resources',
        emailPlaceholder: 'yourname@college.edu',
        showNote: true
      },
      teacher: {
        icon: '🎓',
        title: 'Teacher',
        description: 'Upload materials & manage classes',
        emailPlaceholder: 'yourname@college.edu',
        showNote: true
      }
    };
    return roleData[selectedRole];
  };

  const roleInfo = getRoleInfo();

  return (
    <div className="relative min-h-screen bg-dark flex items-center justify-center p-4 sm:p-8 font-outfit overflow-hidden">
      {/* Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[200%] h-[200%] animate-login-bg-move"
          style={{
            background: `
              radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)
            `
          }}
        />
      </div>

      {/* Floating Shapes */}
      <div className="fixed w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary to-secondary opacity-[0.06] -top-24 -right-24 animate-login-float z-[1]" />
      <div className="fixed w-[300px] h-[300px] rounded-full bg-gradient-to-br from-accent to-primary opacity-[0.06] -bottom-20 -left-20 animate-login-float z-[1]" 
        style={{ animationDelay: '6s' }} />
      <div className="fixed w-[200px] h-[200px] rounded-full bg-gradient-to-br from-secondary to-accent opacity-[0.06] top-1/2 left-[10%] animate-login-float z-[1]" 
        style={{ animationDelay: '3s' }} />

      {/* Back Button */}
      <button 
        className="fixed top-4 left-4 sm:top-8 sm:left-8 px-4 sm:px-6 py-2 sm:py-3 bg-dark-secondary/80 backdrop-blur-lg border border-white/10 rounded-xl text-slate-300 font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-dark-secondary hover:border-primary hover:-translate-x-1 z-[100]"
        onClick={onBack}
      >
        ← Back to Home
      </button>

      {/* Login Box */}
      <div className="relative z-10 bg-dark-secondary/60 backdrop-blur-2xl border border-white/10 rounded-3xl sm:rounded-[28px] p-6 sm:p-12 w-full max-w-[600px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] animate-[loginSlideUp_0.6s_ease-out]">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="font-syne text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 tracking-tight">
            CollegeWeb
          </div>
          <h2 className="font-syne text-xl sm:text-3xl font-bold text-white mb-2">
            Welcome Back
          </h2>
          <p className="text-slate-300 opacity-70 text-sm sm:text-base">
            Choose your role to continue
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex gap-2 bg-dark/50 p-2 rounded-2xl mb-6 sm:mb-8">
          <button
            className={`flex-1 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
              activeMode === 'signin'
                ? 'bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/30'
                : 'bg-transparent text-slate-300 hover:bg-white/5'
            }`}
            onClick={() => setActiveMode('signin')}
          >
            Sign In
          </button>
          <button
            className={`flex-1 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
              activeMode === 'create'
                ? 'bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/30'
                : 'bg-transparent text-slate-300 hover:bg-white/5'
            }`}
            onClick={() => setActiveMode('create')}
          >
            Create Account
          </button>
        </div>

        {/* Role Selection */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
          <button
            className={`flex flex-col items-center gap-1 sm:gap-2 py-3 sm:py-5 px-1 sm:px-2 bg-dark/50 border-2 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-300 ${
              selectedRole === 'admin'
                ? 'bg-primary/15 border-primary -translate-y-1'
                : 'border-white/5 hover:bg-dark/80 hover:border-white/10 hover:-translate-y-1'
            }`}
            onClick={() => setSelectedRole('admin')}
          >
            <span className="text-2xl sm:text-3xl">👨‍💼</span>
            <span className="text-slate-300">Admin</span>
          </button>
          <button
            className={`flex flex-col items-center gap-1 sm:gap-2 py-3 sm:py-5 px-1 sm:px-2 bg-dark/50 border-2 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-300 ${
              selectedRole === 'student'
                ? 'bg-primary/15 border-primary -translate-y-1'
                : 'border-white/5 hover:bg-dark/80 hover:border-white/10 hover:-translate-y-1'
            }`}
            onClick={() => setSelectedRole('student')}
          >
            <span className="text-2xl sm:text-3xl">📚</span>
            <span className="text-slate-300">Student</span>
          </button>
          <button
            className={`flex flex-col items-center gap-1 sm:gap-2 py-3 sm:py-5 px-1 sm:px-2 bg-dark/50 border-2 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-300 ${
              selectedRole === 'teacher'
                ? 'bg-primary/15 border-primary -translate-y-1'
                : 'border-white/5 hover:bg-dark/80 hover:border-white/10 hover:-translate-y-1'
            }`}
            onClick={() => setSelectedRole('teacher')}
          >
            <span className="text-2xl sm:text-3xl">🎓</span>
            <span className="text-slate-300">Teacher</span>
          </button>
        </div>

        {/* Role Info Card */}
        <div className="flex items-center gap-3 sm:gap-4 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8 animate-[fadeIn_0.4s_ease-out]">
          <div className="text-3xl sm:text-4xl flex-shrink-0">
            {roleInfo.icon}
          </div>
          <div>
            <h3 className="font-syne text-base sm:text-xl font-bold text-white mb-1">
              {roleInfo.title}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm opacity-80">
              {roleInfo.description}
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form className="flex flex-col gap-5 sm:gap-6" onSubmit={handleSubmit}>
          {activeMode === 'create' && (
            <div className="flex flex-col gap-2">
              <label className="text-slate-300 font-semibold text-xs sm:text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 sm:py-4 bg-dark/60 border-2 border-white/8 rounded-xl text-white font-outfit text-sm sm:text-base transition-all duration-300 focus:outline-none focus:border-primary focus:bg-dark/90 focus:ring-4 focus:ring-primary/10 placeholder:text-slate-500"
                required
              />
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="text-slate-300 font-semibold text-xs sm:text-sm">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={roleInfo.emailPlaceholder}
              pattern={selectedRole !== 'admin' ? '.+@.+\\.edu' : undefined}
              className="w-full px-4 py-3 sm:py-4 bg-dark/60 border-2 border-white/8 rounded-xl text-white font-outfit text-sm sm:text-base transition-all duration-300 focus:outline-none focus:border-primary focus:bg-dark/90 focus:ring-4 focus:ring-primary/10 placeholder:text-slate-500"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-300 font-semibold text-xs sm:text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder={activeMode === 'signin' ? 'Enter your password' : 'Create a password'}
              className="w-full px-4 py-3 sm:py-4 bg-dark/60 border-2 border-white/8 rounded-xl text-white font-outfit text-sm sm:text-base transition-all duration-300 focus:outline-none focus:border-primary focus:bg-dark/90 focus:ring-4 focus:ring-primary/10 placeholder:text-slate-500"
              required
            />
          </div>

          {roleInfo.showNote && (
            <div className="flex items-center gap-3 bg-accent/10 border border-accent/30 rounded-xl p-3 sm:p-4 text-accent text-xs sm:text-sm -mt-2">
              <span className="text-base flex-shrink-0">⚠️</span>
              <span>Must use college email ID (ending with .edu)</span>
            </div>
          )}

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full py-3 sm:py-4 mt-2 bg-gradient-to-br from-primary to-primary-dark text-white font-bold text-base sm:text-lg rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40 active:translate-y-0"
          >
            {activeMode === 'signin' ? 'Sign In' : 'Create Account'}
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </form>

        {activeMode === 'signin' && (
          <div className="text-center mt-6">
            <a href="#" className="text-primary font-semibold text-sm sm:text-base hover:text-secondary transition-colors duration-300">
              Forgot password?
            </a>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes loginSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;