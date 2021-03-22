import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Imagine", duration: "4:45" },
    { title: "Purple Haze", duration: "3:40" },
    { title: "Little Wing", duration: "3:45" },
    { title: "Voodoo Chile", duration: "5:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
