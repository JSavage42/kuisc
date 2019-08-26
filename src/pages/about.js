import React from "react"
import Layout from "../components/layout"
import Purpose from "../components/Purpose"
import Officers from "../components/Officers"
import Coc from "../components/Coc"

export default () => (
  <Layout>
    <h2>About</h2>
    <Purpose />
    <Officers />
    <Coc />
  </Layout>
)
