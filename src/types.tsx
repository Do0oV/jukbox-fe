export interface LoginProps {
  match: string
}
export interface UserStatsProps {
  userStats: User
}

interface User {
  name: string
  email: string
  tickets: number
  diamonds: number
}