export const authInitialValue = {
  isLogin: false,
  id: '',
  nickname: ''
};

export function onLogin(userId, userNickname) {
  return {
    type: 'login',
    payload: {
      id: userId,
      nickname: userNickname
    }
  };
}

export default function authReducer(state, action) {
  switch (action.type) {
    case 'login':
      return (state = { ...action.payload, isLogin: true });

    case 'logout':
      return (state = { isLogin: false, id: '', nickname: '' });
  }
  return state;
}
