export interface ShowToastProps {
  type?: string;
  message?: string;
  icon?: string;
  duration?: number;
}
export function showToast({
  type = 'default',
  message,
  icon = 'info',
  duration = 3000,
}: ShowToastProps) {
  return {
    type: '@toast/SHOW',
    payload: { type, message, icon, duration },
  };
}

export function hideToast() {
  return {
    type: '@toast/HIDE',
  };
}
