import * as actions from './assets.actions';
import * as selectors from './assets.selector';
import { assetsSlice } from './assets.slice';

export const assetsActions = {
    ...assetsSlice.actions,
    ...actions,
};

export const assetsSelectors = {
    ...selectors,
};

export const assetsReducer = assetsSlice.reducer;