// Define the JSON data directly in the JavaScript file
const providers= {
    FRB: [
        { id: "ASAP", label: "ASAP" },
        { id: "CentralizedReceivablesService", label: "Centralized Receivables Service (CRS)" },
        { id: "DoNotPay", label: "Do Not Pay" },
        { id: "ElectronicFederalTaxPaymentSystem", label: "Electronic Federal Tax Payment System (EFTPS)" },
        { id: "FedACH", label: "Fed ACH" },
        { id: "FedInvest", label: "FedInvest" },
        { id: "FedNow", label: "FedNow" },
        { id: "FedWire", label: "FedWire" },
        { id: "GInvoicing", label: "G-Invoicing" },
        { id: "IntraGovernmentalPaymentAndCollection", label: "Intra-Governmental Payment and Collection (IPAC)" },
        { id: "InvoiceProcessingPlatform", label: "Invoice Processing Platform (IPP)" },
        { id: "JudgementFund", label: "Judgement Fund" },
        { id: "RetirementAndInsuranceTransferSystem", label: "Retirement and Insurance Transfer System (RITS)" },
        { id: "SecurePaymentSystem", label: "Secure Payment System (SPS)" },
        { id: "SLGSafe", label: "SLGSafe" },
        { id: "TreasuryDirect", label: "TreasuryDirect" },
        { id: "USASpendingGov", label: "USASpending.gov" },
        { id: "PayGov", label: "Pay.gov" } // Added PayGov to FRB to match the edge reference
    ],
    JPM: [
        { id: "AVS", label: "AVS" },
        { id: "PACER", label: "Payments, Claims, and Enhanced Reconciliation (PACER)" },
        { id: "TRACS", label: "TRACS" },
        { id: "USCIS", label: "USCIS" },
        { id: "TreasuryCheckInformationSystem", label: "Treasury Check Information System (TCIS)" }
    ],
    BFS: [
        { id: "BankManagementSystem", label: "Bank Management System" },
        { id: "CentralAccountingReportingSystem", label: "Central Accounting Reporting System (CARS)" },
        { id: "CheckClaims", label: "Check Claims" },
        { id: "CollectionsInformationRepository", label: "Collections Information Repository (CIR)" },
        { id: "CrossServicing", label: "Cross-Servicing" },
        { id: "DebitGateway", label: "Debit Gateway" },
        { id: "DisbursementAndDebtManagementAnalyticsPlatform", label: "Disbursement and Debt Management Analytics Platform (DDMAP)" },
        { id: "GeneralFund", label: "General Fund" },
        { id: "GovernmentwideAccounting", label: "Governmentwide Accounting (GWA)" },
        { id: "GovernmentwideTreasuryAccountSymbol", label: "Governmentwide Treasury Account Symbol (GTAS)" },
        { id: "PACE", label: "PACE" },
        { id: "PaymentInformationAndViewOfTransactions", label: "Payment Information & View of Transactions (PIVOT)" },
        { id: "PaymentInformationRepository", label: "Payment Information Repository (PIR)" },
        { id: "PaymentIntegrityAndResolutionServices", label: "Payment Integrity and Resolution Services" },
        { id: "PrinCE", label: "PrinCE" },
        { id: "SharedAccountingModule", label: "Shared Accounting Module (SAM)" },
        { id: "SummaryDebtAccounting", label: "Summary Debt Accounting" },
        { id: "TreasuryCashManagementSystem", label: "Treasury Cash Management System (TCMS)" },
        { id: "TreasuryCheckValidationService", label: "Treasury Check Validation Service (TCVS)" },
        { id: "PCA", label: "PCA (Private Collection Agency)" },
        { id: "TreasuryOffsetProgram", label: "Treasury Offset Program (TOP)" }
    ],
    Comerica: [
        { id: "CardAcquiringService", label: "Card Acquiring Service (CAS)" }
    ],
    PNC_USBank: [
        { id: "CentralizedReceivablesService", label: "Centralized Receivables Service (CRS)" }
    ],
    USBank: [
        { id: "CreditGateway", label: "Credit Gateway (Delinquent debt)" },
        { id: "GLN", label: "GLN" }
    ],
    PNC: [
        { id: "DirectExpress", label: "Direct Express" },
        { id: "EagleCash", label: "EagleCash" },
        { id: "EZpay", label: "EZpay" },
        { id: "NavyCash", label: "Navy Cash (MarineCash)" },
        { id: "StoredValueCard", label: "Stored Value Card (SVC)" }
    ],
    Citi: [
        { id: "ElectronicCheckProcessing", label: "Electronic Check Processing (ECP)" },
        { id: "ITSgov", label: "ITS.gov" },
        { id: "OverTheCounter", label: "Over the Counter (OTC.NET)" },
        { id: "PassportLBX", label: "Passport LBX" }
    ],
    VariousFAs: [
        { id: "USDebitCard", label: "US Debit Card" }
    ],
    Unassigned: [
        { id: "DebtManagement", label: "Debt Management" },
        { id: "eCollections", label: "eCollections" },
        { id: "eCommerceCollections", label: "eCommerce Collections" },
        { id: "FederalBorrowingsProgram", label: "Federal Borrowings Program" },
        { id: "FederalDisbursementServices", label: "Federal Disbursement Services (FDS)" },
        { id: "FederalInvestmentsProgram", label: "Federal Investments Program" },
        { id: "FederalTaxCollectionServices", label: "Federal Tax Collection Services" },
        { id: "FinancialInnovationAndTransformation", label: "Financial Innovation & Transformation (FIT)" },
        { id: "FinancialManagementQualityServiceManagementsOffice", label: "Financial Management Quality Service Managements Office (FM QSMO)" },
        { id: "PaymentsVisioning", label: "Payments Visioning" },
        { id: "PEPAndMainframeDecommissioningProgram", label: "PEP & Mainframe Decommissioning Program" }
    ]
};

const edges = [
{ data: { source: "ASAP", target: "AVS" } },
{ data: { source: "ASAP", target: "CentralizedReceivablesService" } },
{ data: { source: "ASAP", target: "DoNotPay" } },
{ data: { source: "ASAP", target: "ElectronicFederalTaxPaymentSystem" } },
{ data: { source: "AVS", target: "FedACH" } },
{ data: { source: "AVS", target: "FedInvest" } },
{ data: { source: "AVS", target: "FedNow" } },
{ data: { source: "CentralizedReceivablesService", target: "FedWire" } },
{ data: { source: "CentralizedReceivablesService", target: "GInvoicing" } },
{ data: { source: "CentralizedReceivablesService", target: "IntraGovernmentalPaymentAndCollection" } },
{ data: { source: "DoNotPay", target: "InvoiceProcessingPlatform" } },
{ data: { source: "DoNotPay", target: "JudgementFund" } },
{ data: { source: "DoNotPay", target: "RetirementAndInsuranceTransferSystem" } },
{ data: { source: "ElectronicFederalTaxPaymentSystem", target: "SecurePaymentSystem" } },
{ data: { source: "ElectronicFederalTaxPaymentSystem", target: "SLGSafe" } },
{ data: { source: "ElectronicFederalTaxPaymentSystem", target: "TreasuryDirect" } },
{ data: { source: "FedACH", target: "USASpendingGov" } },
{ data: { source: "FedACH", target: "PayGov" } },
{ data: { source: "FedInvest", target: "PACER" } },
{ data: { source: "FedInvest", target: "TRACS" } },
{ data: { source: "FedInvest", target: "USCIS" } },
{ data: { source: "FedNow", target: "TreasuryCheckInformationSystem" } },
{ data: { source: "FedNow", target: "BankManagementSystem" } },
{ data: { source: "FedWire", target: "CentralAccountingReportingSystem" } },
{ data: { source: "FedWire", target: "CheckClaims" } },
{ data: { source: "GInvoicing", target: "CollectionsInformationRepository" } },
{ data: { source: "GInvoicing", target: "CrossServicing" } },
{ data: { source: "IntraGovernmentalPaymentAndCollection", target: "DebitGateway" } },
{ data: { source: "IntraGovernmentalPaymentAndCollection", target: "DisbursementAndDebtManagementAnalyticsPlatform" } },
{ data: { source: "InvoiceProcessingPlatform", target: "GeneralFund" } },
{ data: { source: "InvoiceProcessingPlatform", target: "GovernmentwideAccounting" } },
{ data: { source: "JudgementFund", target: "GovernmentwideTreasuryAccountSymbol" } },
{ data: { source: "JudgementFund", target: "PACE" } },
{ data: { source: "RetirementAndInsuranceTransferSystem", target: "PaymentInformationAndViewOfTransactions" } },
{ data: { source: "RetirementAndInsuranceTransferSystem", target: "PaymentInformationRepository" } },
{ data: { source: "SecurePaymentSystem", target: "PaymentIntegrityAndResolutionServices" } },
{ data: { source: "SecurePaymentSystem", target: "PrinCE" } },
{ data: { source: "SLGSafe", target: "SharedAccountingModule" } },
{ data: { source: "SLGSafe", target: "SummaryDebtAccounting" } },
{ data: { source: "TreasuryDirect", target: "TreasuryCashManagementSystem" } },
{ data: { source: "TreasuryDirect", target: "TreasuryCheckValidationService" } },
{ data: { source: "USASpendingGov", target: "PCA" } },
{ data: { source: "USASpendingGov", target: "TreasuryOffsetProgram" } },
{ data: { source: "PayGov", target: "TreasuryOffsetProgram" } },
{ data: { source: "PayGov", target: "DirectExpress" } },
{ data: { source: "PayGov", target: "EagleCash" } },
{ data: { source: "PayGov", target: "EZpay" } },
{ data: { source: "DirectExpress", target: "NavyCash" } },
{ data: { source: "DirectExpress", target: "StoredValueCard" } }
]
