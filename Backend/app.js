
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const planRoutes = require('./routes/planRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
connectDB();
app.use(express.json());
app.use(cors());

app.use('/api/plans', planRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the SaaS application!');
});


const PORT = 4000 || 5000;
app.listen(4000, () => {
  console.log(`Server is running on port ${4000}`);
});
