// @flow

import { fromJS } from 'immutable'

import * as C from '_/constants'
import { actionReducer } from './utils'
import { locale } from '_/intl'
import { saveLocaleToLocalStorage } from '_/storage'
import AppConfiguration from '_/config'
import type { UserOptionsType } from '_/ovirtapi/types'
import type { LoadUserOptionsActionType } from '_/actions/types'

const defaultOptions: UserOptionsType = {
  localOptions: {
    showNotifications: true,
    notificationSnoozeDuration: AppConfiguration.notificationSnoozeDurationInMinutes,
  },
  remoteOptions: {
    locale: {
      id: undefined,
      content: locale,
    },
    refreshInterval: {
      id: undefined,
      content: AppConfiguration.schedulerFixedDelayInSeconds,
    },
  },
  ssh: undefined,
  lastTransactions: {},
  consoleOptions: {},
}

const initialState = fromJS({ ...defaultOptions })

const options = actionReducer(initialState, {
  [C.SET_CONSOLE_OPTIONS] (clientState: any, { payload: { vmId, options } }: any): any {
    return clientState.setIn(['consoleOptions', vmId], options)
  },
  [C.LOAD_USER_OPTIONS]: (clientState: any, action: LoadUserOptionsActionType) => {
    const serverState = fromJS(action.payload.userOptions || {})

    const mergedRemote = clientState.get('remoteOptions').mergeWith((client, server, key) => {
      return server === undefined ? client : server
    }, serverState)

    const merged = clientState.setIn(['remoteOptions'], mergedRemote)

    saveLocaleToLocalStorage(merged.getIn(['remoteOptions', 'locale']).toJS())
    return merged
  },
  [C.SET_OPTION] (state: any, { payload: { key, value } }: any): any {
    return state.setIn(key, fromJS(value))
  },
  [C.SET_SSH_KEY] (state: any, { payload: { key, id } }: any): any {
    return state.setIn(['ssh'], fromJS({ key: key || '', id }))
  },
})

export default options
export {
  initialState,
}
