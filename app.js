const App = {
  data() {
    return {
      title: 'Notes list',
      placeholderStr: 'Insert note text',
      inputValue: '',
      notesList: [
        'note 1',
        'note 2'
      ],
    };
  },
  methods: {
    inputChangeHandler(evt) {
      this.inputValue = evt.target.value;
    },
    addNote() {
      this.notesList.push(this.inputValue);
      this.inputValue = '';
    }
  }

};



const vApp = Vue.createApp(App);
vApp.mount('#app');