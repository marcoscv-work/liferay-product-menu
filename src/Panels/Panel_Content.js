import React from "react";
// import ClayIcon from "@clayui/icon";
// import ClayForm, { ClayInput } from "@clayui/form";
// import ClayButton from "@clayui/button";
import PanelButton from "./PanelButton";
// const spritemap = require("@clayui/css/lib/images/icons/icons.svg");

function Panel_Sites() {
  return (
    <>
      <h3 className="cm-panel-subtitle">Group 1</h3>

      <ul className="cm-panel-list">
        <li>
          <PanelButton panelLabel="Web Content" />
        </li>
        <li>
          <PanelButton panelLabel="Blogs" />
        </li>
        <li>
          <PanelButton panelLabel="Bookmarks" />
        </li>
        <li>
          <PanelButton panelLabel="Documents and Media" />
        </li>
        <li>
          <PanelButton panelLabel="Dynamic Data Lists" />
        </li>
        <li>
          <PanelButton panelLabel="Forms" />
        </li>
      </ul>

      <h3 className="cm-panel-subtitle">Group 2</h3>

      <ul className="cm-panel-list">
        <li>
          <PanelButton panelLabel="Knowledge Base" />
        </li>
        <li>
          <PanelButton panelLabel="Message Boards" />
        </li>
        <li>
          <PanelButton panelLabel="OpenSocial Gadget Editor" />
        </li>
        <li>
          <PanelButton panelLabel="Polls" />
        </li>
        <li>
          <PanelButton panelLabel="Wiki" />
        </li>
        <li>
          <PanelButton panelLabel="Content Sets" />
        </li>
      </ul>

      <h3 className="cm-panel-subtitle">Group 3</h3>

      <ul className="cm-panel-list">
        <li>
          <PanelButton panelLabel="Categorization" />
        </li>
        <li>
          <PanelButton panelLabel="Recycle Bin" />
        </li>
        <li>
          <PanelButton panelLabel="Publishing" />
        </li>
      </ul>
    </>
  );
}

export default Panel_Sites;
