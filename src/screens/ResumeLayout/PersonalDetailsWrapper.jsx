import { personalDetailsWrapperStyle } from "../../styles/base";

export default function PersonalDetailsWrapper({
  firstName, lastName, age, location, contacts
}) {
  return (
    <div className={personalDetailsWrapperStyle}>
      <h1 className="resume-name-title leading-snug text-2xl font-semibold">
        {firstName} {lastName}
      </h1>
    </div>
  )
}