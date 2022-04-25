import { Component, h } from '@stencil/core';
import { Route, Router, match } from '../../shared/router';

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
              <app-home></app-home>
            </Route>
            <Route path='/hello'>
              <my-hello name='SPA'></my-hello>
            </Route>
            <Route
              path={match('/hello/:name')}
              render={({ n }) => <my-hello name={n}></my-hello>}
            />

            <Route path='/store'>
              <my-store />
            </Route>
            <Route path='/lifecycle'>
              <my-lifecycle></my-lifecycle>
            </Route>
            <Route path='/chart'>
              <my-chart />
            </Route>

            <Route path={/nest/}>
              <app-nest />
            </Route>

            <Route path='/todo'>
              <my-todo></my-todo>
            </Route>

            <Route path='/404'>Not Found</Route>
            <Route path={/./} to='/404'></Route>
          </Router.Switch>
        </main>
      </div>
    );
  }
}
