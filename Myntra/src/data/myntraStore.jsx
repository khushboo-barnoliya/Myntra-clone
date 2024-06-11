/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";


export const MyntraContext = createContext({
    handleAddToBag: () => { },
    ItemList: [],
    addToItemShow: () => { },
    removeFromBag: () => { },
    itemShow: [],
})

const MyntraProvider = ({ children }) => {

    const itemShowReducer = (currentItemShow, action) => {
        let newItemShow = currentItemShow
        if (action.type === "ADD_TO_ITEM_SHOW") {
            newItemShow = [action.payload]
        }
        return newItemShow;
    }
    // Add to Bag Reducer starts

    const bagReducer = (currentItemList, action) => {
        let newBagListItems = currentItemList;
        if (action.type === "ADD_TO_BAG") {
            newBagListItems = [action.payload, ...currentItemList]
        }
        return newBagListItems;
    }





    const bagDataStore = () => {
        let localData = localStorage.getItem("BAG_ITEMS");
        if (localData == []) {
            return [];
        }
        else {
            return JSON.parse(localData);
        }
    }

    const items = bagDataStore();

    // add to bag reducer ends
    
    // itemShow reducer starts
    
    
    

    const addToItemShow = (products) => {
        dispatchItemShow({
            type: "ADD_TO_ITEM_SHOW",
            payload: products
        })
    }

    const handleAddToBag = (bagItems) => {
        dispatchItemList({
            type: "ADD_TO_BAG",
            payload: bagItems
        })
    }
    const removeFromBag = (itemKey) => {
        dispatchItemList({
            type: "REMOVE_FROM_BAG",
            payload: itemKey
        })
    }
    
    const [itemShow, dispatchItemShow] = useReducer(itemShowReducer, items)
    
    const [ItemList, dispatchItemList] = useReducer(bagReducer, items)
    // itemShow reducer ends


    useEffect(() => {
        localStorage.setItem("BAG_ITEMS", JSON.stringify(ItemList));
    }, [ItemList])



    return <MyntraContext.Provider value={{
        handleAddToBag,
        ItemList,
        addToItemShow,
        itemShow,
        removeFromBag,
    }}>
        {children}
    </MyntraContext.Provider>
}


export default MyntraProvider;