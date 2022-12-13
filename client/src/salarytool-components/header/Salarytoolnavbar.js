import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SDE1 from '../SDE1/SDE1';
import SDE2 from '../SDE2/SDE2'
import PersistentDrawerLeft from '../sidebar/Sidebar';
import Overviewsde1 from '../overview/Overviewsde1';
import Overviewsde2 from '../overview/Overviewsde2';
import { Container, Row, Col } from 'react-grid-system';
import Overviewsde1index from '../overview/Overview-sde1index';
import Overviewsde2index from '../overview/Overview-sde2index';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} id="home">
      <div>
        <PersistentDrawerLeft />
      </div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Software Development Engineer I" {...a11yProps(1)} />
          <Tab label="Software Development Engineer II" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Container>
          <h5 style={{}}>The backend salary data will move to a local server (Raspberry Pi 4), due to free Heroku Postgres and Heroku Data for Redis® plans are no longer available </h5><br />
          <Row>
            <Col sm={6} style={{alignItems: 'left', justifyContent: 'left'}}>
              <Overviewsde1 />
            </Col>
            <Col sm={6} style={{alignItems: 'rigt', justifyContent: 'right'}}>
              <Overviewsde2 /><br />
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <Overviewsde1index /><br />
            </Col>
            <Col sm={8}>
              <Overviewsde2index />
            </Col>
          </Row>
        </Container>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SDE1 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SDE2 />
      </TabPanel>
    </Box>
  );
}
