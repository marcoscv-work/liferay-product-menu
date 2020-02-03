import React from "react";
import ClayIcon from "@clayui/icon";
import ClayButton from "@clayui/button";
import { CSSTransition } from "react-transition-group";
import { cmContext } from "./cmContext";
import Panel_Sites from "./Panels/Panel_Sites";
import Panel_Pages from "./Panels/Panel_Pages";
import Panel_Builder from "./Panels/Panel_Builder";
import Panel_Content from "./Panels/Panel_Content";
import Panel_Config from "./Panels/Panel_Config";
import Panel_App from "./Panels/Panel_App";
const spritemap = require("@clayui/css/lib/images/icons/icons.svg");

class Panel extends React.Component {
  renderPanel(panelLabel) {
    switch (panelLabel) {
      case "Your Sites":
        return <Panel_Sites />;
      case "Pages":
        return <Panel_Pages />;
      case "Site Builder":
        return <Panel_Builder />;
      case "Content & Data":
        return <Panel_Content />;
      case "Site Configuration":
        return <Panel_Config />;
      case "Applications":
        return <Panel_App />;
      default:
        return "";
    }
  }

  render() {
    let panelLabel = this.props.panelLabel;

    return (
      <CSSTransition
        in={this.context.contextStatus === panelLabel}
        timeout={{ enter: 0, exit: 300 }}
        classNames={{
          enterDone: "cm-active"
        }}
        unmountOnExit
      >
        <div className="cm-panel">
          <ClayButton
            type="submit"
            displayType="link"
            monospaced
            small
            className="cm-panel-close"
            onClick={() => {
              this.context.contextSetChildren(false);
            }}
          >
            <ClayIcon symbol="times" spritemap={spritemap} />
          </ClayButton>

          {/* <h1 className="cm-panel-title">{"Select " + panelLabel}</h1> */}
          <h1 className="cm-panel-title">{panelLabel}</h1>

          {this.renderPanel(panelLabel)}
        </div>
      </CSSTransition>
    );
  }
}

Panel.contextType = cmContext;

export default Panel;
