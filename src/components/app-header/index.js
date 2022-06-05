import React, { memo } from 'react';

import { headerLinks } from '@/common/local-data';

import { NavLink } from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';
import { SearchOutlined,FileSearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const index = memo(function HYAppHeader() {
  //页面代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className='sprite_01 icon'></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }
  //返回的jsx
  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <a href="#/" className='logo sprite_01'></a>
          <div className='select-list'>
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input placeholder="音乐/视频/电台/用户" className="search" prefix={<FileSearchOutlined />} />
          <div className='center'>创作者中心</div>
          <div >登录</div>
        </HeaderRight>
      </div>
      <div className='divider'>
      </div>
    </HeaderWrapper>
  )
})

export default index

