import React from "react";
import Title from "../component/Title";
import Button from "../component/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHouseChimney,
  faLocationDot,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { House } from "lucide-react";
import PlaceCards from "../component/PlaceCards";
import RandomPlace from "../component/RandomPlace";

function PlaceList() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-7xl py-5">
        <Title title={"Historical Places"} />
        
        <RandomPlace/>
        <Title title={"All Historical Places"} customStyles={"mt-4"}/>
        <PlaceCards/>
      </div>
    </div>
  );
}

export default PlaceList;
