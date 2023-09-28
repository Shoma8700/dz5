import {useState} from "react";

export default function PrototypeForm() {
    const [form, setForm] = useState({
        key1: 'Barbara',
        key2: 'Hepworth',
        key3: 'bhepworth@react.com',
        key4: 'love cats'
    })

    function getChamge (event){
        setForm({...form, key1: event.target.value})
    }


    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: "#09cee0", width: "250px", padding: "20px", minHeight: "200px"}}>
            Form:g
           <label>
               Firstname:
               <input value={form.key1} onChange={getChamge}/>
           </label>
           <label>
               Lastname:
               <input value={form.key2} onChange={e => {
                   setForm({...form, key2: e.target.value})
               }}/>
           </label>
           <label>
               email:
               <input value={form.key3} onChange={e => {
                   setForm({...form, key3: e.target.value})
               }}/>
           </label>

           <label>
               favorite enimal:
               <input value={form.key4} onChange={e => {
                   setForm({...form, key4: e.target.value})
               }}/>
           </label>
           <p>
               {form.key1} <br/> {form.key2} <br/> {form.key3} <br/> {form.key4}
           </p>
        </div>
    )
}
