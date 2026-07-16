export type Language = 'en' | 'ar';

export interface ComparisonRow {
  feature: string;
  community: string;
  enterprise: string;
  other: string;
  isPositive: boolean;
}

export interface TranslationType {
  nav: {
    brandName: string;
    brandTag: string;
    features: string;
    opexService: string;
    modules: string;
    pricing: string;
    calculator: string;
    comparison: string;
    faq: string;
    bookDemo: string;
    contactUs: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Val: string;
    stat1Label: string;
    stat2Val: string;
    stat2Label: string;
    stat3Val: string;
    stat3Label: string;
    stat4Val: string;
    stat4Label: string;
    pill1: string;
    pill2: string;
    pill3: string;
  };
  valueProps: {
    badge: string;
    title: string;
    subtitle: string;
    prop1Title: string;
    prop1Desc: string;
    prop2Title: string;
    prop2Desc: string;
    prop3Title: string;
    prop3Desc: string;
    prop4Title: string;
    prop4Desc: string;
  };
  opex: {
    badge: string;
    badgeHighlight: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
    timelineTitle: string;
    step1Time: string;
    step1Title: string;
    step1Desc: string;
    step2Time: string;
    step2Title: string;
    step2Desc: string;
    step3Time: string;
    step3Title: string;
    step3Desc: string;
    step4Time: string;
    step4Title: string;
    step4Desc: string;
    guaranteeTitle: string;
    guaranteeDesc: string;
    ctaText: string;
  };
  modules: {
    badge: string;
    title: string;
    subtitle: string;
    viewDemo: string;
    allApps: string;
    items: {
      id: string;
      icon: string;
      name: string;
      category: string;
      desc: string;
      features: string[];
      previewStat: string;
      previewText: string;
    }[];
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    egpMonth: string;
    billedMonthly: string;
    popularBadge: string;
    selectPlan: string;
    plan1Name: string;
    plan1Price: string;
    plan1Desc: string;
    plan1Features: string[];
    plan2Name: string;
    plan2Price: string;
    plan2Desc: string;
    plan2Features: string[];
    plan3Name: string;
    plan3Price: string;
    plan3Desc: string;
    plan3Features: string[];
    disclaimer: string;
  };
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
    selectPlanLabel: string;
    employeesLabel: string;
    selectedAppsLabel: string;
    systemPlanOption: string;
    opexPlanOption: string;
    traditionalCostTitle: string;
    ourCostTitle: string;
    monthlySavings: string;
    annualSavings: string;
    savingsNote: string;
    ctaCalculator: string;
  };
  comparison: {
    badge: string;
    title: string;
    subtitle: string;
    featureHeader: string;
    odooCommunityHeader: string;
    odooEnterpriseHeader: string;
    otherErpHeader: string;
    rows: ComparisonRow[];
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      quote: string;
      author: string;
      role: string;
      company: string;
      metric: string;
      metricLabel: string;
      avatar: string;
    }[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  modal: {
    title: string;
    subtitle: string;
    fullName: string;
    companyName: string;
    phone: string;
    email: string;
    planInterest: string;
    planOption1: string;
    planOption2: string;
    notes: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    close: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactInfo: string;
    location: string;
    rights: string;
    disclaimerText: string;
  };
}

export const translations: Record<Language, TranslationType> = {
  en: {
    nav: {
      brandName: 'Odoo Community Hub',
      brandTag: 'Egypt & MENA',
      features: 'Why Odoo Community',
      opexService: 'OPEX Employee',
      modules: 'Unlimited Apps',
      pricing: 'Pricing Plans',
      calculator: 'Savings Calculator',
      comparison: 'Comparison Matrix',
      faq: 'FAQ',
      bookDemo: 'Get Free Sandbox',
      contactUs: 'Talk to Expert',
    },
    hero: {
      badge: '100% Unlimited Odoo Community Edition + Managed OPEX Support',
      titleLine1: 'Scale Your Business With Zero Per-User Fees &',
      titleHighlight: 'Dedicated Managed Employee',
      titleLine2: 'For Your Operational Growth',
      subtitle: 'Deploy full-featured Odoo Community ERP. Get complete system hosting & setup from 5,000 EGP/mo OR upgrade to OPEX with a full-time dedicated employee entering data, tracking roles, and generating custom reports for 10,000 EGP/mo.',
      ctaPrimary: 'Get OPEX Managed Employee (10k EGP)',
      ctaSecondary: 'Explore Odoo System Only (5k EGP)',
      stat1Val: '0 EGP',
      stat1Label: 'Per-User License Fee',
      stat2Val: '100%',
      stat2Label: 'Dedicated Employee Focus',
      stat3Val: '5,000 EGP',
      stat3Label: 'System Starting Price/mo',
      stat4Val: '75%',
      stat4Label: 'Average Cost Savings',
      pill1: 'Zero Per-User Licensing Overhead',
      pill2: 'Includes Full-Time Employee Data Entry',
      pill3: 'Custom Egyptian Financial & Tax Reports',
    },
    valueProps: {
      badge: 'Unmatched Value Model',
      title: 'Why Cairo Businesses Choose Odoo Community + OPEX',
      subtitle: 'Eliminate high SaaS per-user charges while acquiring hands-on human operations experts who manage your day-to-day workflow.',
      prop1Title: 'Unlimited Users & Apps',
      prop1Desc: 'Add 10 or 1,000 team members without paying a single extra penny per user license. Enjoy true open-source freedom.',
      prop2Title: 'Dedicated Full-Time Employee',
      prop2Desc: 'Get a professional operational specialist assigned to enter your sales, invoices, stock logs, and follow up team activities daily.',
      prop3Title: 'Custom Executive & Role Reports',
      prop3Desc: 'Receive customized KPI reports, financial statements, and employee completion reports delivered to your inbox and WhatsApp.',
      prop4Title: 'Tax Deductible OPEX Pricing',
      prop4Desc: 'Classified as operational service expense starting at 5,000 EGP / 10,000 EGP monthly. No heavy upfront capital expenditures.',
    },
    opex: {
      badge: 'The Game-Changing OPEX Advantage',
      badgeHighlight: 'Managed Employee Service',
      title: 'Not Just Software — You Get A Dedicated Full-Time Operational Employee',
      subtitle: 'Software alone does not input invoices or audit workflow discipline. Our 10,000 EGP/mo package places a dedicated trained specialist inside your system who does the hard operational work for you.',
      card1Title: 'Daily High-Accuracy Data Entry',
      card1Desc: 'Your dedicated employee logs purchase orders, customer invoices, bank deposits, inventory movements, and payroll inputs daily.',
      card2Title: 'Role & Permission Enforcement',
      card2Desc: 'Follows up with sales reps, storekeepers, and managers on overdue approvals, incomplete logs, and task deadlines.',
      card3Title: 'Custom Executive Dashboards',
      card3Desc: 'Builds tailored profit & loss reports, sales velocity charts, stock reorder alerts, and cash flow forecasts for business owners.',
      card4Title: 'Zero Recruitment & Overhead Risk',
      card4Desc: 'No employment contracts, social insurance hassles, hardware costs, or severance risk. We replace trained staff instantly if needed.',
      timelineTitle: 'A Typical Day of Your Dedicated Virtual Employee',
      step1Time: '09:00 AM',
      step1Title: 'Daily Audit & Log Review',
      step1Desc: 'Reviews overnight e-commerce orders, pending purchase requests, and verifies bank reconciliation files.',
      step2Time: '11:30 AM',
      step2Title: 'Data Entry & Staff Follow-Ups',
      step2Desc: 'Inputs vendor invoices, reconciles stock receipts, and calls/reminds sales officers to log client follow-ups in Odoo CRM.',
      step3Time: '02:30 PM',
      step3Title: 'Role Integrity & Security Verification',
      step3Desc: 'Audits user permissions, approves pending workflows, and validates discount limits entered by junior staff.',
      step4Time: '05:00 PM',
      step4Title: 'Daily Executive Digest & Custom Reports',
      step4Desc: 'Generates daily revenue summary, stock alert report, and sends executive flash stats via PDF and WhatsApp.',
      guaranteeTitle: '100% Confidentiality & SLA Guarantee',
      guaranteeDesc: 'Signed NDAs, Egyptian data privacy compliance, end-to-end audit trails, and replacement guarantee within 24 hours.',
      ctaText: 'Hire Your Dedicated Odoo Employee Now',
    },
    modules: {
      badge: 'Complete Enterprise Suite',
      title: 'Unlimited Odoo Community Apps Included',
      subtitle: 'No module restrictions. Everything configured and tailored for Egyptian market requirements.',
      viewDemo: 'View Interactive Feature',
      allApps: 'All Apps',
      items: [
        {
          id: 'crm',
          icon: 'Users',
          name: 'CRM & Pipeline Management',
          category: 'Sales & Marketing',
          desc: 'Track sales leads, pipeline stages, activity scheduling, automated quotation follow-ups, and conversion rate analytics.',
          features: ['Visual Kanban Boards', 'Lead Scoring', 'Automated Reminders', 'Sales Rep Performance Metrics'],
          previewStat: '+38% Lead Conversion',
          previewText: 'Automated follow-ups double sales touchpoints',
        },
        {
          id: 'sales',
          icon: 'ShoppingBag',
          name: 'Sales & Invoicing',
          category: 'Sales & Marketing',
          desc: 'Create professional multi-currency quotes, automated discounts, ETA invoicing, and integration with Egyptian e-invoicing formats.',
          features: ['One-Click Invoicing', 'Multi-Currency Support', 'Egyptian ETA Compliance', 'PDF Layout Customization'],
          previewStat: '< 2 Mins',
          previewText: 'Time taken to issue & send legal invoice',
        },
        {
          id: 'inventory',
          icon: 'Boxes',
          name: 'Inventory & Stock Management',
          category: 'Operations',
          desc: 'Double-entry stock keeping, serial & lot tracking, automated reordering rules, multi-warehouse transfers, and physical audit logs.',
          features: ['Multi-Warehouse Control', 'Barcode Scanning', 'Automated Reorder Points', 'Stock Valuation Reports'],
          previewStat: '99.4%',
          previewText: 'Inventory accuracy rate with OPEX daily audit',
        },
        {
          id: 'accounting',
          icon: 'Calculator',
          name: 'Accounting & Local Financials',
          category: 'Finance',
          desc: 'Chart of accounts tailored to Egyptian accounting standards, general ledger, tax handling (VAT, withholding), and automated bank reconciliation.',
          features: ['Egyptian Chart of Accounts', 'VAT Return Automation', 'Bank Reconciliation', 'Aging Accounts Receivable'],
          previewStat: '100% Tax Compliant',
          previewText: 'Tailored for Egyptian commercial tax rules',
        },
        {
          id: 'pos',
          icon: 'Store',
          name: 'Point of Sale (POS)',
          category: 'Sales & Marketing',
          desc: 'Blazing-fast offline POS interface for retail stores & restaurants, direct receipt printing, cash drawer management, and instant stock sync.',
          features: ['Offline Mode Support', 'Touch Screen Optimized', 'Cash Drawer Audit', 'Loyalty Program Integration'],
          previewStat: '0s Downtime',
          previewText: 'Continues working during internet outage',
        },
        {
          id: 'hr',
          icon: 'UserCheck',
          name: 'HR, Payroll & Attendance',
          category: 'Human Resources',
          desc: 'Manage employee contracts, attendance logs, leaves/vacations, and custom Egyptian salary rules with insurance & tax calculations.',
          features: ['Egyptian Salary Structuring', 'Biometric Machine Sync', 'Leave Requests', 'Overtime Calculation'],
          previewStat: 'Monthly Run in 10m',
          previewText: 'Calculate complete monthly staff payroll',
        },
        {
          id: 'manufacturing',
          icon: 'Factory',
          name: 'Manufacturing (MRP)',
          category: 'Operations',
          desc: 'Bill of Materials (BOM), work center routing, manufacturing order tracking, scrap management, and raw material cost allocation.',
          features: ['Multi-Level BOM', 'Work Center Scheduling', 'Cost Allocation', 'Quality Assurance Checks'],
          previewStat: '15% Waste Cut',
          previewText: 'Real-time raw material consumption logs',
        },
        {
          id: 'purchase',
          icon: 'Truck',
          name: 'Purchasing & Supplier Portal',
          category: 'Operations',
          desc: 'Request for Quotation (RFQ), vendor pricelist management, automated PO generation, land cost calculation, and supplier ratings.',
          features: ['Automated Reorder Requests', 'Landed Cost Rules', 'Vendor Quality Cards', 'Purchase Approvals'],
          previewStat: '-12% Unit Cost',
          previewText: 'Negotiation insights from supplier history',
        },
        {
          id: 'project',
          icon: 'Kanban',
          name: 'Project & Task Tracking',
          category: 'Operations',
          desc: 'Organize projects into tasks, milestones, timesheets, team workloads, sub-tasks, and customer portal collaboration.',
          features: ['Gantt & Kanban Views', 'Timesheet Logging', 'Client Portal', 'Task Dependency Tracking'],
          previewStat: '94% On-Time',
          previewText: 'Milestone tracking enforced by virtual staff',
        },
        {
          id: 'website',
          icon: 'Globe',
          name: 'Website Builder & E-Commerce',
          category: 'Digital',
          desc: 'Drag-and-drop website pages, online product showcase, shopping cart, online payment portal integration, and blog publishing.',
          features: ['Drag & Drop Page Builder', 'Online Payment Gateways', 'SEO Optimization', 'Stock Auto-Sync'],
          previewStat: '3x Faster Deployment',
          previewText: 'Launch online shop integrated with Odoo POS',
        },
        {
          id: 'helpdesk',
          icon: 'Headphones',
          name: 'Helpdesk & Support Ticketing',
          category: 'Customer Support',
          desc: 'Centralize support tickets from email, web, and chat, track SLA resolution times, and automate customer satisfaction surveys.',
          features: ['Ticket Routing Rules', 'SLA Countdown Timers', 'Customer Satisfaction Rate', 'Knowledge Base Sync'],
          previewStat: '< 15 mins SLA',
          previewText: 'Rapid support response workflows',
        },
        {
          id: 'reports',
          icon: 'BarChart3',
          name: 'Custom Executive Analytics',
          category: 'Business Intelligence',
          desc: 'Tailor-made dashboards created by our team. Live financial ratios, employee KPIs, sales leaderboard, and stock alert summaries.',
          features: ['Executive Cockpit', 'Export to Excel/PDF', 'Scheduled WhatsApp Alerts', 'Custom KPI Formulas'],
          previewStat: 'Real-time Insights',
          previewText: 'Data curated by your OPEX employee daily',
        },
      ],
    },
    pricing: {
      badge: 'Transparent Localized Pricing',
      title: 'Choose The Right Odoo Community Plan For You',
      subtitle: 'No USD currency volatility or surprise per-user pricing. Clear Egyptian Pound monthly packages with maximum value.',
      egpMonth: 'EGP / Month',
      billedMonthly: 'Billed monthly in Egyptian Pounds • Cancel anytime',
      popularBadge: 'Most Popular Choice',
      selectPlan: 'Select Plan & Request Demo',
      plan1Name: 'Odoo System Managed',
      plan1Price: '5,000',
      plan1Desc: 'Ideal for companies wanting a robust, fully managed Odoo Community System without user limits.',
      plan1Features: [
        'Unlimited System Users (0 EGP/user)',
        'Full Access to All 12+ Odoo Community Apps',
        'Cloud Hosting with High Availability SSL',
        'Initial System Configuration & Chart Setup',
        'Daily Encrypted Cloud Backups',
        'Ongoing Server Maintenance & Security Patches',
        'Technical SLA Support via Ticket & WhatsApp',
      ],
      plan2Name: 'Managed System + Full-Time OPEX Employee',
      plan2Price: '10,000',
      plan2Desc: 'The ultimate business package: Software PLUS a dedicated full-time specialist entering data, following up roles, and reporting.',
      plan2Features: [
        'Everything included in the 5,000 EGP System Plan',
        'Dedicated Full-Time Operational Specialist assigned to your firm',
        'Daily Data Entry (Sales, POs, Invoices, Stock Receipts)',
        'Staff Role Integrity & Pending Approval Follow-Ups',
        'Custom Executive Reports (P&L, Cash Flow, KPI Flash Reports)',
        'WhatsApp & Email Daily Operational Digests',
        'Zero Hiring, Social Security, or HR Liabilities',
        'Free Immediate Employee Replacement Guarantee',
      ],
      plan3Name: 'Enterprise Custom & Multi-Branch',
      plan3Price: 'Custom Quote',
      plan3Desc: 'For enterprise chains requiring custom Python backend module development, local hardware, or complex multi-company sync.',
      plan3Features: [
        'Everything in OPEX Plan + Dedicated Tech Architect',
        'Custom Odoo Module Engineering (Python/JavaScript)',
        'On-Premise Server Clustering / Private Local Cloud',
        'Third-Party Systems Integration (Legacy ERP, E-Gov API)',
        'Dedicated On-Site Staff Training Workshops',
        'Custom SLA & 24/7 Priority Emergency Support',
      ],
      disclaimer: '* All plans include 100% open-source Odoo Community core. No user license fees will ever apply.',
    },
    calculator: {
      badge: 'Interactive Savings Calculator',
      title: 'Calculate Your Instant ROI vs Enterprise & Traditional Staff',
      subtitle: 'See how much money you save every month by switching to Odoo Community + OPEX Managed Employee.',
      selectPlanLabel: 'Select Desired Package:',
      employeesLabel: 'Number of Active Users / Staff Members in your company:',
      selectedAppsLabel: 'Core Modules Needed:',
      systemPlanOption: '5,000 EGP - Odoo System Managed Only',
      opexPlanOption: '10,000 EGP - Managed System + Full-Time Dedicated Employee',
      traditionalCostTitle: 'Traditional Cost (Per-User Licensing + In-House Accountant Salary):',
      ourCostTitle: 'Our All-Inclusive Odoo Package:',
      monthlySavings: 'Your Monthly Savings:',
      annualSavings: 'Your Estimated Annual Savings:',
      savingsNote: '* Traditional calculation based on ~$20/user/mo license fees + ~15,000 EGP in-house operational accountant salary + IT infrastructure costs.',
      ctaCalculator: 'Lock In These Savings Today',
    },
    comparison: {
      badge: 'Unbiased Matrix',
      title: 'Odoo Community + OPEX vs Other Systems',
      subtitle: 'Compare how our managed approach solves software fees and human execution gaps simultaneously.',
      featureHeader: 'Key Capability / Expense',
      odooCommunityHeader: 'Our Odoo Community + OPEX',
      odooEnterpriseHeader: 'Odoo Enterprise Edition',
      otherErpHeader: 'Other Systems (SAP / Oracle / Zoho)',
      rows: [
        {
          feature: 'Per-User Monthly License Cost',
          community: '0 EGP (Unlimited Users Free)',
          enterprise: 'Pay per user monthly ($20-$35/user)',
          other: 'High per-user monthly SaaS fees',
          isPositive: true,
        },
        {
          feature: 'Full-Time Employee Included to Input Data & Follow Up',
          community: 'INCLUDED (in 10k EGP Plan)',
          enterprise: 'Not Included (Must hire & pay staff)',
          other: 'Not Included (Must hire & pay staff)',
          isPositive: true,
        },
        {
          feature: 'Custom Local Financial & Executive Reporting',
          community: 'Included & Curated Daily',
          enterprise: 'Extra charge per custom report',
          other: 'Expensive third-party BI fees',
          isPositive: true,
        },
        {
          feature: 'Vendor Lock-In Risk',
          community: 'Zero (100% Open Source Source Code)',
          enterprise: 'High (Proprietary license lock-in)',
          other: 'Very High (Cannot migrate database)',
          isPositive: true,
        },
        {
          feature: 'Billing Currency & Price Security',
          community: 'Fixed EGP (5k / 10k EGP/mo)',
          enterprise: 'USD / EUR Fluctuating Prices',
          other: 'USD Price spikes',
          isPositive: true,
        },
        {
          feature: 'Custom Egyptian Tax & E-Invoice Integration',
          community: 'Fully Configured & Ready',
          enterprise: 'Requires additional apps/partners',
          other: 'Requires costly local customization',
          isPositive: true,
        },
      ],
    },
    testimonials: {
      badge: 'Client Success Stories',
      title: 'Trusted by Growing Egyptian Businesses',
      subtitle: 'See how Egyptian companies reduced operational costs and improved daily accuracy using Odoo Community + OPEX.',
      items: [
        {
          quote: "Switching from SAP to Odoo Community with the 10,000 EGP OPEX employee plan was the best decision we made. We eliminated over 180,000 EGP in yearly licensing fees and got a dedicated virtual data specialist who handles all inventory and invoice logs error-free.",
          author: "Eng. Ahmed El-Sayed",
          role: "Managing Director",
          company: "Al-Mottahida Distribution Co., Cairo",
          metric: "72% Cost Savings",
          metricLabel: "Saved annually compared to proprietary ERP",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        },
        {
          quote: "As a expanding retail chain in Giza, per-user pricing was killing us. With Odoo Community system for 5,000 EGP, we connected 14 branch POS terminals with zero user charges. The system response time is lightning fast.",
          author: "Mona Abdel-Rahman",
          role: "Chief Operating Officer",
          company: "Grand Fashion Stores, Giza",
          metric: "14 Branches Sync",
          metricLabel: "Connected simultaneously with 0 user fee",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
        },
        {
          quote: "The dedicated OPEX employee doesn't just enter data; she calls our sales team daily to make sure CRM leads and quotes are updated. My daily executive summary report lands on my WhatsApp every evening at 5:00 PM.",
          author: "Tarek Mansour",
          role: "CEO & Founder",
          company: "Nile Tech Solutions, New Cairo",
          metric: "100% Daily Compliance",
          metricLabel: "Operational tracking & report delivery",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        },
      ],
    },
    faq: {
      badge: 'Got Questions?',
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about Odoo Community Edition and our OPEX Dedicated Employee service.',
      items: [
        {
          q: 'What is Odoo Community Edition and is it really free of user fees?',
          a: 'Odoo Community is the 100% open-source core edition of Odoo. It includes robust core capabilities for Sales, CRM, Invoicing, Inventory, POS, Purchasing, Project, and HR. Because it is open-source, there are zero per-user license fees regardless of whether you have 5 or 500 users.',
        },
        {
          q: 'What exactly is included in the 5,000 EGP / month System Plan?',
          a: 'The 5,000 EGP plan includes a fully configured Odoo Community ERP system hosted on secured cloud servers with SSL, custom Egyptian Chart of Accounts setup, daily automated backups, server monitoring, security updates, and technical maintenance support.',
        },
        {
          q: 'How does the 10,000 EGP / month OPEX Dedicated Employee plan work?',
          a: 'In addition to the full system infrastructure, we assign a full-time, dedicated operational employee to your company. This specialist works during your business hours to log daily sales/purchases, enter inventory transactions, enforce user roles, follow up on pending staff tasks, and send you daily customized executive reports.',
        },
        {
          q: 'How do you ensure data security and confidentiality for our business?',
          a: 'We sign comprehensive legally binding non-disclosure agreements (NDAs) governed by Egyptian laws. All operational actions performed by your dedicated employee are tracked via strict Odoo audit logs. Your data is encrypted at rest and in transit.',
        },
        {
          q: 'Can we upgrade from the 5,000 EGP system plan to the 10,000 EGP OPEX plan later?',
          a: 'Yes! You can start with the System-Only plan (5,000 EGP/mo) and upgrade to include a dedicated OPEX full-time employee whenever your workload increases.',
        },
        {
          q: 'Is the 10,000 EGP fee tax-deductible as an operational expense (OPEX) in Egypt?',
          a: 'Yes. Since it is billed monthly as a managed professional services contract, 100% of the cost is categorized as an operational expense (OPEX), giving your firm tax deduction benefits compared to capital investments (CAPEX).',
        },
        {
          q: 'What happens if our assigned OPEX employee goes on leave or needs replacement?',
          a: 'We guarantee uninterrupted continuity. If your assigned specialist is sick or on leave, our secondary backup specialist seamlessly takes over daily tasks. If you ever want a different specialist, we replace them within 24 hours at no extra charge.',
        },
      ],
    },
    modal: {
      title: 'Start Your Odoo Community Experience',
      subtitle: 'Get a free live sandbox demo or speak with our Cairo operational architects today.',
      fullName: 'Full Name *',
      companyName: 'Company Name *',
      phone: 'Mobile / WhatsApp Number *',
      email: 'Work Email Address *',
      planInterest: 'Select Service Package of Interest',
      planOption1: '5,000 EGP / mo — Odoo Community System Only',
      planOption2: '10,000 EGP / mo — Managed System + Dedicated OPEX Employee',
      notes: 'Any specific business requirements or custom modules needed?',
      submitBtn: 'Request Free Demo & Strategy Session',
      successTitle: 'Request Received Successfully!',
      successDesc: 'Thank you! An Odoo architect and client service specialist will contact you on WhatsApp / Phone within 2 business hours.',
      close: 'Close Window',
    },
    footer: {
      tagline: 'Empowering Egyptian and regional businesses with open-source Odoo Community power and managed virtual operational labor.',
      quickLinks: 'Quick Links',
      contactInfo: 'Cairo Office & Contact',
      location: 'Smart Village & New Cairo Tech Hubs, Egypt',
      rights: '© 2026 Odoo Community Hub Egypt. All Rights Reserved.',
      disclaimerText: 'Odoo is a registered trademark of Odoo S.A. Odoo Community Hub is an independent provider specializing in Odoo Community deployment and managed operational employee services.',
    },
  },
  ar: {
    nav: {
      brandName: 'أودو كوميونيتي مصر',
      brandTag: 'حلول الأعمال وتشغيل ERP',
      features: 'لماذا أودو مجاناً',
      opexService: 'موظف تشغيل OPEX',
      modules: 'التطبيقات غير المحدودة',
      pricing: 'باقات الأسعار',
      calculator: 'حاسبة التوفير',
      comparison: 'مقارنة الأنظمة',
      faq: 'الأسئلة الشائعة',
      bookDemo: 'تجربة النظام مجاناً',
      contactUs: 'تحدث مع خبير',
    },
    hero: {
      badge: 'نسخة أودو مجانية ١٠٠٪ بدون رسوم مستخدمين + موظف تشغيل متفرغ',
      titleLine1: 'كبّر شركتك بدون مصاريف تراخيص مستخدمين ومع',
      titleHighlight: 'موظف تشغيل متفرغ لنظامك',
      titleLine2: 'لإدخال البيانات ومتابعة فريقك',
      subtitle: 'احصل على نظام Odoo Community المتكامل بالكامل. استضافة وتهيئة النظام من ٥,٠٠٠ ج.م شهرياً، أو باقة OPEX المتكاملة مع موظف متفرغ يدخل البيانات، يتابع أدوار الموظفين، ويصدر التقارير المخصصة لشركتك بـ ١٠,٠٠٠ ج.م شهرياً.',
      ctaPrimary: 'احصل على موظف OPEX متفرغ (١٠,٠٠٠ ج.م)',
      ctaSecondary: 'استكشف نظام أودو فقط (٥,٠٠٠ ج.م)',
      stat1Val: '٠ جنيه',
      stat1Label: 'رسوم تراخيص لكل مستخدم',
      stat2Val: '١٠٠٪',
      stat2Label: 'تفرغ موظف البيانات لشركتك',
      stat3Val: '٥,٠٠٠ ج.م',
      stat3Label: 'سعر باقة النظام شهرياً',
      stat4Val: '٧٥٪',
      stat4Label: 'نسبة التوفير مقارنة بالأنظمة الأخرى',
      pill1: 'بدون أي تكلفة لكل مستخدم إضافي',
      pill2: 'يشمل موظف متفرغ لإدخال البيانات والمتابعة',
      pill3: 'تقارير مالية وإدارية مخصصة للشركات المصرية',
    },
    valueProps: {
      badge: 'نموذج قيمة غير مسبوق',
      title: 'لماذا تختار الشركات المصرية أودو كوميونيتي + خدمة OPEX؟',
      subtitle: 'تخلص من اشتراكات SaaS المرتفعة مع الحصول على خبرة بشرية متفرغة تدير عملياتك اليومية بدقة.',
      prop1Title: 'مستخدمون وتطبيقات بلا حدود',
      prop1Desc: 'أضف ١٠ أو ١٠٠٠ موظف بدون دفع أي جنيه إضافي كترخيص مستخدم. استمتع بحرية المصدر المفتوح الكاملة.',
      prop2Title: 'موظف تشغيل متفرغ لشركتك',
      prop2Desc: 'نخصص لشركتك أخصائي عمليات محترف يدخل فواتير البيع، أوامر الشراء، حركات المخزن، ويتابع فريقك يومياً.',
      prop3Title: 'تقارير تنفيذيّة ومتابعة الأدوار',
      prop3Desc: 'استلم تقارير الأرباح والخسائر، مؤشرات الأداء، ونسب تحصيل المبيعات مباشرة على واتساب وبريدك.',
      prop4Title: 'مصاريف تشغيلية خافضة للضرائب (OPEX)',
      prop4Desc: 'تُحتسب كخدمات تشغيلية شهرياً ابتكاراً من ٥,٠٠٠ ج.م / ١٠,٠٠٠ ج.م بدون الحاجة لرأس مال ضخم (CAPEX).',
    },
    opex: {
      badge: 'الميزة التنافسية الكبرى OPEX',
      badgeHighlight: 'خدمة الموظف المدار',
      title: 'ليس مجرد برنامج — ستحصل على موظف تشغيلي متفرغ لشركتك',
      subtitle: 'البرمجيات وحدها لا تدخل الفواتير ولا تراجع انضباط الفريق. باقة ١٠,٠٠٠ ج.م توفر لك أخصائياً مدرباً يعمل داخل نظامك ويقوم بالمهام التشغيلية اليومية.',
      card1Title: 'إدخال بيانات يومي عالي الدقة',
      card1Desc: 'يقوم الموظف المخصص بتسجيل الفواتير، أوامر الشراء، المشتريات، توريدات المخازن، والرواتب يومياً.',
      card2Title: 'متابعة الصلاحيات وتدفق العمل',
      card2Desc: 'يتواصل مع المبيعات والمخزون والمشترين لمتابعة الأذونات المعلقة والتأكد من التزام كل موظف بدوره.',
      card3Title: 'لوحات قيادة وتقارير مخصصة',
      card3Desc: 'إعداد تقارير الأرباح، حركة المخزون، توقعات التدفق النقدي، ومؤشرات المبيعات المخصصة للإدارة العليا.',
      card4Title: 'بدون مخاطر توظيف أو تأمينات',
      card4Desc: 'لا عقود عمل، لا تأمينات اجتماعية، لا أجهزة كمبيوتر. ونقوم بستبدال الموظف فوراً إذا أردت.',
      timelineTitle: 'يوم نموذجي لموظفك المخصص التشغيلي',
      step1Time: '٠٩:٠٠ صباحاً',
      step1Title: 'المراجعة والتدقيق الصباحي',
      step1Desc: 'مراجعة طلبات المتجر الإلكتروني، أوامر الشراء المعلقة، والتحقق من ملفات التسوية البنكية.',
      step2Time: '١١:٣٠ صباحاً',
      step2Title: 'إدخال البيانات والمتابعة مع الموظفين',
      step2Desc: 'تسجيل فواتير الموردين، مطابقة حركات المبيعات، ومكالمة موظفي المبيعات لتحديث متابعات العملاء.',
      step3Time: '٠٢:٣٠ ظهراً',
      step3Title: 'مراجعة الصلاحيات وانضباط الأدوار',
      step3Desc: 'مراجعة صلاحيات التخفيضات، اعتماد الموافقات المعلقة، وتدقيق التدوين المخزني.',
      step4Time: '٠٥:٠٠ مساءً',
      step4Title: 'تقرير الإدارة اليومي والملخص التنفيذي',
      step4Desc: 'استخراج ملخص الإيرادات اليومي، تنبيهات نواقص المخزن، وإرسال التقرير بصيغة PDF وواتساب.',
      guaranteeTitle: 'ضمان السرية التامة وسلامة البيانات ١٠٠٪',
      guaranteeDesc: 'اتفاقية عدم إفشاء سرية (NDA) معتمدة، سجلات مراجعة شفافة لكل حركة، وضمان بديل خلال ٢٤ ساعة.',
      ctaText: 'احجز موظفك المخصص لنظام أودو الآن',
    },
    modules: {
      badge: 'منظومة كاملة لإدارة المنشأة',
      title: 'جميع تطبيقات أودو كوميونيتي متضمنة بلا حدود',
      subtitle: 'بدون أي قيود على الوظائف. تم إعداد وتطوير كل تطبيق ليلائم متطلبات السوق المصري.',
      viewDemo: 'عرض خصائص التطبيق',
      allApps: 'جميع التطبيقات',
      items: [
        {
          id: 'crm',
          icon: 'Users',
          name: 'إدارة علاقات العملاء (CRM)',
          category: 'المبيعات والتسويق',
          desc: 'متابعة الفرص البيعية، مراحل المبيعات، جدولة المتابعات، ومتابعة أداء مسؤول المبيعات.',
          features: ['لوحات كانبان بصرية', 'تقييم الفرص البيعية', 'تنبيهات تلقائية للمتابعة', 'قياس معدل الإغلاق'],
          previewStat: '+٣٨٪ تحسن المبيعات',
          previewText: 'المتابعة التلقائية تضاعف فرص الإغلاق الناجح',
        },
        {
          id: 'sales',
          icon: 'ShoppingBag',
          name: 'المبيعات والفوترة',
          category: 'المبيعات والتسويق',
          desc: 'إنشاء عروض أسعار احترافية، خصومات تلقائية، إصدار الفواتير فورياً مع التوافق مع الفاتورة الإلكترونية المصرية.',
          features: ['إصدار الفاتورة بضغطة زر', 'دعم العملات المتعددة', 'توافق الفاتورة الإلكترونية', 'تخصيص نماذج الطباعة'],
          previewStat: 'أقل من دقيقتين',
          previewText: 'زمن إصدار وإرسال الفاتورة الرسمية للعميل',
        },
        {
          id: 'inventory',
          icon: 'Boxes',
          name: 'إدارة المخازن والمخزون',
          category: 'العمليات والمخازن',
          desc: 'نظام القيد المزدوج للمخزون، تتبع السيريال واللوت، نقاط اعادة الطلب التلقائية، والربط بين الفروع والمخازن.',
          features: ['إدارة مخازن متعددة', 'دعم الباركود', 'حد الأمان وإعادة الطلب', 'تقارير تقييم المخزون'],
          previewStat: '٩٩.٤٪',
          previewText: 'دقة المطابقة المخزنية بفضل المراجعة اليومية',
        },
        {
          id: 'accounting',
          icon: 'Calculator',
          name: 'الحسابات والمالية المحلية',
          category: 'المالية والحسابات',
          desc: 'شجرة حسابات مخصصة وفقاً للمعايير المصرية، دفتر الأستاذ، ضريبة القيمة المضافة وخصم الأرباح، والتسوية البنكية.',
          features: ['دليل حسابات مصري جاهز', 'تقارير إقرار القيمة المضافة', 'تسوية الحسابات البنكية', 'أعمار الديون والتحصيل'],
          previewStat: '١٠٠٪ متوافق ضريبياً',
          previewText: 'مصمم خصيصاً للأنظمة المالية المصرية',
        },
        {
          id: 'pos',
          icon: 'Store',
          name: 'نقاط البيع (POS)',
          category: 'المبيعات والتسويق',
          desc: 'واجهة سريعة جداً للمحلات والمطاعم تعمل بدون إنترنت، طباعة فورية، إدارة درج النقدية، وربط مع المخزن.',
          features: ['عمل بدون اتصال بالإنترنت', 'شاشة لمس سريعة', 'جرد الدرج اليومي', 'برامج الولاء والخصومات'],
          previewStat: '٠ ثانية توقف',
          previewText: 'يستمر بالعمل حتى أثناء انقطاع الإنترنت',
        },
        {
          id: 'hr',
          icon: 'UserCheck',
          name: 'الموارد البشرية والرواتب',
          category: 'الموارد البشرية',
          desc: 'إدارة عقود الموظفين، الحضور والانصراف، الإجازات، وحساب الرواتب وفق قواعد الضرائب والتأمينات المصرية.',
          features: ['هيكلة الرواتب المصرية', 'ربط أجهزة البصمة', 'طلبات الإجازات', 'حساب الإضافي والجزاءات'],
          previewStat: 'مسير الرواتب في ١٠ دقائق',
          previewText: 'حساب مسير رواتب جميع الموظفين بضغطة زر',
        },
        {
          id: 'manufacturing',
          icon: 'Factory',
          name: 'إدارة التصنيع والإنتاج (MRP)',
          category: 'العمليات والمخازن',
          desc: 'قوائم المكونات (BOM)، مراكز العمل والتصنيع، تتبع أوامر الإنتاج، الهالك، وتكلفة المواد الخام.',
          features: ['شجرة منتج متعددة المستويات', 'جدولة مراكز العمل', 'توزيع التكاليف', 'مراقبة الجودة'],
          previewStat: '١٥٪ تخفيض الهالك',
          previewText: 'تسجيل دقيق لاستهلاك المواد الخام يومياً',
        },
        {
          id: 'purchase',
          icon: 'Truck',
          name: 'المشتريات وإدارة الموردين',
          category: 'العمليات والمخازن',
          desc: 'طلبات عروض الأسعار (RFQ)، أعد قائمة أسعار الموردين، توليد أوامر الشراء التلقائية، وتكاليف الشحن والجمارك.',
          features: ['توليد الطلبات التلقائي', 'حساب المصاريف الإضافية', 'تقييم كفاءة الموردين', 'سلسلة الاعتمادات'],
          previewStat: '-١٢٪ تكلفة الشراء',
          previewText: 'تحسين التفاوض بناءً على تاريخ أسعار الموردين',
        },
        {
          id: 'project',
          icon: 'Kanban',
          name: 'إدارة المشروعات والمهام',
          category: 'العمليات والمخازن',
          desc: 'تنظيم المشاريع في مهام، مراحل، تسجيل الساعات، توزيع ضغط العمل على الفريق، وبوابة مشاركة العملاء.',
          features: ['عرض جانت وكانبان', 'تسجيل ساعات العمل', 'بوابة العميل', 'تتبع اعتمادية المهام'],
          previewStat: '٩٤٪ تسليم في الموعد',
          previewText: 'متابعة المهل الزمنية بواسطة الموظف المخصص',
        },
        {
          id: 'website',
          icon: 'Globe',
          name: 'موقع الويب ومتجر الإنترنت',
          category: 'التطبيقات الرقمية',
          desc: 'بناء صفحات الموقع بالسحب والإفلات، عرض المنتجات، سلة الشراء، الربط مع بوابات الدفع الإلكترونية.',
          features: ['محرر صفحات تفاعلي', 'ربط بوابات الدفع', 'تحسين محركات البحث SEO', 'مزامنة المخزن فورياً'],
          previewStat: '٣ أضعاف سرعة الإطلاق',
          previewText: 'إطلاق متجر إلكتروني مربوط بنقاط البيع',
        },
        {
          id: 'helpdesk',
          icon: 'Headphones',
          name: 'الدعم الفني والتذاكر',
          category: 'خدمة العملاء',
          desc: 'تجميع تذاكر الدعم من البريد والموقع والمحادثات، تتبع اتفاقية مستوى الخدمة SLA، وقياس رضا العملاء.',
          features: ['توجيه التذاكر تلقائياً', 'عداد SLA التنازلي', 'استبيان قياس الرضا', 'قاعدة المعارف والحلول'],
          previewStat: 'أقل من ١٥ دقيقة',
          previewText: 'معدل الاستجابة لطلبات الدعم والشكاوى',
        },
        {
          id: 'reports',
          icon: 'BarChart3',
          name: 'التقارير المالية والتحليلات',
          category: 'ذكاء الأعمال',
          desc: 'لوحات تحكم تنفيذيّة يصممها فريقنا لشركتك. نسب مالية مباشرة، مؤشرات أداء الموظفين، وتنبيهات المخزون.',
          features: ['لوحة القيادة التنفيذية', 'تصدير إكسيل وPDF', 'تنبيهات واتساب المجدولة', 'معادلات KPI مخصصة'],
          previewStat: 'تحليلات مباشرة',
          previewText: 'بيانات يومية منسقة بواسطة موظف OPEX',
        },
      ],
    },
    pricing: {
      badge: 'أسعار واضحة بالجنيه المصري',
      title: 'اختر باقة أودو المناسبة لشركتك',
      subtitle: 'بدون تقلبات أسعار الدولار أو رسوم مفاجئة على عدد الموظفين. باقات محددة بالجنيه المصري بأعلى قيمة تشغيلية.',
      egpMonth: 'جنيه / شهرياً',
      billedMonthly: 'تُدفع شهرياً بالجنيه المصري • يمكنك الإلغاء في أي وقت',
      popularBadge: 'الباقة الأكثر طلباً',
      selectPlan: 'اختر الباقة واطلب التجربة',
      plan1Name: 'باقة نظام أودو المدار',
      plan1Price: '٥,٠٠٠',
      plan1Desc: 'مثالية للشركات التي ترغب في نظام أودو متكامل ومُدار بالكامل بدون أي حد لعدد المستخدمين.',
      plan1Features: [
        'عدد غير محدود من المستخدمين (٠ جنيه لكل مستخدم)',
        'وصول كامل لجميع تطبيقات Odoo Community الـ ١٢+',
        'استضافة سحابية عالية السرعة مع مشفر SSL',
        'التهيئة الأولية للنظام وشجرة الحسابات',
        'نسخ احتياطي يومي مشفر على السحابة',
        'صيانة وتحديثات الأمان الدورية للسيرفر',
        'دعم فني وتكنيكي عبر التذاكر والواتساب',
      ],
      plan2Name: 'النظام المدار + موظف تشغيل OPEX متفرغ',
      plan2Price: '١٠,٠٠٠',
      plan2Desc: 'الحل التشغيلي المتكامل: النظام الكامل + موظف متفرغ يدخل البيانات ويتابع الموظفين ويستخرج التقارير.',
      plan2Features: [
        'يشمل جميع مميزات باقة النظام (٥,٠٠٠ ج.م)',
        'تخصيص موظف تشغيلي متفرغ لشركتك طوال ساعات العمل',
        'إدخال البيانات اليومية (المبيعات، الشراء، الفواتير، التوريد)',
        'متابعة انضباط الموظفين والموافقات المعلقة',
        'إصدار التقارير التنفيذية (الأرباح، التدفق النقدي، مؤشرات الأداء)',
        'ملخص تشغيلي يومي يصلك عبر الواتساب والبريد الإلكتروني',
        'بدون أي مصاريف توظيف أو تأمينات اجتماعية أو إدارية',
        'ضمان استبدال فوري للموظف مجاناً في أي وقت',
      ],
      plan3Name: 'الباقة المؤسسية والربط المخصص',
      plan3Price: 'حسب الطلب',
      plan3Desc: 'للمؤسسات والكتل التجارية التي تتطلب تطوير مودولات مخصصة بلغة بايثون أو ربط شبكات الفروع المعقدة.',
      plan3Features: [
        'تشمل كافة مميزات باقة OPEX + مهندس تقني مخصص',
        'تطوير برمجيات ومودولات أودو خاصة (Python/JS)',
        'ربط سيرفرات خاصة داخلية On-Premise',
        'الربط مع الأنظمة الخارجية وهيئة الزكاة/الضرائب',
        'ورش تدريبية مخصصة لفريق عملك في المقر',
        'اتفاقية SLA خاصة ودعم طوارئ على مدار الساعة 24/7',
      ],
      disclaimer: '* جميع الباقات تعتمد على النواة المفتوحة المصدر Odoo Community. لن تنطبق عليك أي رسوم تراخيص مستخدمين نهائياً.',
    },
    calculator: {
      badge: 'حاسبة التوفير التفاعلية',
      title: 'احسب قيمة العائد والتوفير المالي فوراً',
      subtitle: 'اكتشف كم من الأموال ستوفر شهرياً وسنوياً عند اختيارك نظام Odoo Community + موظف التشغيل.',
      selectPlanLabel: 'اختر الباقة المطلوبة:',
      employeesLabel: 'عدد الموظفين / مستخدمي النظام بشركتك:',
      selectedAppsLabel: 'التطبيقات الرئيسية التي تحتاجها:',
      systemPlanOption: '٥,٠٠٠ ج.م - باقة نظام أودو المدار فقط',
      opexPlanOption: '١٠,٠٠٠ ج.م - باقة النظام + موظف التشغيل المتفرغ',
      traditionalCostTitle: 'التكلفة التقليدية (تراخيص لكل مستخدم + راتب محسب/مدخل بيانات):',
      ourCostTitle: 'تكلفة باقة أودو الشاملة لدينا:',
      monthlySavings: 'مقدار التوفير الشهري لشركتك:',
      annualSavings: 'إجمالي التوفير السنوي المتوقع:',
      savingsNote: '* الحساب التقليدي يعتمد على ~$20 لكل مستخدم شهرياً + راتب محاسب/مدخل بيانات ~١٥,٠٠٠ ج.م + مصاريف الدعم والتأسيس.',
      ctaCalculator: 'احصل على هذا التوفير لشركتك الآن',
    },
    comparison: {
      badge: 'مقارنة حيادية',
      title: 'مقارنة أودو كوميونيتي + OPEX بالأنظمة الأخرى',
      subtitle: 'كيف يحل نموذجنا مشكلة ارتفاع أسعار البرمجيات وفجوة التنفيذ البشري في وقت واحد.',
      featureHeader: 'البند / التكلفة التشغيلية',
      odooCommunityHeader: 'أودو كوميونيتي + OPEX لدينا',
      odooEnterpriseHeader: 'نسخة أودو إنتربرايز',
      otherErpHeader: 'الأنظمة الأخرى (SAP / Oracle / Zoho)',
      rows: [
        {
          feature: 'تكلفة ترخيص كل مستخدم شهرياً',
          community: '٠ جنيه (عدد مستخدمين مجاني)',
          enterprise: 'دفع بالدولار عن كل مستخدم شهرياً',
          other: 'اشتراكات شهرية مرتفعة لكل مستخدم',
          isPositive: true,
        },
        {
          feature: 'موظف تشغيل متفرغ لإدخال البيانات والمتابعة',
          community: 'متضمن (في باقة ١٠k ج.م)',
          enterprise: 'غير متضمن (تتحمل تعيين موظفين)',
          other: 'غير متضمن (تتحمل تعيين موظفين)',
          isPositive: true,
        },
        {
          feature: 'إصدار التقارير التنفيذية والمالية المخصصة',
          community: 'متضمن ومراجع يومياً',
          enterprise: 'تكلفة إضافية لكل تقرير مخصص',
          other: 'رسوم باهظة لأدوات BI الخارجية',
          isPositive: true,
        },
        {
          feature: 'مخاطر الاحتكار واحتجاز البيانات',
          community: 'صفر (كود برمجي مفتوح المصدر 100%)',
          enterprise: 'مرتفع (ارتباط بترخيص الشركة الأم)',
          other: 'مرتفع جداً (صعوبة نقل قواعد البيانات)',
          isPositive: true,
        },
        {
          feature: 'استقرار العملة وسعر الاشتراك',
          community: 'ثابت بالجنيه المصري (٥k / ١٠k ج.م)',
          enterprise: 'متغير بحسب سعر صرف الدولار',
          other: 'زيادات سنوية بالعملة الأجنبية',
          isPositive: true,
        },
        {
          feature: 'التوافق مع الفاتورة الإلكترونية والمعايير المصرية',
          community: 'مهيأة ومجهزة بالكامل',
          enterprise: 'تتطلب تطبيقا إضافيا من الشركاء',
          other: 'تتطلب تعديلات برمجية مكلفة',
          isPositive: true,
        },
      ],
    },
    testimonials: {
      badge: 'قصص نجاح عملائنا',
      title: 'شركات مصرية تثق بنظامنا التشغيلي',
      subtitle: 'كيف استطاعت المؤسسات خفض مصاريفها وتفعيل أودو كوميونيتي مع موظف التشغيل.',
      items: [
        {
          quote: "الانتقال من نظام SAP إلى Odoo Community وباقة موظف OPEX بـ ١٠,٠٠٠ ج.م كان أفضل قرار اتخذناه. وفرنا أكثر من ١٨٠,٠٠٠ جنيه سنوياً في اشتراكات المستخدمين، وأصبح لدينا أخصائي بيانات مخصص يسجل المبيعات والمخزن بدون أخطاء.",
          author: "م. أحمد السيد",
          role: "المدير العام",
          company: "شركة المتحدة للتوزيع، القاهرة",
          metric: "توفير ٧٢٪",
          metricLabel: "توفير سنوياً مقارنة بالأنظمة المغلقة",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        },
        {
          quote: "كشركة تجزئة تتوسع في الجيزة، كانت تكاليف التراخيص لكل موظف عائقاً كبيراً. مع باقة النظام بـ ٥,٠٠٠ ج.م، ربطنا ١٤ فرع كاشير بدون أي مصاريف مستخدمين إضافية. سرعة واستجابة النظام ممتازة.",
          author: "أ. منى عبد الرحمن",
          role: "رئيس قطاع العمليات",
          company: "سلسلة محلات جراند فاشون، الجيزة",
          metric: "ربط ١٤ فرع",
          metricLabel: "مربوطة بالتوازي بدون أي رسوم مستخدم",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
        },
        {
          quote: "موظف التشغيل المخصص لا يكتفي فقط بإدخال البيانات؛ بل يتواصل مع مندوبي المبيعات يومياً للتأكد من تحديث متابعة العملاء. تقرير الأرباح اليومي يصلني على الواتساب كل يوم الساعة ٥ مساءً.",
          author: "أ. طارق منصور",
          role: "الرئيس التنفيذي",
          company: "نايل تك للحلول، القاهرة الجديدة",
          metric: "انضباط ١٠٠٪",
          metricLabel: "متابعة يومية وتسليم التقارير في الموعد",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        },
      ],
    },
    faq: {
      badge: 'أسئلة واستفسارات',
      title: 'الأسئلة الشائعة حول أودو كوميونيتي وخدمة OPEX',
      subtitle: 'إجابات شاملة لكل ما تريد معرفته عن نظام أودو المفتوح المصدر وخيار الموظف التشغيلي المخصص.',
      items: [
        {
          q: 'ما هو نظام أودو كوميونيتي (Odoo Community) وهل هو بالفعل بدون رسوم مستخدمين؟',
          a: 'نسخة Odoo Community هي النواة مفتوحة المصدر ١٠٠٪ من أودو. تتضمن المبيعات، CRM، الحسابات، المخازن، نقاط البيع POS، المشتريات، إدارة المشروعات والموارد البشرية. ونظراً لأنها مفتوحة المصدر، لا توجد أي رسوم اشتراك على عدد المستخدمين سواء كان لديك ٥ أو ٥٠٠ مستخدم.',
        },
        {
          q: 'ماذا تتضمن باقة النظام المدار بسعر ٥,٠٠٠ ج.م / شهرياً بالضبط؟',
          a: 'تتضمن الباقة إعداد واستضافة نظام أودو كوميونيتي بالكامل على سيرفرات سحابية سريعة مع مشفر SSL، تهيئة شجرة الحسابات المصرية، إجراء نسخ احتياطي آلي يومي، مراقبة السيرفرات، والتحديثات الأمنية والدعم الفني عبر التذاكر والواتساب.',
        },
        {
          q: 'كيف تعمل باقة موظف التشغيل المتفرغ بسعر ١٠,٠٠٠ ج.م / شهرياً؟',
          a: 'بالإضافة لبنية النظام التقنية الكاملة، نخصص لشركتك أخصائياً تشغيلياً يعمل طوال ساعات عملك. يتولى الموظف تسجيل الفواتير والمشتريات وحركات المخزن يومياً، متابعة انضباط الموظفين في الأدوار المسندة إليهم، واستخراج تقارير يومية وشهرية تنفيذيّة مخصصة للإدارة.',
        },
        {
          q: 'كيف تضمنون سرية بيانات شركتنا وأمانها؟',
          a: 'نوقع معكم اتفاقية رسمية وملزمة لعدم إفشاء السرية (NDA) خاضعة للقوانين المصرية. جميع الحركات والتصرفات التي يقوم بها الموظف المخصص مسجلة وموثقة داخل سجلات مراجعة أودو (Audit Log). وبياناتكم مشفرة ومحفوظة بآمان.',
        },
        {
          q: 'هل يمكننا البدء بباقة ٥,٠٠٠ ج.م ثم الترقية لباقة ١٠,٠٠٠ ج.م لاحقاً؟',
          a: 'بالتأكيد! يمكنك البدء بباقة النظام المدار فقط (٥,٠٠٠ ج.م شهرياً)، وفي أي وقت مع توسع حجم عملك، يمكنك طلب إضافة موظف تشغيل متفرغ ليصبح الإجمالي ١٠,٠٠٠ ج.م شهرياً.',
        },
        {
          q: 'هل تكلفة ١٠,٠٠٠ ج.م تُعد مصاريف تشغيلية (OPEX) معتمدة ضريبياً في مصر؟',
          a: 'نعم. نظراً لأن القيمة تُدفع شهرياً كعقد خدمات مهنية وتطوير أعمال، تُصنف التكلفة بالكامل كمصاريف تشغيلية (OPEX)، مما يحقق لشركتك خصماً ضريبياً معتمداً مقارنة بالاستثمارات الرأسمالية.',
        },
        {
          q: 'ماذا يحدث إذا أخذ موظف التشغيل المخصص إجازة أو احتجنا لاستبداله؟',
          a: 'نضمن لك استمرارية الخدمة بدون انقطاع. في حالة إجازة الموظف، يتولى الموظف البديل المدرب إكمال المهام اليومية بمرونة. وفي حال طلبت تغيير الموظف لأي سبب، نقوم بتعيين أخصائي آخر خلال ٢٤ ساعة بدون أي رسوم إضافية.',
        },
      ],
    },
    modal: {
      title: 'ابدأ تجربة أودو كوميونيتي لشركتك',
      subtitle: 'احصل على بيئة تجريبية Sandbox مجانية أو تحدث مع استشاري الحلول التشغيلية بالقاهرة اليوم.',
      fullName: 'الاسم بالكامل *',
      companyName: 'اسم الشركة *',
      phone: 'رقم الموبايل / واتساب *',
      email: 'البريد الإلكتروني للعمل *',
      planInterest: 'اختر باقة الخدمة التي تهمك',
      planOption1: '٥,٠٠٠ ج.م / شهرياً — نظام أودو المدار فقط',
      planOption2: '١٠,٠٠٠ ج.م / شهرياً — النظام المدار + موظف تشغيل OPEX متفرغ',
      notes: 'هل لديك متطلبات خاصة أو مودولات تود الاستفسار عنها؟',
      submitBtn: 'طلب تجربة البيئة والأنظمة مجاناً',
      successTitle: 'تم استلام طلبك بنجاح!',
      successDesc: 'شكراً لك! سيتواصل معك استشاري الحلول في أودو عبر الواتساب/الهاتف خلال ساعتي عمل.',
      close: 'إغلاق النافذة',
    },
    footer: {
      tagline: 'تمكين الشركات المصرية والإقليمية بقوة Odoo Community المفتوح المصدر وخبرة الكوادر التشغيلية المخصصة.',
      quickLinks: 'روابط السريعة',
      contactInfo: 'مكتب القاهرة والتواصل',
      location: 'القرية الذكية والقرية التكنولوجية بالقاهرة الجديدة، مصر',
      rights: '© ٢٠٢٦ أودو كوميونيتي مصر. جميع الحقوق محفوظة.',
      disclaimerText: 'أودو (Odoo) هي علامة تجارية مسجلة لشركة Odoo S.A. "أودو كوميونيتي مصر" مزود مستقل متخصص في نشر نسخة Odoo Community وخدمات التشغيل المدار.',
    },
  },
};
