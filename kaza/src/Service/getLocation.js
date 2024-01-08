const getLocation = async () => {
  try {
    const response = await fetch("/data/logements.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données JSON :", error);
  }
};

export default getLocation;
