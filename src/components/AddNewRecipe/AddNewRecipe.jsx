import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from './AddNewRecipe.module.css';
function AddNewRecipe() {
  const [countries, setCountries] = useState([]);
  let [selectedCountry, setSelectedCountry] = useState('');

  const [typeAmount, setTypeAmount] = useState([
    {
      id: 1,
      type: '',
      amount: '',
    },
  ]);

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

  const inputCountryHandler = e => {
    setSelectedCountry(e.target.value);
  };

  useEffect(() => {
    setFormData({ ...formData, country: selectedCountry });
  }, [selectedCountry]);

  const changeIncData = (e, i) => {
    const { name, value } = e.target;
    const incList = [...typeAmount];
    incList[i][name] = value;
    setTypeAmount(incList);
    setFormData({ ...formData, ingredients: typeAmount });
  };

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

  const send = () => {
    axios
      .post('http://localhost:3011/recipe', formData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const addMore = e => {
    e.preventDefault();
    const newInc = { id: typeAmount.length + 1, type: '', amount: '' };
    setTypeAmount([...typeAmount, newInc]);
  };
  return (
    <form className={classes.form} onSubmit={send}>
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
        <label htmlFor="select">Country</label>
        <select
          id="select"
          className={classes.select}
          onChange={inputCountryHandler}
        >
          <option selected disabled hidden>
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
      {typeAmount.map((_, i) => {
        return (
          <div key={i}>
            <div className={classes.separator}>
              <label htmlFor="ingredient">Ingredient</label>
              <input
                onChange={e => changeIncData(e, i)}
                type="text"
                id="ingredient"
                name="type"
              />
            </div>
            <div className={classes.separator}>
              <label htmlFor="amount">Amount</label>
              <input
                onChange={e => changeIncData(e, i)}
                type="text"
                id="amount"
                name="amount"
              />
            </div>
          </div>
        );
      })}
      <div className={classes.form__btnCont}>
        <input
          className={classes.form__btn}
          type="button"
          value={'Add more'}
          onClick={addMore}
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
      <div className={classes.form__btnCont}>
        <input className={classes.form__btn} type="submit" value="Send" />
      </div>
    </form>
  );
}

export default AddNewRecipe;
