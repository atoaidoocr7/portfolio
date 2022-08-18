import "./Contact.css";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../modes/context";
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
  const formRef = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9pww4la",
        "template_zc2wxwm",
        formRef.current,
        "-XD478YLdya0qByaE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
          inputRef1.current.value = ""
          inputRef2.current.value = ""
          inputRef3.current.value = ""
          inputRef4.current.value = ""
        },
        (error) => {
          console.log(error.text);
        }
      );

  };



  return (
    <div className="c">
      <div style={{ backgroundColor: darkMode ? "#2FA1ED" : "navy" }} className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Connect</h1>
          <div className="c-info">
            {/* <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 267 454 3737
            </div> */}
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              ato.aidoo@temple.edu
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Philadelphia, Pennsylvania, 19136
            </div>
            <div className="c-info-item">
              <SocialIcon className="c-icon" url="https://linkedin.com/ato-aidoo" />
              <SocialIcon style={{ backgroundColor: darkMode && "white", borderRadius: "50%" }} className="c-icon" url="https://github.com/atoaidoocr7" />
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Send me a message</b>  I would be happy to further discuss my experiences with you,
            simply shoot me an email or message me on LinkedIn! :)
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input ref={inputRef1} style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" placeholder="Name" name="user_name" />
            <input ref={inputRef2} style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" placeholder="Subject" name="user_subject" />
            <input ref={inputRef3} style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" placeholder="Email" name="user_email" />
            <textarea ref={inputRef4} style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} rows="5" placeholder="Message" name="message" />
            <button style={{ backgroundColor: darkMode ? "#2FA1ED" : "navy", color: darkMode && "white" }} >Submit</button>
            {done && "Thank you, will be in touch with you soon..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;