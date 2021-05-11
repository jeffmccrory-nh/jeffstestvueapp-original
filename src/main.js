import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import VueApollo from "vue-apollo";

import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

/*  const getHeaders = () => {
  const headers = {};
      const token = window.localStorage.getItem('apollo-token');
      if (token) {
      headers.authorization = `Bearer ${token}`;
      }
      return headers;
  };
  */
// Create an http link:
const link = new HttpLink({
    uri: 'http://localhost:8081/graphql',
});
const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache({
    addTypename: true
    })
});

const apolloProvider = new VueApollo({
    defaultClient: client,
  })

Vue.use(VueApollo);

new Vue({
    router,
   apolloProvider,
    render: h => h(App)
  }).$mount("#app");


//createApp(App).mount('#app').component()
