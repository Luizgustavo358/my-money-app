import { combineReducers } from 'redux'

import tabReducer from '../common/tab/tabReducer'
import DashboardReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: tabReducer
})

export default rootReducer