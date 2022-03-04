import ShopActionTypes from "./shop.types";

export const updateCollections = (collectoinsMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectoinsMap
})