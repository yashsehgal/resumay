import React from "react";
import { useRef } from "react";
import { resumeContentWrapperStyle } from "../../styles/base";
import EducationDetailsWrapper from "./EducationDetailsWrapper";
import PersonalDetailsWrapper from "./PersonalDetailsWrapper";

export default function ResumeLayout({ data }) {
  const resumeLayoutResponse = useRef({
    personalDetails: {
      name: {
        firstName: data?.personalDetails?.name?.firstName,
        lastName: data?.personalDetails?.name?.lastName
      },
      location: {
        city: data?.personalDetails?.location?.city,
        state: data?.personalDetails?.location?.state,
        country: data?.personalDetails?.location?.country
      },
      contacts: {
        email: data?.personalDetails?.contacts?.email,
        phoneNumber: data?.personalDetails?.contacts?.phoneNumber,
        twitter: data?.personalDetails?.contacts?.twitter,
        instagram: data?.personalDetails?.contacts?.instagram,
        linkedin: data?.personalDetails?.contacts?.linkedin,
        website: data?.personalDetails?.contacts?.website,
        github: data?.personalDetails?.contacts?.github,
        dribble: data?.personalDetails?.contacts?.dribble,
        behance: data?.personalDetails?.contacts?.behance,
        facebook: data?.personalDetails?.contacts?.facebook,
        other: data?.personalDetails?.contacts?.other
      }
    },
    education: data?.education,
    skills: {
      languages: data?.personalDetails?.skills?.languages,
      libraries: data?.personalDetails?.skills?.libraries,
      tools: data?.personalDetails?.skills?.tools,
      platforms: data?.personalDetails?.skills?.platforms,
      otherSkills: data?.personalDetails?.skills?.otherSkills
    },
    experience: data?.experience,
    projects: data?.projects
  });

  return (
    <div className={resumeContentWrapperStyle}>
      <PersonalDetailsWrapper 
        firstName={resumeLayoutResponse.current?.personalDetails?.name?.firstName}
        lastName={resumeLayoutResponse.current?.personalDetails?.name?.lastName}
        location={resumeLayoutResponse.current?.personalDetails?.location}
        contacts={resumeLayoutResponse.current?.personalDetails?.contacts}
      />
      <EducationDetailsWrapper 
        educationData={resumeLayoutResponse.current?.education}
      />
      <div className="watermark-container text-center mt-6 text-xs opacity-60">
        Powered by love and <span className="text-blue-500">resumay</span>
      </div>
    </div>
  )
}