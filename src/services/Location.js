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
  const url = 'https://places.googleapis.com/v1/places:searchNearby';
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
  const requestData = {
    includedTypes: ["bar", "night_club", "casino"],
    excludedTypes: ["hostel", "bakery", "meal_takeaway", "meal_delivery"],
    maxResultCount: 15,
    rankPreference: "DISTANCE",
    locationRestriction: {
      circle: {
        center: {
          latitude: latitude,
          longitude: longitude
        },
        radius: 5000.0
      }
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'places.id,places.photos,places.displayName,places.rating,places.userRatingCount,places.primaryTypeDisplayName,places.location,places.businessStatus'
      },
      body: JSON.stringify(requestData)
    });

    const data = await response.json();
    return data.places; // Process the response data as needed
  } catch (error) {
    console.error('Error fetching nearby places:', error);
    return null; // Handle errors appropriately
  }
};


