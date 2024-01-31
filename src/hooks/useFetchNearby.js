import { useState, useEffect } from 'react';
import { fetchLocation, fetchNearbyPlaces } from '../services/Location';

const useFetchNearby = () => {
  const [venues, setVenues] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const getVenues = async () => {
      try {
        const location = await fetchLocation();
        if (location) {
          const { latitude, longitude } = location.coords;
          const nearbyVenues = await fetchNearbyPlaces(latitude, longitude);
          setVenues(nearbyVenues);
        } else {
          setErrorMsg("Failed to fetch location");
        }
      } catch (error) {
        setErrorMsg("An error occurred");
        console.error(error);
      }
    };

    getVenues();
  }, []);

  return { venues, errorMsg };
};

export default useFetchNearby;