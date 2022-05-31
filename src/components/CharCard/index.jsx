import './style.css';

export function CharCard( { character }) {
    return(
        <div className={character.status === 'Alive' ? 'characters__charCardAlive' :
        character.status === 'Dead' ? 'characters__charCardDead' :
        'characters__charCardUnknown'}>
            <h3>{character.name.length <= 15 ? character.name : `${character.name.slice(0, 15)}...`}</h3>
            <img src={character.image} alt={`${character.name}`}></img>
        </div>
    )
}

