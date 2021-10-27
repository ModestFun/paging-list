export default function PagingList(props: { list: any[] }) {
  const { list } = props;
  if (list.length) {
    return (
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name} - {item.email}
          </li>
        ))}
      </ul>
    )
  }
  return (
    <div>暂无数据，请检查网络后重试</div>
  )
}
