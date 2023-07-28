import { useState, useEffect } from "react";
import { Alert } from "./Alert";

interface TimedAlertProps {
  message: string;
  type: "success" | "error";
  duration: number;
  clearAlert: () => void;
}

export const TimedAlert = ({
  message,
  type,
  duration,
  clearAlert,
}: TimedAlertProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      clearAlert();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, clearAlert]);

  return visible ? <Alert text={message} type={type} /> : null;
};
