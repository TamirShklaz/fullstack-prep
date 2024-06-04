import {create} from "zustand";

export type FilterStore = {
    search: string,
    onSearchChange: (search: string) => void
    batch: string,
    onBatchChange: (batch: string) => void
}


export const useFilterStore = create<FilterStore>((set) => {
    return {
        search: "",
        onSearchChange: (search: string) => {
            set({search})
        },
        batch: "all",
        onBatchChange: (batch: string) => {
            set({batch})
        }
    }
})