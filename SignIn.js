import FrameComponent1 from "../components/FrameComponent1";
import Content from "../components/Content";
import styles from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <section className={styles.frameParent}>
        <FrameComponent1 />
        <Content />
      </section>
      <img className={styles.notchIcon} alt="" src="/notch@2x.png" />
      <img
        className={styles.recordingIndicatorIcon}
        alt=""
        src="/recording-indicator.svg"
      />
      <footer className={styles.homeIndicator}>
        <div className={styles.homeIndicator1} />
      </footer>
    </div>
  );
};

export default SignIn;