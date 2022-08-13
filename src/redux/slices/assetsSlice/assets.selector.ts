import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const assets = (state: RootState) => state.assets.assets
export const error = (state: RootState) => state.assets.error
export const loading = (state: RootState) => state.assets.loading
export const getCount = (state: RootState) => state.assets.count
export const getSort = (state: RootState) => state.assets.sortBy

export const limitedAssets = createSelector([assets, getCount, getSort], (data, count, sort) => {
    if(sort === 'name') {
        return data?.slice(0, count)
    } else {
        return data?.slice(0, count).sort((a, b) => b[1] - a[1])
    }
}) 