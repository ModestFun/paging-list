export interface user {
  id: string;
  name: string;
  email: string;
}

export interface PagingData {
  list: user[];
  total: number; // 总页数
}

export interface RequestTemplate{
  data: PagingData;
  success: boolean;
  message: string; // exist when success is false
}

export interface FetchDataReturnValue {
  data: PagingData | null,
  loading: boolean,
  pagination: Pagination,
}

export interface Pagination {
  defaultCurrent?: number;
  current?: number;
  pageSize?: number;
  total: number;
  onChange?: (page: number, pageSize?: number) => void;
}
