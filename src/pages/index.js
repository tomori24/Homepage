import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <SEO title="tomori homepage" />
    <Image />
    <h1>tomori</h1>
    <hr size="3px" />
    <p>
      音楽を嗜んでます<br />
      Composer, HumanBeatboxer and DJ
    </p>
    <div>
      <h2>Works</h2>
      <iframe 
        title="Recent Youtube Contents"
        width="100%" height="200" src="https://www.youtube.com/embed/?list=UUsVYnVMynZqS6V7D69LM2Zg" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true">
      </iframe>
      <iframe 
        width="100%" height="250" scrolling="no" frameborder="no" allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1027182112&color=%235ad6ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
      </iframe>   
      <iframe width="100%" height="100" scrolling="no" frameborder="no" src="https://audiostock.jp/embed?id=847197">
      </iframe> 
    </div>
  </Layout>
)

export default IndexPage
