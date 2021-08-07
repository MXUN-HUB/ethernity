import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './NftModalComponents'

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

function NftModal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Container>
        <Button onClick={openModal}>Create your own Nfts</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
    </Container>
    </>
  );
}

export default NftModal;