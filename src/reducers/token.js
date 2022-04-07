import { TOKEN_ACTION } from '../actions';

const INITIAL_STATE = '';

export default function token(state = INITIAL_STATE, action) {
  switch (action.type) {
  case TOKEN_ACTION:
    return action.payload.token;
  default:
    return state;
  }
}
