const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const JWT_SECRET = 'collegeweb_secret_key_change_in_production';
const DB_FILE = path.join(__dirname, 'db.json');

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

function readDB() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ users: [] }, null, 2));
  }
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
}

function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

const db = readDB();
if (db.users.length === 0) {
  db.users = [
    { id: 1, name: 'Admin User',    email: 'admin@collegeweb.com', password: bcrypt.hashSync('admin123',   10), role: 'admin'   },
    { id: 2, name: 'Alice Student', email: 'alice@college.edu',    password: bcrypt.hashSync('student123', 10), role: 'student' },
    { id: 3, name: 'Bob Teacher',   email: 'bob@college.edu',      password: bcrypt.hashSync('teacher123', 10), role: 'teacher' },
  ];
  writeDB(db);
  console.log('Demo users seeded into db.json');
}

app.post('/api/auth/login', (req, res) => {
  const { email, password, role } = req.body;
  if (!email || !password || !role)
    return res.status(400).json({ success: false, message: 'Email, password and role are required.' });

  const user = readDB().users.find(u => u.email === email);
  if (!user)
    return res.status(401).json({ success: false, message: 'Invalid email or password.' });
  if (user.role !== role)
    return res.status(403).json({ success: false, message: `This account is not registered as a ${role}.` });
  if (!bcrypt.compareSync(password, user.password))
    return res.status(401).json({ success: false, message: 'Invalid email or password.' });

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role, name: user.name },
    JWT_SECRET, { expiresIn: '8h' }
  );
  res.json({ success: true, message: 'Login successful', token,
    user: { id: user.id, name: user.name, email: user.email, role: user.role } });
});

app.post('/api/auth/register', (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role)
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  if (role !== 'admin' && !email.endsWith('.edu'))
    return res.status(400).json({ success: false, message: 'Students and teachers must use a .edu email.' });

  const data = readDB();
  if (data.users.find(u => u.email === email))
    return res.status(409).json({ success: false, message: 'An account with this email already exists.' });

  const newUser = { id: data.users.length + 1, name, email, password: bcrypt.hashSync(password, 10), role };
  data.users.push(newUser);
  writeDB(data);

  const token = jwt.sign({ id: newUser.id, email, role, name }, JWT_SECRET, { expiresIn: '8h' });
  res.status(201).json({ success: true, message: 'Account created successfully', token,
    user: { id: newUser.id, name, email, role } });
});

app.get('/api/auth/me', (req, res) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer '))
    return res.status(401).json({ success: false, message: 'No token provided.' });
  try {
    const decoded = jwt.verify(auth.split(' ')[1], JWT_SECRET);
    res.json({ success: true, user: decoded });
  } catch {
    res.status(401).json({ success: false, message: 'Invalid or expired token.' });
  }
});

app.listen(PORT, () => {
  console.log(`\n CollegeWeb backend running at http://localhost:${PORT}`);
  console.log(`\nDemo credentials:`);
  console.log(`  Admin:   admin@collegeweb.com  /  admin123`);
  console.log(`  Student: alice@college.edu     /  student123`);
  console.log(`  Teacher: bob@college.edu       /  teacher123\n`);
});
