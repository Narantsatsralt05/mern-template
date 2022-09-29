export interface Movie {
  id: string | number;
  title: string;
  description?: string | undefined;
  isCompleted?: boolean | undefined;
  userId?: number | undefined;
}
