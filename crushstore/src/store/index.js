import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  wishlist: [],
  cart: [],
  newArrivals: [],
  userid: "6049ff7d04ec3c1e44c0b742",
  addedCartNotification: false,
  removedCartNotification: false,
  isCartOpen: false,
  categories: [],
  currentCategory: "",
  categoryItems: [],
};
const getters = {
  wishlist(state) {
    return state.wishlist;
  },
  cart(state) {
    return state.cart;
  },
  addedCartNotification(state) {
    return state.addedCartNotification;
  },
  removedCartNotification(state) {
    return state.removedCartNotification;
  },
  newArrivals(state) {
    return state.newArrivals;
  },
  isCartOpen(state) {
    return state.isCartOpen;
  },
  categories(state) {
    return state.categories;
  },
  currentCategory(state) {
    return state.currentCategory;
  },
  categoryItems(state) {
    return state.categoryItems;
  },
};
const mutations = {
  addRemoveWishlist(state, item) {
    var isIncludes = false;
    for (var i = 0; i < state.wishlist.length; i++) {
      if (state.wishlist[i]._id == item._id) {
        isIncludes = true;
        break;
      }
    }
    if (isIncludes) {
      state.newArrivals.find((e) => e._id == item._id).isliked = false;
      state.wishlist.splice(i, 1);
    } else {
      state.newArrivals.find((e) => e._id == item._id).isliked = true;
      state.wishlist.push(item);
    }
  },
  getCart(state, res) {
    state.cart = res;
  },
  showCart(state) {
    state.isCartOpen = true;
  },
  hideCart(state) {
    state.isCartOpen = false;
  },
  getCategories(state, res) {
    state.categories = res;
  },
  setCurrentCategory(state, res) {
    state.currentCategory = res;
  },
  setCategoryItems(state, res) {
    state.categoryItems = res;
  },
};
const actions = {
  showCart({ commit }) {
    commit("showCart");
  },
  hideCart({ commit }) {
    commit("hideCart");
  },
  addRemoveWishlist({ commit }, item) {
    commit("addRemoveWishlist", item);
  },
  setCurrentCategoryAction({ commit }, name) {
    commit("setCurrentCategory", name);
  },
  setCategoryItemsAction({ commit }, name) {
    const fetchUrl = `https://crushstoreapi.herokuapp.com/products/getbycategory/${name}`;

    fetch(fetchUrl)
      .then((response) => response.json())
      .then((res) => {
        commit("setCategoryItems", res);
      });
  },
  getCartAction({ commit }) {
    fetch(`https://crushstoreapi.herokuapp.com/user/cart/${state.userid}`)
      .then((response) => response.json())
      .then((res) => {
        commit("getCart", res);
      });
  },
  addToCart({ dispatch }, id) {
    state.addedCartNotification = true;
    fetch("https://crushstoreapi.herokuapp.com/user/cart/add", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, /*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userid: state.userid, itemid: id }),
    })
      .then((res) => res.json())
      .then(() => {
        dispatch("getCartAction");
        setTimeout(function() {
          state.addedCartNotification = false;
        }, 1500);
      });
  },
  removeFromCart({ dispatch }, id) {
    state.removedCartNotification = true;
    fetch("https://crushstoreapi.herokuapp.com/user/cart/remove", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userid: state.userid, itemid: id }),
    })
      .then((res) => res.json())
      .then(() => {
        dispatch("getCartAction");
        setTimeout(function() {
          state.removedCartNotification = false;
        }, 1500);
      });
  },
  getNewArrivals() {
    var products;
    fetch("https://crushstoreapi.herokuapp.com/products")
      .then((response) => response.json())
      .then((res) => (products = res))
      .then(() => {
        products.forEach(function(i) {
          i.isliked = false;
        });
      })
      .then(() => {
        state.newArrivals = products;
      })
      .then(() => {
        state.categoryItems = products;
      });
  },
  getCategories({ commit }) {
    fetch(`https://crushstoreapi.herokuapp.com/category`)
      .then((response) => response.json())
      .then((res) => {
        commit("getCategories", res);
      });
  },
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default store;
