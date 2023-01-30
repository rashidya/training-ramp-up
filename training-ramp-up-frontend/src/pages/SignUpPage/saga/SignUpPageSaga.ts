import { call, put, takeEvery } from 'redux-saga/effects'
import { addUser, addUserSuccess } from '../slice/signUpPageSlice'
import axios from '../../../utils/authorization'

function* handleAddUser(action: any): any {
    try {
        const res = yield call(() => axios.post('user/signUp', action.payload))

        res.status == 201 ? yield put(addUserSuccess(true)) : alert(res.data)
    } catch (error: any) {
        alert(error)
    }
}

export function* SignUpPageSaga() {
    yield takeEvery(addUser, handleAddUser)
}
