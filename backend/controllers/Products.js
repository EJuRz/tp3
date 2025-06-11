import Product from "../models/ProductModel.js";

// Obtener todos los productos
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
}

// Obtener un producto por ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        id: req.params.id
      }
    });
    res.json(product[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
}

// Crear un producto
export const createProduct = async (req, res) => {
  try {
    console.log("BODY RECIBIDO EN BACKEND:", req.body);

    const { title, price } = req.body;
    await Product.create({
      title,
      price: parseFloat(price)
    });

    res.json({
      "message": "Product Created"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
}

// Actualizar un producto
export const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json({
      "message": "Product Updated"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
}

// Eliminar un producto
export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json({
      "message": "Product Deleted"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
}