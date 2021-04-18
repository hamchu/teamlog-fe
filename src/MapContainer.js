/* eslint-disable no-undef */

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef, useState } from "react";

/**
 * 맵 컨테이너 -> 맵에게 포스트들을 준다. 맵에게 특정 포스트를 선택하라고 강요한다. 포스트 선택을 핸들링한다.
 * 맵(posts, selectedPost, handleSelectPost(s)) -> 포스트들을 받는다. 특정 포스트가 선택되면 보고한다.
 * 포스트 디스플레이어 -> 선택된 포스트를 보인다.
 */

const Map = ({ posts, selectedPostIndex, handleSelectPost }) => {
  const ref = useRef(null);

  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyD19HDfecIVKOhxEa0a81aC9AV5_2LrgDY",
      version: "weekly",
      language: "ko",
      region: "KR",
    });

    loader.load().then(() => {
      const map = new google.maps.Map(ref.current, {
        zoom: 4,
        center: { lat: -25.344, lng: 131.036 },
        disableDefaultUI: true,
        // zoomControl: true,
      })

      setMap(map);
    });
  }, []);

  useEffect(() => {
    if (!map) {
      return;
    }

    const markers = [];

    posts.forEach((post, index) => {
      const marker = new google.maps.Marker({
        map: map,
        optimized: false,
        position: post.position,
        animation: google.maps.Animation.DROP,
      });

      marker.addListener('click', handleSelectPost(index));

      markers.push(marker);
    });

    setMarkers(markers);
  }, [map]);

  useEffect(() => {
    if (!map) {
      return;
    }

    markers.forEach((marker) => {
      marker.setMap(null);
    })

    const markers = [];

    posts.forEach((post, index) => {
      const marker = new google.maps.Marker({
        map: map,
        optimized: false,
        position: post.position,
        animation: google.maps.Animation.DROP,
      });

      marker.addListener('click', handleSelectPost(index));
    });

    setMarkers(markers);
  }, [posts]);

  useEffect(() => {
    if (!map) {
      return;
    }

    if (selectedMarker) {
      selectedMarker.setAnimation(null);
    }

    if (selectedPostIndex != null) {
      const targetMarker = markers[selectedPostIndex];

      map.panTo(targetMarker.position);
      targetMarker.setAnimation(google.maps.Animation.BOUNCE);
      setSelectedMarker(targetMarker);
    }
  }, [selectedPostIndex]);

  return (
    <div style={{ height: "100%" }} ref={ref} />
  );
}

const MapContainer = () => {
  const ref = useRef(null);

  useEffect(() => {
    // 한 번만.
    const loader = new Loader({
      apiKey: "AIzaSyD19HDfecIVKOhxEa0a81aC9AV5_2LrgDY",
      version: "weekly",
      language: "ko",
      region: "KR",
    });

    // 한 번만.
    loader.load().then(() => {
      const uluru = { lat: -25.344, lng: 131.036 };

      const map = new google.maps.Map(ref.current, {
        zoom: 4,
        center: uluru,
        disableDefaultUI: true,
        // zoomControl: true,
      });

      // setMap(map); -> 렌더링을 트리거
      // props변경
      // 렌더링
      // useEffect(f, [map]) -> props에 따른 최초 작업을 실시
      // useEffect(f, [props.posts]) -> 마커 재생성
      // useEffect(f, [props.selectedPost]) -> 마커를 찾고 map.panTo + setAnimation

      const marker = new google.maps.Marker({
        map: map,
        optimized: false,
        position: uluru,
        animation: google.maps.Animation.DROP,
      });
      marker.addListener("click", toggleBounce);

      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          // map.setZoom(4);
          map.panTo(marker.position);
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
    });
  }, []);

  return (
    <>
      <div style={{ height: "100%" }} ref={ref} />
    </>
  );
};

export default MapContainer;
