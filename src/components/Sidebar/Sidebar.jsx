import React, { useState } from 'react'
import { assets } from "../../assets/assets"
import "../Sidebar/sidebar.css"
const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    return (
        <div className='sidebar min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9]'>
{/*-------------------------------------------------- */}
            <div className='top'>
                <img onClick={()=>{
                    setExtended(!extended)
                }} className='menu block ml-2.5 cursor-pointer' src={assets.menu_icon} alt="" />
                <div className='new-chat '>
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? 
            <div className='recent flex flex-col'>
            <p className='recent-title '>Recent</p>
            <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>What is react ...</p>
            </div>
        </div>  : null  
            }
            </div>
{/* ------------------------------------------------------------- */}
            <div className='bottom'>
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                   {extended ? <p>Activity</p> : null } 
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Setting</p> : null }
                </div>
            </div>
        </div>
    )
}

export default Sidebar