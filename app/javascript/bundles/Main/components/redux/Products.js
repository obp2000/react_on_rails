import fetch from 'cross-fetch'
import {createAction, createReducer} from 'redux-act'

const requestProducts = createAction()
const receiveProducts = createAction(products_info => products_info)
const requestProduct = createAction()
const receiveProduct = createAction(product => product)
const requestUpdateProduct = createAction()
const receiveUpdateProduct = createAction(product => product)
const requestDeleteProduct = createAction()
const receiveDeleteProduct = createAction(product_id => product_id)
const requestSearchProducts = createAction()
const receiveSearchProducts = createAction(search_products => search_products)

export function fetchProducts(page = '1', term = '') {
  return dispatch => {
    dispatch(requestProducts())
    return fetch(`/api/products.json?page=${page}&term=${term}`)
      .then(response => response.json())
      .then(json => dispatch(receiveProducts({
        ...json,
        page,
        term
      })))
  }
}

export function searchProducts(value) {
  return dispatch => {
    dispatch(requestSearchProducts())
    return fetch('/api/products/autocomplete/' + value)
      .then(response => response.json())
      .then(json => dispatch(receiveSearchProducts(json)))
  }
}

export function fetchProductsIfNeeded(page, term) {
  return (dispatch, getState) => {
    const {
      products: {
        page: loadedPage,
        term: loadedTerm
      }
    } = getState()
    if (page != loadedPage || term != loadedTerm) {
      return dispatch(fetchProducts(page, term))
    }
  }
}

export function updateProduct(values) {
  const formData = new FormData();
  $.each(values, (key, value) => {
    if (key != 'image' || value.name) {
      formData.append('product[' + key + ']', value);
    }
  });
  return (dispatch, getState) => {
    dispatch(requestUpdateProduct())
    const {
      products: {
        product: {
          id = ''
        }
      }
    } = getState()
    return fetch('/api/products/' + id, {
        method: id
          ? 'PUT'
          : 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(json => dispatch(receiveUpdateProduct(json)))
  }
}

export function fetchProduct(product_id) {
  return dispatch => {
    dispatch(requestProduct())
    if (product_id == 'new') {
      return dispatch(receiveProduct({}))
    } else {
      return fetch(`/api/products/${product_id}`)
        .then(response => response.json())
        .then(json => dispatch(receiveProduct(json)))
    }
  }
}

export function fetchProductIfNeeded(product_id) {
  return (dispatch, getState) => {
    if (true) {
      return dispatch(fetchProduct(product_id))
    }
  }
}

export function deleteProduct(product_id) {
  return dispatch => {
    dispatch(requestDeleteProduct())
    return fetch(`/api/products/${product_id}`, {method: 'DELETE'}).then(() => dispatch(receiveDeleteProduct(product_id)))
  }
}

const init_products_info = {
  products: [],
  totalCount: 0,
  page: null,
  totalPages: 0,
  term: null
}

const products = createReducer({
  [requestProducts]: (state) => ({
    ...state,
    ...init_products_info,
    isFetching: true,
    didInvalidate: false
  }),
  [receiveProducts]: (state, products_info) => ({
    ...state,
    ...products_info,
    isFetching: false,
    loaded: true
  }),
  [requestProduct]: (state) => ({
    ...state,
    product: null,
    isFetching: true
  }),
  [receiveProduct]: (state, product) => ({
    ...state,
    product,
    isFetching: false
  }),
  [requestDeleteProduct]: (state) => ({
    ...state,
    isFetching: true
  }),
  [receiveDeleteProduct]: (state, product_id) => ({
    ...state,
    products: state
      .products
      .filter(product => {
        return (product.id != product_id)
      }),
    totalCount: state.totalCount - 1,
    isFetching: false
  }),
  [requestUpdateProduct]: (state) => ({
    ...state,
    isFetching: true
  }),
  [receiveUpdateProduct]: (state, product) => ({
    ...state,
    product,
    products: [
      ...state
        .products
        .filter(prod => {
          return (prod.id != product.id)
        }),
      product
    ],
    isFetching: false
  }),
  [requestSearchProducts]: (state) => ({
    ...state,
    search_products: [],
    isFetching: true,
    didInvalidate: false
  }),
  [receiveSearchProducts]: (state, search_products) => ({
    ...state,
    search_products,
    isFetching: false,
    loaded: true
  })
}, {
  ...init_products_info,
  isFetching: false,
  loaded: false,
  product: null,
  search_products: []
});

export default products
