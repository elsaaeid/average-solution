import React, { useState } from "react";
import "./Contact.scss";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Header from "../../../components/dashboard-components/Header";
import { useTranslation } from "react-i18next";
import {BACKEND_URL} from "../../../redux/helper";
import {Box} from '@mui/material';


const API_URL = `${BACKEND_URL}/api/contactus/`;


const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  
  const data = {
    subject,
    selectedOption,
    message,
  };
  	// Translation
    const { t } = useTranslation();

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(`Selected option: ${selectedOption}`);
    try {
      const response = await axios.post(API_URL, data);
      setSubject("");
      setMessage("");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    };
  return (
    <div>
      <div className="w-full">
      <Header className="m-5" title="Contact Us" />
        <form className="flex flex-col flex-center" onSubmit={sendEmail}>
            <label>{t("subject")}</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <Box className="flex flex-col flex-center" style={{ width: '100%' }}>
              <select name="selectedOption" className="serviceSelect" value={selectedOption} onChange={handleChange} required>
                <option value={t("contact.ServiceOption")}>{t("contact.ServiceOption")}</option>
                <option value={t("contact.Service1")}>{t("contact.Service1")}</option>
                <option value={t("contact.Service2")}>{t("contact.Service2")}</option>
                <option value={t("contact.Service3")}>{t("contact.Service3")}</option>
                <option value={t("contact.Service4")}>{t("contact.Service4")}</option>
              </select>
            </Box>
            <label>{t("dashboard.Message")}</label>
            <textarea
              cols="30"
              rows="10"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="btn">{t("contact.sendMessage")}</button>
            <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Contact;
