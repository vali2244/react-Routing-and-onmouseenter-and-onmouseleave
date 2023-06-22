

import "./users.css"

const Users = () => {

const enter=()=>{
  document.getElementById(`para`).style.transform="translateY(-150px)"
  document.getElementById(`para`).style.color="white"
  document.getElementById(`black`).style.opacity="0.7"
  document.getElementById(`img`).style.scale="1.3"

}
const leave=()=>{
document.getElementById(`para`).style.transform="translateY(0px)"
document.getElementById(`para`).style.color="red"
document.getElementById(`black`).style.opacity="0"
document.getElementById(`img`).style.scale="1"
}


  return (
    <div className="myusers">
      <div onMouseEnter={enter} onMouseLeave={leave}  className="cards">
        <div id="img">
          <div id="black">
           
          </div>
        </div>
        <span id="para">beautifllu tree

</span>
        </div>
      </div>
        
    
  )
}

export default Users