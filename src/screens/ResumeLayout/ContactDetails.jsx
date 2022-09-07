import { useRef } from "react";
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { contactDetailItemWrapperStyle } from "../../styles/base";

export default function ContactDetails({ contactData }) {
  const contactDataRef = useRef(contactData);
  return (
    <div className="contact-details-template-wrapper w-full h-fit grid grid-cols-3 items-center justify-start gap-2">
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
              {contactDataRef.current?.instagram?.username}
            </span>
          </span>
        </a>
      }
      {contactDataRef.current?.linkedin && contactDataRef.current?.linkedin?.link &&
        <a href={contactDataRef.current?.linkedin?.link} target="_blank" rel="noreferrer">
          <span className={contactDetailItemWrapperStyle}>
            <FaLinkedin />
            <span className="contact-detail-linkedin">
              {contactDataRef.current?.linkedin?.username}
            </span>
          </span>
        </a>
      }
    </div>
  )
}