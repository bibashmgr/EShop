const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// routes:
const indexRoutes = require('./routes/index.js');
const authRoutes = require('./routes/auth.js');
const categoryRoutes = require('./routes/category.js');
const productRoutes = require('./routes/product.js');

const app = express();
dotenv.config();

// environment variables:
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.MONGODB_LOCAL_URL;

// middelwares:
app.use(bodyParser.json({ limit: '1mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
  })
);

app.use('/api', indexRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);

// running server
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database Connected');
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
