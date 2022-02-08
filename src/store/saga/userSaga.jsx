import {
  call,
  delay,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

//Reading saga------------------------------------------
// function* onLoadUserStartAsync() {
//   try {
//     const response = yield call(loadUserApi);

//     if (response.status === 200) {
//       yield delay(500);
//       yield put(loadUserSuccess(response.data));
//     }
//   } catch (error) {
//     yield put(loadUserFail(error.response.data));
//   }
// }

// function* onLoadUser() {
//   yield takeEvery(LOADING_USER, onLoadUserStartAsync);
// }

//Creating saga------------------------------------------
// function* onCreateUserStartAsync({ payload }) {
//   try {
//     const response = yield call(createUserApi, payload.newUser);
//     console.log(response);
//     if (response.status === 201) {
//       yield put(createUserSuccess(response.data));
//       payload.callback();
//     }
//   } catch (error) {
//     yield put(createUserFail(error.response.data));
//   }
// }

// function* onCreateUser() {
//   yield takeLatest(CREATING_USER, onCreateUserStartAsync);
// }

//Updating saga------------------------------------------
// function* onUpdateUserStartAsync({ payload }) {
//   try {
//     const response = yield call(updateUserApi, payload.id, payload.newUser);
//     console.log(payload.id);
//     if (response.status === 200) {
//       console.log(response);
//       yield put(updateUserSuccess(response.data));
//       payload.callback();
//     }
//   } catch (error) {
//     yield put(updateUserFail(error.response.data));
//   }
// }

// function* onUpdateUser() {
//   yield takeLatest(UPDATING_USER, onUpdateUserStartAsync);
// }

//Deleting saga------------------------------------------
// function* onDeleteUserStartAsync(userId) {
//   try {
//     const response = yield call(deleteUserApi, userId);
//     if (response.status === 200) {
//       yield put(deleteUserSuccess(userId));
//     }
//   } catch (error) {
//     yield put(deleteUserFail(error.response.data));
//   }
// }

// function* onDeleteUser() {
//   while (true) {
//     const { payload: userId } = yield take(DELETING_USER);
//     yield call(onDeleteUserStartAsync, userId);
//   }
// }


//User saga ----------
export const userSaga = [
  // fork(onLoadUser),
  // forl(onCreateUser),
  // forl(onUpdateUser),
  // forl(onDeleteUser),
];
