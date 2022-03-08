export const initialState = { 
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    // token: 'BQCQVHnq8YBONpqUuwfn8RvxJd_doqtN_azRjlY5h_xDWtlsm3iiqA207_Hw03YXjXskpBurQ4eiyXBW0RHxHfN1irAcfyZ8TvAeK4PsKwZZa8QatfYxS5ycLZPcI9GZpkN44aT20c0iNa64RHuHClX6rqin3SFnpYe8oSVyfZg'
  }

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
          return {
              ...state,
              user: action.user
          }
        case 'SET_TOKEN':
            return{
              ...state,
              token: action.token
            }
        case 'SET_PLAYLISTS':
          return{
            ...state,
            playlists: action.playlists
          }
        case 'SET_DISCOVER_WEEKLY':
          return{
            ...state, 
            discover_weekly: action.discover_weekly
          }
          default: 
          return state
    }
}

export default reducer