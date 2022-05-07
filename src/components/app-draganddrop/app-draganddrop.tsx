import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-draganddrop',
  styleUrl: 'app-draganddrop.css',
  shadow: true,
})
export class AppDraganddrop {

  render() {
    return (
      <Host>
        <my-simple-list title-text="yet" group="g1">
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </my-simple-list>
        <my-simple-list title-text="done" group="g1">
          <li>item 4</li>
          <li>item 5</li>
          <li>item 6</li>
        </my-simple-list>
      </Host>
    );
  }
}
