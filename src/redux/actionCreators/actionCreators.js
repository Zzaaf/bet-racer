import {
  INIT_USER,
  ADD_BET,
  DELETE_BET,
  START_RACE,
  NEW_RACE,
} from '../actionTypes/actionTypes';

export function initUserAC(payload) {
  return { type: INIT_USER, payload }
}

export function addBetAC(payload) {
  return { type: ADD_BET, payload }
}

export function deleteBetAC(payload) {
  return { type: DELETE_BET, payload }
}

export function startRaceAC(payload) {

  return { type: START_RACE, payload }
}

export function newRaceAC(payload) {
  return { type: NEW_RACE, payload }
}
