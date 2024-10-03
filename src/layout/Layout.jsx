import styles from "./Layout.module.css";

function Layout({children}) {

    return (

        <>

            <header className={styles.header}>

                <h1>Book App</h1>
                <p>The book app...</p>

            </header>

                {children}

            <footer className={styles.footer}><p> Developed by Davoud </p></footer>

        </>

    )

}

export default Layout;