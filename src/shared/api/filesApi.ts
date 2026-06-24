import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface FileDto {
  id: string;
  name: string;
  size: number;
  key: string;
  createdAt: string;
}

export interface FileDtoWithUrl extends FileDto {
  url: string;
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
    getFile: builder.query<FileDtoWithUrl, string>({
      query: (id) => `/files/${id}`,
    }),
    uploadFile: builder.mutation<FileDto, File>({
      query: (file) => {
        const formData = new FormData();
        formData.append('file', file);
        return { url: '/files/upload', method: 'POST', body: formData };
      },
      invalidatesTags: ['Files'],
    }),
    deleteFile: builder.mutation<void, string>({
      query: (id) => ({ url: `/files/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Files'],
    }),
  }),
});

export const { useGetFilesQuery, useGetFileQuery, useUploadFileMutation, useDeleteFileMutation } = filesApi;
