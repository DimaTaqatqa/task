import React,{useState} from "react";
function Name(){
    const [name, setName]= useState("");
    const [isfilled, setIsFilled]= useState(false);
    const [motivated, setMotivated]= useState(false);

    function nameChanged(e) {
        setName(e.target.value);
        setIsFilled(true);
    }
    function motiviateClicked(){
        setIsFilled(false);
        setMotivated(true)
    }
    return(
        <div>
             <div>
                <label htmlFor="#name">Name</label>
                <input value={name} onChange={nameChanged} id="name" type="text"/>
                
            </div>
            { isfilled ?
             <div>Hi {name}, how are you?</div>
             : null
            }
            { motivated ?
             <div>Hey {name}, keep going</div>
             : null
            }
            
            <div>
                <button onClick={motiviateClicked}> Motivate</button>
            </div>
        </div>
       
    )
}
export default Name;