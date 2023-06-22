

import "./contact.css"

const Contact = () => {

const DoCsss=()=>{
document.getElementById('myWeb').style.transform="translateY(-150px)"
document.getElementById('myWeb').style.color="yellow"
document.getElementById('img').style.scale="1.2"
document.getElementById('Blk').style.background="black"
document.getElementById('Blk').style.opacity="0.8"


  
}


const RemoverCss=()=>{
  document.getElementById('myWeb').style.transform="translateY(0px)"
  document.getElementById('Blk').style.opacity="0.4"
  document.getElementById('myWeb').style.color="white"
  document.getElementById('img').style.scale="1"
}


const enter=()=>{
document.getElementById("myflo").style.transform="translateY(-200px)"
document.getElementById("myflo").style.color="blue"
document.getElementById("blacklayer").style.opacity="1"
document.getElementById("img2").style.scale="1.1"
}


const leave=()=>{
  document.getElementById("myflo").style.transform="translateY(0px)"
  document.getElementById("myflo").style.color="yellow" 
  document.getElementById("blacklayer").style.opacity="0.8"
  document.getElementById("img2").style.scale="1"
}


  return (
    <>
    <div className="mycontact">
 <div onMouseEnter={DoCsss}  onMouseLeave={RemoverCss} className="card">
 <div id="Blk" className="black"></div>
 <div id="img" className="img">

 </div>
 
  
  <span id="myWeb">Web Development</span>
 </div>
    </div>


    <div className="mychoice">
      <div onMouseEnter={enter} onMouseLeave={leave} className="card1">
        <div id="blacklayer">
      <div id="img2" className="img2">
      <span id="myflo" className="myflo">Beautifull flowers</span>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Contact