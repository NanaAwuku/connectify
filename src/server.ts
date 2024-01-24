import express from 'express';
import dotenv from 'dotenv';
import { connectToDB } from './config/connection';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 6000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', (req, res)=>{
  res.send('we trying this route')
});

// Error Handling Middleware
// app.use(errorHandler);

// Start server after MongoDB connection
const startServer = async () => {

   await connectToDB()
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};

// Run the server
startServer();
