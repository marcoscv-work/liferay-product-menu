import React from "react";
import ClayIcon from "@clayui/icon";
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";
import PanelButton from "./PanelButton";
const spritemap = require("@clayui/css/lib/images/icons/icons.svg");

function Panel_Sites() {
  return (
    <>
      <h2 className="cm-panel-title">
        <span>Soundhub Global</span>
        {/* <ClayIcon className="float-right" symbol="sites" spritemap={spritemap} /> */}
      </h2>

      {/* <ul className="cm-panel-list">
        <li>
          <a href="#">Live</a>
        </li>
        <li>
          <a href="#">Staging</a>
        </li>
      </ul> */}

      <ClayForm.Group className="cm-panel-search">
        <ClayInput.Group>
          <ClayInput.GroupItem prepend>
            <ClayInput placeholder="Search site" type="search" sizing="sm" />
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
          <PanelButton panelLabel="Soundhub ES" panelIcon="./logo1.svg" />
        </li>
        <li>
          <PanelButton panelLabel="Soundhub Global" panelIcon="./logo2.svg" />
        </li>
        <li>
          <PanelButton panelLabel="Soundhub Intranet" panelIcon="./logo3.svg" />
        </li>
      </ul>

      <h3 className="cm-panel-subtitle">All</h3>

      <ul className="cm-panel-list">
        <li>
          <PanelButton panelLabel="Soundhub A" panelIcon="./logo1.svg" />
        </li>
        <li>
          <PanelButton panelLabel="Soundhub C" panelIcon="./logo2.svg" />
        </li>
        <li>
          <PanelButton panelLabel="Soundhub F" panelIcon="./logo3.svg" />
        </li>
        <li>
          <PanelButton panelLabel="Soundhub G" panelIcon="./logo1.svg" />
        </li>
        <li>
          <PanelButton panelLabel="Soundhub K" panelIcon="./logo2.svg" />
        </li>
      </ul>
    </>
  );
}

export default Panel_Sites;
