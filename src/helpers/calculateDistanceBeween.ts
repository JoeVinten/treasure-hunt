// Haversine formula implementation to calculate distance between two points on Earth's surface given their latitudes and longitudes
// Source: https://www.movable-type.co.uk/scripts/latlong.html
// Converts from degrees to radians.
const toRadians = (degrees: number) => degrees * (Math.PI / 180);

// Calculate distance between two points on Earth's surface given their latitudes and longitudes
export const calculateDistance = (
  userLatitude: number,
  userLongitude: number,
  correctLatitude: number,
  correctLongitude: number
) => {
  const earthRadius = 6371e3; // Earth radius in meters
  const userLatitudeInRadians = toRadians(userLatitude);
  const correctLatitudeInRadians = toRadians(correctLatitude);
  const latitudeDifference = toRadians(correctLatitude - userLatitude);
  const longitudeDifference = toRadians(correctLongitude - userLongitude);

  const a =
    Math.sin(latitudeDifference / 2) * Math.sin(latitudeDifference / 2) +
    Math.cos(userLatitudeInRadians) *
      Math.cos(correctLatitudeInRadians) *
      Math.sin(longitudeDifference / 2) *
      Math.sin(longitudeDifference / 2);
  const angularDistance = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadius * angularDistance; // in meters
  return distance;
};
