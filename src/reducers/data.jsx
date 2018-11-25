import { combineReducers } from 'redux';

const initializeState = {
  data: [
    {title: 'titulo 1', description: 'El ra!!!!!!!!!!!!'},
    {title: 'titulo 1', description: 'El ra!!!!!!!!!!!!'},
    {title: 'titulo 1', description: 'El ra!!!!!!!!!!!!'},
    {title: 'titulo 1', description: 'El ra!!!!!!!!!!!!'},
    {title: 'titulo 1', description: 'El ra!!!!!!!!!!!!'}
  ]
}

export default combineReducers({
  replaceMe: () => initializeState
})
