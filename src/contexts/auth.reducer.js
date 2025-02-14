export default function authReducer(state, action) {
  switch (action.type) {
    case 'login':
      state = true;
      break;

    case 'logout':
      state = false;
      break;
  }
  return state;
}
