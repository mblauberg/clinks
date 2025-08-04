/**
 * Custom Hook for Fetching Nearby Venues
 * Handles location permission, fetching nearby venues, and applying filters with proper error handling
 */

import { useState, useEffect, useRef } from 'react';
import { fetchLocation, fetchNearbyPlaces } from '../services/Location';

/**
 * Hook to fetch nearby venues based on user location
 * @param {number} refreshTrigger - Trigger to refresh the data
 * @returns {Object} { venues, errorMsg, isLoading } - Array of venues, error message, and loading state
 */
const useFetchNearby = (refreshTrigger) => {
  const [venues, setVenues] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Use ref to track if component is mounted to prevent memory leaks
  const isMountedRef = useRef(true);
  
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    let timeoutId = null;
    let isCurrentRequest = true;

    const getVenues = async () => {
      // Only proceed if component is still mounted
      if (!isMountedRef.current) return;
      
      try {
        console.log('🔍 Starting venue fetch...');
        setIsLoading(true);
        setErrorMsg(null);
        
        // Set timeout for location request
        timeoutId = setTimeout(() => {
          isCurrentRequest = false;
          if (isMountedRef.current && isCurrentRequest) {
            setErrorMsg("Location request timed out");
            setIsLoading(false);
          }
        }, 10000);
        
        const location = await fetchLocation();
        
        // Check if request is still current and component mounted
        if (!isCurrentRequest || !isMountedRef.current) {
          return;
        }
        
        clearTimeout(timeoutId);
        console.log('📍 Location received:', location ? 'Success' : 'Failed');
        
        if (location) {
          const { latitude, longitude } = location.coords;
          console.log('🌐 Fetching venues for:', latitude, longitude);
          
          const nearbyVenues = await fetchNearbyPlaces(latitude, longitude);
          
          // Final check before setting state
          if (!isCurrentRequest || !isMountedRef.current) {
            return;
          }
          
          if (nearbyVenues && Array.isArray(nearbyVenues)) {
            console.log('🏢 Raw venues from API:', nearbyVenues.length);
            
            // Apply filters with fallback logic
            let operationalVenues = nearbyVenues.filter(venue => venue.businessStatus === "OPERATIONAL");
            let ratedVenues = operationalVenues.filter(venue => venue.userRatingCount > 10);
            
            // Use looser criteria if strict filtering returns no results
            let filteredVenues = ratedVenues.length > 0 ? ratedVenues : 
                               operationalVenues.length > 0 ? operationalVenues : 
                               nearbyVenues;

            // Sort open venues first
            filteredVenues.sort((a, b) => {
              const aOpen = a.currentOpeningHours?.openNow === true ? 1 : 0;
              const bOpen = b.currentOpeningHours?.openNow === true ? 1 : 0;
              return bOpen - aOpen;
            });

            console.log('✅ Final venues to display:', filteredVenues.length);
            setVenues(filteredVenues);
            setErrorMsg(null);
          } else {
            console.log('⚠️ No venues returned from API');
            setVenues([]);
            setErrorMsg("No venues found nearby");
          }
        } else {
          console.log('❌ Location access failed');
          setErrorMsg("Location access required");
          setVenues([]);
        }
      } catch (error) {
        console.error('❌ Error in getVenues:', error);
        
        // Only update state if request is still current and component mounted
        if (isCurrentRequest && isMountedRef.current) {
          setErrorMsg(`Error: ${error.message}`);
          setVenues([]);
        }
      } finally {
        // Only update loading state if request is still current and component mounted
        if (isCurrentRequest && isMountedRef.current) {
          setIsLoading(false);
        }
      }
    };
    
    // Small delay to let the app render first, then start fetch
    const startTimer = setTimeout(getVenues, 1000);
    
    // Cleanup function
    return () => {
      isCurrentRequest = false;
      if (startTimer) clearTimeout(startTimer);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [refreshTrigger]);

  return { venues, errorMsg, isLoading };
};

export default useFetchNearby;