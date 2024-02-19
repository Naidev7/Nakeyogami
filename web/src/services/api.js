const callToApi = (dataForm) => {
  return fetch('https://dev.adalab.es/api/projectCard', {
    method: 'POST',

    body: JSON.stringify(dataForm),
    headers: { 'Content-type': 'application/json' },
  }).then((response) => response.json());
};
export default callToApi;
