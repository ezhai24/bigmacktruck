import styled from '@emotion/styled';
import BigRedButton from '../components/BigRedButton';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
});

export default function Home() {
  const soundHorn = () => {
    const hornAudio = new Audio('wap_horn.mp3');
    hornAudio.play();
  };

  const sayAhh = () => {
    const megAhhAudio = new Audio('wap_ahh.mp3');
    megAhhAudio.play();
  };

  return (
    <Container>
      <BigRedButton onClick={soundHorn} style={{ marginBottom: 30 }} />
      <button onClick={sayAhh}>Bonus: Meg's AHH</button>
    </Container>
  )
}
