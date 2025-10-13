import React from 'react'
import SelectImage from '../components/Hooks/UseState/SelectImage';
import SimpleUseEffect from '../components/Hooks/UseEffect/SimpleUseEffect';
import CRUD from '../components/CRUD';
import { useParams } from 'react-router-dom';
import SelectImg2 from '../components/Hooks/UseState/SelectImg2';
import VideoPlayer from '../components/UseRef/VideoPlayer';

function HookDetail() {
    const {id} = useParams();
  return (
    <>
        {id === "useState" ? (
            <SelectImg2 />
        ) : id === "useEffect" ? (
            <SimpleUseEffect></SimpleUseEffect>
        ) : (
            <VideoPlayer></VideoPlayer>
        )} 
    </>
  );
}

export default HookDetail