import styles from './input.module.css'

interface InputProps {
    url: string | null;
    setUrl: (url:string) => void;
    qrcode: () => void;
}

const Input = ({ url, setUrl, qrcode }: InputProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    };

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type="text" 
                placeholder="https://your-link.com"
                value={url ?? ''}
                onChange={handleChange}
            />
            <button 
                className={styles.bttn} 
                type="submit"
                onClick={qrcode}
            >
                Generate
            </button>
        </div>
    )    
};

export default Input;