import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [pizza, setPizza] = useState({
    name: "",
    size: "small",
    sauce: "red",
    pepperoni: false,
    sausage: false,
    mushrooms: false,
    olives: false,
    anchovies: false,
    extraCheese: false,
    special: "",
    quantity: 1,
  });
  const handleChange = (event) => {
    setPizza({
      ...pizza,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (pizza.name.length < 2) {
      alert("Name must be at least 2 characters");
      return;
    }
    axios.post("https://reqres.in/api/orders", pizza).then((res) => {
      console.table(res.data);
    });
  };
  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <h1>Pizza</h1>
      <div>
        <label htmlFor="name-input">Name:</label>
        <input
          type="text"
          name="name"
          id="name-input"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="size-dropdown">Size:</label>
        <select name="size" id="size-dropdown" onChange={handleChange}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div>
        <label htmlFor="sauce-dropdown">Sauce:</label>
        <select name="sauce" id="sauce-dropdown" onChange={handleChange}>
          <option value="red">Tomato</option>
          <option value="white">White</option>
          <option value="green">Pesto</option>
        </select>
      </div>
      <div>
        <label htmlFor="pepperoni">Pepperoni:</label>
        <input
          type="checkbox"
          name="pepperoni"
          id="pepperoni"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="sausage">Sausage:</label>
        <input
          type="checkbox"
          name="sausage"
          id="sausage"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="mushrooms">Mushrooms:</label>
        <input
          type="checkbox"
          name="mushrooms"
          id="mushrooms"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="olives">Olives:</label>
        <input
          type="checkbox"
          name="olives"
          id="olives"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="anchovies">Anchovies:</label>
        <input
          type="checkbox"
          name="anchovies"
          id="anchovies"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="extra-cheese">Extra Cheese:</label>
        <input
          type="checkbox"
          name="extraCheese"
          id="extra-cheese"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="special-text">Special Instructions:</label>
        <textarea
          name="special"
          id="special-text"
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="quantity-dropdown">Quantity:</label>
        <select name="quantity" id="quantity-dropdown" onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div>
        <button id="order-button" onClick={handleSubmit}>
          Add to Order
        </button>
      </div>
    </form>
  );
};

export default Form;
