import { fetchWrapper } from "../helpers/fetch-wrapper";

const apiUrl = "http://localhost:8000/api/shorturl";

export const shortURLService = {
  create,
};

async function create(longURL) {
  const response = await fetchWrapper.post(apiUrl, { url: longURL });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      (data.message && data.message) || "Could not create new user."
    );
  }

  return data;
}
