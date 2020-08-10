import React from 'react'
import Helmet from 'react-helmet'

function Iframely() {
  useEffect(() => {
    if (window.iframely) {
      window.iframely.load()
    }
    // ツイート内容を埋め込みたい場合
    if (window.twttr) {
      window.twttr.widgets.load()
    }
    // その他必要に応じて追加
  }, [])
  return (
    <Helmet>
      <script async src="https://cdn.iframe.ly/embed.js" />
      <script async src="https://platform.twitter.com/widgets.js" /> {/* ツイート内容を埋め込みたい場合 */}
      {/* その他必要に応じて追加 */}
    </Helmet>
  )
}
export default Iframely