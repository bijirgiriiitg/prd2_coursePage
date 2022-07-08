import { useState } from "react";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "./tabs/tabss";
//import { Card } from "react-bootstrap";
import ImageSlider2 from "./Sliderrr";
//import Modals from "../../components/prd6/Modal";
//import { MdBookmarkBorder, MdLens} from "react-icons/md";

import styles from "./styles.module.css";
//import Sarthak from "../../components/prd6/Topic/NavBar";
const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;

const TabPanelContainer = styled.div`
  height: 100vh;
  margin-top: 4%;
`;

export default function Appk() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <div>
    <div >
      <TabsContainer className={styles.nav2}>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="Gate XE Thermodynamics" value={0}></Tab>
          <hr style={{
            color:'black',
            width:'40%',
            height:'2px'
           }}/>
            <Tab label="Gate XE Thermodynamics" value={1}></Tab>
            <hr style={{
            color:'black',
            width:'40%',
            height:'2px'
           }}/>
           <Tab label="Gate XE Thermodynamics" value={2}></Tab>
           <hr style={{
            color:'black',
            width:'40%',
            height:'2px'
           }}/>
           <Tab label="Gate XE Thermodynamics" value={3}></Tab>
           <hr style={{
            color:'black',
            width:'40%',
            height:'2px'
           }}/>
            <Tab label="Gate XE Thermodynamics" value={4}></Tab>
            <hr style={{
            color:'black',
            width:'40%',
            height:'2px'
           }}/>
           <Tab label="Gate XE Thermodynamics" value={5}></Tab>
           <hr style={{
            color:'black',
            width:'40%',
            height:'2px'
           }}/>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
       
        <TabPanel value={activeTab} selectedIndex={0}>
          <ImageSlider2/>
       </TabPanel>
       <TabPanel value={activeTab} selectedIndex={1}>
          <ImageSlider2/>
       </TabPanel>
       <TabPanel value={activeTab} selectedIndex={2}>
          <ImageSlider2/>
       </TabPanel>
       <TabPanel value={activeTab} selectedIndex={3}>
          <ImageSlider2/>
       </TabPanel>
       <TabPanel value={activeTab} selectedIndex={4}>
          <ImageSlider2/>
       </TabPanel>
       <TabPanel value={activeTab} selectedIndex={5}>
          <ImageSlider2/>
       </TabPanel>
      </TabPanelContainer>
    </div>
    </div>
  );
}
