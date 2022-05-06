import { Component, h } from '@stencil/core';
import { href } from '@stencil/router';
import { push } from '../../shared/router';

@Component({
  tag: 'app-menu',
  styleUrl: 'app-menu.css',
  shadow: true,
})
export class AppMenu {
  onClick = (e: MouseEvent) => {
    e.preventDefault();
    push('/hello/clicked');
  }

  render() {
    return (
      <ul>
        <A href='/hello'>Hello</A>
        <A href='/hello/abc'>Hello ABC</A>
        <li><a href='#' onClick={this.onClick}>Click me!</a></li>

        <A href='/store'>Store</A>
        <A href='/lifecycle'>Lifecycle</A>
        <A href='/todo'>ToDo</A>

        <A href='/nest'>Nest</A>

        <A href='/chart'>Chart</A>

        <A href='/draganddrop'>Drag and Drop</A>
      </ul>
    );
  }

}

const A = (props, children) => <li><a {...href(props.href)}>{children}</a></li>;
