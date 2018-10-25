const initState = {
  list: [],
  isLoading: false
};

export const servers = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_SERVERS":
      return { ...state, list: [], isLoading: true };

    case "FETCH_SERVER_FAILED":
      return { ...state, isLoading: false };

    case "LIST_SERVERS":
      return { ...state, list: action.result, isLoading: false };

    default:
      return state;
  }
};
