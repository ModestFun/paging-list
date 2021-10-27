export interface user {
  id: string;
  name: string;
  email: string;
}

export interface RequestData {
  list: user[];
  total: number; // 总页数
}

export interface RequestList {
  data: RequestData;
  success: boolean;
  message: string; // exist when success is false
}

export interface FetchDataReturnValue {
  data: RequestData | null,
  loading: boolean,
  pagination: Pagination,
}

export interface Pagination {
  defaultCurrent?: number;
  current?: number;
  pageSize?: number;
  total: number;
  onChange: (page: number, pageSize?: number) => void;
}
