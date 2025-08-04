import * as Location from "expo-location";

export const fetchLocation = async () => {
  try {
    // Request permission to access location
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }

    // Get the current location
    const location = await Location.getCurrentPositionAsync({});
    return location;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchNearbyPlaces = async (latitude, longitude) => {
  const url = "https://places.googleapis.com/v1/places:searchNearby";
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
  const requestData = {
    includedTypes: ["bar", "night_club", "casino"],
    excludedTypes: ["hostel", "bakery"],
    excludedPrimaryTypes: ["restaurant", "american_restaurant", "mexican_restaurant"],
    maxResultCount: 20,
    rankPreference: "DISTANCE",
    locationRestriction: {
      circle: {
        center: {
          latitude: latitude,
          longitude: longitude,
        },
        radius: 5000.0,
      },
    },
  };

  try {
    console.log('🌐 Making Google Places API request...');
    console.log('📍 Request data:', JSON.stringify(requestData, null, 2));
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "places.id,places.photos,places.displayName,places.rating,places.userRatingCount,places.primaryTypeDisplayName,places.location,places.businessStatus,places.currentOpeningHours",
      },
      body: JSON.stringify(requestData),
    });

    console.log('📡 API Response status:', response.status);
    const data = await response.json();
    console.log('📦 Raw API response:', JSON.stringify(data, null, 2));
    
    if (!response.ok) {
      console.error('❌ API Error:', data);
      return null;
    }
    
    console.log('🏢 Places found:', data.places ? data.places.length : 0);
    return data.places; // Process the response data as needed
  } catch (error) {
    console.error("❌ Error fetching nearby places:", error);
    return null; // Handle errors appropriately
  }
};

export const fetchPlaceDetails = async (placeId) => {
  const url = `https://places.googleapis.com/v1/places/${placeId}`;
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "*",
      },
    });

    const data = await response.json();
    return data; // Process the response data as needed
  } catch (error) {
    console.error("Error fetching place details:", error);
    return null; // Handle errors appropriately
  }
};
