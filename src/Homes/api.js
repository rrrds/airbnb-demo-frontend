import { transformHomeData } from './helpers';

export const apiUrl = 'https://airbnb-demo-api.now.sh/v1/homes';

export const getList = (limit, offset) =>
  fetch(`${apiUrl}?limit=${limit}&offset=${offset}`)
    .then(response => response.json())
    .then(data => data.items.map(i => transformHomeData(i)));
