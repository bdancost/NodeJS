export function extractQueryParams(query) {
  if (!query) {
    return {};
  }

  return query
    .substr(1) // remove o "?"
    .split("&")
    .reduce((queryParams, param) => {
      const [key, value] = param.split("=");

      // só adiciona se houver chave e valor
      if (key && value !== undefined) {
        queryParams[key] = value;
      }

      return queryParams;
    }, {});
}
