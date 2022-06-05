import HYDiscover from "@/pages/discover";
import HYRecommend from "@/pages/discover/c-pages/recommend";
import HYRanking from "@/pages/discover/c-pages/ranking";
import HYSongs from "@/pages/discover/c-pages/songs";
import HYDjradio from "@/pages/discover/c-pages/djradio";
import HYArtist from "@/pages/discover/c-pages/artist";
import HYAlbum from "@/pages/discover/c-pages/album";
import HYFriend from "@/pages/friend";
import HYMine from "@/pages/mine";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const routes = [
    {
        path: "/",
        exact:true,
        //component:HYDiscover
        render:()=>(
            <Redirect to="/discover" />
        )
    },
    {
        path: "/discover",
        component:HYDiscover,
        routes:[
            {
                path:"/discover",
                exact:true,
                render:()=>(
                    <Redirect to={"/discover/album"} />
                )
            },
            {
                path:"/discover/recommend",
                component:HYRecommend
            },
            {
                path:"/discover/ranking",
                component:HYRanking
            },
            {
                path:"/discover/artist",
                component:HYArtist
            },
            {
                path:"/discover/album",
                component:HYAlbum
            },
            {
                path:"/discover/djradio",
                component:HYDjradio
            },
            {
                path:"/discover/songs",
                component:HYSongs
            }
        ]
    },
    {
        path: "/mine",
        component:HYMine
    },
    {
        path: "/friend",
        component:HYFriend 
    }
];
export default routes;
