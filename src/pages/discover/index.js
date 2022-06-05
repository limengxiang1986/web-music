import React, { memo, useEffect } from 'react';

import request from '@/service/request';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import {discoverMenu} from "@/common/local-data";

import {
  DiscoverWrapper,
  TopMenu
} from './style';

const index = memo(function HYDiscover(props){

  useEffect(()=>{
    request({
      url:"/getdata"
    }).then(res =>{
      console.log(res);
    })
  },[]);
  const {route} = props;                   //route会从props中传过来
  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap-v1'>
          {
            discoverMenu.map((item, index)=>{
              return (
                <div className='item' key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes) }
        
    </DiscoverWrapper>
  )
});

export default index;
