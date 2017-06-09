import * as cst from '../constants/person';

export const add = person => (
  {
    type: cst.ADD,
    payload: person,
  });

export const remove = person => (
  {
    type: cst.REMOVE,
    payload: person,
  });
