import { useEffect, useState } from 'react';
import * as C from './App.styles';

import logoImage from './assets/fut-logo.png';
import RestartIcon from './svgs/restart.svg';

import { Button } from './components/Button/b.index';
import { InfoItem } from './components/InfoItem';
import { GridItem } from './components/GridItem/g.index';

import { GridItemType } from './types/GridItemType';
import { items } from './data/items'
import { formatTimeElapsed } from './helpers/formatTimeElapsed';
import { isGeneratorFunction } from 'util/types';

const App = () => {

  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => {
    resetAndCreateGrid();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if(playing) {
        setTimeElapsed(timeElapsed + 1);
      }
    }, 1000); // a cada 1s é adicionado 1 ao timeElapsed 
    return () => clearInterval(timer) // zera o timer
  }, [playing, timeElapsed]);

  // este effect verifica se as cartas que foram abertas são iguais
  useEffect(() => {
    if(shownCount === 2) {
      let opened = gridItems.filter(item => item.show === true);
      if(opened.length === 2) {
        if(opened[0].item === opened[1].item) {
          let tempGrid = [...gridItems];
          for(let i in tempGrid) {
            if(tempGrid[i].show) {
              tempGrid[i].permanentShow = true;
              tempGrid[i].show = false;
            }
          }
          setGridItems(tempGrid);
          setShownCount(0);
        } else {
          setTimeout(()=>{
            let tempGrid = [...gridItems];
            for(let i in tempGrid) {
            tempGrid[i].show = false;
          }
          setGridItems(tempGrid);
          setShownCount(0);
          }, 1000);
        }
        

        setMoveCount( moveCount => moveCount + 1);
      }
    }
  }, [shownCount, gridItems]);

  // effect para verificar se o jogo acabou
  useEffect(() => {
    if(moveCount > 0 && gridItems.every(item => item.permanentShow === true)) {
      setPlaying(false);
    }
  }, [moveCount, gridItems]);

  const resetAndCreateGrid = () => {
    // o jogo está sendo limpado, pois foi resetado
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    // o grid está sendo criado, pois o jogo foi iniciado
    let tempGrid : GridItemType[] = []; // criando inicialmente um array vazio
    for(let i = 0; i < (items.length * 2); i++) {
      tempGrid.push({
        item: null,
        show: false,
        permanentShow: false
      });
    }
    for(let w = 0; w < 2; w++) {
      for(let i = 0; i < items.length; i++) {
        let pos = -1;
        while(pos < 0 || tempGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2)); // gerando uma posição aleatória
        } // enquanto a posição gerada for menor que zero ou tiver algum item gera uma posição aleatória {
        tempGrid[pos].item = i; // preenchendo esta posição
      }
    }
    setGridItems(tempGrid); // joga os elementos no state

    setPlaying(true);

  }

  const handleItemClick = (index: number) => {
    if(playing && index !== null && shownCount < 2) {
      let tempGrid = [...gridItems];
      if(tempGrid[index].permanentShow === false && tempGrid[index].show === false ) {
        tempGrid[index].show = true;
        setShownCount(shownCount + 1);
      }
      setGridItems(tempGrid);
    }
  }

  return (
    <C.body>
      <C.Container>
        <C.Info>
          <C.LogoLink href=''>
            <img src={logoImage} alt="" width="200"/>
          </C.LogoLink>

          <C.InfoArea>
            <InfoItem label='Tempo' value={formatTimeElapsed(timeElapsed)}/>
            <InfoItem label='Movimentos' value={moveCount.toString()} />
          </C.InfoArea>

          <Button label='Reiniciar' icon={RestartIcon} onClick={resetAndCreateGrid}/>
        </C.Info>
        <C.GridArea>
          <C.Grid>
            {gridItems.map((item, index)=> (
              <GridItem
                key={index}
                item={item}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </C.Grid>
        </C.GridArea>
      </C.Container>
      <C.Footer>
        ©2023 - developed by <a href="https://github.com/joaopedroccarvalho" target="_blank">João Pedro</a>.
      </C.Footer>
    </C.body>         
  )
}


export default App;