import { TOAST_HIDE, TOAST_SHOW } from 'actions/toast';

export default function toast(state, action) {
  state = state || { show: false };

  switch (action.type) {
    case TOAST_HIDE:
      return {
        ...state,
        show: false
      };
    case TOAST_SHOW:
      return {
        show: true,
        role: action.payload.role,
        message: action.payload.message
      };
    default:
      return state;
  }
}
