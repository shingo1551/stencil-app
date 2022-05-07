import { h } from '@stencil/core';
import { href as _href } from '@stencil/router';

export const A = (props, children) =>
  <li>
    {props.onClick
      ? <a {..._href(props.href)} onClick={props.onClick}>{children}</a>
      : <a {..._href(props.href)} >{children}</a>}
  </li>;
