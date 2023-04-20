const h = Vue.h;
const App = {
  data() {
    return {
      title: 'Hello world title',
    };
  },
  methods: {
    changeTitle() {
      // console.log(this);
      this.title += 'h';
    }
  },
  render() {
    return h(
      'div',
      {
        className: 'card center'
      }, [
        h('h1', {}, this.title),
        h('button', {
          className: 'btn',
          onClick: this.changeTitle
        }, 'Change title')

      ]
    );
  }
  // template: `
  //   <div class="card center">
  //     <h1>{{ title }}</h1>
  //     <p>This content from JS template</p>
  //     <button class='btn' @click="title += 'h'">Change title</button>
  //   </div>
  // `,
};

const vApp = Vue.createApp(App);
vApp.mount('#app');


Vue.createApp({
  data() {
    return {
      title: 'new title 2'
    }
  }
}).mount('#app2')