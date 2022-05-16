import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from './AddNewRecipe.module.css';
function AddNewRecipe() {
  const [countries, setCountries] = useState([]);
  let [selectedCountry, setSelectedCountry] = useState('');

  const [typeAmount, setTypeAmount] = useState({
    type: '',
    amount: '',
  });

  const [formData, setFormData] = useState({
    name: '',
    author: '',
    country: '',
    description: '',
    image: '',
    ingredients: [],
    instructions: '',
  });

  const inputFormHandler = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputTypeHandler = e => {
    setTypeAmount({
      ...typeAmount,
      [e.target.name]: e.target.value,
    });
  };

  const inputCountryHandler = e => {
    setSelectedCountry(e.target.value);
  };

  useEffect(() => {
    setFormData({ ...formData, country: selectedCountry });
  }, [selectedCountry]);

  useEffect(() => {
    setFormData({ ...formData, ingredients: typeAmount });
  }, [typeAmount]);

  // ??????
  // Bit more complicated event handler for getting data from ingredients. First, we spread the current ingredients state and then look for that specific object in the array. We use the index, which is passed to the event handler. After updating the value in inputs, we will overwrite the Data state and add the ingredients array.
  // const changeIncData = (e, i) => {
  //   const { name, value } = e.target;
  //   const incList = [...ingredients];
  //   incList[i][name] = value;
  //   setIngredients(incList);
  //   setData({ ...data, inc: ingredients });
  // };

  // const changeIngredients = (e, i) => {
  //   const { type, value } = e.target;

  // };

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all?fields=name')
      .then(res =>
        setCountries(
          ...countries,
          res.data?.map(country => country.name.common)
        )
      )
      .catch(err => console.log(err));
  }, []);

  // mapping languages into select field for some reason...
  // useEffect(() => {
  //   axios
  //     .get('https://restcountries.com/v3.1/all?fields=languages')
  //     .then(
  //       res =>
  //         res.data?.map(languages => {
  //           for (let language in languages.languages) {
  //             console.log(languages.languages[language]);
  //           }
  //         })
  //       // console.log(res.data?.[0].languages)
  //     )
  //     .catch(err => console.log(err));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get('https://restcountries.com/v3.1/name/sweden?fields=languages')
  //     .then(res =>
  //       res.data?.map(languages => {
  //         console.log(languages);
  //         // console.log(languages?.languages);
  //         for (let language in languages.languages) {
  //           console.log(languages.languages[language]);
  //         }
  //       })
  //     )
  //     .catch(err => console.log(err));
  // }, []);

  const send = () => {
    axios
      .post('http://localhost:3011/recipe', formData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  console.log(formData);

  return (
    <form onSubmit={send}>
      <div className={classes.separator}>
        <label htmlFor="name">Name</label>
        <input onChange={inputFormHandler} type="text" id="name" name="name" />
      </div>
      <div className={classes.separator}>
        <label htmlFor="author">Author</label>
        <input
          onChange={inputFormHandler}
          type="text"
          id="author"
          name="author"
        />
      </div>
      <div className={classes.separator}>
        <select onChange={inputCountryHandler}>
          <option selected disabled>
            Please select a country
          </option>
          {countries.sort().map(country => {
            return <option key={country}>{country}</option>;
          })}
        </select>
      </div>
      <div className={classes.separator}>
        <label htmlFor="description">Description</label>
        <textarea
          onChange={inputFormHandler}
          name="description"
          id="description"
        />
      </div>
      <div className={classes.separator}>
        <label htmlFor="image">Image (URL)</label>
        <input
          onChange={inputFormHandler}
          type="text"
          id="image"
          name="image"
        />
      </div>
      <div className={classes.separator}>
        <label htmlFor="amount">Amount</label>
        <input
          onChange={inputTypeHandler}
          type="text"
          id="amount"
          name="amount"
        />
      </div>
      <div className={classes.separator}>
        <label htmlFor="ingredient">Ingredient</label>
        <input
          onChange={inputTypeHandler}
          type="text"
          id="ingredient"
          name="type"
        />
      </div>

      <div className={classes.separator}>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          onChange={inputFormHandler}
          name="instructions"
          id="instructions"
        />
      </div>
      <input type="submit" value="Send" />
    </form>
  );
}

export default AddNewRecipe;
