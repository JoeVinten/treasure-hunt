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
    hint: string;
    riddleAnswer: string;
    latitude: number;
    longitude: number;
  };
  onCorrectAnswer: (riddleId: number) => void;
  setShouldDisableNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Question = ({
  riddle,
  onCorrectAnswer,
  setShouldDisableNav,
}: QuestionProps) => {
  const [geoLocationMessage, setGeoLocationMessage] = useState("");
  const [geoLocationStatus, setGeoLocationStatus] = useState("");
  const [showCrypticQuestion, setShowCrypticQuestion] = useState(false);
  const [hintCounter, setHintCounter] = useState(0);

  const showMessage = (message: string) => {
    setGeoLocationMessage(message);
  };

  useEffect(() => {
    if (geoLocationStatus) setShouldDisableNav(true);
    const timer = setTimeout(() => {
      setShouldDisableNav(false);
    }, timeoutDuration);
    if (geoLocationStatus === GEOLOCATIONSTATUS.SUCCESS) {
      showMessage("**Congrats!** You found the correct location! 🎉");
    } else if (geoLocationStatus === GEOLOCATIONSTATUS.FAILURE) {
      showMessage(`You're _not quite_ in the right location keep trying! 🚶‍♀️`);
    } else if (geoLocationStatus === GEOLOCATIONSTATUS.ERROR) {
      showMessage(
        `There was an error getting your location, please try again! Make sure you've enabled location services in your browser. 🌎`
      );
    }
    return () => clearTimeout(timer);
  }, [geoLocationStatus, setShouldDisableNav]);

  return (
    <>
      {showCrypticQuestion ? (
        <CrypticQuestion
          question={riddle.question}
          expectedAnswer={riddle.answer}
          onCorrectAnswer={() => onCorrectAnswer(riddle.id)}
        />
      ) : (
        <>
          <Paragraph text={riddle.riddle} />
          {hintCounter >= 5 && <Paragraph text={riddle.hint} />}
          <GeoLocationCheck
            longitude={riddle.longitude}
            latitude={riddle.latitude}
            handleLocationCheck={setGeoLocationStatus}
            incrementHintCounter={setHintCounter}
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
            setShowCrypticQuestion(
              geoLocationStatus === GEOLOCATIONSTATUS.SUCCESS ? true : false
            );
          }}
        />
      ) : (
        false
      )}
    </>
  );
};
