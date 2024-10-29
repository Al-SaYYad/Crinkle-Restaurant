import { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import cookies from "js-cookie";

const Languages = () => {
  const { t } = useTranslation();

  const lng = cookies.get("i18next") || "en";

  useEffect(() => {
    window.document.dir = i18n.dir();
  }, [lng]);

  return (
    <Fragment>
      <div>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button onClick={() => i18n.changeLanguage("ar")}>AR</button>
      </div>
      <div>
        <h1>{t("Welcome to React")}</h1>
      </div>
    </Fragment>
  );
};

export default Languages;
