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
        <my-draganddrop container-title="Backlog" group="kanban">
          <my-draganddrop-item task-title="Edit tutorial video" due-date="12/25/21"
            assignee-avatar="https://avatars.dicebear.com/api/micah/example0.svg"></my-draganddrop-item>
          <my-draganddrop-item task-title="Publish video on Youtube" due-date="12/25/21"
            assignee-avatar="https://avatars.dicebear.com/api/micah/example1.svg"></my-draganddrop-item>
        </my-draganddrop>
        <my-draganddrop container-title="In Progress" group="kanban">
          <my-draganddrop-item task-title="Film tutorial video" due-date="12/25/21"
            assignee-avatar="https://avatars.dicebear.com/api/micah/example2.svg"></my-draganddrop-item>
          <my-draganddrop-item task-title="Push code to Github" due-date="12/25/21"
            assignee-avatar="https://avatars.dicebear.com/api/micah/example3.svg"></my-draganddrop-item>
        </my-draganddrop>
        <my-draganddrop container-title="Done" group="kanban">
          <my-draganddrop-item task-title="Create code demo" due-date="12/25/21"
            assignee-avatar="https://avatars.dicebear.com/api/micah/example4.svg"></my-draganddrop-item>
          <my-draganddrop-item task-title="Write video script" due-date="12/25/21"
            assignee-avatar="https://avatars.dicebear.com/api/micah/example5.svg"></my-draganddrop-item>
        </my-draganddrop>
      </Host>
    );
  }

}
