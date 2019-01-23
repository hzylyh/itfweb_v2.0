import myrequest from '@/plugins/axios'

export function getAllParentCase(pageNum, pageSize, proId) {
  return myrequest({
    url: '/v3/case/getAllParentCase',
    method: 'get',
    params: { pageNum, pageSize, proId }
  })
}
