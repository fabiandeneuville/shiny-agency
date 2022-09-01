import { useState } from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

function Home() {

  const [size, setSize] = useState(1);

  return (
    <HomeContainer>
      <h1 onClick={() => setSize(size + 0.1)}>Page d'accueil 🏡</h1>
    </HomeContainer>
  );
}

export default Home;
