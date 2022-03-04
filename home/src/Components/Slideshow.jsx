import React from 'react'
import $ from 'jquery';
import baby from '../babyKeem.mp4'

$(document).ready(function() {
    $('#music').on('mousedown',function () {
    $('.entire-content').fadeOut(3000)
    $('.shadow').fadeOut(3000)
    $('.Music-Div').fadeIn(5000)
    $('.Music-Div').css('display', 'flex')
    $('.btn').fadeIn(7000)
    $('.btn').css('display', 'block')
  })
  $('#achivements').on('mousedown',function () {
    $('.entire-content').fadeOut(3000)
    $('.shadow').fadeOut(3000)
    $('.Ach-Div').fadeIn(5000)
    $('.Ach-Div').css('display', 'flex')
    $('.btn').fadeIn(7000)
    $('.btn').css('display', 'block')
  })
  $('#jobs').on('mousedown',function () {
    $('.entire-content').fadeOut(3000)
    $('.entire-content').fadeOut(3000)
    $('.shadow').fadeOut(3000)
    $('.Jobs-Div').fadeIn(5000)
    $('.Jobs-Div').css('display', 'flex')
    $('.btn').fadeIn(7000)
    $('.btn').css('display', 'block')
  })
  $('#websites').on('mousedown',function () {
    $('.entire-content').fadeOut(3000)
    $('.shadow').fadeOut(3000)
    $('.Website-Div').fadeIn(5000)
    $('.Website-Div').css('display', 'flex')
    $('.btn').fadeIn(7000)
    $('.btn').css('display', 'block')
  })
  $('#TV').on('mousedown',function () {
    $('.entire-content').fadeOut(3000)
    $('.shadow').fadeOut(3000)
    $('.tv-Div').fadeIn(5000)
    $('.tv-Div').css('display', 'flex')
    $('.btn').fadeIn(7000)
    $('.btn').css('display', 'block')
  })
  $('.btn').on('mousedown',function(){
    $('.Music-Div').fadeOut(3000)
    $('.tv-Div').fadeOut(3000)
    $('.Ach-Div').fadeOut(3000)
    $('.Website-Div').fadeOut(3000)
    $('.Jobs-Div').fadeOut(3000)
    $('.btn').fadeOut(3000)
    $('.entire-content').fadeIn(5000)
    $('.shadow').fadeIn(5000)
  })
})

const Slideshow = () => {
  return (
    <div>
        <section id="slideshow">
                <h1></h1>
                <div className="entire-content">
                    <div className="content-carrousel">
                        <figure id="music" className="shadow"><img  className="IMAGE_MOVIE" src="https://i.pinimg.com/originals/6c/1a/6a/6c1a6a91a4118031f9cc16c25552a9f9.png"/></figure>
                        <figure className="shadow"><img className="IMAGE_MOVIE" src="https://amakris12.github.io/newportfolio/images/profile.JPG"/></figure>
                        <figure id="achivements" className="shadow"><img  className="IMAGE_MOVIE" src="https://wallpapercave.com/wp/wp3833109.jpg"/></figure>
                        <figure className="shadow"><img className="IMAGE_MOVIE" src="https://pbs.twimg.com/media/DjLGhNpU0AACcUM?format=jpg&name=medium"/></figure>
                        <figure id="jobs" className="shadow"><img  className="IMAGE_MOVIE" src="https://images.unsplash.com/photo-1593672715438-d88a70629abe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"/></figure>
                        <figure className="shadow"><img className="IMAGE_MOVIE" src="https://eloquent-babbage-15108c.netlify.app/static/media/Halloween.09d3e595.JPG"/></figure>
                        <figure id="websites" className="shadow"><img  className="IMAGE_MOVIE" src="https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/></figure>
                        <figure id="TV" className="shadow"><img  className="IMAGE_MOVIE" src="https://i.pinimg.com/564x/3d/4b/56/3d4b56aa88ea62008257c089843820c8.jpg"/></figure>
                        <figure className="shadow"><img className="IMAGE_MOVIE" src="https://eloquent-babbage-15108c.netlify.app/static/media/Colts.458ec4bf.JPG"/></figure>
                    </div>
                </div>
                <div className="Music-Div">
                  <div className="card-music">
                    <img className="card-music-img" src="https://consequence.net/wp-content/uploads/2019/11/Kanye-West-My-Beautiful-Dark-Twisted-Fantasy-1.jpg?quality=80&w=1031&h=580&crop=1&resize=1031%2C580&strip" alt="" />
                    <h3 className="card-music-header">Kanye West</h3>
                    <p className="card-music-info">Runaway</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://a4-images.myspacecdn.com/images04/4/3e0e3beac4ae4ad6b5f79787c70596c7/300x300.jpg" alt="" />
                    <h3 className="card-music-header">A Boogie</h3>
                    <p className="card-music-info">Jungle</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://m.media-amazon.com/images/I/718khrgr5bL._SL1400_.jpg" alt="" />
                    <h3 className="card-music-header">Kanye West</h3>
                    <p className="card-music-info">Hey Mama</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/6/61/FrankOceanNovacane.jpg/220px-FrankOceanNovacane.jpg" alt="" />
                    <h3 className="card-music-header">Frank Ocean</h3>
                    <p className="card-music-info">Novacane</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://upload.wikimedia.org/wikipedia/en/5/51/Cbgimme.jpg" alt="" />
                    <h3 className="card-music-header">Chris Brown</h3>
                    <p className="card-music-info">Gimme That</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i0.wp.com/kotilyrics.com/wp-content/uploads/2021/09/Baby-Keem-%E2%80%93-16-Lyrics.jpg?resize=400%2C400" alt="" />
                    <h3 className="card-music-header">Baby Keem</h3>
                    <p className="card-music-info">16</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://media.pitchfork.com/photos/610d324e1caf2647247f81c3/16:9/w_3200,h_1800,c_limit/Kanye-West.jpg" alt="" />
                    <h3 className="card-music-header">Kanye West</h3>
                    <p className="card-music-info">Moon</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://s.mxmcdn.net/images-storage/albums2/0/7/8/7/8/4/49487870_800_800.jpg " alt="" />
                    <h3 className="card-music-header">Ian Dior</h3>
                    <p className="card-music-info">Pretty Girls</p>
                  </div>
                </div>
                <div className="Ach-Div">
                <div className="card-music">
                    <img className="card-music-img" src="https://www.azfoodhandlers.com/Images/food-handlers-card.jpg" alt="" />
                    <h3 className="card-music-header">Food Handlers Liscences</h3>
                    <p className="card-music-info">2019</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://www.dvusd.org//cms/lib/AZ01901092/Centricity/Domain/43/Eagle%20SDOHS.png" alt="" />
                    <h3 className="card-music-header">High School Diploma</h3>
                    <p className="card-music-info">2021</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://www.mycomputercareer.edu/wp-content/uploads/2020/04/How-to-Get-a-Microsoft-Technology-Associate-MTA-Networking-Certificate.png" alt="" />
                    <h3 className="card-music-header">MTA Certificate</h3>
                    <p className="card-music-info">2021</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg" alt="" />
                    <h3 className="card-music-header">Skills in HTML</h3>
                    <p className="card-music-info">2020</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://cdn-media-1.freecodecamp.org/images/1*H0IBb9kvGI3eIuL1sGmWug.jpeg" alt="" />
                    <h3 className="card-music-header">Skills in CSS/Scss</h3>
                    <p className="card-music-info">2021</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
                    <h3 className="card-music-header">Skills in JS/Jquery</h3>
                    <p className="card-music-info">2021</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png" alt="" />
                    <h3 className="card-music-header">Skills in React</h3>
                    <p className="card-music-info">2021</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://bachasoftware.com/wp-content/uploads/elementor/thumbs/nodejslogo-ovfzvrnm7u9pk6tpkts9r094e1d1uh7si7evpflqpc.png" alt="" />
                    <h3 className="card-music-header">Skills in Node</h3>
                    <p className="card-music-info">2022</p>
                  </div>
                </div>
                <div className="Jobs-Div">
                <div className="card-music">
                    <img className="card-music-img" src="https://blog.cryptoflies.com/wp-content/uploads/2022/02/panera-bread-metaverse.png" alt="" />
                    <h3 className="card-music-header">Panera Bread</h3>
                    <p className="card-music-info">Dish-Washer</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://a.mktgcdn.com/p/h5g7yYugM3xWKB-qISXJ_k209Dxgxv0fzfG8cRvOw2Y/1080x1080.jpg" alt="" />
                    <h3 className="card-music-header">Tillys</h3>
                    <p className="card-music-info">Sales Associate</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://www.siouxfalls.business/wp-content/uploads/2017/11/bww.jpeg" alt="" />
                    <h3 className="card-music-header">Buffalo Wild Wings</h3>
                    <p className="card-music-info">Cashier/Host/Bussboy</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://a.mktgcdn.com/p/PjtmAeTMWprwhLupUAQ4beBe505NhvrC2nm_sWszGYg/933x933.png" alt="" />
                    <h3 className="card-music-header">Fat Freddies</h3>
                    <p className="card-music-info">Server</p>
                  </div>
                </div>
                <div className="Website-Div">
                  <a href="https://suspicious-pike-55fa2c.netlify.app/">
                  <div className="card-music">
                    <img className="card-music-img" src="data:image/jpeg;base64,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" alt="" />
                    <h3 className="card-music-header">Bat Family</h3>
                    <p className="card-music-info">React</p>
                  </div></a>
                 <a href="https://amakris12.github.io/Group-bootstrap/">
                 <div className="card-music">
                    <img className="card-music-img" src="https://upload.wikimedia.org/wikipedia/commons/1/14/Wii-console.jpg" alt="" />
                    <h3 className="card-music-header">The Wii</h3>
                    <p className="card-music-info">HTML CSS & JS</p>
                  </div>
                  </a>
                  <a href="https://princetonjeffries.github.io/mclarenCarSite/index.html">
                  <div className="card-music">
                    <img className="card-music-img" src="https://mclaren.scene7.com/is/image/mclaren/720S-Coupe_hero:crop-16x9?wid=1980&hei=1114" alt="" />
                    <h3 className="card-music-header">Mclaren </h3>
                    <p className="card-music-info">HTML & CSS</p>
                  </div>
                  </a>
                 <a href="https://amakris12.github.io/weather/#latergate">
                 <div className="card-music">
                    <img className="card-music-img" src="https://media.nationalgeographic.org/assets/photos/000/290/29094.jpg" alt="" />
                    <h3 className="card-music-header">Weather Page</h3>
                    <p className="card-music-info">HTML CSS JS</p>
                  </div>
                  </a>
                  <a href="https://hardcore-swanson-5478ef.netlify.app/">
                  <div className="card-music">
                    <img className="card-music-img" src="https://library.sportingnews.com/2021-08/nfl-logo-080521-getty-ftr_1l4ashi1tahe91uiujfrmf291p.jpg" alt="" />
                    <h3 className="card-music-header">NFL Prediction</h3>
                    <p className="card-music-info">React</p>
                  </div></a>
                 <a href="https://eloquent-babbage-15108c.netlify.app/">
                 <div className="card-music">
                    <img className="card-music-img" src="https://png.pngtree.com/background/20210711/original/pngtree-original-beautiful-purple-star-dreamy-star-river-background-picture-image_1143190.jpg" alt="" />
                    <h3 className="card-music-header">Portfolio</h3>
                    <p className="card-music-info">React</p>
                  </div>
                  </a>
                  <a href="https://tender-beaver-d56329.netlify.app/">
                  <div className="card-music">
                    <img className="card-music-img" src="https://blog.logomyway.com/wp-content/uploads/2017/01/nba-logo-1.jpg" alt="" />
                    <h3 className="card-music-header">NBA</h3>
                    <p className="card-music-info">React</p>
                  </div></a>
                 <a href="https://amakris03.herokuapp.com/">
                 <div className="card-music">
                    <img className="card-music-img" src="https://cdn.sanity.io/images/c1chvb1i/production/a5b49173012bd00b040b8f905b1fa531338bbaf5-1100x745.jpg" alt="" />
                    <h3 className="card-music-header">Shoe Store API</h3>
                    <p className="card-music-info">Node.js</p>
                  </div>
                  </a>
                </div>
                <div className="tv-Div">
                  <div className="card-music">
                    <img className="card-music-img" src="https://m.media-amazon.com/images/M/MV5BODk2NjAyOWMtM2FjZC00MjZhLTkxMjQtZTM3NjJlYTE5MDdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" alt="" />
                    <h3 className="card-music-header">Peacemaker</h3>
                    <p className="card-music-info">2022</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://m.media-amazon.com/images/M/MV5BODEwZjEzMjAtNjQxMy00Yjc4LWFlMDAtYjhjZTAxNDU3OTg3XkEyXkFqcGdeQXVyOTM2NTM4MjA@._V1_.jpg" alt="" />
                    <h3 className="card-music-header">Family Guy</h3>
                    <p className="card-music-info">1999</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iTXvFT6NrtN0/v0/-1x-1.jpg" alt="" />
                    <h3 className="card-music-header">South Park</h3>
                    <p className="card-music-info">1997</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_FMjpg_UX1000_.jpg" alt="" />
                    <h3 className="card-music-header">Batman: The Animated Series</h3>
                    <p className="card-music-info">1992</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://flxt.tmsimg.com/assets/p8308217_b_v13_aa.jpg" alt="" />
                    <h3 className="card-music-header">Blue Mountain State</h3>
                    <p className="card-music-info">2010</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg" alt="" />
                    <h3 className="card-music-header">Friends</h3>
                    <p className="card-music-info">1994</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://m.media-amazon.com/images/M/MV5BN2E5ZjM1MzItYzFjZC00YzYyLWFmZjgtZTVhZGMzMWUwNDcyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="" />
                    <h3 className="card-music-header">Teen Titans</h3>
                    <p className="card-music-info">2003</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://m.media-amazon.com/images/M/MV5BMTI3MjI1NTAtYjI2ZS00OTVlLTk0OTQtNTc5M2U3NmNmYjMzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_QL75_UX190_CR0,12,190,281_.jpg" alt="" />
                    <h3 className="card-music-header">Justice League Unlimited</h3>
                    <p className="card-music-info">2004</p>
                  </div>
                </div>
                <button className="btn">Back to Slideshow</button>
                
            </section>
            <video className="baby-Keem" src={baby} autoPlay controls></video>
    </div>
  )
}

export default Slideshow