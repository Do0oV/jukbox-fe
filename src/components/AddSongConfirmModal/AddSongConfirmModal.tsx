import React from 'react';
import './AddSongConfirmModal.css';
import { addSongToQueue } from '../../redux/actions/'
import { Button } from 'antd';
import styled from 'styled-components';

const AddSongConfirmModal: React.FC = () => {
  
  // const handleOnClick = () => {
  //   addSongToQueue()
  // }

  return (
    <div className="AddSongConfirmModal">
      {/* <StyledButton onClick={handleOnClick}>Confirm Song</StyledButton> */}
    </div>
  );
}

const StyledButton = styled(Button)`
    width: 500px;`

export default AddSongConfirmModal;
