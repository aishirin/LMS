import style from "./Teachers.module.css"
import Techer_block from "./components/techer_block"
const Teachers = () => {

 const  objectuser =  [
  {user: "jon" , age : 2},
  {user: "jon" , age : 2},
  {user: "jon" , age : 2},
  {user: "jon" , age : 2},

 ]
  
 

  return (
    <div className={style.conteiner}>{objectuser.map((data) => (
      <Techer_block  user={data.user} age={data.age}/>
    ) )}

    </div>
  )
}

export default Teachers