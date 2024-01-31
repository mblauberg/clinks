import { useState, useEffect } from 'react';
import { fetchLocation, fetchNearbyPlaces } from '../services/Location';

const useFetchNearby = (refreshTrigger) => {
  const [venues, setVenues] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const getVenues = async () => {
      try {
        const location = await fetchLocation();
        if (location) {
          const { latitude, longitude } = location.coords;
          let nearbyVenues = await fetchNearbyPlaces(latitude, longitude);

          // Default venue filters
          nearbyVenues = nearbyVenues
            .filter(venue => venue.businessStatus === "OPERATIONAL")
            .filter(venue => venue.userRatingCount > 10)

          // Check in venues are open, if none are open, return all venues
          // const openVenues = nearbyVenues.filter(venue => venue.currentOpeningHours?.openNow === true);
          // if (openVenues.length > 0) {
          //   nearbyVenues = openVenues;
          // }

          // Sort open venues first
          nearbyVenues.sort((a, b) => {
            const aOpen = a.currentOpeningHours?.openNow === true ? 1 : 0;
            const bOpen = b.currentOpeningHours?.openNow === true ? 1 : 0;
            return bOpen - aOpen;
          });

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
  }, [refreshTrigger]);
  return { venues, errorMsg };
};

export default useFetchNearby;