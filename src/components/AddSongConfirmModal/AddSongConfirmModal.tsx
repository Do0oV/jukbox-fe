import React from 'react';
import './AddSongConfirmModal.css';
import { addSongToQueue } from '../../redux/actions/addSongToQueue'
import { Button } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentSong } from '../../types';

const AddSongConfirmModal: React.FC<{ song: CurrentSong }> = ({ song }) => {

  // const selectedSong = useSelector((state: any) => state.something.selectedSong);
  const userEmail = useSelector((state: any) => state.userStatsReducer.userStats.email);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    // set selectedSong in Redux store back to initial state so SearchResListItem stops rendering the popup
    const songId = song.song_id;
    dispatch(addSongToQueue(songId, userEmail));
    // need to figure out how to redirect; to where?
  };
  const handleCancel = () => {
    // set selectedSong in Redux store back to initial state so SearchResListItem stops rendering the popup
  };

  return (
    <div className="AddSongConfirmModal">
      <StyledButton onClick={handleConfirm}>Add song</StyledButton>
      <StyledButton onClick={handleCancel}>Cancel</StyledButton>
    </div>
  );
};

const StyledButton = styled(Button)`
    width: 500px;`

export default AddSongConfirmModal;
