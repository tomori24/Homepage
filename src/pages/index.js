import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Contacts from "../components/contacts"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Image />
    <h1>tomori</h1>
    <h4>Composer, HumanBeatboxer and DJ</h4>
    <Contacts />
    <hr />
      <div display="block">
      <h3>Works</h3>
        {/* Youtubeの縦横比は560:315 */}
        <iframe className="youtube"
          src="https://www.youtube.com/embed/pC_7lrh6mGs" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen="true">
        </iframe>
        <iframe className="youtube"
          src="https://www.youtube.com/embed/u1KIeSVmu_I" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen="true">
        </iframe>
        <iframe className="soundcloud" 
          scrolling="no" frameborder="no" allow="autoplay" 
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1027182112&color=%235ad6ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        </iframe> 
        {/* <div class="iframely-embed">
          <div class="iframely-responsive">
            <a href="https://audiostock.jp/artists/29537/audios?audio_category=0" data-iframely-url="//cdn.iframe.ly/zT8c4Qp">
            </a>
          </div>
        </div> */}
      </div>
  </Layout>
)

export default IndexPage
