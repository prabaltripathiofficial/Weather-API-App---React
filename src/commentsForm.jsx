import { useState } from "react"

export default function CommentsForm(){
let [formdata, setformdata] = useState({
    username :"",
    remark : "",
    rating : 2.5,
})


function handleFormChange(event){
    setformdata((prevValue)=>{
        return {...prevValue, [event.target.name]: event.target.value}
    })
}


function handleSubmission(event)
{
    event.preventDefault()
    console.log(formdata);
    setformdata({
        username :"",
        remark : "",
        rating : 2.5,
    })
}

    return (
<>
<form onSubmit={handleSubmission}>
<label htmlFor="username">Username</label>
<input type="text" id="username" name="username" onChange={handleFormChange} value={formdata.username}/>
<br /><br /><br />
<label htmlFor="remark">Remark</label>
<input type="text" id="remark" name="remark" onChange={handleFormChange} value={formdata.remark} />
<br /><br /><br />
<label htmlFor="rating">Rating</label>
<input type="range" id="rating" name="rating" onChange={handleFormChange} min="0" max="5" value={formdata.rating}/>
<br /><br /><br />
<button>Submit</button>
</form>
</>
    )
}