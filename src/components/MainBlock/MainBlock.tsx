import css from "./MainBlock.module.css"
import boy from "../../assets/boy.png"
export const MainBlock = () => {
  return (
    <div className={css.block}>
        <h2 className={css.title}>"Чему бы ты не учился, ты учишься для себя"</h2>
        <h2 className={css.title1}>-Петроний</h2>
        <img src={boy} alt="boy learning" className={css.boy} />
    </div>
  )
}
