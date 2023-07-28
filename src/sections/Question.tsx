import { useEffect, useState } from "react";
import { Paragraph } from "../components/Paragraph";
import { CrypticQuestion } from "./CrypticQuestion";
import { GeoLocationCheck } from "./GeoLocationCheck";
import { TimedAlert } from "../components/TimedAlert";

interface QuestionProps {
  riddle: {
    id: number;
    riddle: string;
    question: string;
    answer: string;
    latitude: number;
    longitude: number;
  };
  onCorrectAnswer: () => void;
}

export const GEOLOCATIONSTATUS = {
  SUCCESS: "success",
  ERROR: "error",
  FAILURE: "failure",
};

export const Question = ({ riddle, onCorrectAnswer }: QuestionProps) => {
  const [geoLocationMessage, setGeoLocationMessage] = useState("");
  const [geoLocationStatus, setGeoLocationStatus] = useState("");

  const showMessage = (message: string) => {
    setGeoLocationMessage(message);
  };

  useEffect(() => {
    if (geoLocationStatus === GEOLOCATIONSTATUS.SUCCESS) {
      showMessage("**Congrats!** You found the correct location! 🎉");
    } else if (geoLocationStatus === GEOLOCATIONSTATUS.FAILURE) {
      showMessage(`You're _not quite_ in the right location keep trying! 🚶‍♀️`);
    } else if (geoLocationStatus === GEOLOCATIONSTATUS.ERROR) {
      showMessage(
        `There was an error getting your location, please try again! Make sure you've enabled location services in your browser. 🌎`
      );
    }
  }, [geoLocationStatus]);

  return (
    <>
      {geoLocationMessage ? (
        <TimedAlert
          message={geoLocationMessage}
          type={
            geoLocationStatus === GEOLOCATIONSTATUS.SUCCESS
              ? "success"
              : "error"
          }
          duration={3000}
          clearAlert={() => setGeoLocationMessage("")}
        />
      ) : (
        false
      )}
      {geoLocationStatus === GEOLOCATIONSTATUS.SUCCESS &&
      !geoLocationMessage ? (
        <CrypticQuestion
          question={riddle.question}
          expectedAnswer={riddle.answer}
          onCorrectAnswer={onCorrectAnswer}
        />
      ) : (
        false
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
