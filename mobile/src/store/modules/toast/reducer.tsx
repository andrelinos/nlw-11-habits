import produce from 'immer';
import { ShowToastProps } from './actions';

const INITIAL_STATE = {
  type: null,
  message: null,
  icon: '',
  duration: 500,
  show: false,
};

export default function toast(
  state = INITIAL_STATE,
  action: {
    type: string;
    payload: ShowToastProps;
  },
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@toast/SHOW': {
        draft.type = action.payload.type;
        draft.message = action.payload.message;
        draft.icon = action.payload.icon;
        draft.duration = action.payload.duration;
        draft.show = true;
        break;
      }

      case '@toast/HIDE': {
        draft.type = null;
        draft.message = null;
        draft.icon = '';
        draft.duration = 5000;
        draft.show = false;
        break;
      }

      default:
        return;
    }
  });
}
