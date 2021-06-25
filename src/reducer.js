export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token:'BQCQSPdJo4HCGDtOTtItXg3fzSF4Y-zE-hTfd7gEf9dVMRYyvj388E8EP4ThMfKtfspFZrOndCU3fD5n5DdRdd0EQy0nSx71dEVWkLVAB3H-4KuVAZBF1Yd4ihgf9VKRRQEIb9Q-S53SlpN5nURscFrK9jAOsMsL5Btu',
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
        default:
          return state;
    }
  };
  export default reducer;    