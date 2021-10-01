import axios from "axios";

const URL = "http://localhost:3001/contacts";

export const getAllContacts = () => {
  return axios.get(URL);
};

export const createContact = (newContact) => {
  return axios.post(URL, newContact);
};
