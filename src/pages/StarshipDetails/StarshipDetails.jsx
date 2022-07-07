import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getDetails } from "../../services/sw-api";

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
    <div className='all-starships'>
      {starshipDetails.name ?
      <>
        <div className='starship-details'>
          <h1>NAME: {starshipDetails.name}</h1>
          <h1>MODEL: {starshipDetails.model}</h1>
          <Link to='/'>
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