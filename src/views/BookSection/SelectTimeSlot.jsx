import React, { useState } from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export default function VerticalToggleButtons() {
  const [view, setView] = useState(null);

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="15:00" aria-label="list">
        15:00
      </ToggleButton>
      <ToggleButton value="17:00" aria-label="module">
        17:00
      </ToggleButton>
      <ToggleButton value="18:00" aria-label="quilt">
        18:00
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
