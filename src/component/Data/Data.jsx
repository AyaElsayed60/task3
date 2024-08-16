import './Data.css'
import MyPhoto from '../../assets/images/avatar-jessica.jpg'


function Data (){

    return(

<div>

<img src={MyPhoto} id='MyPhoto'></img>


<h1> Jessica Ranndall</h1>
<h5>London,UnitedKingdom</h5>
<label>"Front-end developer and avid reader.</label><br /><br />

    <button>Github</button><br />
    <button>Frontend Mentor</button><br />
    <button>Linkedin</button><br />
    <button>Twitter</button><br />
    <button>Instagram</button><br />


</div>
    )
}

export default Data