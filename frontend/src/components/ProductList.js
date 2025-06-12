import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      // Asegúrate de que la respuesta es un array
      if (Array.isArray(response.data)) {
        setProducts(response.data);
        setError('');
      } else {
        setProducts([]);
        setError('No se pudo obtener la lista de productos.');
      }
    } catch (err) {
      setProducts([]);
      setError('Error al conectar con el backend.');
    }
  }

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      getProducts();
    } catch (err) {
      setError('No se pudo eliminar el producto.');
    }
  }

  return (
    <div>
      <Link to="/add" className="button is-primary mt-2">Add New</Link>
      {error && <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>}
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <Link
                    to={`/edit/${product.id}`}
                    className="button is-small is-info"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="button is-small is-danger"
                    style={{ marginLeft: "5px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>
                {error ? "Sin productos para mostrar." : "Cargando..."}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList