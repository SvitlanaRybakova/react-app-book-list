import { useState } from 'react';

function NewSongForm({ addSong }){
  const [newSongTitle, setNewSongTitle] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    addSong(newSongTitle);
    // clear the input field
    setNewSongTitle('');
  }

  return(
    <form action="" onSubmit={(e) => {handleSubmit(e)}}>
      <label htmlFor="songName">Song name: </label>
      <input 
      value={newSongTitle}
      onChange={(e) => setNewSongTitle(e.target.value)}
      type="text" 
      required 
      id="songName"/>
      <input type="submit" value="add song"/>
    </form>
  )
}
export default NewSongForm;