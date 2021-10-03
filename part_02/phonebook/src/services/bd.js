import axios from "axios";

const URL = "http://localhost:3001/contacts";

export const getAllContacts = () => {
  const request = axios.get(URL);
  return request.then((response) => response.data);
};

export const createContact = (newContact) => {
  const request = axios.post(URL, newContact);
  return request.then((response) => response.data);
};

export const updateContact = (id, updatedContact) => {
  const request = axios.put(`${URL}/${id}`, updatedContact);
  return request.then((response) => response.data);
};

export const deleteContact = (id) => {
  const request = axios.delete(`${URL}/${id}`);
  return request.then((response) => response.data);
};
