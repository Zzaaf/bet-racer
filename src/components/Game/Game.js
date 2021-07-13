import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newRaceAC, startRaceAC } from '../../redux/actionCreators/actionCreators';
import Team from '../Team/Team';

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
  btn1: {
    marginBottom: '.7rem'
  },
  btn2: {
    marginRight: '.7rem'
  },
}

function Game(props) {
  
  const teamsState = useSelector((state) => state.teamsReducer.teams)
  const dispatch = useDispatch()
  console.log('teamState', teamsState)

  const resetRaceHendler = () => {
    dispatch(newRaceAC(0))
  }

  const startRaceHendler = () => {
    dispatch(startRaceAC())
  }

  return (
    <div style={styles.game} className="game">
      <button onClick={resetRaceHendler} style={styles.btn1} type="button" className="waves-effect waves-light btn">Новая гонка</button>
      <button onClick={startRaceHendler} style={styles.btn1} type="button" className="waves-effect waves-light btn">Старт текущей гонки</button>
      <div className="team">
        {teamsState.length ? (teamsState.map(team => <Team key={team.id} team={team} />)) : null}
      </div>

    </div>
  );
}

export default Game;
