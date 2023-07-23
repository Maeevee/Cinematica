import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { getTrailers } from "../../../../servises/servises";
import { Videoplayer } from "./components/Videoplayer";
import { ITrailer } from "../../../../utils/interfaces";


const Trailer = () => {

  const {filmId} = useParams();
  const [trailers, setTrailers] = useState<[]|ITrailer[]>([]);

  useEffect ( () =>{
    getTrailers(filmId as string).then (setTrailers).catch(console.log)
  }, [filmId])
  console.log(trailers);
  
  return (
    <div>
      <Videoplayer data={trailers}/>
    </div>
  )
}

export default Trailer
