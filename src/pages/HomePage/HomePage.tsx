import { Circle } from "../../components/Circle/Circle"
import { MainBlock } from "../../components/MainBlock/MainBlock"
import RepBlock from "../../components/RepBlock/RepBlock"
import css from "./HomePage.module.css"
export const HomePage = () => {
  return (
    <div>
        <MainBlock/>
        <Circle/>
        <RepBlock/>
        <div className={css.block}>
          <h1 className={css.title}>
            О нас  
          </h1>
          <p className={css.text}>LevelUP - инновационная образовательная платформа, предоставляющая онлайн ресурсы для изучения фиизики и математики. Наша миссия - повышение уровня образования в Кыргызстане путем обеспечения школьников с 8- по 11- классы дополнительным обучением в сфере STEM. Здесь студенты получат новые знания и навыки через интерактивные курсы, а также поддержку и возможность общения с лидерами-студентами, репетиторами и координатором.</p>
        </div>
    </div>
  )
}
