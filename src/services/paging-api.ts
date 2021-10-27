import { RequestList } from '../interface';
import { post } from '../utils/react-axios';

export async function getPagingList(current: number, pageSize: number) {
  const res: RequestList = await post('/api/list', { current, pageSize });
  if (res.success) {
    return res.data
  } else {
    console.error(res.message);
    return {
      list: [],
      total: 0
    };
  }
}
