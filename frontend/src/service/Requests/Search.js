import fetch from '../../axiosConfig/fetch';

const SearchRequest = {};

SearchRequest.searchForProducts = (name) => {
  return fetch({
    url: `search?name=${name}`,
    method: 'GET',
  });
};

export default SearchRequest;
