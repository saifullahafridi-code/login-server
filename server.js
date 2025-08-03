const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Email:', email);
  console.log('Password:', password);
  res.send('Login received');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
