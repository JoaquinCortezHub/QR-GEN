import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <hr />
            <p className={styles.footer}>
                Made with React + TS by <a className={styles.name} href='https://github.com/JoaquinCortezHub' target='blank'>Joaquín Cortez</a>.
            </p>
        </footer>
    )
};

export default Footer;