import { User, UserState } from 'rem/shared/types/user.interface'
import { GetterTree } from 'vuex'
import { RootState } from '..'

export const userGetters: GetterTree<UserState, RootState> = {
  getUser: (state): User | null => state.user,
  getTheme: (state): boolean => state.isDarkTheme,
  getError: (state): string | null => state.error,
  getSignInState: (state): boolean => state.isSignInOpen,
  getLoading: (state): boolean => state.isLoading
}
