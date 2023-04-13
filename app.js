const App = {
  data: () => ({
    title: 'I am Grut',
    myHtml: '<h1>Vue 3 App</h1>',
    person: {
      firstName: 'Sergei',
      lastName: 'Ampilov',
      age: 38
    },
    items: [1, 2, 3, 4, 5, 6],
  }),
  methods: {
    // hanfff
  }
};


const vApp = Vue.createApp(App);
vApp.mount('#app');