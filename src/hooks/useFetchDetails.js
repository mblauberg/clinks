import { useState, useEffect } from 'react';
import { fetchPlaceDetails } from '../services/Location';

const useFetchPlaceDetails = (placeId) => {
  const [placeDetails, setPlaceDetails] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const getPlaceDetails = async () => {
      try {
        if (placeId) {
          const details = await fetchPlaceDetails(placeId);
          setPlaceDetails(details);
        } else {
          setErrorMsg("Place ID is not provided");
        }
      } catch (error) {
        setErrorMsg("An error occurred");
        console.error(error);
      }
    };

    getPlaceDetails();
  }, [placeId]);

  return { placeDetails, errorMsg };
};

export default useFetchPlaceDetails;
