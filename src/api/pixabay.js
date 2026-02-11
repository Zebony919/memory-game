const apiKey = "54607699-c5febcf99e624a6775271a48d";
const baseURL = "https://pixabay.com/api/";

export const fetchCarImages = async (query = "cars", count = 12) => {
  const url = `${baseURL}?key=${apiKey}&q=${query}&image_type=photo&per_page=${count}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  return data.hits;
};
