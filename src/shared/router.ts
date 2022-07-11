import { createRouter } from '@stencil/router';

export const Router = createRouter();
export const push = Router.push;

export const loading = (comp: { loading: boolean }, h: any) =>
  comp.loading ? setTimeout(() => (comp.loading = false), 0) : h;
