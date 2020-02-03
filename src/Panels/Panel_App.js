import React from "react";
import ClayIcon from "@clayui/icon";
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";
import PanelButton from "./PanelButton";
const spritemap = require("@clayui/css/lib/images/icons/icons.svg");

function Panel_Sites() {
  return (
    <>

      <ClayForm.Group className="cm-panel-search">
        <ClayInput.Group>
          <ClayInput.GroupItem prepend>
            <ClayInput placeholder="Search application" type="search" sizing="sm" />
          </ClayInput.GroupItem>

          <ClayInput.GroupItem shrink append>
            <ClayButton type="submit" small>
              <ClayIcon symbol="search" spritemap={spritemap} />
            </ClayButton>
          </ClayInput.GroupItem>
        </ClayInput.Group>
      </ClayForm.Group>

      <h3 className="cm-panel-subtitle">Recent</h3>

      <ul className="cm-panel-list">
        <li>
          <PanelButton panelLabel="Soundhub ES" panelIcon="forms" />
        </li>
        <li>
          <PanelButton panelLabel="Soundhub Global" panelIcon="forms" />
        </li>
        <li>
          <PanelButton panelLabel="Soundhub Intranet" panelIcon="add-cell" />
        </li>
      </ul>

      <h3 className="cm-panel-subtitle">All Apps</h3>

      <ul className="cm-panel-list">
        <li>
          <PanelButton panelLabel="Blog" panelIcon="blogs" />
        </li>
        <li>
          <PanelButton panelLabel="Concert Expenses" panelIcon="forms" />
        </li>
        <li>
          <PanelButton panelLabel="Conference Expenses" panelIcon="forms" />
        </li>
        <li>
          <PanelButton panelLabel="Documents & Media" panelIcon="documents-and-media" />
        </li>
        <li>
          <PanelButton panelLabel="Wiki" panelIcon="wiki" />
        </li>
      </ul>
    </>
  );
}

export default Panel_Sites;
