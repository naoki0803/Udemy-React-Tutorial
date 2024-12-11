import { produce } from "immer";

const state = {
    name: 'Tom',
    hobbies: ['tennis', 'soccer']
}

// const newState = state;
// newState.name = 'John';
const newState = produce(state, draft => {
    // draft.name = 'John';
    // draft.hobbies[0] = 'baseball';

    console.log(draft);
    return [];
})

console.log(state, newState)