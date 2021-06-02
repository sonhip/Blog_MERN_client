import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as api from "../../api";

function* fetchPostsSaga() {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

function* createPostSaga(action) {
  try {
    const posts = yield call(api.createPost, action.payload);
    yield put(actions.createPost.createPostSuccess(posts.data));
  } catch (err) {
    console.error(err);
    yield put(actions.createPost.createPostFailure(err));
  }
}

function* updatePostSaga(action) {
  try {
    const posts = yield call(api.updatePost, action.payload);
    yield put(actions.updatePost.updatePostSuccess(posts.data));
  } catch (err) {
    console.error(err);
    yield put(actions.updatePost.updatePostFailure(err));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

export default mySaga;
