export const authInitialValue = {
  isSignin: false,
  id: '',
  email: '',
  nickname: ''
};

export function onSignIn(userId, email, nickname) {
  return {
    type: 'signIn',
    payload: {
      id: userId,
      email,
      nickname
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
      return (state = { isSignin: false, id: '', email: '', nickname: '' });
  }
  return state;
}
