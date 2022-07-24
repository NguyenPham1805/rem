import { UserState } from 'rem/shared/types/user.interface'
import { createStore } from 'vuex'
import { userModule } from './user'

export interface RootState {
  userState: UserState
}

export default createStore({
  modules: { userModule }
})
