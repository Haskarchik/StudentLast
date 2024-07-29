'use client'
import { useEffect, useMemo } from 'react';
import styles from './style.module.scss';

export const LocationMap = ({lang}) => {
  const lvivCoordinates = useMemo(() => ({ lat: 49.8397, lng: 24.0297 }), []);

  useEffect(() => {
    // Define any initialization logic here
    if (typeof window !== 'undefined' && typeof window.google !== 'undefined') {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: lvivCoordinates,
        zoom: 15,
      });
      new window.google.maps.Marker({
        position: lvivCoordinates,
        map: map,
        title: 'Lviv',
      });
    }
  }, [lvivCoordinates]);

  // Define initMap function before the Google Maps API script is loaded

  return (
    <div>
      <div id="map" className={styles.map}></div>
      <script
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?callback=initMap&libraries=places"
        type="text/javascript"
      />
    </div>
  );
};
