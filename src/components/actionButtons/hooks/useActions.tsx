import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../models/phone";
import * as ac from "../reducer/actionButtons.actions.creater";

export const usePhone = () => {
  const dispatch = useDispatch();
};
