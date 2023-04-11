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
    addNote() {
      if (this.inputValue === '') {
        return ;
      }
      this.notesList.push(this.inputValue);
      this.inputValue = '';
    },
    handleRemove(i, evt) {
      this.notesList.splice(i, 1);
    }
  },
  computed: {
    doubleCountComputed() {
      return this.notesList.length * 2;
    }
  },
  watch: {
    inputValue(value) {
      console.log(value)
    }
  }

};



const vApp = Vue.createApp(App);
vApp.mount('#app');