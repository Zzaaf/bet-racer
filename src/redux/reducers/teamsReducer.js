import {
  ADD_BET,
  DELETE_BET,
  START_RACE,
  NEW_RACE,
} from '../actionTypes/actionTypes'

const initialState = {
  title: 'Teams', teams: [
    {
      name: 'Audi',
      bet: 0,
      time: 0,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/400px-Audi-Logo_2016.svg.png',
      id: 1
    },
    {
      name: 'BMW',
      bet: 0,
      time: 0,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/400px-BMW_logo_%28gray%29.svg.png',
      id: 2
    },
    {
      name: 'Subaru',
      bet: 0,
      time: 0,
      img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/9f/Subaru_Logo.svg/275px-Subaru_Logo.svg.png',
      id: 3
    },
    {
      name: 'Mitsubishi',
      bet: 0,
      time: 0,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Mitsubishi_logo.svg/400px-Mitsubishi_logo.svg.png',
      id: 4
    },
  ]
};

const getWinner = (teams) => {
  let winnerIndex = 0
  teams.forEach((el, i) => {
    if (el.time < teams[winnerIndex].time) {
      winnerIndex = i
    }
  });
  return winnerIndex
}

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_BET:
      return {
        ...state, teams: state.teams.map(el => {
          if (el.id === action.payload.id) {
            return {
              ...el, bet: Number(action.payload.bet)
            }
          }
          return el
        })
      }

    case DELETE_BET:
      return {
        ...state, teams: state.teams.map(el => {
          if (el.id === action.payload) {
            return {
              ...el, bet: 0
            }
          }
          return el
        })
      }
    case START_RACE:
      const newRace = state.teams.map(el => {
        return {
          ...el, time: Math.floor(Math.random() * 100)
        }
      })

      const winner = getWinner(newRace)

      return {
        ...state, teams: newRace.map((el, i) => {
          if (i === winner) {
            return {
              ...el, winner: true
            }
          }
          return el
        })
      }

    case NEW_RACE:
      return {
        ...state, teams: state.teams.map(el => {
          return {
            ...el, time: 0, winner: false
          }
        })
      }

    default:
      return state
  }
};

export default teamsReducer
