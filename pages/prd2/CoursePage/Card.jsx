import React from 'react';
import styled from "styled-components";
import Rating from "../../../components/PaymentPg/Rating";

const Card = () => {
  return (
    <Box>
        <div style={{margin: "1rem"}} >
      <Bg
        style={{
          background: "url(/images/CourseCard.svg) no-repeat center ",
          width: "285px",
          height: "150px",
          color: "white",
          position: "relative",
          borderRadius: "10px"
        }}
      >
        <Head/>
      </Bg>
      <BgTitle1>Gate XE Thermodynamics</BgTitle1>
            <h4
              style={{
                fontSize: "14px",
                margin:"auto",
                padding: "10px 5px 5px 0px",
                color: "#5F5F5F",
              }}
            >
              1.2k enrolled
            </h4>
      <Content1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <CourseRate>
            <h4
              style={{
                fontSize: "18px",
                margin:"auto",
                padding: "5px",
                color: "#E59819",
              }}
            >
              4
            </h4>
            <Rating value="4" color ="#E59819" />
            <h4
              style={{
                fontSize: "12px",
                margin:"auto",
                padding: "5px",
                color: "#5F5F5F",
              }}
            >
              ( 12340 )
            </h4>
          </CourseRate>
          <Button1 >View Package</Button1>
        </div>
      </Content1></div>
    </Box>
  )
}

const Box = styled.div`
width: 320px;
background: #FFFFFF;
border: 1px solid #B1B1B1;
box-sizing: border-box;
border-radius: 12px;
margin: 1rem;
&:hover{
  opacity:0.9;
  cursor: pointer;
}
`

const Bg = styled.div`
  width: 100%;
  height: 150px;
  //background: url("/images/card-bg.svg") no-repeat center;
  color: white;
  position: relative;
`;
const Head = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;
const Button1 = styled.button`
display: block;
color:white;
background: #13AE7E;
border-radius: 8px;
padding: 8px 24px;
line-height: 1.5rem;
font-weight: 600;
cursor: pointer;
transition: opacity 0.3s ease-in-out;
&:hover {
  opacity: 0.9;
}
`;
const BgTitle1 = styled.div`
  font-size: 20px;
  font-weight: 600;
  //text-align:center;
  background-color: white;
  color:#0B6E4F;
  padding-top: 10px;
//padding-left: 10px;
  border-radius: 4px 4px 0px 0px;
`;





const CourseRate = styled.div`
  display: flex;
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  width: 100%;
  margin-bottom: 10px;
`;

const Content1 = styled.div`
  //display: grid;
  //grid-template-columns: 1fr 1fr;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px 20px 18px 0px;
  background-color: white;
  font-size: 15px;
  font-weight: 400;
`;


export default Card; 