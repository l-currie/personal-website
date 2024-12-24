import Image from "next/image";
import Header from "@/components/Header/Header";
import styles from '../../src/app/page.module.css'
import Overview from "@/components/Overview/Overview";
import Experience from "@/components/Experience/Experience";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <Overview />
      <Experience/>
    </div>
  );
}
