export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token:"BQDO9iw5s-oCKL1fJEgaUXxxc3jBis2qkwDjo_ofSugAfMVkkJ4bnUzpfEvtz2gSQHpQcjv8DZjfNmlsoilEb-hRKtm2ZxsRyIlNok0Vgq7aH_TAC1FafOaq_bsmqV65iO6RT_zjWOKHxXMC63U448Lx6r71nKiVVzcTrSWk",
  };
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
        case 'SET_TOKEN':
          return{
            ...state,
            token:action.token
          };
          case 'SET_PLAYLISTS':
            return{
              ...state,
              playlists:action.playlists,
            };
          case 'SET_DISCOVER_WEEKLY':
            return {
              ...state,
              discover_weekly:action.discover_weekly,
                   }
        default:
          return state;
    }
  };
  export default reducer;    