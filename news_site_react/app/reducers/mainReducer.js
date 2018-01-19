import {combineReducers} from 'redux';
import NewsReducer from './newsReducer';

const mainReducers = combineReducers({
    news: NewsReducer
});

export default mainReducers;