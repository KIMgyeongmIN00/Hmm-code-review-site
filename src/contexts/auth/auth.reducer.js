export const authInitialValue = {
  isSignin: false,
  id: '',
  nickname: ''
};

export function onSignIn(userId, userNickname) {
  return {
    type: 'signIn',
    payload: {
      id: userId,
      nickname: userNickname
    }
  };
}

export function onSignOut() {
  return {
    type: 'signOut'
  };
}

export default function authReducer(state, action) {
  switch (action.type) {
    case 'signIn':
      return (state = { ...action.payload, isSignin: true });

    case 'signOut':
      return (state = { isSignin: false, id: '', nickname: '' });
  }
  return state;
}
