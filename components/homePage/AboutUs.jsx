import { useTranslation } from "react-i18next";

import Container from "../Container";

function AboutUs() {
  const { t } = useTranslation();
  return (
    <Container>
      <p className="text-[25px] font-bold mb-2">{t("aboutUs")}</p>
      <p>
        {t(
          "We are certified accountants with over 10 years of experience helpingindividuals and businesses manage their finances effectively"
        )}
      </p>
    </Container>
  );
}
export default AboutUs;
