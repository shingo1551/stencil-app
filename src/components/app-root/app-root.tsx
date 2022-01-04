import { Component, h } from '@stencil/core';
import { Route, match } from '@stencil/router';
import { Router } from '../../shared/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <Router.Switch>
            <Route path='/'>
              <app-home1></app-home1>
            </Route>
            <Route path='/hello'>
              <app-hello1 name='SPA'></app-hello1>
            </Route>
            <Route
              path={match('/hello/:name')}
              render={({ name }) => <app-hello1 name={name}></app-hello1>}
            />
            <Route path='/lifecycle'>
              <app-lifecycle></app-lifecycle>
            </Route>
          </Router.Switch>

          {/* <Router.Switch>
            <Route path='/'>
              <app-home />
            </Route>
            <Route
              path={match('/profile/:name')}
              render={({ name }) => <app-profile name={name} />}
            />
            <Route path={/nest/}>
              <app-nest />
            </Route>
            <Route path='/store'>
              <app-store />
            </Route>
            <Route path='/chart'>
              <app-chart />
            </Route>
            <Route path='/todo'>
              <app-todo />
            </Route>
          </Router.Switch> */}
        </main>
      </div>
    );
  }
}
