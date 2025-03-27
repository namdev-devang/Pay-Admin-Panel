import AffiliateStore from "../pages/AffiliateStore";
import GiftCards from "../pages/GiftCards";
import Home from "../pages/Home";
import IPAddress from "../pages/IPAddress";
import Login from "../pages/Login";
import KycRequest from "../pages/ManageUser/KycRequest";
import NewKycRequest from "../pages/ManageUser/NewKycRequest";
import SubCategory from "../pages/ManageUser/SubCategory";
import UserAddform from "../pages/ManageUser/UserAddform";
import UserList from "../pages/ManageUser/UserList";
import WithdrawRequest from "../pages/ManageUser/WithdrawRequest";
import AffilliateBanners from "../pages/master/AffilliateBanners";
import Banners from "../pages/master/Banners";
import MasterServices from "../pages/master/MasterServices";
import Otps from "../pages/master/Otp";
import Nortification from "../pages/Nortification";
import RefoundRequest from "../pages/RefoundRequest";
import BBPSReports from "../pages/Report/BBPSReports";
import DthRecharge from "../pages/Report/DthRecharge";
import MobileRechargeData from "../pages/Report/MobileRechargeData";
import Setting from "../pages/Setting";
import AdminTransaction from "../pages/transaction/AdminTransaction";
import Transaction from "../pages/transaction/Transaction";
import CreditWallets from "../pages/wallet/wallets/CreditWallets";
import DebitWallets from "../pages/wallet/wallets/DebitWallets";

const AllRoutes = [
  {
    name: "Login",
    path: "/",
    private: false,
    element: <Login />,
  },

  {
    name: "Home",
    path: "/home",
    private: true,
    element: <Home />,
  },

  {
    name: "Master-Services",
    path: "/master-services",
    private: true,
    element: <MasterServices />,
  },

  {
    name: "Master-Banners",
    path: "/master-banners",
    private: true,
    element: <Banners />,
  },

  {
    name: "Master-Affilliate-Banners",
    path: "/master-affilliate-banners",
    private: true,
    element: <AffilliateBanners />,
  },

  {
    name: "Master-Otps",
    path: "/master-otps",
    private: true,
    element: <Otps />,
  },

  {
    name: "Users-List",
    path: "/users-list",
    private: true,
    element: <UserList />,
  },

  {
    name: "Users-Add-form",
    path: "/users-addform",
    private: true,
    element: <UserAddform />,
  },

  {
    name: "Users-List-Kyc-Request",
    path: "/user-list-kyc-request",
    private: true,
    element: <KycRequest />,
  },

  {
    name: "Users-List-New-Kyc-Request",
    path: "/user-list-new-kyc-request",
    private: true,
    element: <NewKycRequest />,
  },

  {
    name: "Users-List-Withdraw-Request",
    path: "/user-list-withdraw-request",
    private: true,
    element: <WithdrawRequest />,
  },

  {
    name: "Users-List-Sub-Category",
    path: "/user-list-sub-category",
    private: true,
    element: <SubCategory />,
  },

  {
    name: "Mobile-Recharge",
    path: "/mobile-recharge",
    private: true,
    element: <MobileRechargeData />,
  },

  {
    name: "Bbps-Reports",
    path: "/bbps-reports",
    private: true,
    element: <BBPSReports />,
  },

  {
    name: "Dth-Recharge",
    path: "/dth-recharge",
    private: true,
    element: <DthRecharge />,
  },

  {
    name: "Refound-Request",
    path: "/refound-request",
    private: true,
    element: <RefoundRequest />,
  },

  {
    name: "Transaction",
    path: "/transaction",
    private: true,
    element: <Transaction />,
  },

  {
    name: "Admin-Transaction",
    path: "/admin-transaction",
    private: true,
    element: <AdminTransaction />,
  },

  {
    name: "Nortification",
    path: "/nortification",
    private: true,
    element: <Nortification />,
  },

  {
    name: "Affiliate-Store",
    path: "/affiliate-store",
    private: true,
    element: <AffiliateStore />,
  },

  {
    name: "Ip-Address",
    path: "/ip-address",
    private: true,
    element: <IPAddress />,
  },

  {
    name: "Gift-Cards",
    path: "/gift-cards",
    private: true,
    element: <GiftCards />,
  },

  {
    name: "Setting",
    path: "/setting",
    private: true,
    element: <Setting />,
  },

  {
    name: "/wallet/credit/",
    path: "/wallet/credit/",
    private: true,
    element: <CreditWallets />,
  },

  {
    name: "Debit",
    path: "debit",
    private: true,
    element: <DebitWallets />,
  },

  {
    name: "Gift-card",
    path: "gift-card",
    private: true,
    element: <GiftCards />,
  },
];

export default AllRoutes;
