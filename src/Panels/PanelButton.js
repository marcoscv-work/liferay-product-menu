import React, { useState } from "react";
import ClayIcon from "@clayui/icon";
const spritemap = require("@clayui/css/lib/images/icons/icons.svg");

function PanelButton(props) {
  const [active, setActive] = useState(false);
  let buttonLabel = props.panelLabel;
  let buttonIcon = props.panelIcon;

  return (
    <button
      className={
        "cm-panel-button btn autofit-row autofit-row-center" + (active ? " cm-active" : "")
      }
      onClick={() => setActive(!active)}
    >
      {buttonIcon && (
        <span className="autofit-col">
          {buttonIcon.includes("/") ? (
            <img src={buttonIcon} alt="" />
          ) : (
            <ClayIcon symbol={buttonIcon} spritemap={spritemap} />
          )}
        </span>
      )}

      <span className="autofit-col autofit-col-expand">
        {buttonLabel}
      </span>
    </button>
  );
}

export default PanelButton;
