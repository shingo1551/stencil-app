import { Component, Host, h } from '@stencil/core';
import { Route, href, match } from '@stencil/router';
import { Router } from '../../shared/router';

@Component({
  tag: 'app-nest',
  styleUrl: 'app-nest.css',
  shadow: true,
})
export class AppNest {
  render() {
    return (
      <Host>
        <h1>App Nest</h1>
        <a {...href('/nest/child')}>
          <button>Child page</button>
        </a>
        <a {...href('/nest/child/abc/xyz')}>
          <button>Child page (abc, xyz)</button>
        </a>

        <Router.Switch>
          <Route path='/nest/child'>
            <my-name />
          </Route>
          <Route
            path={match('/nest/child/:first/:last')}
            render={({ first, last }) => <my-name first={first} last={last} />}
          />
        </Router.Switch>
      </Host>
    );
  }
}
