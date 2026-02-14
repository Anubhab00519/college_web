import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onBack }) => {
  const [activeMode, setActiveMode] = useState('signin'); // 'signin' or 'create'
  const [selectedRole, setSelectedRole] = useState('student'); // 'admin', 'student', 'teacher'
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
    
    // Email validation for student and teacher
    if (selectedRole !== 'admin') {
      const emailPattern = /.+@.+\.edu$/;
      if (!emailPattern.test(formData.email)) {
        alert('Please use a valid college email address ending with .edu');
        return;
      }
    }

    const action = activeMode === 'signin' ? 'Signed in' : 'Account created';
    alert(`${action} successfully as ${selectedRole}!\n\nIn production, this would redirect to the ${selectedRole} dashboard.`);
    
    // Reset form
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
    <div className="login-container">
      {/* Background Effects */}
      <div className="login-bg-animation"></div>
      <div className="login-shape login-shape1"></div>
      <div className="login-shape login-shape2"></div>
      <div className="login-shape login-shape3"></div>

      {/* Back Button */}
      <button className="back-button" onClick={onBack}>
        ← Back to Home
      </button>

      {/* Login Box */}
      <div className="login-box">
        <div className="login-header">
          <div className="login-logo">CollegeWeb</div>
          <h2>Welcome Back</h2>
          <p>Choose your role to continue</p>
        </div>

        {/* Mode Toggle */}
        <div className="mode-toggle">
          <button
            className={`mode-btn ${activeMode === 'signin' ? 'active' : ''}`}
            onClick={() => setActiveMode('signin')}
          >
            Sign In
          </button>
          <button
            className={`mode-btn ${activeMode === 'create' ? 'active' : ''}`}
            onClick={() => setActiveMode('create')}
          >
            Create Account
          </button>
        </div>

        {/* Role Selection */}
        <div className="role-selection">
          <button
            className={`role-btn ${selectedRole === 'admin' ? 'active' : ''}`}
            onClick={() => setSelectedRole('admin')}
          >
            <span className="role-icon">👨‍💼</span>
            <span>Admin</span>
          </button>
          <button
            className={`role-btn ${selectedRole === 'student' ? 'active' : ''}`}
            onClick={() => setSelectedRole('student')}
          >
            <span className="role-icon">📚</span>
            <span>Student</span>
          </button>
          <button
            className={`role-btn ${selectedRole === 'teacher' ? 'active' : ''}`}
            onClick={() => setSelectedRole('teacher')}
          >
            <span className="role-icon">🎓</span>
            <span>Teacher</span>
          </button>
        </div>

        {/* Role Info Card */}
        <div className="role-info-card">
          <div className="role-info-icon">{roleInfo.icon}</div>
          <div className="role-info-content">
            <h3>{roleInfo.title}</h3>
            <p>{roleInfo.description}</p>
          </div>
        </div>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          {activeMode === 'create' && (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={roleInfo.emailPlaceholder}
              pattern={selectedRole !== 'admin' ? '.+@.+\\.edu' : undefined}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder={activeMode === 'signin' ? 'Enter your password' : 'Create a password'}
              required
            />
          </div>

          {roleInfo.showNote && (
            <div className="form-note">
              <span className="note-icon">⚠️</span>
              <span>Must use college email ID (ending with .edu)</span>
            </div>
          )}

          <button type="submit" className="submit-button">
            {activeMode === 'signin' ? 'Sign In' : 'Create Account'}
            <span className="button-arrow">→</span>
          </button>
        </form>

        {activeMode === 'signin' && (
          <div className="form-footer">
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;