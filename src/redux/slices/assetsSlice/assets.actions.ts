import Assets from "../../../services/assets.service";
import { AppDispatch } from "../../store";
import { assetsSlice } from "./assets.slice";

export const getAssets = () => async (dispatch: AppDispatch) => {
    try {
        const response = Assets.getAssets()
        const assets = (await response).rates
        dispatch(assetsSlice.actions.getAssets(Object.entries(assets)));
        dispatch(assetsSlice.actions.setLoading(false));
    } catch (err) {
        dispatch(assetsSlice.actions.setError('Oops Something went wrong !!!'));
        dispatch(assetsSlice.actions.setLoading(false));
    }
};

export const setCount = (count: number) => (dispatch: AppDispatch) => {
    dispatch(assetsSlice.actions.setCount(count))
}

export const setSortBy = (sortBy: string) => (dispatch: AppDispatch) => {
    dispatch(assetsSlice.actions.setSortBy(sortBy))
}