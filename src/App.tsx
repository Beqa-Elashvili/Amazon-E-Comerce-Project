import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@src/layouts/PublicLayout";
import { FormattedMessage, useIntl } from "react-intl";
import { LocaleContext } from "./providers/LocaleProvaider/LocaleContext";
import { useContext } from "react";

const Home = lazy(() => import("@src/views/Home"));
const Products = lazy(() => import("@src/views/Products"));

function App() {
  const { toggleLocale } = useContext(LocaleContext);
  const { formatMessage } = useIntl();
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </Suspense>

      {/* <div>
        <button onClick={() => toggleLocale()}>change</button>
        <FormattedMessage id="hello" defaultMessage={"hello"} />
      </div> */}
    </div>
  );
}

export default App;
