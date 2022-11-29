import logo from '../../assets/images/logo.png'
import styles from './styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import { IconContext } from "react-icons";

export default function Header() {

    return (<div>
        {/* <div style={location.pathname==="/home" && {color:"red"}}>
            home
        </div> */}
        <div style={{ width: "1440px", height: "192px", left: "0px", top: "0px" }}>
            <div className={styles.imgContainer}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.logo}>
                Digital Store
            </div>
            <div className={styles.search}>
                <input type="text" className={styles.inputBuscaHome} placeholder="Pesquisar produto..." />
            </div>
            <IconContext.Provider value={{ color: "rgb (102,102,102)", className: styles.icon }}>
                <div>
                    <CiSearch />
                </div>
            </IconContext.Provider>
        </div>
    </div>)
}

