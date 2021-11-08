import axios from 'axios';

const settings = {
  headers: {
    'Content-Type': 'application/json',
  },
  // prefer: {
  //   code: 200,
  //   example: 'success',
  // },
};

export const personsAPI = {
  getPersons() {
    return axios.get(
      'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users',
      settings
    );
  },
};
