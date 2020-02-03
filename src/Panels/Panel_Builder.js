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
          <PanelButton panelLabel="Page Templates" />
        </li>
        <li>
          <PanelButton panelLabel="Page Fragments" />
        </li>
        <li>
          <PanelButton panelLabel="Widget Templates" />
        </li>
        <li>
          <PanelButton panelLabel="Navigation Menus" />
        </li>
      </ul>
    </>
  );
}

export default Panel_Sites;
