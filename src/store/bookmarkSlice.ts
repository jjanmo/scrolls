import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RecruitItem } from '@/apis/recruits/types'

export interface PayloadBase {
  id: number
}
export interface PayloadToggleRecruitItem {
  data: RecruitItem
}

export interface BookmarkState {
  data: RecruitItem[]
}

const initialState: BookmarkState = {
  data: [],
}

const slice = createSlice({
  name: '@bookmark',
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<PayloadToggleRecruitItem>) => {
      const { data } = action.payload
      state.data.push(data)
    },
    deleteBookmark: (state, action: PayloadAction<PayloadBase>) => {
      const { id } = action.payload
      const index = state.data.findIndex((item) => item.id === id)
      if (index !== -1) state.data.splice(index, 1)
    },
    resetBookmark: (state) => {
      state.data = []
    },
  },
})

export const bookmarkActions = slice.actions
export default slice.reducer
