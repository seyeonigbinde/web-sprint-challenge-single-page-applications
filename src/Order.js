import React from 'react';
import Confirmation from './Confirmation';

export default function Form (props) {
  const { values, change, submit, disabled, errors, order } = props

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
<div className='home-image'>
        <h1>Place Your Order!</h1>
</div>
<div className="form_page">
    <div className="form_data">
      <h1> Build you own pizza</h1>

    <form onSubmit={onSubmit} id="pizza-form">
        <div className="errors">
            <em>
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.choice}</div>
          <div>{errors.special}</div>
          </em>
        </div>
    <div>
        {/* Name */}
        <label><h4>Name: </h4>
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

        {/* Choice of Size */}
      <label><h4>Choice of Size: </h4>
          <select value={values.size} name="size" onChange={onChange} id="size-dropdown">
            <option value="">-- Select --</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>

        {/* Choice of Sauce */}
        <h4>Choice of Sauce: </h4>
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
        <h4>Add Toppings: </h4>
        <div className="toppings">
            <label>
                <input type="checkbox" name="topping1" value="topping1" checked={values.pepper} onChange={onChange}/> Pepperoni
            </label>
            <label>
                <input type="checkbox" name="topping2" value="topping2" checked={values.sausage} onChange={onChange} /> Sausage
            </label>
            <label>
                <input type="checkbox" name="topping3" value="topping3" checked={values.cbacon} onChange={onChange} /> Canadian Bacon
            </label>
            <label>
                <input type="checkbox" name="topping4" value="topping4" checked={values.spicy} onChange={onChange} /> Spicy Italian Sausage
            </label>
            <label>
                <input type="checkbox" name="topping5" value="topping5" checked={values.grilled} onChange={onChange} /> Grilled Chicken
            </label>
        </div>
        {/* Special Instruction */}
        <div>
            <h4> Special Instruction</h4>
            <textarea name="special" id="special-text" value={values.special} onChange={onChange} placeholder="Anything else you'd like to add?" rows="5" cols="100" />
        </div>
        <div id="submit">
          <button id="order-button" disabled={disabled}>Add to Order</button>
        </div>
    </div>
    </form>
  </div>
    <div className="confirm_data">
    {
          order.map((user) => {
        return <Confirmation key={user.id} details={user} />;

      })
      }
      
    </div>
</div>
</>
  )
}
