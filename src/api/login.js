import myrequest from '../plugins/axios'

export function login(params) {
  return myrequest({
    url: '/v3/auth/login',
    method: 'post',
    data: params
  })
}

export function test() {
  return myrequest({
    url: '/v3/auth/other',
    method: 'get',
    // data: params
  })
}
