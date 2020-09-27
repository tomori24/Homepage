import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Contacts from "../components/contacts"

const IndexPage = () => (
  <Layout>
    <SEO title="" />
    <Image />
    <h1>tomori</h1>
    <h4>Composer, HumanBeatboxer and DJ</h4>
    <p className="bio">
      主に<a href="https://www.youtube.com/channel/UCsVYnVMynZqS6V7D69LM2Zg">Youtube</a>にて既存曲のアレンジの投稿や、
      <a href="https://audiostock.jp/artists/29537/audios?audio_category=0">AudioStock</a>
      にてオリジナル曲の販売をしています。
      また、HumanBeatboxの普及活動を行っており
      <a href="https://twitter.com/bbx_taika">「ビートボックスバトル 大化の改新」</a>
      の運営など様々なイベントに携わっています。
    </p>
    <Contacts />
    <hr />
      <div display="block">
      <h3>Music</h3>
        {/* Youtubeの縦横比は560:315 */}
        <iframe className="youtube"
          src="https://www.youtube.com/embed/?list=UUsVYnVMynZqS6V7D69LM2Zg" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen="true">
        </iframe>
        <iframe className="soundcloud" 
          scrolling="no" frameborder="no" allow="autoplay" 
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1027182112&color=%235ad6ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        </iframe> 
        <h3>HumanBeatbox</h3>
          {/* Youtubeの縦横比は560:315 */}
          <iframe className="youtube"
            src="https://www.youtube.com/embed/?list=PLXsDjLEMISy0vNWwvn-bVk04MDqsbDKfN" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen="true">
        </iframe>
      </div>
  </Layout>
)

export default IndexPage
