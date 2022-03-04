import React from 'react'
import $ from 'jquery'
const Slideshow = () => {
  $('#music').trigger('click',function () {
    $('.entire-content').animate({height:'0rem'})
    $('.entire-content').animate({width:'0rem'})
    $('.Musis-div').css('display', 'flex')
  })
  $('#achivements').trigger('click',function () {
    $('.entire-content').animate({height:'0rem'})
    $('.entire-content').animate({width:'0rem'})
    $('.Ach-div').css('display', 'flex')
  })
  $('#jobs').trigger('click',function () {
    $('.entire-content').animate({height:'0rem'})
    $('.entire-content').animate({width:'0rem'})
    $('.Jobs-Div').css('display', 'flex')
  })
  $('#websites').trigger('click',function () {
    $('.entire-content').animate({height:'0rem'})
    $('.entire-content').animate({width:'0rem'})
    $('.Website-Div').css('display', 'flex')
  })
  $('#TV').trigger('click',function () {
    $('.entire-content').animate({height:'0rem'})
    $('.entire-content').animate({width:'0rem'})
    $('.tv-Div').css('display', 'flex')
  })
  return (
    <div>
        <section id="slideshow">
                <h1></h1>
                <div className="entire-content">
                    <div className="content-carrousel">
                        <figure className="shadow"><img idname="music" className="IMAGE_MOVIE" src="https://i.pinimg.com/originals/6c/1a/6a/6c1a6a91a4118031f9cc16c25552a9f9.png"/></figure>
                        <figure className="shadow"><img className="IMAGE_MOVIE" src="https://amakris12.github.io/newportfolio/images/profile.JPG"/></figure>
                        <figure className="shadow"><img idname="achivements" className="IMAGE_MOVIE" src="https://wallpapercave.com/wp/wp3833109.jpg"/></figure>
                        <figure className="shadow"><img className="IMAGE_MOVIE" src="https://eloquent-babbage-15108c.netlify.app/static/media/Mirror.98553683.JPG"/></figure>
                        <figure className="shadow"><img idname="jobs" className="IMAGE_MOVIE" src="https://images.unsplash.com/photo-1593672715438-d88a70629abe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"/></figure>
                        <figure className="shadow"><img className="IMAGE_MOVIE" src="https://eloquent-babbage-15108c.netlify.app/static/media/Halloween.09d3e595.JPG"/></figure>
                        <figure className="shadow"><img idname="websites" className="IMAGE_MOVIE" src="https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/></figure>
                        <figure className="shadow"><img idname="TV" className="IMAGE_MOVIE" src="https://i.pinimg.com/564x/3d/4b/56/3d4b56aa88ea62008257c089843820c8.jpg"/></figure>
                        <figure className="shadow"><img className="IMAGE_MOVIE" src="https://eloquent-babbage-15108c.netlify.app/static/media/Colts.458ec4bf.JPG"/></figure>
                    </div>
                </div>
                <div className="Music-Div">
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Kanye West</h3>
                    <p className="card-music-info">Runaway</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">A Boogie</h3>
                    <p className="card-music-info">Jungle</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Kanye West</h3>
                    <p className="card-music-info">Hey Mama</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Frank Ocean</h3>
                    <p className="card-music-info">Novacane</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Chris Brown</h3>
                    <p className="card-music-info">Gimme That</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Baby Keem</h3>
                    <p className="card-music-info">16</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Kanye West</h3>
                    <p className="card-music-info">Moon</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Ian Dior</h3>
                    <p className="card-music-info">Pretty Girls</p>
                  </div>
                </div>
                <div className="Ach-Div">
                <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Food Handlers Liscences</h3>
                    <p className="card-music-info">2019</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">High School Diploma</h3>
                    <p className="card-music-info">2021</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">MTA Certificate</h3>
                    <p className="card-music-info">2021</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Skills in HTML</h3>
                    <p className="card-music-info">2020</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Skills in CSS/Scss</h3>
                    <p className="card-music-info">2021</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Skills in Javascript/Jquery</h3>
                    <p className="card-music-info">2021</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Skills in React</h3>
                    <p className="card-music-info">2021</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Skills in Node</h3>
                    <p className="card-music-info">2022</p>
                  </div>
                </div>
                <div className="Jobs-Div">
                <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Panera Bread</h3>
                    <p className="card-music-info">Dish-Washer</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Tillys</h3>
                    <p className="card-music-info">Sales Associate</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Buffalo Wild Wings</h3>
                    <p className="card-music-info">Cashier/Host/Bussboy</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Fat Freddies</h3>
                    <p className="card-music-info">Server</p>
                  </div>
                </div>
                <div className="Website-Div">
                  <a href="">
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Kanye West</h3>
                    <p className="card-music-info">Runaway</p>
                  </div></a>
                 <a href="">
                 <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Kanye West</h3>
                    <p className="card-music-info">Runaway</p>
                  </div>
                  </a>
                  <a href="">
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Kanye West</h3>
                    <p className="card-music-info">Runaway</p>
                  </div>
                  </a>
                 <a href="">
                 <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Kanye West</h3>
                    <p className="card-music-info">Runaway</p>
                  </div>
                  </a>
                  <a href="">
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Kanye West</h3>
                    <p className="card-music-info">Runaway</p>
                  </div></a>
                 <a href="">
                 <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Kanye West</h3>
                    <p className="card-music-info">Runaway</p>
                  </div>
                  </a>
                  <a href="">
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Kanye West</h3>
                    <p className="card-music-info">Runaway</p>
                  </div></a>
                 <a href="">
                 <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Kanye West</h3>
                    <p className="card-music-info">Runaway</p>
                  </div>
                  </a>
                </div>
                <div className="tv-Div">
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Peacemaker</h3>
                    <p className="card-music-info">2022</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Family Guy</h3>
                    <p className="card-music-info">1999</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">South Park</h3>
                    <p className="card-music-info">1997</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Batman: The Animated Series</h3>
                    <p className="card-music-info">1992</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Blue Mountain State</h3>
                    <p className="card-music-info">2010</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Friends</h3>
                    <p className="card-music-info">1994</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Teen Titans</h3>
                    <p className="card-music-info">2003</p>
                  </div>
                  <div className="card-music">
                    <img className="card-music-img" src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef" alt="" />
                    <h3 className="card-music-header">Justice League Unlimited</h3>
                    <p className="card-music-info">2004</p>
                  </div>
                </div>
            </section>
    </div>
  )
}

export default Slideshow