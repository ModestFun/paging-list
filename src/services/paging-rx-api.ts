import { fromFetch } from "rxjs/fetch"
import { map, switchMap } from "rxjs/operators"
import { Observable } from 'rxjs/internal/Observable';


export interface FetchPagingListParams {
  page: number
  pageSize: number
}

async function handleError(response: Response) {
  if (response.ok) {
    return await response.json();
  }
  console.error('Service Error');
  return {
    data: [],
    success: false,
    message: 'error'
  }
}

function handleRequest(request: Observable<Response>) {
  return request.pipe(
    switchMap(handleError),
    map(x => x.data)
  )
}

const pagingRxService = {
  loadList(params: FetchPagingListParams) {
    return fromFetch("/api/list", {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(params)
    }).pipe(handleRequest)
  },
}

export default pagingRxService
