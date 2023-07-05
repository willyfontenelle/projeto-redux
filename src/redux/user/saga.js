
import { all, takeEvery, call, put, delay } from 'redux-saga/effects'
import { fetchUsersSuccess, fetchUsersFailure } from './slice'

import axios from 'axios'
// API USERS: https://jsonplaceholder.typicode.com/users/

function* fetchUsers(){
   try{
      yield delay(2000);

      const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users/")
      yield put(fetchUsersSuccess(response.data))

   }catch(error){
      yield put (fetchUsersFailure(error.message))
   }
}

export default all([
   takeEvery("user/fetchUsers", fetchUsers)
])