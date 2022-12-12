const URI = "http://localhost:8000/api/v0.1";
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
