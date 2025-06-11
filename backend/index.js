import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

// Conexión a la base de datos
async function connectDB() {
  try {
    await db.authenticate();
    console.log('Database connected...');
  } catch (error) {
    console.error('Connection error:', error);
  }
}
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // <-- Aquí va SIEMPRE antes de las rutas

// Rutas
app.use('/products', productRoutes);

app.listen(5000, () => console.log('Server running at port 5000'));