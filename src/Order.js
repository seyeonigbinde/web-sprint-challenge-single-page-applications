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
    <form className='container' onSubmit={onSubmit}>

        <div className="errors">
            <em>
          <div>{errors.first_name}</div>
          <div>{errors.last_name}</div>
          <div>{errors.email}</div>
          <div>{errors.pwd}</div>
          </em>
        </div>
      <div>
      <label>Choice of Size 
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">-- Select --</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <p>Choice of Sauce</p>
        <label>
          <input type="radio" value={values.original_red} onChange={onChange} name="original_red"/>Original Red
        </label>
        <label>
          <input type="radio" value={values.garlic_ranch} onChange={onChange} name="garlic_ranch"/>Garlic Ranch
        </label>
        <label>
          <input type="radio" value={values.bbq_sauce} onChange={onChange} name="bbq_sauce"/>BBQ Sauce
        </label>
        <label>
          <input type="radio" value={values.spinach_alfredo} onChange={onChange} name="spinach_alfredo"/>Spinach Alfredo
        </label>

        {/* toppings */}
    <p>Add Toppings</p>
    <div className="toppings">
        <label>
          <input type="checkbox" name="pepper" checked={values.pepper} onChange={onChange}/> Pepperoni
        </label>
        <label>
          <input type="checkbox" name="sausage" checked={values.sausage} onChange={onChange} /> Sausage
        </label>
        <label>
          <input type="checkbox" name="cbacon" checked={values.cbacon} onChange={onChange} /> Canadian Bacon
        </label>
        <label>
          <input type="checkbox" name="spicy" checked={values.spicy} onChange={onChange} /> Spicy Italian Sausage
        </label>
        <label>
          <input type="checkbox" name="grilled" checked={values.grilled} onChange={onChange} /> Grilled Chicken
        </label>
        <label>
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
        </label>
     </div>
        <p> Special Instruction</p>
        <textarea name="instruct" value={values.instruct} placeholder="Anything else you'd like to add?" rows="5" cols="100" />
           
        

        <div id="submit">
          <button id="submit" disabled={disabled}>Add to Order</button>
        </div>
      </div>
    </form>
</>
  )
}
