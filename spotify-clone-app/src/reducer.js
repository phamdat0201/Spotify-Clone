export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //   token:
  //     "BQBUoIIu2yNUJjUfTe_L3A9b4gKsjiiLepQs5R8uLF9dAMJ3rX1Yoh4gWgliEKtZROpNJqHfN36NnE4R6tZJBeTxuFGlNWxjyKZ3fhwyKUzdDXp0IHK891X6YUeaZimz0FkR2ESFRvG2u_nkmcECS1ziMvnJQdDW5r75OP4ln7-bSEl0_b8pe8vQQPY4rgWdxu6Ly_fJ69b8xL27sD2ZKw",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
