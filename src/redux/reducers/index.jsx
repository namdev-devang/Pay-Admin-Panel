import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth/authReducer'
import masterServiceReducer from './masterServiceReducer/masterServiceReducer'
import notificationReducer from '../reducers/nortificationRed.jsx/nortificationRed'
import bannerReducer from '../reducers/bannerRed/bannerRed'
import affilateStoreReducer from '../reducers/AffilateStoreRed/AffilateStoreRed'
import affilateBannerReducer from '../reducers/AffilliateBannersRed/AffilliateBannersRed'
import ipAddressReducer from '../reducers/IpAddressRed/IpAddressRed'
import fetchUserlistReducer from '../reducers/UserlistRed/UserlistRed'
import fetchOtpReducer from '../reducers/OtpRed/OtpRed'

export const rootreducer = combineReducers({
    authReducer,
    masterServiceReducer,
    notificationReducer,
    bannerReducer,
    affilateStoreReducer,
    ipAddressReducer,
    fetchUserlistReducer,
    fetchOtpReducer,
    affilateBannerReducer

})

