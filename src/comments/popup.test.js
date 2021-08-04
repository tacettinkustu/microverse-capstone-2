import { getCounts } from './popup.js';

const arr = [
  {
    creation_date: '2021-08-04',
    username: 'tacettin',
    comment: 'wonderful',
  },
  {
    creation_date: '2021-08-04',
    username: 'emily',
    comment: 'fantastic',
  },
  {
    creation_date: '2021-08-04',
    username: 'jack',
    comment: 'amazing',
  },
  {
    creation_date: '2021-08-04',
    username: 'helen',
    comment: 'very good',
  },
];

test('input an array wiht 4 elements', () => {
  expect(getCounts(arr)).toEqual(4);
});
