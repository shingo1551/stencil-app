import { Component, h } from '@stencil/core';
import { href } from '@stencil/router';
import { push } from '../../shared/router';

@Component({
  tag: 'app-home1',
  styleUrl: 'app-home1.css',
  shadow: true,
})
export class AppHome1 {
  onClick = () => push('/hello/clicked');

  render() {
    return (
      <div>
        <a {...href('/hello')}>
          <button>Hello</button>
        </a>

        <a {...href('/hello/abc')}>
          <button>Hello ABC</button>
        </a>

        <button onClick={this.onClick}>Click me!</button>

        <a {...href('/store')}>
          <button>Store page</button>
        </a>
        <a {...href('/lifecycle')}>
          <button>Lifecycle</button>
        </a>
        <a {...href('/chart')}>
          <button>Chart page</button>
        </a>

        <a {...href('/nest')}>
          <button>Nest page</button>
        </a>

        <a {...href('/todo')}>
          <button>ToDo</button>
        </a>
      </div>
    );
  }
}
