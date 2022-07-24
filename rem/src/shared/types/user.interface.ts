export interface User {
  uid: string
  email: string
  photoURL: string
  displayName: string
  createdAt: Date | string
}

export interface UserState {
  user: User | null
  isDarkTheme: boolean
  isSignInOpen: boolean
  isLoading: boolean
  error: string | null
}
