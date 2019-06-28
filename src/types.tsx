export interface LoginProps {
  match: string
};

export interface UserStatsProps {
  userStats: User
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