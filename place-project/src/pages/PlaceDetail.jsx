import React from "react";
import Title from "../component/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PlaceCard from "../component/PlaceCard";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../component/Button";


function PlaceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const idInte = parseInt(id);
  const place = useSelector((state) =>
    state.places.find((place) => place.id === idInte)
  );

  return (
    <>
    <div className="flex justify-center items-center">
      <div className="w-7xl py-5">
      <Title title={"Historical Places"} />
      <Button
        btnText="Go Back"
        startIcon={<FontAwesomeIcon icon={faArrowLeft} />}
        clickEvent={() => navigate(-1)}
      />
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="max-w-sm">
          <PlaceCard place={place} isDetail={true}/>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default PlaceDetail;
