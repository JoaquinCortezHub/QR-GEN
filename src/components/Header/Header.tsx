import styles from './header.module.css'

const Header = () => {
    return (
        <header>
            <div className={styles.headerContainer}>
            <img className={styles.logo} src="/qrcode.svg" alt="QR Code logo" />
            <h1>QR Code Generator</h1>
            </div>
        </header>
    )
};

export default Header;