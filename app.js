const App = {
  data: () => ({
    title: 'I am Grut',
    myHtml: '<h1>Vue 3 App</h1>'
  }),
};


const vApp = Vue.createApp(App);
vApp.mount('#app');