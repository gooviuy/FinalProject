import {Fragment} from 'react'

const Music = () => {
  return (
<Fragment>
  <h1>Music</h1> <br></br>
  <div>
  <h5>What is the best singer?</h5>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    El falta delgado
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    El reja
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Gucci
  </label>
</div>
</div>
<div>
  <h5>What is the best style?</h5>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Plena
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Reggaeton
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Rock
  </label>
</div>
</div>
</Fragment>
  )
}

export default Music

