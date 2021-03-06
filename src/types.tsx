export interface LoginProps {
  match: string
};

export interface UserStatsProps {
  userStats: User,
  stripeSessionID: any 
};

export interface NowPlayingProps {
  currentSong: NowPlayingSong
};

export interface VenuePlayerProps {
  currentSong: CurrentSong,
  togglePlay:any,
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
    tickets?: number
  }
};

export class SongQueue {
  constructor (
    public song: string,
    public diamonds: number,
    public submission_time: string,
    public currentlyPlaying: boolean,
    public lockedIn: boolean,
    public user_id: string,
    public venue_id: string,
    public id?: number
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

export class NowPlayingSong {
  constructor (
    public currentlyPlaying: boolean,
    public diamonds: number,
    public lockedIn: boolean,
    public song: string,
    public submission_time: string,
    public user_id: string,
    public venue_id: string,
    private id?: number
  ) {}
};

export interface WindowInterface extends Window {
  Spotify: any;
  Stripe: any;
};