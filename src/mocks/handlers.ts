import { http } from 'msw';

const handlers = [
  http.get('/get', () => {
    console.log('a');
  }),
];

export default handlers;
