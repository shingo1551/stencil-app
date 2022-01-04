import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-hello',
  styleUrl: 'app-hello.css',
  shadow: true,
})
export class AppHello {
  render() {
    return <h1>Hello Stencil!</h1>;
  }
}
