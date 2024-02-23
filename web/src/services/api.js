const callToApi = (dataForm) => {
  return fetch('http://localhost:5001/api/addProject', {
    method: 'POST',

    body: JSON.stringify(dataForm),
    headers: { 'Content-type': 'application/json' },
  }).then((response) => response.json());
};
export default callToApi;
