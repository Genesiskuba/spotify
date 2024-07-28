import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerpath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 

         "https://youtube-music-api3.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidApi-key",

        "e0f162d602mshce565c7695235a5p1cd2dbjsnf83647ec8674"
      );
      return headers;
    },
  }),

  


  endpoints: (builder) => ({
    getTopcharts: builder.query({ query: () => "/next?id=UD7XQVRY5K8" }),

getSongByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),

    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?tracks_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/tracks/related?tracks_id=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: ({ artistId }) => `/artist/details?artist=${artistId}`,
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) => `/tracks/country?.country_code=${countryCode}`,
    }),
     getSongBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),




  }),
});

export const {
  useGetTopchartsQuery,
  useGetSongByGenreQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongBySearchQuery,
} = shazamCoreApi;
