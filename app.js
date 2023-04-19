const App = {
  template: `
    <div class="card center">This content from JS template</div>
  `,
};

const vApp = Vue.createApp(App);
vApp.mount('#app');