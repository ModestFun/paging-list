import { PagingData, RequestTemplate } from '../interface';
import { post } from '../utils/react-axios';

export async function getPagingList(current: number, pageSize: number): Promise<PagingData> {
  const res: RequestTemplate = await post('/api/list', { current, pageSize });
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
