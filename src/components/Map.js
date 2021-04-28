/* eslint-disable no-undef */

import { useContext, useEffect, useRef, useState } from 'react';
import ApiLoadContext from '../contexts/apiLoad';

let map;
let markers = [];

const Map = ({ posts, selectedPostIndex, handlePostSelect }) => {
  const ref = useRef(null);

  const [svgMarker] = useState({
    path:
      'M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z',
    fillColor: '#444444',
    fillOpacity: 0.5,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  });

  const [svgMarker2] = useState({
    path:
      'M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z',
    fillColor: '#901090',
    fillOpacity: 0.7,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  });

  useEffect(() => {
    map = new google.maps.Map(ref.current, {
      zoom: 2,
      center: {
        lat: 30.0,
        lng: 20.0,
      },
      disableDefaultUI: true,
      // zoomControl: true,
    });
  }, []);

  useEffect(() => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });

    markers = posts.map((post, index) => {
      const marker = new google.maps.Marker({
        map,
        optimized: false,
        position: post.location,
        icon: svgMarker,
        // animation: google.maps.Animation.DROP,
      });

      marker.addListener('click', () => {
        handlePostSelect(index);
      });

      return marker;
    });
  }, [posts]);

  useEffect(() => {
    if (selectedPostIndex === null) {
      return;
    }

    markers.forEach((marker) => {
      marker.setAnimation(null);
      marker.setIcon(svgMarker);
    });

    const targetMarker = markers[selectedPostIndex];
    // map.setZoom(4);
    map.panTo(targetMarker.position);
    targetMarker.setAnimation(google.maps.Animation.BOUNCE);
    targetMarker.setIcon(svgMarker2);
  }, [selectedPostIndex]);

  return <div style={{ height: '100%' }} ref={ref} />;
};

const MapWrapper = (props) => {
  const [isLoaded] = useContext(ApiLoadContext);

  return isLoaded && <Map {...props} />;
};

export default MapWrapper;
