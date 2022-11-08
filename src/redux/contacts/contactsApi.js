import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63666e3079b0914b75d0d079.mockapi.io/api/contacts',
});

export async function fetchApiContacts() {
  const data = await instance.get('/');
  return data.data;
}

export async function addApiContact(newContact) {
  const data = await instance.post('/', newContact);
  return data.data;
}

export async function deleteApiContact(id) {
  await instance.delete(`/${id}`);
  return id;
}
