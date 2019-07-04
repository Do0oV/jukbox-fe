import React from 'react';
import './NowPlaying.css';
import { Col } from 'antd';
import styled from 'styled-components/macro';
import { NowPlayingProps } from '../../types';
import { ListItem } from '../../assests/globalStyles';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin: 5px 0;
  background-color: #555;
`;

const BackgroundImage: any = styled.div`
  background-image: ${(props: any) => `url('${props.image}')`};
  background-size: cover;
  background-position: center;
  filter: blur(8px);
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.8;
`;

const SubContainer = styled(ListItem)`
  height: 100%;
  position: abslotue;
  margin: 20px 0;
  padding: 0px 20px;
  width: 100%;
`;

const Song = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.6em;
  color: var(--secondary-color);
`;

const Artist = styled.div`
  text-transform: uppercase;
  font-size: 18px;
  line-height: 1.6em;
  font-weight: bold;
  color: #fff;  
`;

const Now = styled.h2`
  margin: 0;
  line-height: 2em;
  font-size: 22px;
  color: var(--fourth-color);
  font-style: italic;
`;

const RightCol = styled(Col)`
  text-align: right;
  text-shadow: 0 0 15px #000A;
`;

const Album = styled.img`
  height: 105px;
  width: 105px;
  z-index: 1;
`;


const NowPlaying: React.FC<NowPlayingProps> = ({ currentSong }) => {
  const songData = currentSong !== undefined
    ? JSON.parse(currentSong.song)
    : {
        'album_cover': [''],
        'title': '',
        'artist': ''
      };

  return (
    <>
      {currentSong && 
          <Container >  
            <BackgroundImage image={songData.album_cover[0]}/>
            <SubContainer> 
              <Album src={songData.album_cover[0]}/>
              <RightCol>
                <Now>Now Playing</Now>
                <Song>{songData.title}</Song>
                <Artist>{songData.artist}</Artist>
              </RightCol>
            </SubContainer>      
          </Container>
      }
    </>
  );
}

export default NowPlaying;
