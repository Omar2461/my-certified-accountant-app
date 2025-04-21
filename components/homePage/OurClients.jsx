import { useTranslation } from "react-i18next";
import Box from "../Box";
import Container from "../Container";


function OurClients() {
  const { t } = useTranslation();

  const data = [
    {
      title: "- Jane D.",
      details: "Saved me thousands in taxes. Highly recommend",
    },
    {
      title: "- Mark T.",
      details: "Professional,reliable,and knowledgeable",
    },
  ];

  const renderData = data.map((client) => {
    return <Box key={client.title} data={client} />;
  });
  return (
    <Container classNames={"pt-[170px]"}>
      <p className="font-bold text-[25px]">{t("What Our Clients Say")}</p>
      <div className="flex gap-[470px] mt-7">{renderData}</div>
    </Container>
  );
}
export default OurClients;
