import css from "./Header.module.css";
import logolms from "../../assets/logo-lms.png";
function Header() {
  return (
    <div className={css.bigblock}>
      <div className={css.block}>
      <img src={logolms} alt="logo" className={css.logo} />
          <div className={css.list}>
          <a href="#">Главная</a>
          <div className={css.dropdown}>
            <button className={css.dropbtn}>Физика</button>
            <div className={css.dropdownContent}>
              <a href="#">8 класс</a>
              <a href="#">9 класс</a>
              <a href="#">10 класс</a>
              <a href="#">11 класс</a>
            </div>
          </div>
          <div className={css.dropdown}>
            <button className={css.dropbtn}>Математика</button>
            <div className={css.dropdownContent}>
            <a href="#">8 класс</a>
              <a href="#">9 класс</a>
              <a href="#">10 класс</a>
              <a href="#">11 класс</a>
            </div>
          </div>
          <a href="#">Репетиторы</a>
          <a href="#">Учебные Материалы</a>
          <a href="#">Войти</a>
          </div>
          
          
        
    </div>
    </div>
  );
}
export default Header;
