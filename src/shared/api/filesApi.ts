import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface FileDto {
  id: string;
  name: string;
  size: number;
  path: string;
  createdAt: string;
}

export const filesApi = createApi({
  reducerPath: 'filesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: ['Files'],
  endpoints: (builder) => ({
    getFiles: builder.query<FileDto[], void>({
      query: () => '/files',
      providesTags: ['Files'],
    }),
    uploadFile: builder.mutation<FileDto, File>({
      query: (file) => {
        const formData = new FormData();
        formData.append('file', file);
        return { url: '/files/upload', method: 'POST', body: formData };
      },
      invalidatesTags: ['Files'],
    }),
  }),
});

export const { useGetFilesQuery, useUploadFileMutation } = filesApi;
