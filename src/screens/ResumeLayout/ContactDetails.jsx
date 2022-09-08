import React, { useRef } from "react";
import { FaBehance, FaDribbble, FaEnvelope, FaFacebook, FaGithub, FaGlobe, FaInstagram, FaLink, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { contactDetailItemWrapperStyle } from "../../styles/base";

export default function ContactDetails({ contactData }) {
  const contactDataRef = useRef(contactData);
  return (
    <div className="contact-details-template-wrapper grid grid-cols-4 gap-2 items-center justify-start mt-3">
      {contactDataRef.current?.email && 
        <a href={`mailto:${contactDataRef.current?.email}`} target="_blank" rel="noreferrer">
          <span className={contactDetailItemWrapperStyle}>
          <FaEnvelope />
          <span className="contact-detail-email-address">
            {contactDataRef.current?.email}
          </span>
        </span>
        </a>
      }
      {contactDataRef.current?.phoneNumber &&
        <a href={`tel:${contactDataRef.current?.phoneNumber}`} target="_blank" rel="noreferrer">
          <span className={contactDetailItemWrapperStyle}>
            <FaPhoneAlt />
            <span className="contact-detail-phone-number">
              {contactDataRef.current?.phoneNumber}
            </span>
          </span>
        </a>
      }
      {contactDataRef.current?.twitter && contactDataRef.current?.twitter?.link && 
        <a href={contactDataRef.current?.twitter?.link} target="_blank" rel="noreferrer">
          <span className={contactDetailItemWrapperStyle}>
            <FaTwitter />
            <span className="contact-detail-twitter">
              {contactDataRef.current?.twitter?.username || "twitter"}
            </span>
          </span>
        </a>
      }
      {contactDataRef.current?.instagram && contactDataRef.current?.instagram?.link &&
        <a href={contactDataRef.current?.instagram?.link} target="_blank" rel="noreferrer">
          <span className={contactDetailItemWrapperStyle}>
            <FaInstagram />
            <span className="contact-detail-instagram">
              {contactDataRef.current?.instagram?.username || "instagram"}
            </span>
          </span>
        </a>
      }
      {contactDataRef.current?.linkedin && contactDataRef.current?.linkedin?.link &&
        <a href={contactDataRef.current?.linkedin?.link} target="_blank" rel="noreferrer">
          <span className={contactDetailItemWrapperStyle}>
            <FaLinkedin />
            <span className="contact-detail-linkedin">
              {contactDataRef.current?.linkedin?.username || "linkedin"}
            </span>
          </span>
        </a>
      }
      {contactDataRef.current?.website && contactDataRef.current?.website?.link &&
        <a href={contactDataRef.current?.website?.link} target="_blank" rel="noreferrer">
          <span className={contactDetailItemWrapperStyle}>
            <FaGlobe />
            <span className="contact-detail-website">
              {contactDataRef.current?.website?.title || "website"}
            </span>
          </span>
        </a>
      }
      {contactDataRef.current?.github && contactDataRef.current?.github?.link &&
        <a href={contactDataRef.current?.github?.link} target="_blank" rel="noreferrer">
          <span className={contactDetailItemWrapperStyle}>
            <FaGithub />
            <span className="contact-detail-github">
              {contactDataRef.current?.github?.username || "github"}
            </span>
          </span>
        </a>
      } 
      {contactDataRef.current?.dribble && contactDataRef.current?.dribble.link &&
        <a href={contactDataRef.current?.dribble.link} target="_blank" rel="noreferrer">
          <span className={contactDetailItemWrapperStyle}>
            <FaDribbble />
            <span className="contact-detail-dribble">
              {contactDataRef.current?.dribble?.username || "dribble"}
            </span>
          </span>
        </a>
      }
      {contactDataRef.current?.behance && contactDataRef.current?.behance?.link &&
        <a href={contactDataRef.current?.behance?.link} target="_blank" rel="noreferrer">
          <span className={contactDetailItemWrapperStyle}>
            <FaBehance />
            <span className="contact-detail-behance">
              {contactDataRef.current?.behance?.username || "behance"}
            </span>
          </span>
        </a>
      }
      {contactDataRef.current?.facebook && contactDataRef.current?.facebook?.link &&
        <a href={contactDataRef.current?.facebook?.link} target="_blank" rel="noreferrer">
          <span className={contactDetailItemWrapperStyle}>
            <FaFacebook />
            <span className="contact-detail-facebook">
              {contactDataRef.current?.facebook?.username || "facebook"}
            </span>
          </span>
        </a>
      }
      {contactDataRef.current?.other && 
        contactDataRef.current?.other?.map((otherContact, otherContactIndex) => {
          if (otherContact?.url) {
            return (
              <React.Fragment key={otherContactIndex}>
                <a href={otherContact?.url} target="_blank" rel="noreferrer">
                  <span className={contactDetailItemWrapperStyle}>
                    <FaLink />
                    <span className={"contact-detail-" + otherContact?.title.toLowerCase()}>
                      {otherContact?.title || "Link"}
                    </span>
                  </span>
                </a>
              </React.Fragment>
            )
          } else {
            return <React.Fragment key={otherContactIndex}></React.Fragment>
          }
        })
      }
    </div>
  )
}