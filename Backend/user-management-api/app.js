const express = require('express');
const cors = require('cors');
const { port } = require('./config/config');
const { sequelize } = require('./models');
const userRoutes = require('./routes/users');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};
start();