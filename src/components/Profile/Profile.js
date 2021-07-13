import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { initUserAC } from '../../redux/actionCreators/actionCreators';

function Profile(props) {
  const formInputs = useRef()
  const userState = useSelector((state) => state.userReducer.user)
  const dispatch = useDispatch()
  console.log(userState)

  const submitHandler = (event) => {
    event.preventDefault()
    const userName = formInputs.current.inputName.value
    const userDep = formInputs.current.inputDep.value

    const user = { name: userName, deposit: userDep }
    console.log(user)
    dispatch(initUserAC(user))
  }
  return (
    <>
      {userState.length ? (
        <>
        <h2>Привет, {userState[0].name ? userState[0].name : null}!</h2>
        <h2>Твой депозит: {userState[0].deposit ? userState[0].deposit : null}</h2>
        </>
      ) : (
        <div className="row">
          <form ref={formInputs} onSubmit={submitHandler} className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input
                  name="inputName"
                  type="text"
                  className="validate"
                  required
                />
                <label>Введите ваше имя</label>
              </div>
              <div className="input-field col s6">
                <input
                  name="inputDep"
                  type="text"
                  className="validate"
                  required
                />
                <label>Введите ваш депозит</label>
              </div>
              <button type="submit" className="waves-effect waves-light btn">
                Войти
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Profile;
