import { useEffect } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import { StatusBar, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Icon } from '@rneui/themed';
import { hideToast } from '../../store/modules/toast/actions';

interface Props {
  rootReducer: {
    toast: {
      duration: number;
      icon: string;
      message: string;
      show: boolean;
      type: string;
    };
  };
}

let timer = null;

export function Toast() {
  const { show, message, icon, duration, type } = useSelector(
    (state: Props) => state.rootReducer.toast,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (show) {
      timer = setTimeout(() => {
        dispatch(hideToast());
      }, duration);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [show, message, icon, duration, type]);

  function handleCloseToast() {
    dispatch(hideToast());
    if (timer) {
      clearTimeout(timer);
    }
  }

  return (
    <View className="z-50">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View
        className={clsx(
          'absolute w-screen transition-all ease-in h-32 duration-500',
          {
            'bg-background': !show,
            'bg-green-500': show && type === 'success',
            'bg-yellow-300': show && type === 'warning',
            'bg-red-500': show && type === 'error',
            'bg-zinc-900': show && type === 'default',
            'opacity-70': duration < 1000,
            '-top-32': !show,
            'top-0': show,
          },
        )}
      >
        <TouchableWithoutFeedback onPress={handleCloseToast}>
          <View
            className="flex h-full transition-all ease-linear pt-6 max-w-full
               justify-end"
          >
            <View className="flex h-full max-w-full  flex-row items-center px-4 gap-2">
              <Icon name={icon} color="#fff" size={26} />

              <Text className="text-white flex-wrap">{message}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
