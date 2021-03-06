export function sheltersReducer(state = {allShelters: [], selectedShelter: null, location: null, latitude: null, longitude: null}, action) {
  switch(action.type) {


    case "SET_LOCATION":
      console.log("setting location")
      return {...state, location: action.payload}

    case "SET_LAT_LONG":
      console.log("setting lat long")
      return {...state, latitude: action.payload.lat, longitude: action.payload.lng}

    case "ADD_SHELTER":
      return {...state, allShelters: [...state.allShelters, action.payload]}

    case "SET_SELECTED_SHELTER":
      return {...state, selectedShelter: action.payload}

    default:
      return {...state}

  }

}
