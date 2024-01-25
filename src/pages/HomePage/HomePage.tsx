import { Circle } from "../../components/Circle/Circle"
import { MainBlock } from "../../components/MainBlock/MainBlock"
import { RepBlock } from "../../components/RepBlock/RepBlock"
import { Partners } from "../../components/Partners/Partners"
export const HomePage = () => {
  return (
    <div>
        <MainBlock/>
        <Circle/>
        <RepBlock/>
        <Partners/>
    </div>
  )
}
