import styles from "./styles.module.css";
import CartIcon from "../../assets/icons/ic-basket.svg";
import EyeIcon from "../../assets/icons/ic-more.svg";
import StarIcon from "../../assets/icons/ic-star.svg";
import BorderStar from "../../assets/icons/ic-border-star.svg";
import Img1 from "../../assets/img/img1.jpg";
import Img2 from "../../assets/img/img2.jpg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImg}>
        <img src={Img2} className={styles.mainImg} alt="" />
        <div className="flex flex-row items-center gap-[20px] justify-start">
          <button className="w-[100px] h-[75px]">
            <img src={Img1} className="w-full h-full" alt="" />
          </button>
          <button className="w-[100px] h-[75px]">
            <img src={Img2} className="w-full h-full" alt="" />
          </button>
        </div>
      </div>
      <div className={styles.heroContent}>
        <p className={styles.title}>Product Title</p>
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
            <img src={CartIcon} alt="" />
          </button>
          <button>
            <img src={EyeIcon} alt="" />
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
