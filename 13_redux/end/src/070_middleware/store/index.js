import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/counter";
import logger from "./middleware/logger"
export default configureStore({
  reducer: {
    counter: reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
