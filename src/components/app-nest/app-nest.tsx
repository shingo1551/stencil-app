import { Component, Host, h } from '@stencil/core';
import { Route, match } from '@stencil/router';
import { Router } from '../../shared/router';
import { A } from '../../shared/menu';

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
        <ul>
          <A href='/nest/child'>Child</A>
          <A href='/nest/child/abc/xyz'>Child (abc, xyz)</A>
        </ul>

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
