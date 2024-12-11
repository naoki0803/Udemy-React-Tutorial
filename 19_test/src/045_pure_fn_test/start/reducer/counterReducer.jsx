export const counterReducer = (state, action) => {
    const newState = { ...state };
    switch (action.type) {
      case "up":
        newState.count = state.count + state.step;
        return newState;

      case "down":
        newState.count = state.count - state.step;
        return newState;

      case "clear":
        newState.count = 0;
        return newState;

      case "changeStep":
        newState.step = parseInt(action.payload);
        return newState;

      default:
        return state;
    }
  };