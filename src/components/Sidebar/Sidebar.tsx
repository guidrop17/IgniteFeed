import { PencilLine } from "phosphor-react"

import styles from "./Sidebar.module.css";
import profile from "../../assets/foto.jpeg"
import { Avatar } from "../Avatar/Avatar";


export const Sidebar = () => {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src={profile} 
                alt="profile" 
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/guidrop17.png"/>

                <strong>Guilherme Araujo</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
    
}