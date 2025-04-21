import Container from "../../components/Container";

function AboutPage() {
  return (
    <div>
      <Container classNames={"border h-[17rem]"}>
        <div className="text-center mt-10">
          <p className="font-bold text-[40px]">About Our Accounting Firm</p>
          <p className="text-[19px] mt-5">Certified, reliable, and tailored to meet your business needs</p>
        </div>
      </Container>
    </div>
  );
}
export default AboutPage;
