import { Circle } from "../../components/Circle/Circle"
import { MainBlock } from "../../components/MainBlock/MainBlock"
import { RepBlock } from "../../components/RepBlock/RepBlock"
import { Partners } from "../../components/Partners/Partners"
import { AboutUs } from "../../components/AboutUs/AboutUs"
export const HomePage = () => {
  return (
    <div>
        <MainBlock/>
        <Circle/>
        <RepBlock/>
        <AboutUs/>
        <Partners/>
    </div>
  )
}
