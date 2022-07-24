import { User } from './user.interface'

export interface Comment {
  user: User
  commentId?: string
  filmId: number
  content: string
  createdAt: {
    seconds: number
    nanoseconds: number
  }
  reaction: {
    [key: string]: number
  }
  hasReply: boolean
  reply: CommentReply[]
  img: string | null
}

export interface CommentReply {
  commentId?: string
  user: User
  content: string
  createdAt: {
    seconds: number
    nanoseconds: number
  }
  reaction: {
    [key: string]: number
  }
  img: string | null
}
