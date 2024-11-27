import React from "react";
import Layout from "./layout";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/service/Services";
import MobileRecharges from "./pages/service/MobileRecharges";
import BBPS_Services from "./pages/service/BBPS-Services";
import OperatorMain from "./pages/service/Operator/OperatorMain";
import MasterServices from "./pages/master/MasterServices";
import UserList from "./pages/ManageUser/UserList";
import MobileRechargeData from "./pages/Report/MobileRechargeData";
import BBPSReports from "./pages/Report/BBPSReports";
// import PrimePoint from "./pages/wallet/prime_point/PrimePoint";
import Credit from "./pages/wallet/prime_point/Credit";
import Debit from "./pages/wallet/prime_point/Debit";
import CreditWallets from "./pages/wallet/wallets/CreditWallets";
import DebitWallets from "./pages/wallet/wallets/DebitWallets";
import DthRecharge from "./pages/Report/DthRecharge";
import Nortification from "./pages/Nortification";
import Electricity from "./pages/service/BBPS/Electricity/Electricity";
import LPG_Gas from "./pages/service/BBPS/LPG_Gas";
import AdaniElectricity from "./pages/service/BBPS/Electricity/AdaniElectricity";
import Banners from "./pages/master/Banners";
import AffilliateBanners from "./pages/master/AffilliateBanners";
// import Otps from "./pages/master/Otps";
import KycRequest from "./pages/ManageUser/KycRequest";
import SubCategory from "./pages/ManageUser/SubCategory";
import NewKycRequest from "./pages/ManageUser/NewKycRequest";
import WithdrawRequest from "./pages/ManageUser/WithdrawRequest";
import RefoundRequest from "./pages/RefoundRequest";
import Transaction from "./pages/transaction/Transaction";
import AdminTransaction from "./pages/transaction/AdminTransaction";
import AffiliateStore from "./pages/AffiliateStore";
import IPAddress from "./pages/IPAddress";
import GiftCards from "./pages/GiftCards";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import AllRoutes from "./routes/AllRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

const App = () => {
  return (
    <>
      <Routes>
        {AllRoutes.map((item) => {
          return (
            <Route
              key={item.name}
              element={item.private ? <PrivateRoutes /> : <PublicRoutes />}
            >
              <Route
                name={item.name}
                exact={true}
                path={item.path}
                element={item.element}
              />
            </Route>
          );
        })}

        <Route path="/wallet/credit/" element={<CreditWallets />}>
      <Route path="credit" element={<Credit />} />
          <Route path="debit" element={<DebitWallets />} />
        </Route>

        <Route path="/prime-point/credit/" element={<Credit />}>
          {/* <Route path="credit" element={<Credit />} /> */}
          <Route path="debit" element={<Debit />} />
        </Route>

        <Route path="/services/mobile-recharges/" element={<MobileRecharges />}>
          <Route path="bbps-services" element={<BBPS_Services />}>
            <Route path="electricity" element={<Electricity />}>
              <Route path="adani-electricity" element={<AdaniElectricity />} />
            </Route>
            <Route path="lpg-gas" element={<LPG_Gas />} />
          </Route>
          <Route path="operator" element={<OperatorMain />}></Route>
        </Route>
        
      </Routes>
    </>
  );
};

export default App;
