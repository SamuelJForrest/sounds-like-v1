import { useState } from 'react';
import useMultiStepForm from './hooks/useMultiStepForm';

import IntroScreen from './components/IntroScreen';
import Container from './layout/Container';
import Button from './components/UI/Button';
import NewGame from './components/NewGame';

// @TODO: Decide on data structure
const INITIAL_DATA = {
  title: '',
  creator: '',
};

function App() {
  const [data, setData] = useState(0);
  const [newGame, setNewGame] = useState(false);

  const startNewGame = () => {
    setNewGame(true);
  };

  const goHome = (e) => {
    // @TODO: Set initial data back to default (+ add a warning?)
    e.preventDefault();
    setNewGame(false);
  };

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([<NewGame />]);

  return (
    <>
      <Container>
        {!newGame && <IntroScreen startNewGame={startNewGame} />}
        {newGame && (
          <>
            <div className='form-count'>
              <span>{currentStepIndex + 1}</span> / <span>{steps.length}</span>
            </div>
            <form>
              {steps}
              <Button modifier='__red __absolute __left' clickHandler={goHome}>
                Home
              </Button>
              {!isLastStep && <Button modifier='__red __absolute'>Next</Button>}
              {isLastStep && (
                <Button modifier='__yellow __absolute'>Submit</Button>
              )}
            </form>
          </>
        )}
      </Container>
    </>
  );
}

export default App;
