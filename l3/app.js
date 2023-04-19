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
    addItem(evt) {
        this.items.unshift(this.$refs.myInput.value);
        this.$refs.myInput.value = '';
    },
    log(item) {
      console.log(item);
    }
  },
  computed: {
    evenItems() {
      return this.items.filter( el => el % 2 === 0)
    }
  }
};

const vApp = Vue.createApp(App);
vApp.mount('#app');