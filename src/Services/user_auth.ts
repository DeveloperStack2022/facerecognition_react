const URI = "http://localhost:8000/api/v0.1";
export const sign_up = async (data: any) => {
  return await fetch(`${URI}/users`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
