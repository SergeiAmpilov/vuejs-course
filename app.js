const App = {
  data() {
    return {
      counter: 50,
      title: 'Super counter'
    };
  },

};



const vApp = Vue.createApp(App);
vApp.mount('#app');