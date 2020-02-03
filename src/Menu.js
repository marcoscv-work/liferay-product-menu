import React from "react";
import ClayIcon from "@clayui/icon";
import { cmContext } from "./cmContext";
const spritemap = require("@clayui/css/lib/images/icons/icons.svg");

class Menu extends React.Component {
  handleOnClick() {}

  render() {
    let parent = this.props.parent;
    let children = this.props.children;
    let buttonIcon = this.props.menuIcon;
    let buttonLabel = this.props.menuLabel;
    let contextStatus = this.context.contextStatus;

    return (
      <button
        title={buttonLabel}
        className={
          (this.props.className ? this.props.className + " " : "") +
          "cm-menu-button btn btn-monospaced btn-lg" +
          // (contextStatus === children || contextStatus === parent
          (children && children === contextStatus ? " cm-active" : "")
        }
        onClick={() => {
          contextStatus === children
            ? this.context.contextSetChildren(false)
            : this.context.contextSetChildren(children);
          contextStatus === parent
            ? this.context.contextSetParent(false)
            : this.context.contextSetParent(parent);
        }}
      >
        {buttonIcon.includes("/") ? (
          <img src={buttonIcon} alt="" />
        ) : (
          <ClayIcon symbol={buttonIcon} spritemap={spritemap} />
        )}

        {/* <span className="sr-only">{buttonLabel}</span> */}
      </button>
    );
  }
}

Menu.contextType = cmContext;

export default Menu;
