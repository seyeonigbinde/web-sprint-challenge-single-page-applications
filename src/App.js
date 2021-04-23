import React, {useState, useEffect} from "react";
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import schema from './formSchema';
import axios from 'axios';
import Order from './Order';
import Home from './Home';
import Confirmation from './Confirmation';

const initialFormValues = {
  name: "",
  choice: "",
  size: "",
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  topping5: false,
  special: "",
};
const initialFormErrors = {
  name: "",
  choice: "",
  size: "",
  special: "",
};
const initialUsers = [];
const initialDisabled = true;

const App = () => {

  const [order, setOrder] = useState(initialUsers);
    const [formValues, setFormValues] = useState(initialFormValues); 
    const [formErrors, setFormErrors] = useState(initialFormErrors); 
    const [disabled, setDisabled] = useState(initialDisabled); 
      
    
      const postNewOrder = (newOrder) => {
          axios
            .post("https://reqres.in/api/orders", newOrder)
            .then((res) => {
              setOrder([res.data, ...order]);
              setFormValues(initialFormValues);
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        };
      
      const inputChange = (name, value) => {
          yup
            .reach(schema, name) 
            .validate(value) 
            .then(() => {
              setFormErrors({
                ...formErrors,
                [name]: "",
              });
            })
            .catch((err) => {
              setFormErrors({
                ...formErrors,
                [name]: err.errors[0],
              });
            });
      
          setFormValues({
            ...formValues,
            [name]: value, 
          });
        };
      
        const formSubmit = () => {
          const newOrders = {
            name: formValues.name.trim(),
            size: formValues.size.trim(),
            choice: formValues.choice.trim(),
            toppings: ["topping1", "topping2", "topping3", "topping4", "topping5"].filter(
              (topping) => formValues[topping]
            ),
            special: formValues.special.trim(),
          };
          postNewOrder(newOrders);
        };
          
            useEffect(() => {
              schema.isValid(formValues).then((valid) => {
                setDisabled(!valid);
              });
            }, [formValues]);
     
  return (
    <>
      <div className="container">
      <nav>
           <h1>Lambda Eats</h1>
           <div className='nav-links'>
              <Link to='/'>Home</Link>
              <Link to='/Order'>Order Now!</Link>
           </div>
      </nav>
      <Switch>
        <Route path='/pizza'>
          <Order 
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              disabled={disabled}
              errors={formErrors}/>
        </Route>
        <Route path='/pizza/:id'>
        {
          order.map((user) => {
        return <Confirmation key={user.id} details={user} />;
      })}
      </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      </div>
      
    </>
  );
};
export default App;








  