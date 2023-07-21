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
    if (geoLocationStatus === GEOLOCATIONSTATUS.SUCCESS) {
      setGeoLocationMessage("**Congrats!** You found the correct location! 🎉");
    } else if (geoLocationStatus === GEOLOCATIONSTATUS.FAILURE) {
      setGeoLocationMessage(
        `You're _not quite_ in the right location keep trying! 🚶‍♀️`
      );
    } else if (geoLocationStatus === GEOLOCATIONSTATUS.ERROR) {
      setGeoLocationMessage(
        `There was an error getting your location, please try again! Make sure you've enabled location services in your browser. 🌎`
      );
    }
    const timer = setTimeout(() => {
      setGeoLocationMessage("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [geoLocationStatus]);

  return (
    <>
      {geoLocationStatus === GEOLOCATIONSTATUS.SUCCESS ? (
        <>
          {geoLocationMessage ? (
            <Alert text={geoLocationMessage} type={"success"} />
          ) : (
            <>
              <Paragraph text={riddle.question} />
              {/* TODO: Need to make this check the correct answer */}
              <TextInput name="answer" expectedAnswer={riddle.answer} />
            </>
          )}
        </>
      ) : (
        <>
          <Paragraph text={riddle.riddle} />
          <GeoLocationCheck
            longitude={riddle.longitude}
            latitude={riddle.latitude}
            handleLocationCheck={setGeoLocationStatus}
          />
          {geoLocationStatus === GEOLOCATIONSTATUS.FAILURE &&
          geoLocationMessage ? (
            <Alert text={geoLocationMessage} type={"error"} />
          ) : null}
        </>
      )}
    </>
  );
};
