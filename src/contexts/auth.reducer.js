export default function authReducer(state, action) {
  switch (action.type) {
    case 'login':
      state = action.payload;
      break;

    case 'logout':
      state = action.payload;
      break;
  }
  return state;
}
