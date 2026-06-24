export interface PdfFile {
  id: string;
  name: string;
  pages: number;
  size: string;
  modified: string;
  badge: string;
  uploading?: true;
  progress?: number;
}
