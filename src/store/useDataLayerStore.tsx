import { create } from 'zustand'

export type DataLayerStore = {
  variationString: null | string
  setVariationString: (variation: string) => void
}

export const useDataLayerStore = create<DataLayerStore>()(set => ({
  variationString: null,
  setVariationString: variationString => set({ variationString }),
}))
