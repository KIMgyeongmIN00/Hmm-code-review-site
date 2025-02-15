export const authInitialValue = {
  isLogin: false,
  id: '',
  nickname: ''
};

export default function authReducer(state, action) {
  switch (action.type) {
    case 'login':
      return (state = { ...action.payload, isLogin: true });

    case 'logout':
      return (state = { isLogin: false, id: '', nickname: '' });
  }
  return state;
}
