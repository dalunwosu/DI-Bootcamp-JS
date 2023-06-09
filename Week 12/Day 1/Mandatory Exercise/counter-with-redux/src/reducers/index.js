import {createStore} from 'redux'

const initialState = {
    count : 0
} 

const reducer = (state = initialState, action={}) => {
    switch (action.type) {
      case 'INCREASE_COUNT':
        console.log('INCREASE_COUNT');
        return {...state, count: state.count + 1}
      case 'DECREASE_COUNT':
        console.log('DECREASE_COUNT');
        return {...state, count: state.count - 1}
      default:
        return {...state}
    }
  }

const store =  createStore(reducer)

export default store