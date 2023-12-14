const fetchDataFromApi = async (apiUrl, apiKey) => {
    try {
      const response = await fetch(`${apiUrl}&appid=${apiKey}`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  export default fetchDataFromApi;