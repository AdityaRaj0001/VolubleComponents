import Toggler from "./components/Toggler"
import Dropdown from "./components/Dropdown"
import Notifications from "./components/Notifications"
import Phone from "./components/Phone"
import SquishyCard from "./components/SquishyCard"
import Crazybtn,{DottedButton} from "./components/Crazybtn"


function App() {
 

  return (
    <>
      <Toggler></Toggler>
      <Dropdown/>
      <Notifications></Notifications>
      <Phone/>
      <SquishyCard/>
      <Crazybtn/>
      <DottedButton />
    </>
  )
}

export default App
