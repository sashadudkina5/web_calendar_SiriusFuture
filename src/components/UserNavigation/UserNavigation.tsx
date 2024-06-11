import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss"
import fullLogo from "../../images/full_logo.png"
import home from  "../../images/nav-icons/home.svg"
import calendar from "../../images/nav-icons/calendar.svg"
import money from "../../images/nav-icons/money.svg"
import cup from "../../images/nav-icons/cup.svg"
import puzzle  from "../../images/nav-icons/puzzle.svg"
import folder from "../../images/nav-icons/folder-open.svg"
import support from "../../images/nav-icons/support.svg"
import settings  from "../../images/nav-icons/settings.svg"
import question   from "../../images/nav-icons/question.svg"
import GitOffer from "../GitOffer/GitOffer";


export default function UserNavigation() {
  return (
    <section className={styles.side_section}>

        <img className={styles.logo} src={fullLogo} alt="Логотип Sirius Future." />
    <nav className={styles.navigation_wrapper}>
      <ul className={styles.navigation_list}>
        <li className={styles.navigation_item}>
          <NavLink
            to="/user"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img src={home} alt="Главная." className={styles.navigation_icon}/>
            Главная
          </NavLink>
        </li>

        <li className={styles.navigation_item}>
          <NavLink
            to="/user/schedule"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img src={calendar} alt="Расписание." className={styles.navigation_icon}/>
            Расписание
          </NavLink>
        </li>

        <li className={styles.navigation_item}>
          <NavLink
            to="#"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img src={money} alt="Оплата." className={styles.navigation_icon}/>
            Оплата
          </NavLink>
        </li>

        <li className={styles.navigation_item}>
          <NavLink
            to="#"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img src={cup} alt="Достижения." className={styles.navigation_icon}/>
            Достижения
          </NavLink>
        </li>

         <li className={styles.navigation_item}>
          <NavLink
            to="#"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img src={puzzle} alt="Тренажеры." className={styles.navigation_icon}/>
            Тренажеры
          </NavLink>
        </li>

         <li className={styles.navigation_item}>
          <NavLink
            to="#"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img src={folder} alt="Библиотека." className={styles.navigation_icon}/>
            Библиотека
          </NavLink>
        </li>

         <li className={styles.navigation_item}>
          <NavLink
            to="#"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img src={support} alt="Проверка связи." className={styles.navigation_icon}/>
            Проверка связи
          </NavLink>
        </li>

         <li className={styles.navigation_item}>
          <NavLink
            to="#"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img src={settings} alt="Настройки." className={styles.navigation_icon}/>
            Настройки
          </NavLink>
        </li>

         <li className={styles.navigation_item}>
          <NavLink
            to="#"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img src={question} alt="Вопросы." className={styles.navigation_icon}/>
            Вопросы
          </NavLink>
        </li>
      </ul>
    </nav>
    <GitOffer />

    </section>
            )
 
}
