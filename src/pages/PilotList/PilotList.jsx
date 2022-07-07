import Pilot from "./Pilot";

const PilotList = ({pilots}) => {
  return (
    <>
      {pilots.map(pilot =>
        <Pilot pilot={pilot}/>
      )}
    </>
  );
}

export default PilotList;