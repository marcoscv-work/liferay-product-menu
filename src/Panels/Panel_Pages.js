import React from "react";
import ClayIcon from "@clayui/icon";
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";
// import PanelButton from "./PanelButton";
const spritemap = require("@clayui/css/lib/images/icons/icons.svg");

function Panel_Sites() {
  return (
    <>
      <ClayForm.Group className="cm-panel-search">
        <ClayInput.Group>
          <ClayInput.GroupItem prepend>
            <ClayInput placeholder="Search page" type="search" sizing="sm" />
          </ClayInput.GroupItem>

          <ClayInput.GroupItem shrink append>
            <ClayButton type="submit" small>
              <ClayIcon symbol="search" spritemap={spritemap} />
            </ClayButton>
          </ClayInput.GroupItem>
        </ClayInput.Group>
      </ClayForm.Group>

      <select>
        <option>Public pages</option>
      </select>
      <button>Collapse All</button>
    </>
  );
}

export default Panel_Sites;
