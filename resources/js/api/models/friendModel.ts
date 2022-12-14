export interface FriendParams {
  fid: number
}

export interface GetFriendParams {
  page?: number
  search?: string
  limit?: number
}
// Generated by https://quicktype.io

export interface Friend {
  id: number
  idRequest: number
  name: string
  avatar: string
}
