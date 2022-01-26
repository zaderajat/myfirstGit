import { createStore, applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
import UsersReducer from "./Reducer/UsersReducer";

const rootReducer = combineReducers({
    UsersReducer : UsersReducer
})

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk)
      // other store enhancers if any
    )
  );

  export default store
