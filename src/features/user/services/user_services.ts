const API_URI = "http://localhost:8000/api/v0.1";
export const getUsers = async () => {
  let response = await fetch(`${API_URI}/userpersistencia/get_users`);
  return await response.json();
};
