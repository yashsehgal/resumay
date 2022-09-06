import { personalDetailsWrapperStyle } from "../../styles/base";
import { FaLocationArrow } from 'react-icons/fa';

export default function PersonalDetailsWrapper({
  firstName, lastName, age, location, contacts
}) {
  return (
    <div className={personalDetailsWrapperStyle}>
      <div className="flex flex-row items-center justify-between">
        <h1 className="resume-name-title leading-snug text-2xl font-semibold">
          {firstName} {lastName}
        </h1>
        <span className="location text-sm font-semibold text-zinc-300 flex flex-row items-center justify-end gap-0.5">
          <FaLocationArrow />
          <span className="location-city">{location?.city}</span> {" "}
          {"("}<span className="location-state">{location?.state}</span>{") "}
          <span className="location-country">{location?.country}</span>
        </span>
      </div>
    </div>
  )
}