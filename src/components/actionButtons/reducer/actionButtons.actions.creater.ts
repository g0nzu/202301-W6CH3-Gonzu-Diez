import { createAction } from "@reduxjs/toolkit";
import { buttonActions } from "./actionsButtons.actions.types";

export const callAction = createAction(buttonActions.call);

export const hangAction = createAction(buttonActions.hang);
