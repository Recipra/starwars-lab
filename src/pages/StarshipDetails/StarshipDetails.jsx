import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getDetails } from "../../services/sw-api";
import PilotList from "../PilotList/PilotList";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipDetails = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipDetails)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <div className='starship-card'>
      {starshipDetails.name ?
      <>
        <div className='starship-details'>
          <h1>NAME: {starshipDetails.name}</h1>
          <h1>MODEL: {starshipDetails.model}</h1>
          {starshipDetails.pilots.length ?
          <>
            <h1>PILOTS:</h1>
            <PilotList className='pilots' pilots={starshipDetails.pilots}/>
          </>
          :
          <>
            <h2>This ship has no pilots.</h2>
          </>
          }
          <Link className='return-button' to='/'>
            RETURN
          </Link>
        </div>
      </>
      :
      <>
      <p>Loading starship details...</p>
      </>
      }
    </div>
  );
}

export default StarshipDetails;