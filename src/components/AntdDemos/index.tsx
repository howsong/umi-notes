import React from 'react'
import styled from 'styled-components'
import { Card } from 'antd'
const items = [
  { id:'0001', title: '1、动态表单', describe: 'form动态增减表单' }
]
const AntdDemosWrapper = styled.div`
  padding: 24px;
`
const AntdDemos: React.FC = () => {
  return (
    <AntdDemosWrapper>
      {items.map(item=>{
        return (
          <Card key={item.id} title={`${item.title}`}></Card>
        )
      })}
    </AntdDemosWrapper>
  )
}

export default AntdDemos
