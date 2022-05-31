import './App.css';
import { useState, useEffect } from 'react';
import { Characters } from './components/Characters';

function App() {
  const [ characterList, setCharacterList ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState("https://rickandmortyapi.com/api/character/");
  const [ nextPage, setNextPage ] = useState("")
  const [ previousPage, setPreviousPage ] = useState("");
  const [isRetroceding, setIsRetroceding ] = useState(false);

  useEffect(() => {
    fetch(currentPage)
    .then(response => response.json())
    .then(response => {
      setNextPage(response.info.next);
      setPreviousPage(response.info.prev);
      if(!isRetroceding) {
        setCharacterList([...characterList, ...response.results]);
      } else {
        setCharacterList([...characterList.slice(0, -20)]);
        setIsRetroceding(false);
      }
    })
    .catch(err => console.log(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])



  return (
    <div className="App">
        <main>
          <Characters setCharacterList={setCharacterList} nextPage={nextPage}
          setCurrentPage={ setCurrentPage } characterList={characterList}
          previousPage={previousPage} setIsRetroceding={setIsRetroceding}/>
        </main>
    </div>
  );
}

export default App;
