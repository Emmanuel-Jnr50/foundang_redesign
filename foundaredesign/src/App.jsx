import React from 'react'
import "./index.css"
import Navbar from './components/NavBar'
import stars from './assets/stars.svg'
import blackgirl from './assets/black-girl-smiling.png'
import stargraphic from './assets/star-graphic.svg'
import halfcircle from './assets/half-circle.svg'
import aboutimg from './assets/istockphoto-1367430634-612x612.jpg'
import wavyline from './assets/wavy-line2.svg'
import blackwoman1 from './assets/photo-1649029629492-4320c8f51d2f 2.png'
import blackwoman2 from './assets/photo-1763256377899-5111c4469089 2.png'
import blackman1 from './assets/african-man-standing-arms-crossed-urban-street-wearing-purple-shirt-crossbody-strap-african-man-standing-arms-461843977 2.png'
import blackman2 from './assets/african-american-man-standing-plaza-checking-phone-brown-strap-bag-wearing-purple-tee-person-outdoor-urban-canopy-bokeh-461936818 1.png'
import quote from './assets/quote-right-svgrepo-com.svg'
import star from './assets/star.svg'
import profile1 from './assets/christopher-campbell-rDEOVtE7vOs-unsplash 2.png'
import profile2 from './assets/premium_photo-1723921246192-bc10ec4630ec 1.png'
import profile3 from './assets/photo-1534528741775-53994a69daeb 1.png'
// import ImageCarousel from './components/ImageCarousel'

const App = () => {
  return (
    <div>
      <Navbar />

      <Hero />

      <About />

      <Services />

      <WhyUs />

      <Testimonials />
    </div>
  )
}

const Hero = () => {
  return (
    <div className='hero bg-purple flex overflow-hidden relative rounded-b-[100px]'>

      <div className='flex justify-between w-full max-w-[1565px] mx-auto relative'>
        <div className="hero-text w-[50%] relative bottom-[-20%]">
          <h1 className='text-white font-sora text-[80px] tracking-[-3.5px] font-semibold mb-8.5 leading-25'>The Media House Every Startup Needs</h1>
          <p className='font-poppins text-[24px] text-white mb-14.5 w-[90%]'>From concept to momentum, Founda helps visionary founders launch boldly and grow strategically.</p>

          <button className='flex items-center gap-2.5 bg-white text-purple py-4.5 px-6 rounded-2xl font-poppins font-medium text-[18px] transition-all duration-300 hover:shadow-hover hover:-translate-y-0.5'><img src={stars} alt="" /> Let's Launch Together</button> 

          {/* <ImageCarousel /> */}
        </div>

        {/* <div className="hero-img relative w-[50%] h-[805px]"> */}
          <img src={blackgirl} alt="" className='absolute z-40 left-[780px] h-[955px] bottom-[-55px]' />
          <img src={stargraphic} alt="" className='absolute left-[842px] bottom-[655px] w-[105px]'/>
          <img src={stargraphic} alt="" className='absolute -right-0 bottom-115 w-[115px]' />
          <img src={halfcircle} alt="" className='absolute bottom-[-10px] -right-12 h-[445px]' />
        {/* </div> */}

      </div>

    </div>
  )
}

const About = () => {
  return (
    <div className='flex relative py-50'>

      <div className='flex justify-between w-full max-w-[1565px] mx-auto relative items-center'>
        <div className="">
          <span className='font-poppins text-orange text-xl font-medium'>ABOUT FOUNDA</span>
          <h3 className='font-sora text-[35px] tracking-[-1.5px] font-semibold w-182.5 dark mb-15 mt-6 leading-12.5'>We don't just build campaigns — we create clarity, structure, and media presence for founders who want to stand out. Whether you're pre-launch, mid-launch, or scaling up, we've got your back.</h3>
          <button className='flex items-center gap-2.5 bg-purple text-white py-4.5 px-6 rounded-2xl font-poppins font-medium text-[18px] transition-all duration-300 hover:shadow-hover hover:-translate-y-0.5'><img src={stars} alt="" /> Let's Launch Together</button>
        </div>

        <div className="h-152 w-170.5 rounded-[50px] overflow-hidden">
          <img src={stargraphic} alt="" className='absolute left-10 -top-15 w-16.25' />
          <img src={stargraphic} alt="" className='absolute bottom-0 left-155 w-21.25' />
          <img src={stargraphic} alt="" className='absolute -right-22 -top-20 w-46.25' />
          <img src={aboutimg} alt="" className='object-cover w-full h-full relative' />
        </div>
      </div>

    </div>
  )
}
const Services = () => {
  return (
    <div className='flex relative py-50 bg-orange-light h-[1020px] rounded-[100px]'>

      <img src={wavyline} alt="" className='w-full absolute bottom-15'/>

      <div className='flex flex-col w-full max-w-[1565px] mx-auto relative'>
        <div className='flex items-center'>
          <div>
            <h2 className='text-[60px] text-orange tracking-[-1.5px] font-sora font-semibold mb-3'>Solutions We Offer.</h2>
            <p className='font-poppins text-[24px] text-dark/70 w-[55%] leading-9'>We're not just designers or strategists — we're co-builders. Think of us as your creative growth team on speed dial.</p>
          </div>
          <button className='flex items-center gap-2.5 bg-purple text-white py-4.5 px-6 rounded-2xl font-poppins font-medium text-[18px] transition-all duration-300 hover:shadow-hover hover:-translate-y-0.5 w-69 -mt-25'><img src={stars} alt="" />Explore Our Services</button>
        </div>

        <div className="cards flex gap-12.25 flex-2/6 mt-25">

          <div className="card h-105 bg-white px-7.5 py-10 rounded-[50px] relative">
            <span className='text-[85px] tracking-[-3.5px] text-orange/15 font-sora font-semibold absolute right-13 top-5.5'>01</span>
            <h4 className='text-[30px] tracking-[-1px] font-sora text-purple font-semibold mb-2.5 relative top-43'>Pre-Launch Brilliance</h4>
            <p className='font-poppins text-[20px] text-dark/70 w-[90%] leading-9 relative top-43'>Define your brand, message & launch roadmap with strategic clarity and creative direction.</p>
          </div>

          <div className="card h-105 bg-white px-7.5 py-10 rounded-[50px] relative">
            <span className='text-[85px] tracking-[-3.5px] text-orange/15 font-sora font-semibold absolute right-13 top-5.5'>02</span>
            <h4 className='text-[30px] tracking-[-1px] font-sora text-purple font-semibold mb-2.5 relative top-43'>Launch Strategy</h4>
            <p className='font-poppins text-[20px] text-dark/70 w-[90%] leading-9 relative top-43'>Create momentum with high-impact media assets and strategic campaigns that capture attention.</p>
          </div>

          <div className="card h-105 bg-white px-7.5 py-10 rounded-[50px] relative">
            <span className='text-[85px] tracking-[-3.5px] text-orange/15 font-sora font-semibold absolute right-13 top-5.5'>03</span>
            <h4 className='text-[30px] tracking-[-1px] font-sora text-purple font-semibold mb-2.5 relative top-43'>Post Launch Growth</h4>
            <p className='font-poppins text-[20px] text-dark/70 w-[90%] leading-9 relative top-43'>Scale through content, campaigns & clarity that keep your momentum building long after launch.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

const WhyUs = () => {
  return (
    <div className='flex relative my-50 rounded-[100px]'>


      <div className='flex flex-col w-full max-w-[1565px] mx-auto relative'>
        <div className='flex items-center'>
          <div>
            <span className='font-poppins text-orange text-xl font-medium'>WHY FOUNDA?</span>
            <h2 className='text-[60px] text-purple tracking-[-1.5px] font-sora font-semibold mb-3 mt-5'>What Makes Us Different.</h2>
            <p className='font-poppins text-[24px] text-dark/70 w-[55%] leading-9'>We're not just designers or strategists — we're co-builders. Think of us as your creative growth team on speed dial.</p>
          </div>
          <button className='flex items-center gap-2.5 bg-purple text-white py-4.5 px-6 rounded-2xl font-poppins font-medium text-[18px] transition-all duration-300 hover:shadow-hover hover:-translate-y-0.5 w-69 -mt-10'><img src={stars} alt="" />Explore Our Services</button>
        </div>

        <div className="cards flex gap-12.25 shrink-0 overflow-x-scroll mt-25 snap-x snap-mandatory scrollbar-none">

          <div className="card snap-center shrink-0 h-146.25 px-7.5 py-10 rounded-[50px] relative w-110 overflow-hidden">
            <img src={blackwoman1} alt="" className='w-full h-full object-cover absolute top-0 left-0' />
            <span className='absolute bottom-0 left-0 h-[65%] w-full bg-linear-to-b from-[#00000001] to-[#300A4C]'></span>
            
            <h4 className='text-[30px] tracking-[-1px] font-sora text-orange font-semibold mb-2.5 relative top-94'>We think like Founders.</h4>
            <p className='font-poppins text-[20px] text-white w-full leading-8.5 relative top-93'>We understand the startup journey and the challenges you face.</p>
          </div>

          <div className="card snap-center shrink-0 h-146.25 px-7.5 py-10 rounded-[50px] relative w-110 overflow-hidden">
            <img src={blackman1} alt="" className='w-full h-full object-cover absolute top-0 left-0' />
            <span className='absolute bottom-0 left-0 h-[65%] w-full bg-linear-to-b from-[#00000001] to-[#300A4C]'></span>
            
            <h4 className='text-[30px] tracking-[-1px] font-sora text-orange font-semibold mb-2.5 relative top-94'>We move with strategy.</h4>
            <p className='font-poppins text-[20px] text-white w-full leading-8.5 relative top-93'>Every design, campaign, and asset is backed by strategic thinking.</p>
          </div>

          <div className="card snap-center shrink-0 h-146.25 px-7.5 py-10 rounded-[50px] relative w-110 overflow-hidden">
            <img src={blackwoman2} alt="" className='w-full h-full object-cover absolute top-0 left-0' />
            <span className='absolute bottom-0 left-0 h-[65%] w-full bg-linear-to-b from-[#00000001] to-[#300A4C]'></span>
            
            <h4 className='text-[30px] tracking-[-1px] font-sora text-orange font-semibold mb-2.5 relative top-94'>We create with clarity..</h4>
            <p className='font-poppins text-[20px] text-white w-full leading-8.5 relative top-93'>No fluff, just great communication that resonates with your audience.</p>
          </div>

          <div className="card snap-center shrink-0 h-146.25 px-7.5 py-10 rounded-[50px] relative w-110 overflow-hidden">
            <img src={blackman2} alt="" className='w-full h-full object-cover absolute top-0 left-0' />
            <span className='absolute bottom-0 left-0 h-[65%] w-full bg-linear-to-b from-[#00000001] to-[#300A4C]'></span>
            
            <h4 className='text-[30px] tracking-[-1px] font-sora text-orange font-semibold mb-2.5 relative top-94'>We grow with you.</h4>
            <p className='font-poppins text-[20px] text-white w-full leading-8.5 relative top-93'>Our partnership goes beyond launch to support your scaling journey.</p>
          </div>

        </div>
      </div>

    </div>
  )
}

const Testimonials = () => {
  return (
    <div className='flex relative py-50 bg-purple-light h-[1020px] rounded-[100px]'>

      <div className='flex flex-col w-full max-w-[1565px] mx-auto relative'>
        <div className='flex items-center'>
          <div>
            <h2 className='text-[60px] text-purple tracking-[-1.5px] font-sora font-semibold mb-3'>Solutions We Offer.</h2>
            <p className='font-poppins text-[24px] text-dark/70 w-[55%] leading-9'>We're not just designers or strategists — we're co-builders. Think of us as your creative growth team on speed dial.</p>
          </div>
          <button className='flex items-center gap-2.5 bg-purple text-white py-4.5 px-6 rounded-2xl font-poppins font-medium text-[18px] transition-all duration-300 hover:shadow-hover hover:-translate-y-0.5 w-69 -mt-25'><img src={stars} alt="" />Explore Our Services</button>
        </div>

        <div className="cards flex gap-12.25 flex-2/6 mt-25">

          <div className="card h-105 bg-white px-7.5 py-10 rounded-[50px] relative">
            <span className='absolute right-10 top-8.5'><img src={quote} alt="" className='w-24' /></span>
            <span className='flex gap-2 items-center relative top-15 mb-7'>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </span>
            <p className='font-poppins text-[20px] text-dark/70 w-[100%] pr-5 relative top-15 border-b border-purple/25 pb-7.5 leading-8'>Working with Founda was the best decision we made before launching. Their clarity and creativity gave us the push we needed.</p>

            <div className="info relative top-20 left-50 flex items-center gap-5">
              <img src={profile1} alt="" />
              <span>
                <h4 className='font-sora text-[22px] text-orange tracking-[-0.8px] font-semibold'>Lisa Mónet</h4>
                <p className='font-poppins text-dark opacity-70 text-[16px]'>Startup Founder</p>
              </span>
            </div>
          </div>

          <div className="card h-105 bg-white px-7.5 py-10 rounded-[50px] relative">
            <span className='absolute right-10 top-8.5'><img src={quote} alt="" className='w-24' /></span>
            <span className='flex gap-2 items-center relative top-15 mb-7'>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </span>
            <p className='font-poppins text-[20px] text-dark/70 w-[100%] pr-5 relative top-15 border-b border-purple/25 pb-7.5 leading-8'>Working with Founda was the best decision we made before launching. Their clarity and creativity gave us the push we needed.</p>

            <div className="info relative top-20 left-50 flex items-center gap-5">
              <img src={profile2} alt="" />
              <span>
                <h4 className='font-sora text-[22px] text-orange tracking-[-0.8px] font-semibold'>Pablo Sulu</h4>
                <p className='font-poppins text-dark opacity-70 text-[16px]'>Startup Founder</p>
              </span>
            </div>
          </div>

          <div className="card h-105 bg-white px-7.5 py-10 rounded-[50px] relative">
            <span className='absolute right-10 top-8.5'><img src={quote} alt="" className='w-24' /></span>
            <span className='flex gap-2 items-center relative top-15 mb-7'>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </span>
            <p className='font-poppins text-[20px] text-dark/70 w-[100%] pr-5 relative top-15 border-b border-purple/25 pb-7.5 leading-8'>Working with Founda was the best decision we made before launching. Their clarity and creativity gave us the push we needed.</p>

            <div className="info relative top-20 left-50 flex items-center gap-5">
              <img src={profile3} alt="" />
              <span>
                <h4 className='font-sora text-[22px] text-orange tracking-[-0.8px] font-semibold'>Ella Myrhh</h4>
                <p className='font-poppins text-dark opacity-70 text-[16px]'>Startup Founder</p>
              </span>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}


export default App

