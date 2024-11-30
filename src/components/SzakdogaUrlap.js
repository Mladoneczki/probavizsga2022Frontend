import { useContext, useState } from "react"
import { ApiContext } from "../context/ApiContext"

function SzakdogaUrlap() {
    const {postdata}=useContext(ApiContext)
      const [adat, setAdat]=useState({
          szakdoga_nev:'',
          tagokneve:'',
          githublink:'',
          oldallink:'',
          
      })
      function kuldesKezeles(event){
         
          event.preventDefault() 
          console.log("submit")
          postdata('/szakdogas', adat)
  
      }
      function valtozasKezeles(event){
        const slista={...adat}
                  slista[event.target.id]=event.target.value
                  setAdat({...slista})
  
      }
    return (
      <div>
        <form onSubmit={kuldesKezeles}>
          <div className="mb-3">
            <label htmlFor="szakdoga_nev" className="form-label">
              Szakdoga címe:
            </label>
            <input
              type="text"
              className="form_control"
              id="szakdoga_nev"
              aria-describedby="szakdoga_nevHelp"
              value={adat.szakdoga_nev}
              onChange={valtozasKezeles}
            />
           
          </div>
          <div className="mb-3">
            <label htmlFor="tagokneve" className="form-label">
              Tagok:
            </label>
            <input
              type="text"
              className="form_control"
              id="tagokneve"
              aria-describedby="tagokneveHelp"
              value={adat.tagokneve}
              onChange={valtozasKezeles}
            />
            
           
          </div>
          <div className="mb-3">
            <label htmlFor="githublink" className="form-label">
              Github link:
            </label>
            <input
              type="text"
              className="form_control"
              id="githublink"
              aria-describedby="githublinkHelp"
              value={adat.githublink}
              onChange={valtozasKezeles}
            />
           
          </div>
          <div className="mb-3">
            <label htmlFor="oldallink" className="form-label">
              Oldal link:
            </label>
            <input
              type="text"
              className="form_control"
              id="oldallink"
              aria-describedby="oldallink"
              value={adat.oldallink}
              onChange={valtozasKezeles}
            />
           
          </div>
  
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
  
  export default SzakdogaUrlap;
  