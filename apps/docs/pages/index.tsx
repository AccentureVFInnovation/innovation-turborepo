//css
import 'bootstrap/dist/css/bootstrap.css'
// import { Button } from "ui";
import Landing from './landing'
//use as commonJS module
let mathOps = require('@AccentureVFInnovation/helperfunction')

export default function Docs() {
  return (
    <div>
      <h2>{mathOps.subtract(6, 3)}</h2>
      <Landing />
    </div>
  )
}
