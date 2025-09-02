import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "f3a66f56dcbe92b0adc89e1101af74c1"; // replace with your key

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) {
      throw new Error("City not found");
    }

    const data = await res.json();
    return data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: "",
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCity } = weatherSlice.actions;
export default weatherSlice.reducer;
