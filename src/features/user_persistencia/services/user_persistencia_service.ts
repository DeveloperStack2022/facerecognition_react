const API_URL = "http://localhost:8000/api/v0.1";

export const getUserPersistencia = async (numero_cedula: string) => {
  let response = await fetch(
    `${API_URL}/userpersistencia/getUserByNumeroCedula/${numero_cedula}`
  );
  return await response.json();
};
