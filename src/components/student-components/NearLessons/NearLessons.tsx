import styles from "./styles.module.scss"

export default function NearLessons () {
    return (
        <div className={styles.lessons_wrapper}>
            <p className={styles.lessons_title}>Ближайшие уроки</p>
            <ul className={styles.lessons_list}>

            </ul>

            <button type="button" className={styles.lessons_button}>Button</button>
        </div>
    )
}