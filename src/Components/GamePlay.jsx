import { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { Button, OutlineButton } from '../styled/Button';
import Rules from "./Rules";


function GamePlay() {
  const[score,setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("")
  const [showRules,setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if(!selectedNumber) {

      setError("You have not selected any number")

      return
    }; 
    // setError("")

    const randomNumber = generateRandomNumber(1,7)
    setCurrentDice((prev)=> randomNumber)


    if(selectedNumber==randomNumber){
      setScore(prev => prev+randomNumber )
      setSelectedNumber(undefined)
    }else{
      setScore(prev => prev - 2)
      setSelectedNumber(undefined)
    }
  }


  return (
    <ScoredComponent>
      <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice}/>
      <div className="btns">
        <OutlineButton onClick={() => setScore(0)}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev)=>!prev)}>{showRules ? "Hide":"Show" } Rules</Button>
      </div>
      {showRules && <Rules/>}
      </MainContainer>
    </ScoredComponent> 
  );
}

export default GamePlay;

const ScoredComponent = styled.div`
  /* max-width: 200px; */
  /* text-align: center; */
  h1 {
    align-items: center;
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
  .btns{
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
const MainContainer = styled.div`
padding-top: 70px;
    .top_section{
      display: flex;
      justify-content: space-around;
      align-items: end;
    }
`;
