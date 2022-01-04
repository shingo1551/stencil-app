import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-hello1',
  styleUrl: 'app-hello1.css',
  shadow: true,
})
export class AppHello1 {
  @Prop() name = 'Stencil';

  render() {
    return <h1>Hello {this.name}!</h1>;
  }
}
