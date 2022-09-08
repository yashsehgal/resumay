import React, { useRef } from "react";
import { educationDetailsWrapperStyle } from "../../styles/base";

export default function EducationDetailsWrapper({ educationData }) {
  const educationDataResponse = useRef(educationData);
  return (
    <div className={educationDetailsWrapperStyle}>
      <h1 className="education-section-title leading-snug text-xl font-semibold mb-3">Education</h1>
      {educationDataResponse.current?.map((education, educationIndex) => {
        if (education?.courseName) {
          return (
            <React.Fragment key={educationIndex}>
              <div className="education-record-item-content-wrapper flex flex-row items-center justify-between mb-3">
                <div className="education-organization-content-wrapper leading-snug w-fit h-fit flex flex-col items-start">
                  <h1 className="education-course-name-title text-lg font-semibold text-gray-700">{education?.courseName}</h1>
                  <p className="education-organization-title text-sm font-normal text-gray-500">from {education?.organization}</p>
                </div>
                <span className="education-record-duration-tag-wrapper text-xs font-normal text-gray-500 flex flex-row items-center justify-end gap-1">
                  <span className="start-date-wrapper">{education?.duration?.startDate}</span>
                  {"-"}
                  <span className="end-date-wrapper">{education?.duration?.endDate}</span>
                </span>
              </div>
            </React.Fragment>
          )
        } else {
          return <React.Fragment key={educationIndex}></React.Fragment>
        }
      })}
    </div>
  )
}