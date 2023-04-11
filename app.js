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
      if (this.inputValue === '') {
        return ;
      }
      this.notesList.push(this.inputValue);
      this.inputValue = '';
    },
    handleRemove(i) {
      this.notesList.splice(i, 1);
    }
  }

};



const vApp = Vue.createApp(App);
vApp.mount('#app');