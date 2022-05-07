import { FunctionalComponent, h } from '@stencil/core';
import { href as _href } from '@stencil/router';

export const A = (props, children) => <li><a {..._href(props.href)} onClick={props.onClick}>{children}</a></li>;

interface Props {
  href: string;
}

export const A2: FunctionalComponent<Props> = ({ href }, children) => (
  <li><a {..._href(href)}>{children}</a></li>
);
