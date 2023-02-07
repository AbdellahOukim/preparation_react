import { useState } from "react";
import femmeImg from "./img/femme.png";
import hommeImg from "./img/homme.png";

function Exercice() {
  const [genre, setGenre] = useState("homme");
  const [taille, setTaille] = useState("");
  const [message, setMessage] = useState("");
  const [poids , setPoids] = useState("") ;


  const handleTaille = () => {
    const calcHomme = (  taille - 100 - (( taille - 150 ) / 4 )) ;
    const calcFemme = (  taille - 100 - (( taille - 150 ) / 2.5 )) ;

    if (!isNaN(+taille)) {
      if (+taille <= 150) {
        setMessage("La taille doit dépasser 150 cm !");

      } else {
        setMessage("") ;
        setPoids(  genre === "homme" ? calcHomme :  calcFemme ) ;

      }
    } else {
      setMessage("La taille doit etre un entier !");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <label>Taille en cm : </label>
        <input
          value={taille}
          onChange={(e) => setTaille(e.target.value)}
          type="text"
        />
      </div>

      <div className="row">
        <label>Genre :</label>

        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="homme"> Homme </option>
          <option value="femme"> Femme </option>
        </select>
      </div>

      <img src={genre === "homme" ? hommeImg : femmeImg} alt="img" />

      <div className="row">
        <label>Poids ideal</label>
        <input value={ message ? message : poids } type="text" />
      </div>

      <button onClick={handleTaille} className="mt-5">
        Calculer
      </button>
    </div>
  );
}

export default Exercice;
