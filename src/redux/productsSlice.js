import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: [
    {
      _id: '5d51694902b2373622ff5773',
      weight: 100,
      calories: 340,
      category: 'dairy',
      title: 'Danbo cheese',
    },
    {
      _id: '5d51694902b2373622ff5b7f',
      weight: 100,
      calories: 112,
      category: 'fish',
      title: 'marlin',
    },
    {
      _id: '5d51694902b2373622ff5e13',
      weight: 100,
      calories: 17,
      category: 'vegetables and herbs',
      title: 'Salads Belaya Dacha Delicate root',
    },
  ],
  reducers: {},
  extraReducers: {},
});
