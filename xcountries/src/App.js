import './App.css';
import { useState, useEffect } from 'react';
import styles from "./App.module.css";

function App() {
  const [countries, setCountries] = useState([]);

  const getCountriesData = async()=>{
    try{
      let res = await fetch(`https://restcountries.com/v3.1/all`);
      let data = await res.json();
      setCountries(data);
      console.log(data);
    }
    catch(err){
      console.log("Error fetching data: ", err);
    }
  }

  useEffect(()=>{
    getCountriesData()
  },[]);

  return (
    <div className={styles.container}>
      {countries.map((country)=>{
        return(
        <div key={country.cca3} className={styles.card}>
          <img className={styles.image} src={country.flags.png} alt={`Flag of ${country.name.common}`} />
          <h1 className={styles.name}>{country.name.common}</h1>
        </div>
        )
      })}
    </div>
  );
}

export default App;
