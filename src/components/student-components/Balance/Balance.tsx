import styles from "./styles.module.scss"

export default function Balance () {
    return (
        <div className={styles.balance_wrapper}>
            <p className={styles.balance_title}>Баланс занятий</p>
            <ul className={styles.balance_list}>

            </ul>

            <button type="button" className={styles.balance_button}>Button</button>
        </div>
    )
}