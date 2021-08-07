import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './DonationModalComponents'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #CFA1FF;
  border-radius: 20px;
  color: #000;
  font-size: 24px;
  cursor: pointer;
`;

function DonationModal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Container>
        <Button onClick={openModal}>Create Crowd Funding </Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
    </Container>
    </>
  );
}

export default DonationModal;