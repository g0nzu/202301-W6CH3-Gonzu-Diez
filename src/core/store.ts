import {
  configureStore,
  ThunkAction,
  Action,
  AnyAction,
} from "@reduxjs/toolkit";

export const appStore = configureStore({
  reducer: {
    phone: PhoneReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
function PhoneReducer(state: unknown, action: AnyAction): unknown {
  throw new Error("Function not implemented.");
}
