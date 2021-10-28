import List from "antd/lib/list";
import { user } from "../interface";

export function PagingList(props: any) {
  const { loading, list } = props;
  return (
    <div>
      <p style={{ display: loading ? 'block' : 'none' }}>loading</p>
      <List
        style={{ display: !loading ? 'block' : 'none' }}
        size="large"
        dataSource={list}
        renderItem={(item: user) => (
          <List.Item style={{ color: 'white' }}>
            {item.name} - {item.email}
          </List.Item>
        )} />
    </div>
  )
}
