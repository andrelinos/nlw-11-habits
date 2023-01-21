import { useDispatch } from 'react-redux';
import { ShowToastProps, showToast } from '../store/modules/toast/actions';

export const useToast = ({ duration, icon, message, type }: ShowToastProps) => {
  const dispatch = useDispatch();

  return dispatch(
    showToast({
      message,
      type,
      duration,
      icon,
    }),
  );
};
