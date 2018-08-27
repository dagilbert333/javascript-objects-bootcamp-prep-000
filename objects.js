var playlist = {
  artist: 'song'
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName){
  var artistName 
  delete playlist.artistName;
  return playlist;
}
