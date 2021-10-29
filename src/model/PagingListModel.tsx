import { BehaviorSubject, combineLatest } from "rxjs"
import { switchMap } from "rxjs/operators"
import pagingRxService from "../services/paging-rx-api"

class PagingListModel {
  public pagination = new BehaviorSubject({
    page: 0,
    pageSize: 10,
  })

  public pagingList = combineLatest([
    this.pagination,
  ]).pipe(
    switchMap(([pagination]) => {
      return pagingRxService.loadList({
        ...pagination,
      })
    })
  )

  public changePagination(page: number, pageSize?: number) {
    this.pagination.next({
      page,
      pageSize: pageSize || 10,
    })
  }
}

export default new PagingListModel();
