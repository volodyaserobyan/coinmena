import { createSlice } from '@reduxjs/toolkit';
import { IAssets } from '../../../global/interface';

interface IinitialState {
    assets: IAssets[] | null;
    count: number;
    sortBy: 'name' | 'price';
    loading: boolean;
    error: string;
}

export const assetsSlice = createSlice({
    name: 'assets',
    initialState: {
        assets: null,
        count: 10,
        sortBy: 'name',
        loading: true,
        error: '',
    } as IinitialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setCount(state, action) {
            state.count = action.payload
        },
        setSortBy(state, action) {
            state.sortBy = action.payload
        },
        getAssets(state, action) {
            state.assets = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});
