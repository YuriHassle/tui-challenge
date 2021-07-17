interface Params {
  [key: string]: string;
}

export function serializeParams(params: Params) {
  if (!params) return '';

  let queryString = '?';
  for (let key in params) {
    queryString += `${key}=${params[key]}&`;
  }
  return queryString;
}
