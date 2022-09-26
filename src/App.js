import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [grid, setGrid] = useState([
      [null,null,null],
      [null,null,null],
      [null,null,null]
  ])
  
  const [currentPlayer, setCurrentPlayer] = useState(true) 

  const winConditions = () => {
    if(anyRow()){
      console.log("AAAAAAAAAAAAa")
      alert("alguien gano")
    }
    
    //anyColumn()
    //anyDiagonal()
  }

  const anyRow = ()=>{
    /* console.log("BBBBBBBBBB")
    grid.reduce((acumulator, row)=>{
      const condition = row.filter((cell)=>{ return cell !== null }).toString().replaceAll(",","");
      console.log(condition === "XXX" || condition === "OOO")
      return condition === "XXX" || condition === "OOO"
    }) */
    const hasWinner = []
    grid.map((row)=>{
      const set = new Set(row)
      console.log(set)
      console.log(set.has(null))
      console.log(set.size)
      // console.log(new Set(row))
    })
    //return row.length === 3 ? true : false

  }

  const getSymbol = ()=>{
    return currentPlayer ? 'X' : 'O'
  }

  const mark = (indexRow, indexCell)=>{
    const updatedGrid = [...grid]
    if (!updatedGrid[indexRow][indexCell]) {
      updatedGrid[indexRow][indexCell] = getSymbol(currentPlayer)
      setCurrentPlayer(!currentPlayer)
    }

    setGrid(updatedGrid)
    winConditions()
  }
  
  return (
    <div className="App">
      <section className='grid'>
        {
          grid.map((row, indexRow)=>{
            return (
              row.map((cell, indexCell)=>{
                return (
                  <p onClick={(e)=>{mark(indexRow, indexCell)}}>{cell}</p>
                )
              })
            )
          })
        }
       
      </section>
    </div>
  );
}

export default App;
