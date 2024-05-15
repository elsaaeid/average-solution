import React, { useState } from "react";
import "./Contact.scss";
import { toast } from "react-toastify";
import axios from "axios";
import { useTranslation } from "react-i18next";
import {BACKEND_URL} from "../../../redux/helper";
const API_URL = `${BACKEND_URL}/api/contactus`;


const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const data = {
    subject,
    message,
  };
  	// Translation
    const { t } = useTranslation();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, data);
      setSubject("");
      setMessage("");
      toast.success(response.data.message);
    } catch (error) {
      toast.error("User not found, please signup");
    }
  };

  return (
    <form onSubmit={sendEmail}>
    <label>{t("contact.service")}</label>
    <input
      type="text"
      name="subject"
      placeholder="Your service"
      required
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
    />
    <label>{t("dashboard.Message")}</label>
    <textarea
      cols="30"
      rows="10"
      name="message"
      required
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    ></textarea>
    <button type="submit" className="btn">{t("contact.sendMessage")}</button>
</form>
  );
};

export default Contact;
