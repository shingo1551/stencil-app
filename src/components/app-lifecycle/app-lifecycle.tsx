import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'app-lifecycle',
  styleUrl: 'app-lifecycle.css',
  shadow: true,
})
export class AppLifecycle {
  @State() loading = true;
  @State() count = 0;

  log(name: string) {
    console.log(name);
  }

  countup = () => {
    this.count++;
    sessionStorage.setItem('count', '' + this.count);
  };

  connectedCallback() {
    this.log('1. connectedCallback');
    this.count = +sessionStorage.getItem('count');
  }

  componentWillLoad() {
    this.log('2. componentWillLoad');
  }

  componentWillRender() {
    this.log('3. componentWillRender');
  }

  componentDidRender() {
    this.log('4. componentDidRender');
  }

  componentDidLoad() {
    this.log('5. componentDidLoad');
  }

  componentWillUpdate() {
    this.log('6. componentWillUpdate');
  }

  componentDidUpdate() {
    this.log('7. componentDidUpdate');
  }

  disconnectedCallback() {
    this.log('8. disconnectedCallback');
  }

  render() {
    this.log('render');
    if (this.loading)
      setTimeout(() => {
        this.loading = false;
      }, 0);
    else
      return (
        <div>
          <h1>Lifecycle</h1>
          <button onClick={this.countup}>Counter</button>
          <h2>{this.count}</h2>
        </div>
      );
  }
}
