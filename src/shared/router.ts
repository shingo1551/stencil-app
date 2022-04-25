import { createRouter, href as _href, Route as _Route, match as _match } from '@stencil/router';

export const Router = createRouter();
export const push = Router.push;
export const href = _href;
export const Route = _Route;
export const match = _match;
