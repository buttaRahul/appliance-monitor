import { type } from "@testing-library/user-event/dist/type";
import { act } from "react-dom/test-utils";
export const appliances = [
  { name: "bulbs", active: false, start: null },
  { name: "air conditioner", active: false, start: null },
  { name: "music", active: false, start: null },
  { name: "fan", active: false, start: null },
];

export const actions = {
  ADD_APPLIANCE: "ADD_APPLIANCE",
  REMOVE_APPLIANCE: "REMOVE_APPLIANCE",
  TOOGLE_STATUS: "TOOGLE_STATUS",
};
 function reducer(state, action) {
  switch (action.type) {
    case actions.ADD_APPLIANCE:

       return  [...state,action.payload]
    case actions.TOOGLE_STATUS:
        return state.map((appl) => {
            if(!appl.active ) appl.start = new Date();
            if(action.payload.name === appl.name){
                appl.active = !appl.active;
            }
            return appl
        })
        case actions.REMOVE_APPLIANCE:
              return state.filter(
                (appl) => {
                  return appl.name !== action.payload.name 
                }
              )
              return state;
    default:
      return state;
  }
}

export default reducer;
