import { h, FunctionalComponent } from '@stencil/core';
import { href } from '@stencil/router';

// export const A = (props, children) =>
//   <li>
//     {props.onClick
//       ? <a {...href(props.href)} onClick={props.onClick}>{children}</a>
//       : <a {...href(props.href)} >{children}</a>}
//   </li>;

export const A: FunctionalComponent<{ href: string, onClick?: (e: MouseEvent) => void }> = (props, children) =>
  <li>
    {props.onClick
      ? <a {...href(props.href)} onClick={props.onClick}>{children}</a>
      : <a {...href(props.href)} >{children}</a>}
  </li>;
