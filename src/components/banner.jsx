import IcPhone from "../assets/icons/ic-phone.svg";
import IcMail from "../assets/icons/ic-mail.svg";
import IcSocmed from "../assets/icons/ic-socmed.svg";

export default function Banner() {
  return (
    <section className=" px-[100px] xl:px-[199px] baner pt-[19px] flex flex-row pb-[13px] w-full bg-green text-white items-center justify-start hidden lg:flex">
      <p className="phoneNumber justify-center items-center text-[12px] font-normal flex flex-row gap-[5px] mr-[15px] xl:mr-[30px]">
        <img src={IcPhone} alt="" />
        (225) 555-0118
      </p>
      <p className=" justify-center items-center text-[12px] font-normal flex flex-row gap-[5px] mr-[30px] xl:mr-[60px] ">
        <img src={IcMail} alt="" />
        michelle.rivera@example.com
      </p>
      <p className="text-[12px] xl:text-[14px] font-bold flex flex-row gap-[5px] mr-[25px] xl:mr-[50px]">Follow Us and get a chance to win 80% off</p>
      <p className=" justify-center items-center text-[12px] xl:text-[14px] font-bold flex flex-row gap-[10px] ">
        Follow Us :
        <img src={IcSocmed} alt="" />
      </p>
    </section>
  );
}
