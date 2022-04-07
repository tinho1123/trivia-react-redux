import { SET_EMAIL_ACTION, SET_SCORE_ACTION, SET_SCORE_RANKING } from '../actions';

const INITIAL_STATE = {
  score: 0,
  assertions: 0,
  name: '',
  gravatarEmail: '',
};

function player(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_EMAIL_ACTION:
    return { ...state, ...action.payload };
  case SET_SCORE_ACTION:
    return {
      ...state,
      score: state.score + action.payload.score,
      assertions: state.assertions + action.payload.assertions,
    };
  case SET_SCORE_RANKING:
    return INITIAL_STATE;
  default:
    return state;
  }
}

export default player;
