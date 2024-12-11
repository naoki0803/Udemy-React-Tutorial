const initialState = 0;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "counter/+":
      return state + payload;
    case "counter/-":
      return state - payload;
    default:
      return state;
  }
};

const add = (payload) => {
    return {
        type: "counter/+",
        payload
    }
}

const minus = (payload) => {
    return {
        type: "counter/-",
        payload
    }
}

export { reducer, add, minus }