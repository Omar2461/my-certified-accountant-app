import { useTranslation } from "react-i18next";

function Box({ data }) {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center shadow-xl w-[300px] h-[8.5rem] rounded-lg">
      <div className="text-center p-3">
        <p className="font-semibold text-[20px]">{t(data.title)}</p>
        <p className="mt-3">{t(data.details)}</p>
      </div>
    </div>
  );
}
export default Box;
