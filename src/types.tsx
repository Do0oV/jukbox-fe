export interface LoginProps {
  match: string
};

export interface UserStatsProps {
  userStats: User
};

export interface VenuePLayerProps {
  current_song: CurrentSong,
  startSession:any
};

class User {
  constructor (
    public name: string,
    public email: string,
    public tickets: number,
    public diamonds: number
  ) {}
};

export interface socketServerResponse {
  route: string,
  data: {
    updatedPlaylist: Array<SongQueue>
  }
};

export class SongQueue {
  constructor (
    public song: string,
    public userEmail: string,
    public venueName: string,
    public diamonds: number,
    public submission_time: string,
    public currentlyPlaying: boolean,
    public lockedIn: boolean,
    private id?: number
  ) {}
};

export class CurrentSong {
  constructor (
    public song_id: string,
    public artist: string,
    public title: string,
    public album: string,
    public album_cover: string,
    public duration: number
    ) {}
};
