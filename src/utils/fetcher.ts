export const fetchedUtils = async (endPoint: string) => {
  const response = await fetch(endPoint, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    cache: "force-cache",
  });

  const data = await response.json();
  console.log(data);
  return data;
};
