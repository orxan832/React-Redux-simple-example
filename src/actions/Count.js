import { INCREMENT } from './contants';
import { DECREMENT } from './contants';


export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

