import React from "react"
import { Link } from "gatsby"
import ApexCharts from "react-apexcharts";
import styled from "styled-components"

import Layout from "../components/layout"
import RadialChart from "../components/chart"
import SEO from "../components/seo"
import 'react-bootstrap';

const MainContainer = styled.div`
  background-color:#343A44;
  min-height:100vh;
`
const graphContainer = styled.div`
  top:50px
`


const IndexPage = () => (
  <MainContainer>

  <Layout>

    <SEO title="Home" />
   <graphContainer>
    <RadialChart width="900"  />
    </graphContainer>
  </Layout>
  </MainContainer>

)

export default IndexPage
