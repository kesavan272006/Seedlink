import React from 'react'
import useUserLocation from '../hooks/useUserLocation'
import { useEffect } from 'react';

const NearMe = () => {
  const { latitude, longitude, error } = useUserLocation();

  useEffect(() => {
    if (latitude && longitude) {
      console.log(`User location - Latitude: ${latitude}, Longitude: ${longitude}`);
    }
  }, [latitude, longitude]);

  return null; // No UI needed if you only want to log location
}

export default NearMe