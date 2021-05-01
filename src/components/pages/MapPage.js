import { AppBar, Breadcrumbs, IconButton, Toolbar } from '@material-ui/core';
import { Close, NavigateBefore, NavigateNext } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Map from '../Map';

const PostExplorer = ({ post, handleNextPostSelect, handlePrevPostSelect, handleNullSelect }) => {
  const [ready, setReady] = useState(true);
  const [mutable] = useState({ first: true });

  useEffect(() => {
    if (mutable.first) {
      mutable.first = false;
      return;
    }
    setReady(false);

    const tid = setTimeout(() => {
      setReady(true);
    }, 500);

    return () => {
      clearTimeout(tid);
    };
  }, [post]);

  return (
    <div
      onClick={() => {
        handleNullSelect();
      }}
      style={{
        transition: '0.5s all',
        opacity: ready ? 1 : 0.2,
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
          width: '80%',
          backgroundColor: 'rgba(255,255,255,0.5)',
        }}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <AppBar position="static" style={{ backgroundColor: 'rgba(120, 20, 120, 0.75)' }}>
          <Toolbar
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            variant="dense"
          >
            <Breadcrumbs style={{ color: '#FFFFFF' }}>
              <Link style={{ color: '#FFFFFF' }} href="/">
                시리즈명
              </Link>
              <Link style={{ color: '#FFFFFF' }} href="/">
                프로젝트명
              </Link>
            </Breadcrumbs>
            <IconButton
              onClick={() => {
                handleNullSelect();
              }}
            >
              <Close style={{ color: '#FFFFFF' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '100%', overflow: 'auto', height: '60vh' }}>
            이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />
            이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />
            이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />
            이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />
            이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />이곳에 post 컴포넌트를<br />
          </div>
          <div style={{ display: 'flex', width: '100%', backgroundColor: 'rgba(0,0,0,0.25)' }}>
            <IconButton
              style={{ width: '50%' }}
              onClick={() => {
                handlePrevPostSelect();
              }}
            >
              <NavigateBefore style={{ color: '#FFFFFF' }} />
            </IconButton>
            <IconButton
              style={{ width: '50%' }}
              onClick={() => {
                handleNextPostSelect();
              }}
            >
              <NavigateNext style={{ color: '#FFFFFF' }} />
            </IconButton>
          </div>
        </div>
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
