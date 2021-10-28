/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useState } from "react";
import { FetchDataReturnValue, PagingData } from "../interface";

interface FetchDataOptions {
  pageSize?: number;
  pageNum?: number;
}

export function useFetchData(getList: (pageNum: number, pageSize: number) => any, options?: FetchDataOptions): FetchDataReturnValue {
  const [data, setData] = useState<PagingData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [current, setCurrent] = useState<number>(options?.pageNum ?? 1);
  const [pageSize, setPageSize] = useState<number>(options?.pageSize ?? 10);

  const fetchList = useMemo(() => (pageNum: number, pageSize: number) =>
    getList(pageNum, pageSize), []);

  const handleChange = useCallback(
    (page: number, size?: number) => {
      page && setCurrent(page);
      size && setPageSize(size);
      refreshList(page, size || pageSize);
    }, [pageSize]);

  const refreshList = useCallback(
    async (page: number, size: number) => {
      setLoading(true);
      setData(await fetchList(page, size));
      setLoading(false);
    }, []);

  useEffect(() => {
    refreshList(current, pageSize);
  }, []);

  return {
    data,
    loading,
    pagination: {
      total: data?.total || 0,
      onChange: handleChange,
      current,
      pageSize
    }
  }
}
