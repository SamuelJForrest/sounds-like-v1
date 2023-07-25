import Button from './UI/Button';

const IntroScreen = ({ startNewGame }) => {
  return (
    <>
      <h1>Sounds like</h1>
      <p>
        Welcome to Sounds Like! The only panel show that’s all about rhymes!
      </p>
      <div className='intro-buttons'>
        <Button modifier='__red'>View Games</Button>
        <Button modifier='__yellow' clickHandler={startNewGame}>
          New Game
        </Button>
      </div>
    </>
  );
};

export default IntroScreen;
