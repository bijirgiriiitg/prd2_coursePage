import React from 'react'
import styled from "styled-components";
import Card from "./Card"

const Bottom = () => {
  return (
      <Box>
        <Heading>Your Peers also bought this</Heading>
        <Block>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Block>
      </Box>
  )
}

const Box = styled.div`
    margin-bottom: 20px;
`

const Heading = styled.h2`
width: 90%;
margin: auto;
padding: 20px;
font-weight: 600;
font-size: 35px;
line-height: 59px;
color:#0B6E4F;
`

const Block = styled.div`
    display: flex;
    flex-direction: row;
    overflow: auto;
    gap: 20px;
    width: 90%;
    margin: auto;
    ::-webkit-scrollbar {
        width: 3px;
        height: 2px;
        border-radius:8px;
      }
      ::-webkit-scrollbar-track {
        background: #ffffff;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(86.94deg, #1BBC9B 0%, #1BBC9B 0.01%, #16A086 100%);
        
      }
      
      ::-webkit-scrollbar-thumb:hover {
        opacity:50%;
      }
`

export default Bottom 