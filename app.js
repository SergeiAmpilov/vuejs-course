const App = {
  data() {
    return {
      title: 'Notes list',
      placeholderStr: 'Insert note text',
      inputValue: '',
    };
  },
  methods: {
    inputChangeHandler(evt) {
      this.inputValue = evt.target.value;
    }
  }

};



const vApp = Vue.createApp(App);
vApp.mount('#app');