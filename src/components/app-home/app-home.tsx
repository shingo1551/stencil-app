import { Component, h } from '@stencil/core';
import { href, push } from '../../shared/router';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
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
