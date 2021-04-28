import React, { useEffect, useState } from 'react';
import Map from '../Map';

const PostExplorer = ({ post, handleNextPostSelect, handlePrevPostSelect, handleNullSelect }) => {
  return (
    <div
      onClick={() => {
        handleNullSelect();
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255,255,255,0.5)',
        }}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(120,20,120,0.75)', // 수정 요망
          }}
        >
          {post.project_id}
        </div>
        <h1>{post.contents}</h1>
        <button
          onClick={() => {
            handlePrevPostSelect();
          }}
        >
          이전
        </button>
        <button
          onClick={() => {
            handleNextPostSelect();
          }}
        >
          다음
        </button>
      </div>
    </div>
  );
};

/**
 * 지도 상에서 post 탐색이 가능한 페이지 컴포넌트
 */
const MapPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostIndex, setSelectedPostIndex] = useState(null);

  useEffect(() => {
    const postsMock = [
      {
        id: 0,
        contents: 'hello',
        location: {
          lat: 10.0,
          lng: 20.0,
        },
        project_id: 0,
      },
      {
        id: 1,
        contents: 'hi',
        location: {
          lat: 30.0,
          lng: 20.0,
        },
        project_id: 1,
      },
      {
        id: 3,
        contents: 'gogo',
        location: {
          lat: -40.0,
          lng: 100.0,
        },
        project_id: 1,
      },
    ];

    setPosts(postsMock);
  }, []);

  return (
    <>
      <Map
        posts={posts}
        selectedPostIndex={selectedPostIndex}
        handlePostSelect={(index) => {
          setSelectedPostIndex(index);
        }}
      />
      {selectedPostIndex !== null && (
        <PostExplorer
          post={posts[selectedPostIndex]}
          handleNextPostSelect={() => {
            let index = selectedPostIndex + 1;
            if (index === posts.length) {
              index = 0;
            }
            setSelectedPostIndex(index);
          }}
          handlePrevPostSelect={() => {
            let index = selectedPostIndex - 1;
            if (index === -1) {
              index = posts.length - 1;
            }
            setSelectedPostIndex(index);
          }}
          handleNullSelect={() => {
            setSelectedPostIndex(null);
          }}
        />
      )}
    </>
  );
};

export default MapPage;
