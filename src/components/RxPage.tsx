import { Pagination } from "antd";
import useFromFetchModel from "../hooks/useFromFetchModel";
import PagingListModel from "../model/PagingListModel";
import { PagingList } from "./PagingList";

export default function RxPage() {
  const { data, loading, pagination } = useFromFetchModel(PagingListModel);

  return (
    <div>
      <PagingList loading={loading} list={data?.list} />
      <Pagination {...pagination} />
    </div>
  )
}
