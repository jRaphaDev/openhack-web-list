const initState = {
  list: [],
  isLoading: false
};

export const instances = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_INSTANCES":
      return { ...state, list: [], isLoading: true };

    case "FETCH_INSTANCE_FAILED":
      return { ...state, isLoading: false };

    case "LIST_INSTANCES":
      return { ...state, list: action.result, isLoading: false };

    default:
      return state;
  }
};
