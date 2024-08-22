import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Grid, Typography, IconButton, Card } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';

interface Video {
  id: string;
  title: string;
  description: string;
}

interface YoutubeCarouselProps {
  videos: Video[];
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const YoutubeCarousel: React.FC<YoutubeCarouselProps> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: videos[currentIndex].id,
        playerVars: {
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onStateChange: (event: { data: number }) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          },
        },
      });
    };
  }, []);

  useEffect(() => {
    if (playerRef.current && playerRef.current.loadVideoById) {
      playerRef.current.loadVideoById(videos[currentIndex].id);
    }
  }, [currentIndex, videos]);

  const togglePlayPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

  const handleVideoClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Box sx={{ bgcolor: '#06090a', color: 'white' }}>
      <Container id="youtube-carousel" sx={{ py: { xs: 8, sm: 16 }, display: 'flex' }}>
        {/* Left Column: Video Links */}
        <Box sx={{ width: '30%', pr: 2 }}>
          <Typography component="h2" variant="h4" align="center" gutterBottom>
            Featured Videos
          </Typography>
          <br/>
          <Grid container spacing={2}>
            {videos.map((video, index) => (
              <Grid item xs={12} key={video.id}>
                <Box 
                  onClick={() => handleVideoClick(index)}
                  sx={{
                    border: '2px solid #333',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                    p: 1,
                    bgcolor: currentIndex === index ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  }}
                >
                  <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
                    {video.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Right Column: Video Player */}
        <Box sx={{ 
          border: '2px solid #333', 
          borderRadius: '8px', 
          overflow: 'hidden',
          flexGrow: 1,
        }}>
          <Box sx={{ 
            position: 'relative', 
            paddingTop: '56.25%',
          }}>
            <div id="youtube-player" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}></div>
            <IconButton
              onClick={togglePlayPause}
              sx={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                },
                width: '80px',
                height: '80px',
              }}
            >
              {isPlaying ? <Pause sx={{ fontSize: 60 }} /> : <PlayArrow sx={{ fontSize: 60 }} />}
            </IconButton>
          </Box>
          <Box sx={{ p: 2, bgcolor: 'rgba(0, 0, 0, 0.5)', flexGrow: 1 }}>
            <Typography variant="body1" sx={{ color: 'grey.400' }}>
              {videos[currentIndex].description}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default YoutubeCarousel;
