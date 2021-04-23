import React, {useState, useEffect} from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
import schema from './formSchema';
import axios from 'axios';
import Order from './Order';
import Home from './Home';

const initialFormValues = {
  name: "",
  size: "",
  choice: "",
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
const initialOrders = [];
const initialDisabled = true;

const App = () => {

    const [order, setOrder] = useState(initialOrders);
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
              <Link to=''>Help</Link>
           </div>
      </nav>
      <Switch>
        <Route path='/pizza'>
          <Order 
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              disabled={disabled}
              errors={formErrors}
              order= {order}
              />
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








  