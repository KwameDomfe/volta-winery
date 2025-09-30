import { FaNutritionix } from 'react-icons/fa';
import { PiWineFill } from 'react-icons/pi';
import { GiManualJuicer } from 'react-icons/gi';
import { BiSolidBookContent } from 'react-icons/bi';

import facebook from '../svgs/socialMedia/facebook.svg'
import twitter from '../svgs/socialMedia/twitter.svg'
import linkedin from '../svgs/socialMedia/linkedin.svg'
import youtube from '../svgs/socialMedia/youtube.svg'


export const menuItems = [
    {
        id : 1,
        name: 'wines',
        url: "wines",
        icon: <PiWineFill />,
        subMenu:[
            {
                name: 'Cocoa Wines',
                icon: <FaNutritionix />,
                url: "wines/cocoa-wine", 
            },
            {
                name: 'Cashew wines',
                icon: <PiWineFill />,
                url: "wines/cashew-wine", 
            },
            {
                name: 'Coffee wines',
                icon: <PiWineFill />,
                url: "wines/coffee-wine", 
            },
        ]    
    },
    {
        id : 2,
        name: 'fruit juices',
        url: "fruit-juices",
        icon: <GiManualJuicer />,
        subMenu:[
            {
                name: 'cocoa fruits juice',
                icon: <PiWineFill />,
                url: "fruit-juices/cocoa", 
            },
            {
                name: 'cashew fruits juice',
                icon: <PiWineFill />,
                url: "fruit-juices/cashew", 
            },
            {
                name: 'coffee fruits juice',
                icon: <PiWineFill />,
                url: "fruit-juices/coffee", 
            },
        ]    
    },
    {
        id : 3,
        name: 'nuts',
        url: "nuts",
        icon: <FaNutritionix />,
        subMenu:[
            {
                name: 'cocoa nuts',
                icon: <PiWineFill />,
                url: "nuts", 
            },
            {
                name: 'cashew nuts',
                icon: <PiWineFill />,
                url: "nuts", 
            },
            {
                name: 'coffee-nuts',
                icon: <PiWineFill />,
                url: "nuts", 
        
            },
        ]    
    },
    {
        id : 4,
        name: 'infodesk',
        url: "infodesk",
        icon: <BiSolidBookContent />,
        subMenu:[
            {
                name: 'shops',
                icon: <PiWineFill />,
                url: "/infodesk/shops", 
            },
            {
                name: 'contacts',
                icon: <PiWineFill />,
                url: "/infodesk/contacts", 
            },
            {
                name: 'location',
                icon: <PiWineFill />,
                url: "/infodesk/location", 
            },
            {
                name: 'research and development',
                icon: <PiWineFill />,
                url: "/infodesk/research-and-development", 
            },
            {
                name: 'management',
                icon: <PiWineFill />,
                url: "/infodesk/management", 
            },
            {
                name: 'history',
                icon: <PiWineFill />,
                url: "/infodesk/history", 
            },
            {
                name: 'workshops',
                icon: <PiWineFill />,
                url: "/infodesk/workshops", 
            },
            {
                name: 'other-topics',
                icon: <PiWineFill />,
                url: "/infodesk/other-topics", 
            },
            {
                name: 'Mission Vision and Values',
                icon: <PiWineFill />,
                url: "/infodesk/mission-vision-and-values", 
            },
        ]    
    },
]

export const socialNav= [
    {
        id : 1,
        name:'facebook',
        icon : facebook,
        title: 'Follow Volta Wine on Facebook',
        url : 'https://web.facebook.com/voltawinery',
        active: true
    },
    {
        id : 2,
        name:'twiiter',
        icon : twitter,
        title: 'Follow Volta Wine on Twitter',
        url : '/',
        active: false
    },
    {
        id : 3,
        name:'linkedin',
        icon : linkedin,
        title: 'Connect with Volta Wine on LinkedIn',
        url : '/',
        active: true
    },
    {
        id : 4,
        name:'youtube',
        icon : youtube,
        title: 'Follow Volta Wine on youTube',
        url : '/',
        active: false
    },
]

