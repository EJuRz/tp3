import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/products', {
        title: title, 
        price: price
      });
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Ocurrió un error al guardar el producto"
      );
    }
  }

  return (
    <div>
      <h2>Add New Product</h2>
      {error && <div style={{color: 'red', marginBottom: '10px'}}>{error}</div>}
      <form onSubmit={ saveProduct }>
        <div className="field">
          <label className="label">Title</label>
          <input
            className="input"
            type="text"
            placeholder="Title"
            value={ title }
            onChange={ (e) => setTitle(e.target.value) }
            required
          />
        </div>

        <div className="field">
          <label className="label">Price</label>
          <input
            className="input"
            type="number"
            placeholder="Price"
            value={ price }
            onChange={ (e) => setPrice(e.target.value) }
            required
          />
        </div>

        <div className="field">
          <button className="button is-primary" type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct