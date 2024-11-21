import styles from "./styles.module.css";
import CartIcon from "../../assets/icons/ic-basket.svg";
import EyeIcon from "../../assets/icons/ic-more.svg";
import StarIcon from "../../assets/icons/ic-star.svg";
import HeartIcon from "../../assets/icons/ic-heart-rounded.png";
import BorderStar from "../../assets/icons/ic-border-star.svg";
import HeroImg from "./heroImg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <HeroImg />
      <div className={styles.heroContent}>
        <p className={styles.title}>Leather Couch</p>
        <div className={styles.reviews}>
          <div className={styles.star}>
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={BorderStar} alt="" />
          </div>
          <p className={styles.reviewText}>10 Reviews</p>
        </div>
        <p className={styles.price}>$1,139.33</p>
        <p className={styles.status}>
          Availability : <span className={styles.statusText}>In Stock</span>
        </p>
        <p className={styles.desc}>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
        <div className={styles.colors}>
          <div className={`${styles.color} ${styles.colorBlue}`}></div>
          <div className={`${styles.color} ${styles.colorGreen}`}></div>
          <div className={`${styles.color} ${styles.colorOrange}`}></div>
          <div className={`${styles.color} ${styles.colorDarkBlue}`}></div>
        </div>
        <div className="action flex items-center justify-start flex-row gap-[10px] h-[44px] w-[298px] mb-[24px]">
          <button className={styles.selectBtn}>Select Option</button>

          <button>
            <img src={HeartIcon} alt="" />
          </button>
          <button>
            <img src={CartIcon} alt="" />
          </button>
          <button>
            <img src={EyeIcon} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
