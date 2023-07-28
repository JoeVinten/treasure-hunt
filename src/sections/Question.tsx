import { useEffect, useState } from "react";
import { Paragraph } from "../components/Paragraph";
import { TextInput } from "../components/TextInput";
import { Alert } from "../components/Alert";
import { GeoLocationCheck } from "./GeoLocationCheck";

interface QuestionProps {
  riddle: {
    id: number;
    riddle: string;
    question: string;
    answer: string;
    latitude: number;
    longitude: number;
  };
}

export const GEOLOCATIONSTATUS = {
  SUCCESS: "success",
  ERROR: "error",
  FAILURE: "failure",
};

export const Question = ({ riddle }: QuestionProps) => {
  const [geoLocationMessage, setGeoLocationMessage] = useState("");
  const [geoLocationStatus, setGeoLocationStatus] = useState("");

  useEffect(() => {
    const setMessageAndReset = (message: string, resetStatus = false) => {
      setGeoLocationMessage(message);
      const timer = setTimeout(() => {
        setGeoLocationMessage("");
        if (resetStatus) {
          setGeoLocationStatus("");
        }
      }, 3000);
      return timer;
    };

    let timer: number;
    if (geoLocationStatus === GEOLOCATIONSTATUS.SUCCESS) {
      timer = setMessageAndReset(
        "**Congrats!** You found the correct location! 🎉"
      );
    } else if (geoLocationStatus === GEOLOCATIONSTATUS.FAILURE) {
      timer = setMessageAndReset(
        `You're _not quite_ in the right location keep trying! 🚶‍♀️`,
        true
      );
    } else if (geoLocationStatus === GEOLOCATIONSTATUS.ERROR) {
      timer = setMessageAndReset(
        `There was an error getting your location, please try again! Make sure you've enabled location services in your browser. 🌎`
      );
    }
    return () => clearTimeout(timer);
  }, [geoLocationStatus]);

  const showAlert = geoLocationMessage ? (
    <Alert
      text={geoLocationMessage}
      type={
        geoLocationStatus === GEOLOCATIONSTATUS.SUCCESS ? "success" : "error"
      }
    />
  ) : (
    false
  );

  return (
    <>
      {showAlert}
      {geoLocationStatus === GEOLOCATIONSTATUS.SUCCESS &&
        !geoLocationMessage && (
          <>
            <Paragraph text={riddle.question} />
            <TextInput expectedAnswer={riddle.answer} />
          </>
        )}
      {geoLocationStatus !== GEOLOCATIONSTATUS.SUCCESS && (
        <>
          <Paragraph text={riddle.riddle} />
          <GeoLocationCheck
            longitude={riddle.longitude}
            latitude={riddle.latitude}
            handleLocationCheck={setGeoLocationStatus}
            geoLocationCheckStatus={geoLocationStatus}
          />
        </>
      )}
    </>
  );
};
