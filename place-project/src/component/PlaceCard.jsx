import { faArrowRight, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { markAsVisited, unmarkAsVisited } from "../redux/placeSlice";

function PlaceCard({place, isDetail}) {
    const {id, name, image, description, visited} = place;
    const dispatch = useDispatch();
    const toggleVisitedStatus = (id, visited) => {
        visited ? dispatch(unmarkAsVisited(id)) : dispatch(markAsVisited(id))
    }
  return (
    <div className="bg-white p-5 rounded-lg ">
      <img
        src={image}
        alt="img"
        className="aspect-video object-cover"
      />
      <div className="text-center my-3">
        <h3 className="text-xl font-bold font-roboto">{name}</h3>
        <p>{description}</p>
        <h4 className="font-extrabold text-sm text-orange-400 my-2 pb-2">{visited? "Visited" : "Not Visited"}</h4>
      </div>
      <div className={`flex ${isDetail? 'justify-center' : 'justify-between'}`}>
        <Button
          clickEvent={() => toggleVisitedStatus(id, visited)}
          btnText={visited? "Un Mark As Visited" : "Mark As visited"}
          startIcon={<FontAwesomeIcon icon={faLocationPin} />}
        />
        {
            !isDetail ? <Link to={`${id}`}>
        <Button
          btnText={"View Details"}
          endIcon={<FontAwesomeIcon icon={faArrowRight} />}
        />
        </Link> : null
        }
      </div>
    </div>
  );
}

export default PlaceCard;
