import React, { useState } from 'react'
import '../styles/mainarea.css'
import Header from './Header'
import pizzaboy from '../assests/pizzaboy.png'
import pizzaSilce from '../assests/pizzaSilce.png'
import Product from './products/Product'
import { useSelector } from 'react-redux'
const MainArea = () => {
    const user = useSelector(state=>state.user)
    const [category,setCategory]=useState('pizza')
    
    return (
        <div className='mainarea'>
            <Header/>
            <div className="banner">
                <div className="img">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/27dbbda7-320b-488b-b8cb-6d993296f095/dex5okb-ff04dbed-783e-4af2-aec7-89cd332e1e06.png/v1/fill/w_1280,h_1300/mechanic_mario_running_while_holding_a_wrench_by_transparentjiggly64_dex5okb-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMwMCIsInBhdGgiOiJcL2ZcLzI3ZGJiZGE3LTMyMGItNDg4Yi1iOGNiLTZkOTkzMjk2ZjA5NVwvZGV4NW9rYi1mZjA0ZGJlZC03ODNlLTRhZjItYWVjNy04OWNkMzMyZTFlMDYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.35V1-LZkEmTcKqNKca4DSXHyE9KeuOiM1V-npmyoCDM" alt="" />
                </div>
                <div className="text">
                <h2>Hello {user?.user?.name}</h2>
                <p>We offer solutions for your home !</p>
                <button>Call Now!</button>
                <img className='full circle' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png" alt="" />
                <img className='small circle' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png" alt="" />
                <img className='smaller circle' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png" alt="" />
               
                <img className='half circle' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png" alt="" />
               
                
                
                </div>
               
            </div>

         {/* category area */}
         <div className='category-area'>
             <h3>Menu</h3>
            <div className="category">
              <div className={`cat-icon ${category==='pizza'&&'active'} `} onClick={()=>setCategory('pizza')}>
                  <div className="img">

                  <img src="https://cdn-icons-png.flaticon.com/512/2006/2006058.png" alt="pizza" />
                  </div>
                  <div className="text">
                   Kitchen Issues
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Burger'&&'active'} `} onClick={()=>setCategory('Burger')}>
                  <div className="img">

                  <img src="https://cdn-icons-png.flaticon.com/512/4310/4310770.png" alt="pizza" />
                  </div>
                  <div className="text">
                   Plumbing Issues
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Sandwich'&&'active'} `} onClick={()=>setCategory('Sandwich')}>
                  <div className="img">

                  <img src="https://cdn-icons-png.flaticon.com/512/6202/6202267.png" alt="pizza" />
                  </div>
                  <div className="text">
                  Vehicle Issues
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Smoothy'&&'active'} `} onClick={()=>setCategory('Smoothy')}>
                  <div className="img">

                  <img src="https://img.freepik.com/free-icon/voltmeter_318-653531.jpg" alt="pizza" />
                  </div>
                  <div className="text">
                   Electrical Issues
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Snaks'&&'active'} `} onClick={()=>setCategory('Snaks')}>
                  <div className="img">

                  <img src="https://stephensfurnitureltd.com/cdn/shop/files/Living-Room-Icon-2.png?v=1666296547&width=375" alt="pizza" />
                  </div>
                  <div className="text">
                Interior Issues
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Drink'&&'active'} `} onClick={()=>setCategory('Drink')}>
                  <div className="img">

                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Page_issue_icon_-_high.svg/1024px-Page_issue_icon_-_high.svg.png" alt="pizza" />
                  </div>
                  <div className="text">
                Other Issues
                  </div>
                  
              </div>
            </div>
            <div className="all-list">
             <Product category={category}/>
            </div>
         </div>
         

        </div>
    )
}

export default MainArea
