import { TabContext, TabList } from "@mui/lab";
import { Box, Paper, Tab } from "@mui/material";
import { useState } from "react";
import * as styles from "./Lead.styles";
import LeadTab from "../Tabs/LeadTab";
import { LeadStatus } from "../../types/Lead";

const LeadView = () => {
  const [tab, setTab] = useState<LeadStatus>(LeadStatus.Invited);

  const handleChangeTab = (_event: React.SyntheticEvent, newTab: LeadStatus) => {
    setTab(newTab);
  };

  return (
    <Paper sx={styles.tabsContainer}>
      <TabContext value={tab}>
        <Paper sx={styles.tabs}>
          <TabList onChange={handleChangeTab}>
            <Tab label="Invited" value={LeadStatus.Invited} sx={{ minWidth: "50%" }} />
            <Tab label="Accepted" value={LeadStatus.Accepted} sx={{ minWidth: "50%" }} />
          </TabList>
        </Paper>
        <Box sx={styles.tabsContent}>
          <LeadTab status={tab} />
        </Box>
      </TabContext>
    </Paper>
  );
};

export default LeadView;
