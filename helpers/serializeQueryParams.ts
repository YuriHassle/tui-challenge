export function serializeParams(params: any) {
  if (!params) return '';

  let queryString = '?';
  for (let key in params) {
    queryString += `${key}=${params[key]}&`;
  }
  return queryString;
}
