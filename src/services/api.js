const getDataFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character/").then((response) =>
    response.json()
  );

  //.catch(error => )  OJO QUE NO SE ME OLVIDE MIRAR EL CATCH
};

export default {
  getDataFromApi: getDataFromApi,
};
