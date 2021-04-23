import React from 'react';

export default function Form (props) {
  const { values, change, submit, disabled, errors  } = props

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  }

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  return (
    <>
      <h1> Build you own pizza</h1>
    <form className='container' onSubmit={onSubmit} id="pizza-form">

        <div className="errors">
            <em>
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.choice}</div>
          <div>{errors.special}</div>
          </em>
        </div>
      <div>
      <label>Name
          <input
            type="text"
            value={values.name}
            onChange={onChange}
            name="name"
            id="name-input"
            placeholder="Full Name"
            maxLength="30"
          />
        </label>
      <label>Choice of Size 
          <select value={values.size} name="size" onChange={onChange} id="size-dropdown">
            <option value="">-- Select --</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <p>Choice of Sauce</p>
        <label>
          <input type="radio" value="original_red" onChange={onChange} name="choice" checked={values.choice === "original_red"}/>Original Red
        </label>
        <label>
          <input type="radio" value="garlic_ranch" onChange={onChange} name="choice" checked={values.choice === "garlic_ranch"}/>Garlic Ranch
        </label>
        <label>
          <input type="radio" value="bbq_sauce" onChange={onChange} name="choice" checked={values.choice === "bbq_sauce"} />BBQ Sauce
        </label>
        <label>
          <input type="radio" value="spinach_alfredo" onChange={onChange} name="choice" checked={values.choice === "spinach_alfredo"}/>Spinach Alfredo
        </label>

        {/* toppings */}
    <p>Add Toppings</p>
    <div className="toppings">
        <label>
          <input type="checkbox" name="topping1" checked={values.pepper} onChange={onChange}/> Pepperoni
        </label>
        <label>
          <input type="checkbox" name="topping2" checked={values.sausage} onChange={onChange} /> Sausage
        </label>
        <label>
          <input type="checkbox" name="topping3" checked={values.cbacon} onChange={onChange} /> Canadian Bacon
        </label>
        <label>
          <input type="checkbox" name="topping4" checked={values.spicy} onChange={onChange} /> Spicy Italian Sausage
        </label>
        <label>
          <input type="checkbox" name="topping5" checked={values.grilled} onChange={onChange} /> Grilled Chicken
        </label>
        {/* <label>
          <input type="checkbox" name="onions" checked={values.onions} onChange={onChange} /> Onions
        </label>
        <label>
          <input type="checkbox" name="green_pepper" checked={values.green_pepper} onChange={onChange} /> Green Pepper
        </label>
        <label>
          <input type="checkbox" name="tomatoes" checked={values.tomatoes} onChange={onChange} /> Diced Tomatoes
        </label>
        <label>
          <input type="checkbox" name="olives" checked={values.olives} onChange={onChange} /> Black Olives
        </label>
        <label>
          <input type="checkbox" name="garlic" checked={values.garlic} onChange={onChange} /> Roasted Garlic
        </label>
        <label>
          <input type="checkbox" name="hearts" checked={values.heart} onChange={onChange} /> Artichoke Hearts
        </label>
        <label>
          <input type="checkbox" name="cheese" checked={values.cheese} onChange={onChange} /> Three Cheese
        </label>
        <label>
          <input type="checkbox" name="pineapple" checked={values.pineapple} onChange={onChange} /> Pineapple
        </label>
        <label>
          <input type="checkbox" name="extra_cheese"  checked={values.extra_cheese} onChange={onChange} /> Extra Cheese
        </label> */}
     </div>
        <p> Special Instruction</p>
        <textarea name="special" id="special-text" value={values.special} onChange={onChange} placeholder="Anything else you'd like to add?" rows="5" cols="100" />

        <div id="order-button">
          <button id="order-button" disabled={disabled}>Add to Order</button>
        </div>
      </div>
    </form>
</>
  )
}
