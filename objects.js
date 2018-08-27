var playlist = {
  artist: 'song'
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName){
  artistName = { artist: 'song' };
  delete playlist.artistName;
  return playlist;
}
