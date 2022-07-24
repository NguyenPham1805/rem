import { MutationTree } from 'vuex'
import { User, UserState } from 'rem/shared/types/user.interface'

export enum UserMutation {
  TOGGLE_SIGN_IN = '@User/ToggleSignIn',
  SET_USER = '@User/Set'
}

export const userMutations: MutationTree<UserState> = {
  [UserMutation.TOGGLE_SIGN_IN](state, payload: boolean) {
    state.isSignInOpen = payload
  },

  [UserMutation.SET_USER](state, payload: User | null) {
    state.user = payload
  }
}
