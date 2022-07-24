import { Module } from 'vuex'
import { UserState } from 'rem/shared/types/user.interface'
import { userState } from './user.state'
import { userGetters } from './user.getters'
import { userMutations } from './user.mutations'
import { RootState } from '..'
import { userActions } from './user.actions'

export const userModule: Module<UserState, RootState> = {
  state: userState,
  getters: userGetters,
  mutations: userMutations,
  actions: userActions
}
