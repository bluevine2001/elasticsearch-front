import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Filters = (props) => {
  const [rating, setRating] = useState(2);
  const [hours, setHours] = useState("False");
  const [clientnb, setClientnb] = useState(0);
  const getCoffeeShop = () => {
    axios
      .post("http://localhost:3000/search", {
        rating: rating,
        hours: hours,
        rating_count: clientnb,
      })
      .then((res) => {
        props.getlist(res.data.hits.hits);
      });
  };
  useEffect(() => {
    console.log(rating);
    console.log(hours);
    console.log(clientnb);
    // requete axios post avec les filtres
    getCoffeeShop();
  }, []);
  return (
    <div className="flex bg-slate-300 justify-center">
      <div className="starsbox flex w-1/5 p-2">
        <div className="label">
          <span className="label-text">Filtrer par note :</span>
        </div>
        <div className="rating pt-3">
          <input
            type="radio"
            name="rating"
            className="mask mask-star-2 bg-yellow-400"
            onClick={() => {
              setRating(1);
              getCoffeeShop();
            }}
          />
          <input
            type="radio"
            name="rating"
            className="mask mask-star-2 bg-yellow-400"
            defaultChecked
            onClick={() => {
              setRating(2);
              getCoffeeShop();
            }}
          />
          <input
            type="radio"
            name="rating"
            className="mask mask-star-2 bg-yellow-400"
            onClick={() => {
              setRating(3);
              getCoffeeShop();
            }}
          />
          <input
            type="radio"
            name="rating"
            className="mask mask-star-2 bg-yellow-400"
            onClick={() => {
              setRating(4);
              getCoffeeShop();
            }}
          />
          <input
            type="radio"
            name="rating"
            className="mask mask-star-2 bg-yellow-400"
            onClick={() => {
              setRating(5);
              getCoffeeShop();
            }}
          />
        </div>
      </div>

      <div className="hoursbox flex p-2">
        <div className="label">
          <span className="label-text">Ouvert 24h/24h :</span>
        </div>
        <div className="hours pt-3">
          <input
            type="checkbox"
            className="toggle toggle-success"
            onChange={(e) => {
              if (e.target.checked === true) {
                setHours("True");
              } else {
                setHours("False");
              }
              getCoffeeShop();
            }}
          />
        </div>
      </div>

      <div className="clientnbbox flex p-2">
        <div className="label">
          <span className="label-text">Nombre d'avis client minimum :</span>
        </div>
        <div className="clientnb pt-1">
          <input
            type="text"
            className="input input-bordered"
            placeholder="500"
            onChange={(e) => {
              setClientnb(e.target.value);
              getCoffeeShop();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
