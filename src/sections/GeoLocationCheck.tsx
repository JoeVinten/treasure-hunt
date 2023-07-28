import { Button } from "../components/Button";
import { GEOLOCATIONSTATUS } from "../constants/shared";

import { calculateDistance } from "../helpers/calculateDistanceBeween";

interface GeoLocationProps {
  latitude: number;
  longitude: number;
  handleLocationCheck: React.Dispatch<React.SetStateAction<string>>;
  geoLocationCheckStatus: string;
}
export const GeoLocationCheck = ({
  latitude,
  longitude,
  geoLocationCheckStatus,
  handleLocationCheck,
}: GeoLocationProps) => {
  const success = (pos: GeolocationPosition) => {
    const userLatitude = pos.coords.latitude;
    const userLongitude = pos.coords.longitude;
    console.log(userLatitude, userLongitude);

    // Calculate the distance from the current position to the correct position
    const distanceFromCorrectLocation = calculateDistance(
      userLatitude,
      userLongitude,
      latitude,
      longitude
    );

    // Compare with correct location
    if (distanceFromCorrectLocation <= 100) {
      // 100 meters
      handleLocationCheck(GEOLOCATIONSTATUS.SUCCESS);
    } else {
      handleLocationCheck(GEOLOCATIONSTATUS.FAILURE);
    }
  };

  const error = (err: GeolocationPositionError) => {
    console.log(err);
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const handleGeoLocationButton = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };

  return (
    <>
      <div className="my-4 flex justify-center">
        <Button
          text="I'm here 📍"
          handleClick={handleGeoLocationButton}
          disabled={
            geoLocationCheckStatus === GEOLOCATIONSTATUS.SUCCESS ||
            geoLocationCheckStatus === GEOLOCATIONSTATUS.FAILURE
          }
          center
        />
      </div>
    </>
  );
};
