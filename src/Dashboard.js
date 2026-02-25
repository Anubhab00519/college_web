import React from 'react';

const roleConfig = {
  admin: {
    icon: '👨‍💼',
    gradient: 'from-indigo-500 to-purple-600',
    label: 'Administrator',
    greeting: 'Welcome back, Admin!',
    subtitle: 'Here\'s your college management overview.',
    stats: [
      { label: 'Total Students', value: '1,240', icon: '📚', color: 'text-indigo-400' },
      { label: 'Faculty Members', value: '86',   icon: '🎓', color: 'text-pink-400'   },
      { label: 'Active Courses', value: '142',   icon: '📋', color: 'text-teal-400'   },
      { label: 'Departments',    value: '12',    icon: '🏛️', color: 'text-amber-400'  },
    ],
    quickActions: [
      { label: 'Manage Students', icon: '👥' },
      { label: 'Manage Faculty',  icon: '🏫' },
      { label: 'Course Settings', icon: '⚙️' },
      { label: 'View Reports',    icon: '📊' },
    ],
  },
  student: {
    icon: '📚',
    gradient: 'from-pink-500 to-indigo-500',
    label: 'Student',
    greeting: 'Good to see you!',
    subtitle: 'Track your progress and access your materials.',
    stats: [
      { label: 'Enrolled Courses', value: '6',    icon: '📋', color: 'text-indigo-400' },
      { label: 'Assignments Due',  value: '3',    icon: '📝', color: 'text-pink-400'   },
      { label: 'Current CGPA',     value: '8.4',  icon: '⭐', color: 'text-amber-400'  },
      { label: 'Attendance',       value: '91%',  icon: '✅', color: 'text-teal-400'   },
    ],
    quickActions: [
      { label: 'My Courses',      icon: '📚' },
      { label: 'Assignments',     icon: '📝' },
      { label: 'Study Materials', icon: '📂' },
      { label: 'My Grades',       icon: '🏅' },
    ],
  },
  teacher: {
    icon: '🎓',
    gradient: 'from-teal-500 to-indigo-500',
    label: 'Faculty',
    greeting: 'Ready to inspire!',
    subtitle: 'Manage your classes and student progress.',
    stats: [
      { label: 'My Courses',         value: '4',   icon: '📋', color: 'text-indigo-400' },
      { label: 'Students Enrolled',  value: '218', icon: '👥', color: 'text-pink-400'   },
      { label: 'Pending Grading',    value: '12',  icon: '📝', color: 'text-amber-400'  },
      { label: 'Avg. Class Score',   value: '74%', icon: '📊', color: 'text-teal-400'   },
    ],
    quickActions: [
      { label: 'Upload Material', icon: '⬆️' },
      { label: 'Create Assignment', icon: '📝' },
      { label: 'Grade Submissions', icon: '✅' },
      { label: 'Class Roster',    icon: '👥' },
    ],
  },
};

const Dashboard = ({ user, onLogout }) => {
  const config = roleConfig[user.role] || roleConfig.student;

  const handleLogout = () => {
    localStorage.removeItem('cw_token');
    localStorage.removeItem('cw_user');
    onLogout();
  };

  return (
    <div className="relative min-h-screen bg-dark text-slate-300 font-outfit overflow-x-hidden">

      {/* Subtle background glow */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute w-[200%] h-[200%]" style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
          `
        }} />
      </div>

      <div className="relative z-10">
        {/* ── Top Nav ── */}
        <header className="flex justify-between items-center px-6 md:px-10 py-5 border-b border-white/5 bg-dark-secondary/40 backdrop-blur-lg">
          <div className="font-syne text-xl md:text-2xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-tight">
            CollegeWeb
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="hidden sm:flex items-center gap-2 bg-dark/50 border border-white/10 rounded-xl px-4 py-2 text-sm">
              <span>{config.icon}</span>
              <span className="font-semibold text-white">{user.name}</span>
              <span className="text-xs text-slate-400 bg-primary/20 px-2 py-0.5 rounded-full capitalize">{user.role}</span>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-semibold border border-white/10 rounded-xl hover:bg-white/5 hover:border-red-500/50 hover:text-red-400 transition-all duration-300"
            >
              Sign Out
            </button>
          </div>
        </header>

        {/* ── Hero Banner ── */}
        <section className={`mx-4 md:mx-10 mt-8 rounded-3xl p-8 md:p-12 bg-gradient-to-br ${config.gradient} bg-opacity-20 border border-white/10 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-dark/60 rounded-3xl" />
          <div className="relative z-10">
            <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-2">{config.label} Dashboard</p>
            <h1 className="font-syne text-3xl md:text-5xl font-extrabold text-white mb-3">
              {config.greeting}
            </h1>
            <p className="text-slate-300 opacity-80 text-base md:text-lg max-w-xl">{config.subtitle}</p>
            <div className="mt-4 text-xs text-slate-500">Logged in as <span className="text-slate-300">{user.email}</span></div>
          </div>
          {/* Decorative large icon */}
          <div className="absolute right-8 top-6 text-[100px] opacity-10 select-none hidden md:block">
            {config.icon}
          </div>
        </section>

        {/* ── Stats Grid ── */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mx-4 md:mx-10 mt-8">
          {config.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-dark-secondary/50 border border-white/5 rounded-2xl p-5 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`text-3xl mb-3`}>{stat.icon}</div>
              <div className={`text-2xl md:text-3xl font-extrabold font-syne ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-slate-400 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* ── Quick Actions ── */}
        <section className="mx-4 md:mx-10 mt-8 mb-12">
          <h2 className="font-syne text-xl font-bold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {config.quickActions.map((action) => (
              <button
                key={action.label}
                className="flex flex-col items-center gap-3 p-6 bg-dark-secondary/50 border border-white/5 rounded-2xl hover:border-primary hover:bg-dark-secondary/80 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <span className="text-3xl">{action.icon}</span>
                <span className="text-sm font-semibold text-slate-200">{action.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* ── Notice ── */}
        <div className="mx-4 md:mx-10 mb-10 p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-300 text-sm flex items-start gap-3">
          <span className="text-lg flex-shrink-0">🚧</span>
          <span>This is a placeholder dashboard. Full functionality (courses, grades, file uploads, etc.) will be wired up as the project grows.</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
