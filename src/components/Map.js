/* eslint-disable no-undef */

import { Loader } from '@googlemaps/js-api-loader';
import { useEffect, useRef, useState } from 'react';

/**
 * 맵 컨테이너 -> 맵에게 포스트들을 준다. 맵에게 특정 포스트를 선택하라고 강요한다. 포스트 선택을 핸들링한다.
 * 맵(posts, selectedPost, handleSelectPost(s)) -> 포스트들을 받는다. 특정 포스트가 선택되면 보고한다.
 * 포스트 디스플레이어 -> 선택된 포스트를 보인다.
 */

const Map = ({ posts, selectedPostIndex, handlePostSelect }) => {
  const ref = useRef(null);

  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyD19HDfecIVKOhxEa0a81aC9AV5_2LrgDY',
      version: 'weekly',
      language: 'ko',
      region: 'KR',
    });

    loader.load().then(() => {
      const newMap = new google.maps.Map(ref.current, {
        zoom: 2,
        center: {
          lat: 30.0,
          lng: 20.0,
        },
        disableDefaultUI: true,
        // zoomControl: true,
      });

      setMap(newMap);
    });
  }, []);

  useEffect(() => {
    if (!map) {
      return;
    }

    const newMarkers = [];

    posts.forEach((post, index) => {
      const marker = new google.maps.Marker({
        map: map,
        optimized: false,
        position: post.location,
        animation: google.maps.Animation.DROP,
      });

      marker.addListener('click', () => {
        handlePostSelect(index);
      });

      newMarkers.push(marker);
    });

    console.log('초기화');
    console.log(newMarkers);
    setMarkers(newMarkers);
  }, [map]);

  useEffect(() => {
    if (!map) {
      return;
    }

    markers.forEach((marker) => {
      marker.setMap(null);
    });

    const newMarkers = [];

    posts.forEach((post, index) => {
      const marker = new google.maps.Marker({
        map: map,
        optimized: false,
        position: post.position,
        animation: google.maps.Animation.DROP,
      });

      marker.addListener('click', () => {
        handleSelectPost(index);
      });

      newMarkers.push(marker);
    });

    console.log('최신화');
    console.log(newMarkers);
    setMarkers(newMarkers);
  }, [posts]);

  useEffect(() => {
    if (!map) {
      return;
    }

    console.log(selectedPostIndex);

    if (selectedMarker !== null) {
      selectedMarker.setAnimation(null);
    }

    if (selectedPostIndex !== null) {
      const targetMarker = markers[selectedPostIndex];

      // map.setZoom(4);
      map.panTo(targetMarker.position);
      targetMarker.setAnimation(google.maps.Animation.BOUNCE);
      setSelectedMarker(targetMarker);
    }
  }, [selectedPostIndex]);

  return <div style={{ height: '100%' }} ref={ref} />;
};

export default Map;
