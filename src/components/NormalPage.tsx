import { Pagination } from "antd";
import { useFetchData } from "../hooks/useFetchData";
import { getPagingList } from "../services/paging-api";
import { PagingList } from "./PagingList";

export default function NormalPage() {
  const { data, loading, pagination } = useFetchData(getPagingList);

  return (
    <div>
      <PagingList loading={loading} list={data?.list} />
      <Pagination {...pagination} />
    </div>
  )
}
