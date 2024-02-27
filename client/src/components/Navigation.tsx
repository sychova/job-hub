import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

import Vacancies from "./Vacancies";
import Applications from "./Applications";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs value={activeTab} aria-label="basic tabs example">
          <Tab label="Vacancies" onClick={() => setActiveTab(0)} />
          <Tab label="Applications" onClick={() => setActiveTab(1)} />
        </Tabs>
      </Box>
      <Box mt={2}>
        {activeTab === 0 && <Vacancies />}
        {activeTab === 1 && <Applications />}
      </Box>
    </Box>
  );
}
