import { useTranslation } from "react-i18next";

import Box from "./box";
import Container from "./Container";

function OurServices() {
  const { t } = useTranslation();
  const services = [
    {
      title: "Tax Preparation",
      details: "Efficient and accurate tax filing to maximize your return.",
    },
    {
      title: "Bookkeeping",
      details:
        "Monthly reconciliation, financial reporting, and expense tracking.",
    },
    {
      title: "Financial Planning",
      details: "Strategic advice to help you grow and protect your wealth.",
    },
  ];

  const renderServices = services.map((service) => {
    return <Box key={service.title} service={service} />;
  });
  return (
    <Container>
      <p className="font-bold text-[25px]">{t("Our Services")}</p>
      <div className="flex flex-row gap-[170px] mt-7">{renderServices}</div>
    </Container>
  );
}
export default OurServices;
