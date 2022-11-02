export const fetchTracks = (genre) => {
    return fetch(
      `https://api.jamendo.com/v3.0/tracks/?client_id=3c243fb0&format=jsonpretty&limit=10&fuzzytags=${genre}&include=musicinfo&groupby=artist_id`
    ).then((response) => {
      if (!response.ok) {
        throw `${response.status} ${response.statusText}`;
      } else {
        return response.json();
      }
    });
  };