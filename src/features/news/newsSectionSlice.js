import { nanoid } from 'nanoid';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL_NEWS, API_KEY_NEWS } from '../../utils/apiNewsConfig';

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL_NEWS}${API_KEY_NEWS}`);
            if (!response.ok) {
                throw new Error('Failed to fetch news');
            }
            const data = await response.json();
            return data.articles.map(item => ({ ...item, id: nanoid() }));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const newsSectionSlice = createSlice({
    name: 'newsSection',
    initialState: {
        news: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.news = action.payload;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default newsSectionSlice.reducer;