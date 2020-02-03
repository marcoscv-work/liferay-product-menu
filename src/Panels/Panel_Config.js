import React from "react";
// import ClayIcon from "@clayui/icon";
// import ClayForm, { ClayInput } from "@clayui/form";
// import ClayButton from "@clayui/button";
import PanelButton from "./PanelButton";
// const spritemap = require("@clayui/css/lib/images/icons/icons.svg");

function Panel_Sites() {
  return (
    <>
      <ul className="cm-panel-list">
        <li>
          <PanelButton panelLabel="Settings" />
        </li>
        <li>
          <PanelButton panelLabel="Social Activity" />
        </li>
        <li>
          <PanelButton panelLabel="Workflow" />
        </li>
        <li>
          <PanelButton panelLabel="Mobile Device Famielies" />
        </li>
      </ul>
    </>
  );
}

export default Panel_Sites;
