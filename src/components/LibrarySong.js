import React from "react";

const LibrarySong = ({
  audioRef,
  song,
  songs,
  setCurrentSong,
  id,
  isPlaying,
}) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectedSong[0]);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };
  return (
    <div onClick={songSelectHandler} className="librarySong">
      <img src={song.cover} alt={song.name} />
      <div className="songDescription">
        <h3> {song.name} </h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
