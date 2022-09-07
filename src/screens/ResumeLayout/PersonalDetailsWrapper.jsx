import { personalDetailsWrapperStyle } from "../../styles/base";
import { FaLocationArrow } from 'react-icons/fa';
import ContactDetails from "./ContactDetails";

export default function PersonalDetailsWrapper({
  firstName, lastName, location, contacts
}) {
  return (
    <div className={personalDetailsWrapperStyle}>
      <div className="flex flex-row items-center justify-between">
        <span className="flex flex-row items-end leading-snug justify-start gap-1">
          <h1 className="resume-name-title text-2xl text-gray-700 font-semibold">
            {firstName} {lastName}
          </h1>
        </span>
        <span className="location text-xs font-normal text-gray-300 flex flex-row items-center justify-end gap-0.5">
          <FaLocationArrow />
          <span className="location-city">{location?.city}</span> {" "}
          <span className="location-state">({location?.state})</span>
          <span className="location-country">{location?.country}</span>
        </span>
      </div>
      <div className="resume-contact-details-wrapper mt-3">
        <ContactDetails contactData={contacts} />
      </div>
    </div>
  )
}