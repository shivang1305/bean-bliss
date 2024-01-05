/* eslint-disable curly */
/* eslint-disable @typescript-eslint/no-unused-vars */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createJSONStorage, persist} from 'zustand/middleware';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';
import {create} from 'zustand';
import {produce} from 'immer';
import {sortArray} from '../utils/helper';

export const useStore = create(
  persist(
    (set, get) => ({
      CoffeeList: CoffeeData,
      BeanList: BeansData,
      CartPrice: 0,
      FavoritesList: [],
      CartList: [],
      OrderHistoryList: [],
      addToCart: (cartItem: any) =>
        set(
          produce(state => {
            // check that whether the item exists in the cart already or not
            let isItemFound = false;
            for (let i = 0; i < state.CartList.length; i++) {
              if (state.CartList[i].id === cartItem.id) {
                isItemFound = true;

                // check that whether the same size of the coffee is added into the cart or not
                let isSameSizeFound = false;
                for (let j = 0; j < state.CartList[i].prices.length; j++) {
                  if (
                    state.CartList[i].prices[j].size === cartItem.prices[0].size
                  ) {
                    isSameSizeFound = true;
                    state.CartList[i].prices[j].quantity++;
                    break;
                  }
                }
                // when the item is not of same size in the cart
                if (!isSameSizeFound) state.CartList.push(cartItem.prices[0]);

                // sort the cart on the basis of price list
                sortArray(state.CartList.price);

                break;
              }
            }

            // when the item is not found in the cart
            if (!isItemFound) state.CartList.push(cartItem);
          }),
        ),
    }),
    {
      name: 'coffee-app',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
