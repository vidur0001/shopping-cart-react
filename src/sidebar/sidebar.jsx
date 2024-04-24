import React from 'react'
import "./sidebar.css"
// import { Sidebar } from 'phosphor-react'
export const Sidebar = () => {
  return( 
    <>
    <h1 className='welcome'>WELCOME To Our Store, Contact us at 8570840245</h1>
  <div className="sides">
        <h1>Hello, vidursharma5555</h1>
        <h2>Trending</h2>
        <button type='menu'>Best sellers</button>
        <button type='menu'>New Releases</button>
        <button type='menu'>Mobiles, Computers</button>
        <button type='menu'>TV, Appliances, Electronics</button>
        <button type='menu'>Men's Fashion</button>
        <button type='menu'>Women's fashion</button>

        <h2>Digital Content and Devices</h2>
        <button type='menu'>Echo & Alexa</button>
        <button type='menu'>Fire Tv</button>
        <button type='menu'>Kindle E-Readers & eBooks</button>
        <button type='menu'>Audible Audiobooks</button>
        <button type='menu'>Speakers</button>
        <button type='menu'>Fiber</button>

        <h2>Programs & Features</h2>
        <button type='menu'>Homesset pay</button>
        <button type='menu'>Gift CArds & Mobile Reacharge</button>
        <button type='menu'>Homessent Launchpad</button>
        <button type='menu'>Handloom and Handicrafts</button>
        <button type='menu'>Cultural</button>

        <h2>Grocery</h2>
        <button type='menu'>Kitchen Essentials</button>
        <button type='menu'>Vegetables</button>
        <button type='menu'>Dyning Sets</button>
        <button type='menu'>TATA Leaf Tea</button>
        <button type='menu'>Choco Fills</button>
</div>
    </>
  );
}
