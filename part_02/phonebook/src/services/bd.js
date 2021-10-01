import axios from "axios";

const URL = "http://localhost:3001/contacts";

export const getAllContacts = () => {
  const request = axios.get(URL);
  return request.then((response) => response.data);
};

export const createContact = (newContact) => {
  const request = axios.get(URL, newContact);
  return request.then((response) => response.data);
};
