import Pilot from "./Pilot";

const PilotList = ({pilots}) => {
  return (
    <>
      {pilots.map(pilot =>
        <div className='pilot-divs'>
          <Pilot pilot={pilot}/>
        </div>
      )}
    </>
  );
}

export default PilotList;