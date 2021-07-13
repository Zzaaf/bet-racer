import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBetAC, deleteBetAC } from '../../redux/actionCreators/actionCreators';
import './Team.css'

const styles = {
  team: {
    width: '700px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'
  },
  game: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  res: {
    marginLeft: '.7rem'
  },
  img: {
    width: '30px'
  },
  bet: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
}

function Team({ team }) {
  const teamsState = useSelector((state) => state.teamsReducer.teams)
  const dispatch = useDispatch()
  console.log('teamsState from TEAM',teamsState);
  const betInput = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    const userBet = betInput.current.bet.value
    const bet = {id: team.id, bet: userBet}
    console.log('bet',bet)
    dispatch(addBetAC(bet))
    betInput.current.bet.value = ''
  }

  const resetHandler = (id) => {
    dispatch(deleteBetAC(id))
  }


  return (
    <div className={team.winner ? "winner" : ""} key={team.id} style={styles.team}>
      <h6>{team.name}</h6>
      <img style={styles.img} src={team.img} alt={team.name} />
      <div>ставка: {team.bet}
        <form ref={betInput} style={styles.bet}>
          <input style={styles.btn2} type="number" name="bet" />
          <button style={styles.res} onClick={submitHandler} type="button" className="waves-effect waves-light btn">BET &32;</button>
          <button style={styles.res} onClick={() => resetHandler(team.id)} type="button" className="waves-effect waves-light btn">RES &32;</button>
        </form></div>
      <span>время: {team.time}</span></div>
  );
}

export default Team;
