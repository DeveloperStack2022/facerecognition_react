// const URI = "http://localhost:8000/api/v0.1";
// const URI = "http://192.168.68.27:8000/api/v0.1";
const URI = process.env.REACT_APP_API_BACKEND_URL
export const compareImage = async (body: any) => {
  let data = await fetch(`${URI}/userdetect/compareImageFaceRecognition`, {
    method: "POST",
    body: body,
  });
  return await data.json();
};

export const deleteImage = async () => {
  let data = await fetch(`${URI}/userdetect/deleteImages`, {
    method: "DELETE",
  });
  return await data.json();
};
