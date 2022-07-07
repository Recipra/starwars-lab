import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllStarships } from "../../services/sw-api";

const AllStarships = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchAllStarships = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchAllStarships()
  }, [])

  return (
    <>
      <div className='all-starships'>
        {starships.length ?
        <>
          {starships.map(starship =>
            <Link to='/starship' state={{starship}} key={starship.name}>
              <div className="starship-div">
                {starship.name}
              </div>
            </Link>
          )}
        </>
        :
        <>
        <p>Loading starships...</p>
        </>
        }

      </div>
    </>
  );
}

export default AllStarships;