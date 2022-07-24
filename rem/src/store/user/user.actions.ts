import { User, UserState } from 'rem/shared/types/user.interface'
import { ActionTree } from 'vuex'
import { RootState } from '..'
import { UserMutation } from './user.mutations'

export enum UserAction {
  TOGGLE_SIGN_IN = '@User/ToggleSignIn',
  SET_USER = '@User/Set'
}

export const userActions: ActionTree<UserState, RootState> = {
  [UserAction.TOGGLE_SIGN_IN]({ commit }, payload: boolean) {
    commit(UserMutation.TOGGLE_SIGN_IN, payload)
  },
  [UserAction.SET_USER]({ commit }, payload: User | null) {
    commit(UserMutation.SET_USER, payload)
  }
}
