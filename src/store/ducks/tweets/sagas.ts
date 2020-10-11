import { call, put, takeLatest} from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetApi';
import { setTweets, setTweetsLoadingState, TweetActionTypes } from './actionCreators';
import { LoadingState } from './contracts/state';

export function* fetchTweetsRequest() {
   try {
    const tweets = yield call(TweetsApi.fetchTweets)
    yield put(setTweets(tweets))
   } catch (error) {
       yield put(setTweetsLoadingState(LoadingState.ERROR))
   }
    
    
}

export function* tweetsSaga() {
    yield takeLatest(TweetActionTypes.FETCH_TWEETS, fetchTweetsRequest)
}