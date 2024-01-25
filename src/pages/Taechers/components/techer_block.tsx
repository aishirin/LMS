import style from './blok.module.css'

      type Props = {
        user: string;
        age: number;
      };
      
 const Techer_block: React.FC<Props> = ({ user, age }) => {
        return (
          <div className={style.conteiner}>
            <div className={style.GridItem}>
              hello
            </div>
          </div>
        );
      };


export default Techer_block