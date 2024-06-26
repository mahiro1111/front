import React from 'react';
import { GiLoveSong } from "react-icons/gi";
import { PiRankingFill } from "react-icons/pi";
import { PiListHeartLight } from "react-icons/pi";
import { GoStarFill } from "react-icons/go";
import { BsMusicPlayerFill } from "react-icons/bs"

export const SidebarData=[
    {
        title:"歌手検索",
        icon:<GiLoveSong/>,
        link:"/Ainote"
    },
    {
        title:"掲示板",
        icon:<PiListHeartLight/>,
        link:"/keiziban"
    },
    {
        title:"ランキング",
        icon:<PiRankingFill/>,
        link:"/rankingu"
    },
    {
        title:"あなたのお気に入り",
        icon:<GoStarFill/>,
        link:"/okiniiri"
    },
    {
        title:"ライブ情報",
        icon:<BsMusicPlayerFill/>,
        link: "/Live"
        
    }
];