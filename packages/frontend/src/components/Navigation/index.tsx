import React from 'react';
import styled from "styled-components";
import {Button, ActionIcon, Image, Input, MediaQuery, Space, Menu, Flex, Kbd} from "@mantine/core";
import {useWindowScroll} from '@mantine/hooks'
import logo from '../../assets/IBPE黄蓝logo（透明）.png'
import {IconAdjustments, IconDashboard, IconFileText, IconHome, IconSearch} from "@tabler/icons-react";
import {Link, useLocation} from "wouter";
import type {SpotlightAction} from "@mantine/spotlight";
import {spotlight, SpotlightProvider} from "@mantine/spotlight";

const NavigationRoot = styled.nav`
  @media (min-width: 768px){
    width: 100vw;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  @media (max-width: 768px){
    width: 100vw;
    padding-left: 1vw;
    padding-right: 1vw;
  }
  position: fixed;
  top: 0;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  transition: 100ms;
`
const actions: SpotlightAction[] = [
    {
        title: 'Home',
        description: 'Get to home page',
        onTrigger: () => console.log('Home'),
        icon: <IconHome size="1.2rem" />,
    },
    {
        title: 'Dashboard',
        description: 'Get full information about current system status',
        onTrigger: () => console.log('Dashboard'),
        icon: <IconDashboard size="1.2rem" />,
    },
    {
        title: 'Documentation',
        description: 'Visit documentation to lean more about all features',
        onTrigger: () => console.log('Documentation'),
        icon: <IconFileText size="1.2rem" />,
    },
];
const Navigation = () => {
    const [scroll]=useWindowScroll()

    const [location, setLocation] = useLocation();
    return (
        <NavigationRoot style={{boxShadow:scroll.y===0?"none":"0 1px 3px 1px #00000020"}}>
            <Image width={"100px"} src={logo}/>
            <SpotlightProvider
                actions={actions}
                searchIcon={<IconSearch size="1.2rem" />}
                searchPlaceholder="Search..."
                shortcut={['mod + K', '/']}
                nothingFoundMessage="Nothing found..."
            >
                <Input rightSection={<Kbd>&nbsp;/&nbsp;</Kbd>} style={{width:"60vw"}} onClick={()=>spotlight.open()} icon={<IconSearch/>} component="button">Search</Input>
            </SpotlightProvider>
            <MediaQuery query="(max-width: 768px)" styles={{display:"none"}}>
                <Button.Group>
                    <Button variant="subtle" onClick={()=>setLocation("/")}>公告</Button>
                    <Button variant="subtle" onClick={()=>setLocation("/")}>文章</Button>
                    <Button variant="subtle">预约</Button>
                </Button.Group>
            </MediaQuery>
            <MediaQuery query="(max-width: 768px)" styles={{display:"none"}}>
                <Button variant="gradient" w="120px" onClick={()=>setLocation("/login")} gradient={{ from: 'indigo', to: 'cyan' }}>Login</Button>
            </MediaQuery>
            <MediaQuery query="(min-width: 768px)" styles={{display:"none"}}>
                <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }} shadow="md" width={200}>
                    <Menu.Target>
                        <Button w="60px" variant="light" ><IconAdjustments /></Button >
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item onClick={()=>setLocation("/")}>公告</Menu.Item>
                        <Menu.Item onClick={()=>setLocation("/")}>文章</Menu.Item>
                        <Menu.Item onClick={()=>setLocation("/login")}>预约</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </MediaQuery>
            <MediaQuery query="(min-width: 768px)" styles={{display:"none"}}>
                <Button variant="gradient" w="60px" onClick={()=>setLocation("/login")} gradient={{ from: 'indigo', to: 'cyan' }}>Login</Button>
            </MediaQuery>

        </NavigationRoot>
    );
};

export default Navigation;
