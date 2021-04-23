import React, {useState, useEffect} from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
import schema from './formSchema';
import axios from 'axios';
import Order from './Order';
import Home from './Home';

const initialFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  pwd: "",
  tos: false,
};
const initialFormErrors = {
  first_name: "",
  last_name: "",
  email: "",
  pwd: "",
};
const initialUsers = [];
const initialDisabled = true;

const App = () => {

  const [users, setUsers] = useState(initialUsers);
    const [formValues, setFormValues] = useState(initialFormValues); 
    const [formErrors, setFormErrors] = useState(initialFormErrors); 
    const [disabled, setDisabled] = useState(initialDisabled); 
      
    
      const postNewUser = (newUser) => {
          axios
            .post("https://reqres.in/api/orders", newUser)
            .then((res) => {
              setUsers([res.data, ...users]);
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
          const newUsers = {
            first_name: formValues.first_name.trim(),
            last_name: formValues.last_name.trim(),
            email: formValues.email.trim(),
            pwd: formValues.pwd.trim(),
            tos: formValues.tos,
          };
          postNewUser(newUsers);
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
      <div className='home-image'>
        <h1>Your favourite food, deliver while coding</h1>
        <button>Pizza?</button>
      </div>
      <Switch>
        <Route path='/Order'>
          <Order 
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              disabled={disabled}
              errors={formErrors}/>
        </Route>
        {/* <Route path='/'>
          <Home />
        </Route> */}
      </Switch>
      </div>
      
    </>
  );
};
export default App;




  