export const ACTIONS = {
  STATUS: 'modal/status',
};

export function updateModal(value) {
  return dispatch => {
    dispatch({ type: ACTIONS.STATUS, ...value });
  };
}