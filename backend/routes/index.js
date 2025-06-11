import express from "express";

import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
} from "../controllers/Products.js";

const router = express.Router();

// Rutas para productos
router.get('/', getAllProducts);         // Obtener todos los productos
router.get('/:id', getProductById);      // Obtener un producto por ID
router.post('/', createProduct);         // Crear un nuevo producto
router.patch('/:id', updateProduct);     // Actualizar un producto existente
router.delete('/:id', deleteProduct);    // Eliminar un producto

export default router;