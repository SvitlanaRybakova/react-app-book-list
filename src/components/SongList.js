import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

function SongList() {
  const [songs, setSong] = useState([
    { title: 'Bruno Mars "Treasure"', id: 1 },
    { title: 'Jason Derulo "Take you dancing"', id: 2 },
    { title: 'Madonna', id: 3 },
  ]);
  
  function addSong(title){
    setSong([...songs, { title: title, id: uuidv4()}])
  }
  
  console.log(songs);
  
  return(
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return(
            <li key={song.id}>{song.title}</li>
          )})
        }
      </ul>
      <NewSongForm addSong={addSong}/>
    </div>
  )
}
export default SongList;