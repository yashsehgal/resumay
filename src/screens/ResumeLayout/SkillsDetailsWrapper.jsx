import React, { useRef } from "react";
import { skillsDetailsWrapperStyle } from "../../styles/base";

export default function SkillsDetailsWrapper({ skillsData }) {
  const skillsDataResponse = useRef(skillsData);
  console.log(skillsDataResponse)
  return (
    <div className={skillsDetailsWrapperStyle}>
      <h1 className="skills-section-title leading-snug text-xl font-semibold mb-3">Skills</h1>
      <div className="skills-category-section-wrapper">
        <div className="skills-category_languages-section-wrapper flex flex-row items-center justify-between">
          <h1 className="skills-category_languages-heading text-base text-gray-700">Languages</h1>
          <ul className="skills-category_languages-items-list-wrapper flex flex-row items-center justify-end gap-1 text-sm text-gray-500 font-normal">
            {skillsDataResponse.current?.languages?.map((language, languageIndex) => {
              if (language && language.toString().length > 0) {
                return (
                  <li className="skills-category_languages-item" key={languageIndex}>
                    {language}
                    {languageIndex === skillsDataResponse.current?.languages?.length-1
                      ? <React.Fragment></React.Fragment>
                      : <React.Fragment>,</React.Fragment>
                    }
                  </li>
                )
              } else {
                return <React.Fragment key={languageIndex}></React.Fragment>
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}