import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/constants";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (newItemText) => {
        const newItem = {
          id: new Date().getTime(),
          name: newItemText,
          packed: false,
        }; // create a new item object with the new item text
        set((state) => {
          return { items: [...state.items, newItem] };
          // add the new item to the items array
        });
      },
      deleteItem: (id) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id);
          // filter out the item that matches the id
          return { items: newItems }; // return the new items array
        });
      },
      toggleItem: (id) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            } // toggle the item that matches the id
            return item; // keep the item the same
          });
          return { items: newItems }; // return the new items array
        });
      },
      removeAllItems: () => {
        set(() => ({ items: [] }));
        // set the items to an empty array
      },
      resetToInitial: () => {
        set(() => ({ items: initialItems }));
        // set the items to the initial items
      },
      markAllAsComplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: true };
            // set all items to packed
          });
          return { items: newItems }; // return the new items array
        });
      },
      markAllAsIncomplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: false };
            // set all items to unpacked
          });
          return { items: newItems }; // return the new items array
        });
      },
    }),
    {
      name: "items",
    }
  )
);
