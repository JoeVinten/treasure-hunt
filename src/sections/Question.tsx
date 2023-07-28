import { useEffect, useState } from "react";
import { Paragraph } from "../components/Paragraph";
import { CrypticQuestion } from "./CrypticQuestion";
import { GeoLocationCheck } from "./GeoLocationCheck";
import { TimedAlert } from "../components/TimedAlert";
import { GEOLOCATIONSTATUS, timeoutDuration } from "../constants/shared";

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

export const Question = ({ riddle, onCorrectAnswer }: QuestionProps) => {
  const [geoLocationMessage, setGeoLocationMessage] = useState("");
  const [geoLocationStatus, setGeoLocationStatus] = useState("");
  const [showCrypticQuestion, setShowCrypticQuestion] = useState(false);

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
  // TODO: Refactor conditional rendering to use object and be cleaner
  return (
    <>
      {showCrypticQuestion ? (
        <CrypticQuestion
          question={riddle.question}
          expectedAnswer={riddle.answer}
          onCorrectAnswer={onCorrectAnswer}
        />
      ) : (
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
      {geoLocationMessage ? (
        <TimedAlert
          message={geoLocationMessage}
          type={
            geoLocationStatus === GEOLOCATIONSTATUS.SUCCESS
              ? "success"
              : "error"
          }
          duration={timeoutDuration}
          clearAlert={() => {
            setGeoLocationMessage("");
            setGeoLocationStatus("");
            setShowCrypticQuestion(true);
          }}
        />
      ) : (
        false
      )}
    </>
  );
};
