const API_URI = "http://localhost:8000/api/v0.1";
// const API_URI = "http://192.168.68.27:8000/api/v0.1";
export const getUsers = async () => {
  let response = await fetch(`${API_URI}/userpersistencia/get_users?n_page=1`);
  return await response.json();
};
export const getUserImage = async (numero_cedula: string) => {
  // http://localhost:8000/api/v0.1/userpersistencia/get_user_image?numero_cedula=1722039789
  let response = await fetch(
    `${API_URI}/userpersistencia/get_user_image?numero_cedula=${numero_cedula}`
  );
  let data = await response.json();
  return data;
};

export const deleteUserPersistencia = async (numero_cedula: string) => {
  let response = await fetch(
    `${API_URI}/userpersistencia/delete_user?numero_cedula=${numero_cedula}`,
    {
      method: "DELETE",
    }
  );
  return await response.json();
};


export const getUsersPage = async (n_page:number) => {
  let response = await fetch(`${API_URI}/userpersistencia/get_users?n_page=${n_page}`)
  return await response.json()
}