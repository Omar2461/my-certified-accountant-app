import { useTranslation } from "react-i18next";
import Container from "./Container";

function AboutOffice() {
  const { t } = useTranslation();

  return (
    <Container classNames={"bg-[#ecf0f1]"}>
      <p className="text-[25px] font-bold mb-2">
        {t("Professional Accounting Services You Can Trust")}
      </p>
      <p>
        {t("Certified, reliable, and tailored to meet your business needs.")}
      </p>
    </Container>
  );
}

export default AboutOffice;
