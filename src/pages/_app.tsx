import "../styles/global.scss";
import styles from "../styles/app.module.scss";
import { Header } from "../components/Header";
import { Player } from "./../components/Player/index";
import { PlayerContextProvider } from "../components/contexts/PlayerContexts";

function MyApp({ Component, pageProps }) {
  
    return (
      <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />;
        </main>
        <Player />
      </div>;
      </PlayerContextProvider>
    ) 
}

export default MyApp;
