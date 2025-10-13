import React, { useState } from "react";
import PlaceCard from "./PlaceCard";
import { useSelector } from "react-redux";
import Button from "./Button";

function RandomPlace() {
  const [random, setRandom] = useState(null);
  const places = useSelector((state) => state.places);
  const [used, setUsed] = useState([]);

  const getRandomPlace = () => {
    let nextIndex;

    
    let currentUsed = [...used];
    if (currentUsed.length === places.length) {
      currentUsed = [];
    }
    do {
      nextIndex = Math.floor(Math.random() * places.length);
    } while (currentUsed.includes(nextIndex));

    setUsed([...currentUsed, nextIndex]);
    setRandom(nextIndex);
  };
  console.log("getRandomPlace")
 return(
    <>
      <Button btnText="Suggest Random Place" clickEvent={getRandomPlace} />
      {random !== null && (
        <div className="flex justify-center items-center min-h-[80vh]">
          <div className="max-w-sm">
            <PlaceCard place={places[random]} />
          </div>
        </div>
      )}
    </>
  );
}

export default RandomPlace;
