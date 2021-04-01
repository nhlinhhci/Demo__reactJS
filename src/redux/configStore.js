import { combineReducers, createStore } from 'redux';
import { baiTapDatVeReducer } from './reducers/baiTapDatVeReducer';
import { gioHangReducer } from './reducers/gioHangReducer';




const rootReducer = combineReducers({
    //Nơi chứa toàn bộ state của ứng dụng
    gioHangReducer: gioHangReducer,
    baiTapDatVeReducer:baiTapDatVeReducer
    // reducerA: gioHangReducer,
    // reducerB: gioHangReducer

})


export const store = createStore(rootReducer);