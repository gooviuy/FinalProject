import {Fragment} from 'react'

const Sports = () => {
    return (
        <Fragment>
        <h1>Sports</h1> <br></br>
        <div>
        <h5>What is the best player?</h5>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1"/>
        <label class="form-check-label" for="flexRadioDefault1">
          Cristiano Ronaldo
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1"/>
        <label class="form-check-label" for="flexRadioDefault1">
         Messi
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1"/>
        <label class="form-check-label" for="flexRadioDefault1">
          Suarez
        </label>
      </div>
      </div>
      <div>
        <h5>What is the best stadium?</h5>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2"/>
        <label class="form-check-label" for="flexRadioDefault1">
          Estadio Centenario
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2"/>
        <label class="form-check-label" for="flexRadioDefault1">
          Anfield
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2"/>
        <label class="form-check-label" for="flexRadioDefault1">
          La Bombonera
        </label>
      </div>
      </div>
      </Fragment>
    )
}

export default Sports
