import { useEffect, useState } from "react";
import { BehaviorSubject, Observable } from "rxjs";
import { useObservable } from "rxjs-hooks";
import { Pagination, PagingData } from "../interface";

export default function useFromFetchModel(SomeModel: {
  pagingList: Observable<any>,
  pagination: BehaviorSubject<{
    page: number;
    pageSize: number;
  }>,
  changePagination: (page: number, pageSize?: number) => void;
}): {
  data: PagingData,
  loading: boolean,
  pagination: Pagination
} {
  const data = useObservable(() => SomeModel.pagingList);
  const pageInfo = useObservable(() => SomeModel.pagination);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    data && setLoading(false);
  }, [data])

  return {
    data,
    loading,
    pagination: {
      current: pageInfo?.page || 1,
      pageSize: pageInfo?.pageSize || 10,
      onChange: (page: number, pageSize?: number) => {
        setLoading(true);
        SomeModel.changePagination(page, pageSize || 10)
      },
      total: data?.total || 0
    }
  };
}
