export type JamObject = {
  "id": string
  "name": string
  "duration": number
  "artist_id": string
  "artist_name": string
  "artist_idstr": string
  "album_name": string
  "album_id": string
  "license_ccurl": string //url
  "position": number
  "releasedate": string
  "album_image": string //url
  "audio": string //url
  "audiodownload": string //url
  "prourl": string
  "shorturl": string
  "shareurl": string
  "waveform": string // "{\"peaks\":[1,2,3,4...}"
  "image": string
  "musicinfo": {
      "vocalinstrumental": string
      "lang": string
      "gender": string
      "acousticelectric": string
      "speed": string
      "tags": {
          "genres": string[],
          "instruments": string[],
          "vartags": string[]
      }
  },
  "audiodownload_allowed": boolean
}