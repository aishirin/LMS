import css from "./Circle.module.css"
import math from "../../assets/math.png"
import physics from "../../assets/physics.png"
import books from "../../assets/books.png"
export const Circle = () => {
  return (
    <div className={css.block}>
        <h3 className={css.title}>Предметы</h3>
        <div className={css.imgBlock}>
            <img className={css.img1} src={math} alt="math" />
            <img className={css.img2} src={physics} alt="math" />
            <img className={css.img3} src={books} alt="math" />
        </div>
    </div>
  )
}