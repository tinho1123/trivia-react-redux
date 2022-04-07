export const SET_EMAIL_ACTION = 'SET_EMAIL';
export const TOKEN_ACTION = 'TOKEN_ACTION';
export const SET_SCORE_ACTION = 'SET_SCORE_ACTION';
export const SET_SCORE_RANKING = 'SET_SCORE_RANKING';

export const playerAction = (payload) => ({
  type: SET_EMAIL_ACTION,
  payload,
});

export const tokenAction = (payload) => ({
  type: TOKEN_ACTION,
  payload,
});

export const setScore = (payload) => ({
  type: SET_SCORE_ACTION,
  payload,
});

export const setNewScore = (payload) => ({
  type: SET_SCORE_RANKING,
  payload,
});
