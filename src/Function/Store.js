import { legacy_createStore } from '@reduxjs/toolkit';
import Reducer from './Reducer';

const store = legacy_createStore(Reducer);

export default store;