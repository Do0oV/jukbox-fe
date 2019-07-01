export interface LoginProps {
  match: string
};

export interface UserStatsProps {
  userStats: User
};

export interface VenuePlayerProps {
  currentSong: CurrentSong,
  tooglePlay:any,
  playing:boolean,
  position: number
}

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
    updatedPlaylist: Array<SongQueue>,
    tickets: number
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
    public album_cover: Array<string>,
    public duration: number
    ) {}
};
