import {combineReducers} from 'redux';
import NewsReducer from './newsReducer';
import NewsActive from './news-active';

const mainReducers = combineReducers({
    news: NewsReducer,
    active: NewsActive
});

export default mainReducers;