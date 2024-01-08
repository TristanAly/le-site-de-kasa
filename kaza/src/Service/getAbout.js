const getAbout = async () => {
  try {
    const response = await fetch("/data/abouts.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données JSON :", error);
  }
};

export default getAbout;
