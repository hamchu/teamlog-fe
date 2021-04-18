import { useEffect, useRef, useState } from "react";
import Map from "./Map";

const posts = [
  {
    title: 'hello',
    body: '안녕하세요~ 오늘은 맛있는',
    position: {
      lat: 30.0,
      lng: 20.0,
    },
  },
  {
    title: 'gogo',
    body: '가봅시다 가봅시다 하하',
    position: {
      lat: 50.0,
      lng: 20.0,
    },
  },
  {
    title: 'bye',
    body: '안녕히가세요',
    position: {
      lat: 70.0,
      lng: 40.0,
    },
  },
  {
    title: 'good',
    body: '좋아요~~',
    position: {
      lat: 10.0,
      lng: 90.0,
    },
  },
];

const MapContainer = () => {
  const [selectedPostIndex, setSelectedPostIndex] = useState(null);

  return (
    <>
      <div style={{display: 'flex', height: '100%'}}>
        <div style={{height: '100%', width: '50%'}}>
          <Map
            posts={posts}
            selectedPostIndex={selectedPostIndex}
            handleSelectPost={(index) => {
              setSelectedPostIndex(index);
            }}
          />
        </div>

        <div>
        {
          posts.map((post, index) => (
            <button key={post.title} onClick={() => {setSelectedPostIndex(index)}}>
              {post.title}
            </button>
          ))
        }
        {
        selectedPostIndex !== null ? (
          <>
            <h1>
            {posts[selectedPostIndex].title}
            </h1>
            <h2>
            {posts[selectedPostIndex].body}
            </h2>
          </>
        ) : (
          <h1>
          포스트를 선택해주세요.
          </h1>
        )
        }
        </div>
      </div>
    </>
  );
};

export default MapContainer;
