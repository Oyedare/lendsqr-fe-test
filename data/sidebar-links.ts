import BriefCaseIcon from "@/assets/brief-case";
import ClipboardIcon from "@/assets/clipboard";
import CoinsIcon from "@/assets/coins";
import DecisionIcon from "@/assets/decision";
import FeesIcon from "@/assets/fees";
import GuarantorsIcon from "@/assets/guarantors";
import KarmaIcon from "@/assets/karma";
import LoanIcon from "@/assets/loan";
import LoanRequestIcon from "@/assets/loan-request";
import PreferenceIcon from "@/assets/preference";
import ReportIcon from "@/assets/reports";
import SavingProductsIcon from "@/assets/savingProducts";
import SavingsIcon from "@/assets/savings";
import ServiceAccountIcon from "@/assets/serviceAccount";
import ServicesIcon from "@/assets/services";
import Settlements from "@/assets/settlements";
import TransactionIcon from "@/assets/transaction";
import UserIcon from "@/assets/users";
import WhitelistIcon from "@/assets/whitelist";

export const LinkData:SideBarLinks[] = [
    {   
        id: 1,
        linkTitle: 'CUSTOMERS',
        subLink: [
            {
                title: 'Users',
                icon: UserIcon,
                href: '/users'
            },
            {
                title: 'Guarantors',
                icon: GuarantorsIcon,
                href: '/guarantors'
            },
            {
                title: 'Loans',
                icon: LoanIcon,
                href: '/loans'
            },
            {
                title: 'Decision Models',
                icon: DecisionIcon,
                href: '/decision-models'
            },
            {
                title: 'Savings',
                icon: SavingsIcon,
                href: '/savings'
            },
            {
                title: 'Loan Requests',
                icon: LoanRequestIcon,
                href: '/requests'
            },
            {
                title: 'Whitelist',
                icon: WhitelistIcon,
                href: '/whitelist'
            },
            {
                title: 'Karma',
                icon: KarmaIcon,
                href: '/karma'
            },
        ],
    },

    {   
        id: 2,
        linkTitle: 'BUSINESSES',
        subLink: [
            {
                title: 'Organization',
                icon: BriefCaseIcon,
                href: '/organization'
            },
            {
                title: 'Loan Products',
                icon: LoanRequestIcon,
                href: '/loan-products'
            },
            {
                title: 'Savings Products',
                icon: SavingProductsIcon,
                href: '/savings-product'
            },
            {
                title: 'Fees and Charges',
                icon: CoinsIcon,
                href: '/charges'
            },
            {
                title: 'Transactions',
                icon: TransactionIcon,
                href: '/transactions'
            },
            {
                title: 'Services',
                icon: ServicesIcon,
                href: '/services'
            },
            {
                title: 'Service Account',
                icon: ServiceAccountIcon,
                href: '/services-account'
            },
            {
                title: 'Settlements',
                icon: Settlements,
                href: '/settlements'
            },
            {
                title: 'Reports',
                icon: ReportIcon,
                href: '/report'
            },
            
        ],
    },

    {   
        id: 3,
        linkTitle: 'SETTINGS',
        subLink: [
            {
                title: 'Preferences',
                icon: PreferenceIcon,
                href: '/preferences'
            },
            {
                title: 'Fees and Pricing',
                icon: FeesIcon,
                href: '/fees-pricing'
            },
            {
                title: 'Audit Logs',
                icon: ClipboardIcon,
                href: '/audit'
            },
            
        ],
    },
    
    
]