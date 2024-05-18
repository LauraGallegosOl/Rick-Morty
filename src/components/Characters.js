import React from 'react'

export default function Characters(props) {
  //console.log(props);
  const {Characters} = props;
  console.log(Characters);
  return (
    <div className='characters'>
      <h2>Personajes</h2>
      <span className='back-home'>Home</span>
      <div className='container-characters'>
        {Characters.map((characters, index) => (
          <div className='character-container' key={index}>
           
            <img src={characters.image} alt={characters.name} />
            <div>
              <h3>{characters.name}</h3>
              <h6>
                {characters.status === 'Alive' ? (
                <>
                
                <span  className='alive'><br/>Vivo<br/></span>
                </>
              ):(
                <>
                <span className='dead'><br/>Muerto</span>
                </>
              )}
              </h6>
              <p>
                <span className='text-grey'><br/>Episodios:</span>
                <span>{characters.episode.length}</span>
              </p>
              <p>
                <span className='text-grey'><br/>Especie:</span>
                <span>{characters.species}</span>
              </p>
            </div>
          </div>
        )
        )}
      </div>
    </div>
  )
}
