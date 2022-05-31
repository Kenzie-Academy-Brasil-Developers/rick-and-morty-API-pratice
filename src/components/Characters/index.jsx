import './style.css';
import { CharCard } from '../CharCard';

export function Characters({ characterList, setCurrentPage, nextPage, setCharacterList, previousPage, setIsRetroceding}) {
    
    return(
        <section className="characters">
            <h1>Meus Personagens</h1>
            <div className="characters__cardsDiv">
                {characterList.map(character => <CharCard key={character.id} character={character} />)}
            </div>
            <footer className='buttons'>
                { previousPage && <button onClick={() => {
                    setIsRetroceding(true);
                    setCurrentPage(previousPage);
                }}>Página anterior</button>}
                { nextPage && <button onClick={() => setCurrentPage(nextPage)}>Próxima página</button>}
            </footer>
        </section>
    )
}
