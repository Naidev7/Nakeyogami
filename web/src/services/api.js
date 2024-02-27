const callToApi = (dataForm) => {
  return fetch('https://project-promo-v-module-4-team-2.onrender.com/api/addProject', {
    method: 'POST',

    body: JSON.stringify(dataForm),
    headers: { 'Content-type': 'application/json' },
  }).then((response) => response.json());
};
export default callToApi;
