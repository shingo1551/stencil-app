/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppDraganddrop {
    }
    interface AppHome {
    }
    interface AppMenu {
    }
    interface AppRoot {
    }
}
declare global {
    interface HTMLAppDraganddropElement extends Components.AppDraganddrop, HTMLStencilElement {
    }
    var HTMLAppDraganddropElement: {
        prototype: HTMLAppDraganddropElement;
        new (): HTMLAppDraganddropElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppMenuElement extends Components.AppMenu, HTMLStencilElement {
    }
    var HTMLAppMenuElement: {
        prototype: HTMLAppMenuElement;
        new (): HTMLAppMenuElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLElementTagNameMap {
        "app-draganddrop": HTMLAppDraganddropElement;
        "app-home": HTMLAppHomeElement;
        "app-menu": HTMLAppMenuElement;
        "app-root": HTMLAppRootElement;
    }
}
declare namespace LocalJSX {
    interface AppDraganddrop {
    }
    interface AppHome {
    }
    interface AppMenu {
    }
    interface AppRoot {
    }
    interface IntrinsicElements {
        "app-draganddrop": AppDraganddrop;
        "app-home": AppHome;
        "app-menu": AppMenu;
        "app-root": AppRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-draganddrop": LocalJSX.AppDraganddrop & JSXBase.HTMLAttributes<HTMLAppDraganddropElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-menu": LocalJSX.AppMenu & JSXBase.HTMLAttributes<HTMLAppMenuElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
        }
    }
}
