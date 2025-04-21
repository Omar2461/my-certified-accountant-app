import Container from "../Container";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const { t } = useTranslation();
  return (
    <Container classNames={"pt-[250px] "}>
      <div>
        <p className="font-bold text-[25px]">{t("ContactUs")}</p>
        <div className="p-10">
          <input
            className="border w-[100%] mb-4 p-2"
            placeholder="Your Name"
          ></input>
          <input
            className="border w-[100%] mb-4 p-2"
            placeholder="Your Email"
          ></input>
          <textarea
            className="border w-[100%] mb-4 p-2"
            placeholder="Your Message"
          ></textarea>
        </div>
      </div>
    </Container>
  );
}
export default ContactUs;
