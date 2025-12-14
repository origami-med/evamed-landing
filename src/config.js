// Single source of truth for all content - Edit only this file to update the site

export const config = {
  // Meta Information & SEO
  meta: {
    visible: true,
    title: "evamed - India's Most Doctor Friendly EMR",
    description: "India's most doctor-friendly EMR system. Complete prescriptions in 30 seconds, manage billing, follow-ups, and patient data with complete local control. Forever Free plan available.",
    keywords: "EMR, Electronic Medical Records, Doctor Software, Medical Practice Management, India EMR, Healthcare Software, Patient Management",
    author: "Innovea Logitech",
    canonicalUrl: "https://evamed.in",
    ogImage: "https://static.wixstatic.com/media/f3848c_13b74b6036434bb2abdc727c815216ca%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/f3848c_13b74b6036434bb2abdc727c815216ca%7Emv2.png",
    twitterCard: "summary_large_image",
  },

  // Site Branding
  site: {
    visible: true,
    brandName: "evamed",
    companyName: "Innovea Logitech",
    tagline: "India's most Doctor Friendly EMR",
    logoUrl: "https://static.wixstatic.com/media/f3848c_13b74b6036434bb2abdc727c815216ca%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/f3848c_13b74b6036434bb2abdc727c815216ca%7Emv2.png",
    faviconUrl: "https://static.wixstatic.com/media/f3848c_13b74b6036434bb2abdc727c815216ca%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/f3848c_13b74b6036434bb2abdc727c815216ca%7Emv2.png",
    fonts: {
      googleFonts: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Mulish:wght@400;500;600;700&display=swap",
    },
  },

  // Navigation
  navigation: {
    visible: true,
    header: [
      { text: "Features", href: "#features" },
      { text: "Pricing", href: "#pricing" },
      { text: "Contact Us", href: "#contact", isCta: true },
    ],
    footer: {
      quickLinks: [
        { text: "Pricing", href: "#pricing" },
        { text: "Features", href: "#features" },
        { text: "Contact", href: "#contact" },
      ],
      legal: [
        { text: "Privacy Policy", href: "#", modalId: "privacy" },
        { text: "Terms and Conditions", href: "#", modalId: "terms" },
      ],
    },
  },

  // Hero Section
  hero: {
    visible: true,
    title: "India's most",
    titleHighlight: "Doctor Friendly EMR",
    subtitle: "Only our EMR combines an industry-first True Private Network for total local data control, a Forever Free plan to explore without limits, and more features than any competing platform.",
    buttons: [
      { text: "Contact Us", href: "#contact", isPrimary: true },
      { text: "More on Youtube", href: "https://www.youtube.com/@evamed-emr", isPrimary: false, target: "_blank" },
    ],
  },

  // Features Section
  features: {
    visible: true,
    title: "Why You'll Love It",
    subtitle: "Consultations | Procedures | Billing | Reminders | Research | Pharmacy | WhatsApp",
    items: [
      {
        tag: "Smart Prescriptions",
        title: "Complete prescriptions and procedures within 30 seconds",
        bullets: [
          "Instantly access 3L+ medicines and generic names kept up to date",
          "Quickly Dictate prescriptions with the Power of AI",
          "Send prescriptions in local languages instantly with WhatsApp",
          "Capture photos from your phone; compress and save them",
        ],
        videoUrl: "https://www.youtube.com/embed/YznmKYLcJJ8",
        videoTitle: "evamed Smart Prescriptions Feature",
      },
      {
        tag: "Patient Growth",
        title: "Improve conversion and keep track of procedures",
        bullets: [
          "Create and share Treatment Plans and estimates",
          "Capture and compare before and after images",
          "Create Packages for easy reuse",
        ],
        videoUrl: "https://www.youtube.com/embed/xP5naBDGTxA",
        videoTitle: "evamed Patient Growth Feature",
      },
      {
        tag: "Practice Management",
        title: "Handle Billing, Follow-Ups, and Insights with Ease",
        bullets: [
          "Send GST-compliant bills to patients instantly without errors",
          "Never miss a follow-up with WhatsApp reminders",
          "Quickly see trends and research patient data to make informed decisions.",
        ],
        videoUrl: "https://www.youtube.com/embed/pbx590JT2qw",
        videoTitle: "evamed Practice Management Feature",
      },
      {
        tag: "Data Security",
        title: "Total Control and Full Flexibility over Patient Data",
        bullets: [
          "Keep full control with patient data stored locally on computer",
          "Access patient data from anywhere with evamed True Private Network",
          "Work seamlessly with your Laptop, mobile, Tab with instant sync",
        ],
        videoUrl: "https://www.youtube.com/embed/M81fHd1Jhg8",
        videoTitle: "evamed Data Security Feature",
      },
    ],
  },

  // Pricing Section
  pricing: {
    visible: true,
    title: "Manage Patients Seamlessly",
    titleLine2: "Stay Legally Compliant",
    plans: [
      {
        name: "Forever Free",
        price: "Free",
        period: "Trial at your own pace",
        features: [
          "All features in Premium Plan",
          "Access to all future updates",
          "Add upto 10 patients a month",
        ],
        ctaText: "Contact Us",
        ctaHref: "#contact",
        isFeatured: false,
        pricingDetails: null,
        note: null,
        taxNote: null,
      },
      {
        name: "Premium",
        price: "₹1700",
        pricePeriod: "/mo*",
        period: "Billed Annually",
        badge: "Best Value",
        isFeatured: true,
        pricingDetails: [
          { label: "Single Doctor", value: "₹1700", strikethrough: "₹2000" },
          { label: "Two Doctors", value: "+₹500", strikethrough: "+₹1000" },
        ],
        features: [
          "Single Clinic",
          "All EMR Features (Consultations, Billing, etc.)",
          "Multiple device access",
        ],
        note: "For >2 Doctors, contact for custom pricing",
        taxNote: "* Price excluding taxes",
        ctaText: "Contact Us",
        ctaHref: "#contact",
      },
      {
        name: "Premium Plus",
        price: "₹1700",
        pricePeriod: "/mo*",
        period: "Billed Annually",
        isFeatured: false,
        pricingDetails: [
          { label: "Single Doctor", value: "₹1700", strikethrough: "₹2500" },
          { label: "Two Doctors", value: "+₹1000", strikethrough: "+₹1500" },
        ],
        features: [
          "Multiple Clinics",
          "All EMR Features (Consultations, Billing, etc.)",
          "Multiple device access",
        ],
        note: "For >2 Doctors, contact for custom pricing",
        taxNote: "* Price excluding taxes",
        ctaText: "Contact Us",
        ctaHref: "#contact",
      },
    ],
    globalNote: "* Price excluding taxes",
  },

  // Add-ons Section
  addons: {
    visible: true,
    title: "Unlock the full potential of",
    titleHighlight: "evamed",
    titleSuffix: "with our Add-ons",
    items: [
      {
        title: "Integrated Pharmacy",
        description: "Manage your own in-clinic pharmacy in sync with your consultations.",
        period: "Billed Annually",
        price: "₹550",
        pricePeriod: "/month*",
        strikethrough: "₹1000",
        taxNote: "* Price excluding taxes",
      },
      {
        title: "AI Dictation",
        description: "Fast, accurate speech-to-text built on Google's latest AI models.",
        period: "Billed Annually",
        price: "₹6000",
        pricePeriod: "/year*",
        strikethrough: null,
        taxNote: "* Price excluding taxes",
      },
    ],
  },

  // Testimonials Section
  testimonials: {
    visible: false,
    title: "TESTIMONIALS",
    subtitle: "What our doctors are saying",
    items: [
      {
        text: "evamed has transformed my practice completely. I can now complete prescriptions in under 30 seconds, and the AI dictation feature is incredibly accurate. My patients love receiving prescriptions via WhatsApp in their local language. This is truly India's most doctor-friendly EMR!",
        author: "Dr. Rajesh Kumar",
        avatar: "https://ui-avatars.com/api/?name=Dr+Rajesh+Kumar&background=00C9B7&color=fff&size=128&bold=true",
      },
      {
        text: "As a dermatologist, I need to capture and compare before-after images regularly. evamed's patient growth features make this so easy. The treatment plans and estimates help me convert more consultations. The local data storage gives me complete peace of mind about patient privacy.",
        author: "Dr. Priya Sharma",
        avatar: "https://ui-avatars.com/api/?name=Dr+Priya+Sharma&background=008FBD&color=fff&size=128&bold=true",
      },
      {
        text: "Running multiple clinics was a challenge until I found evamed Premium Plus. The True Private Network lets me access patient data from anywhere securely. GST-compliant billing is automatic, and I never miss follow-ups thanks to WhatsApp reminders. Highly recommended!",
        author: "Dr. Amit Patel",
        avatar: "https://ui-avatars.com/api/?name=Dr+Amit+Patel&background=0065C3&color=fff&size=128&bold=true",
      },
    ],
  },

  // Contact Form
  contact: {
    visible: true,
    title: "Contact us",
    form: {
      name: {
        label: "Name",
        placeholder: "Enter your name",
        required: true,
        type: "text",
        fieldType: "CONTACTS_FIRST_NAME",
      },
      mobile: {
        label: "Mobile Number",
        placeholder: "Enter your mobile number",
        required: true,
        type: "tel",
        inputMode: "tel",
        fieldType: "CONTACTS_PHONE",
      },
      email: {
        label: "Email",
        placeholder: "Enter your email",
        required: true,
        type: "email",
        fieldType: "CONTACTS_EMAIL",
      },
      submitText: "Submit",
      // Form submission configuration
      submission: {
        // Set to true if you want to use an API endpoint
        useApi: true,
        // API endpoint URL (if useApi is true)
        // Google Apps Script Web App URL
        apiEndpoint: "https://script.google.com/macros/s/AKfycbz_EYohPtrLzyFuAclo0U4VkFe49cdVZ1aXVM1dHzrXJZLNv6atbUOtxZSsoplfpTwo/exec",
        // Submission type: 'formspree' or 'google-sheets'
        submissionType: 'google-sheets',
        // Success message
        successMessage: "Thank you for contacting us! We will get back to you soon.",
        // Error message
        errorMessage: "There was an error submitting your form. Please try again.",
      },
    },
  },

  // Footer
  footer: {
    visible: true,
    description: "India's most Doctor Friendly EMR",
    copyright: "© 2025 by Innovea Logitech",
    social: [
      { 
        name: "Email", 
        icon: "✉", 
        imageUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg",
        href: "mailto:contactus@evamed.in", 
        ariaLabel: "Gmail" 
      },
      { 
        name: "YouTube", 
        icon: "▶", 
        imageUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg",
        href: "https://www.youtube.com/@evamed-emr", 
        ariaLabel: "Youtube", 
        target: "_blank" 
      },
      { 
        name: "Instagram", 
        icon: "📷", 
        imageUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
        href: "https://www.instagram.com/evamed.tech/", 
        ariaLabel: "Instagram", 
        target: "_blank" 
      },
      { 
        name: "Facebook", 
        icon: "f", 
        imageUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg",
        href: "https://www.facebook.com/profile.php?id=61578981484207", 
        ariaLabel: "Facebook", 
        target: "_blank" 
      },
    ],
  },

  // Legal Content
  legal: {
    visible: true,
    privacyPolicy: {
      lastUpdated: "28 September 2025",
      content: [
        {
          type: "paragraph",
          text: "We place the highest importance on respecting and protecting your privacy. Our relationship with you is our most important asset. We want you to be assured of your security and feel comfortable and confident when using the Evamed software (\"Software\"). The objective of this Policy is for you to better understand the type of information we intend to collect from you and the purpose for which the information collected by us will be used; the use of such information by the parties with whom we will share your information; our policy regarding cookies and identity theft instances; the data security practices of the third party website links available on our Platform; the data retention policy and information security measures implemented by us; our disclaimers in relation to Software and the Platform; our policy regarding the changes and updates to this Policy; our policy with respect to withdrawal of your consent; and legal rights and obligations in case of disputes and grievances.",
        },
        {
          type: "paragraph",
          text: "This Privacy Policy (the \"Policy\") applies to the licensing, use of or access of the Software and/or on its mobile/web applications (hereinafter, collectively referred to as the \"Platform\"), by the User (hereinafter \"you\" or \"your\").",
        },
        {
          type: "paragraph",
          text: "The Platform is provided by Innovea Logitech Private Limited (hereinafter \"Company\" or \"our\" or \"we\" or \"us\"), a company incorporated under the Companies Act, 2013, having its registered office at A107, Wall Street 2, Ellis Bridge, Ahmedabad - 380006, Gujarat.",
        },
        {
          type: "paragraph",
          text: "This Policy is published in accordance with the provisions of Rule 3(1)(a) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and Rule 4 of the (Indian) Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal data or Information) Rules, 2011 framed under the (Indian) Information Technology Act, 2000 (as amended from time to time) and that requires publishing the privacy policy for usage of Platform and Software. This Policy (read with the Terms of Use (hereinafter the \"Terms\") constitute a binding and legally enforceable contract between the Company and User.",
        },
        {
          type: "paragraph",
          text: "By using the Platform or availing the Software, you agree to this Policy. Subject to applicable laws, the terms of this Policy (and any changes thereto) will become applicable to you retrospectively on and from the date of your first use of the Platform. If you do not agree to the terms of this Policy, please do not use our Platform and Software. Further, by using this Platform, you also confirm that you are either the owner of or are duly authorized to use and share the information that the Platform may require, and that you using the Platform does not violate any applicable law or contract by which you may be bound or is otherwise prejudicial to any person. You agree to indemnify the Company, its employees, directors, officers, agents, business associates, affiliates and agents from any loss, damage, expenses or other adverse consequence they suffer as a result of your usage of the Platform unless such loss, damage, expenses or other adverse consequence can be attributed to our act or omission.",
        },
        {
          type: "paragraph",
          text: "The Policy extends to the following information: (a) information you provide us, or the information otherwise collected by us through your usage of our Platform and use of Software (see Terms); (b) information collected while you use the Platform (c) information collected from any other source; or (d) information generated while availing the Software including but not limited to any transactional information. We aim for full transparency on how we gather, use, and share your information.",
        },
        {
          type: "paragraph",
          text: "This Policy should be read in consonance with the Terms of Use (available at www.evamed.in/terms) and they are incorporated by reference. Capitalised terms not defined herein, shall have the meaning set out in the Terms.",
        },
        {
          type: "heading",
          text: "1. Information we collect",
        },
        {
          type: "paragraph",
          text: "1.1 When you use our Platform or avail the Software, we collect the following certain sensitive personal data and information (\"SPDI\") during your use of the Platform: (i) name; (ii) phone number; (iii) medical registration number and specialisation; and (iv) pincode. This SPDI is only collected and used for the purpose of user verification and maintaining safety and legitimacy of usage of the Platform. We do not share your data with any third party and/or store any personal information, any information is stored in your servers and/devices and is not stored by Evamed on its servers. No liability pertaining to the authenticity/ genuineness of the information disclosed will lie on the Company. Further, the Company will not be in any way responsible to verify any information obtained from you.",
        },
        {
          type: "paragraph",
          text: "1.2 The Company shall collect and use SPDI including financial data and medical records only upon obtaining the express prior consent of the user. The Company shall implement reasonable security practices as per IS/ISO/IEC 27001 standards to safeguard such data. The SPDI will not be disclosed to any third party without the user's prior consent unless required under applicable law.",
        },
        {
          type: "paragraph",
          text: "1.3 We collect mobile numbers, e-mail addresses that you provide us on the Platform and use the same for sending various communications to you.",
        },
        {
          type: "paragraph",
          text: "1.4 When you access or use our Software, we do not collect personally identifiable information regarding your interactions on the Software other than those specifically mentioned in this Policy. We collect crash logs and diagnostic information, which are used solely for the purpose of improving system performance and stability of the Platform. All such data is anonymized and does not identify any individual user.",
        },
        {
          type: "paragraph",
          text: "1.5 We collect certain traffic data with respect to the use of our website and Platform, which includes: (1) IP addresses; (2) domain servers; (3) types of computers accessing the Site / operating systems / operating system versions; (4) types of web browsers /browser plug-ins used to access the Site; (5) crash system activity; (6) referring sites which may have lead you to our Platform; and (6) other information associated with the interaction of your browser and the Platform (collectively \"Traffic Data\").",
        },
        {
          type: "paragraph",
          text: "1.6 We share SPDI and Traffic Data with our business partners who assist us by performing core services (such as hosting, billing, fulfillment, or data storage and security) related to our operation of the Platform and/or by making certain interactive tools available to you. Those business partners shall be bound to uphold the same standards of security and confidentiality that we have promised to you in this Privacy Policy, and they will only use your SPDI to carry out their specific business obligations and provide you with the requisite services.",
        },
        {
          type: "heading",
          text: "2. How we use the information",
        },
        {
          type: "paragraph",
          text: "2.1 We do not sell or share your personal or financial information to anyone, except to the extent authorised by you in accordance with this Policy. However, notwithstanding anything contained in this Policy, you expressly acknowledge, consent and agree to the following terms on information use and further authorise us to access and use your information in the manner set out below:",
        },
        {
          type: "list",
          items: [
            "to use your information to manage your account, to contact you and to operate, improve, and deliver our Platform. We use your information to give you a customized, interactive experience as you use our Platform and avail the Software.",
            "to use your information for maintaining a record of such information and your transactions in a secure and confidential manner, and as required under the applicable laws.",
            "to use services of third parties to provide the Platform for you, who are bound to keep such information confidential including but not limited to third party payment aggregators, cloud based service providers.",
            "to troubleshoot software bugs and operational issues, to conduct data analysis, testing and research and to monitor and analyse usage and activity trends. Information collected may also be used to share communications to you about our products & services, provide additional features through cookies and to detect and/or prevent any fraudulent/criminal/prohibited activity as per applicable laws.",
            "to use the data in an aggregated/compiled form to produce statistical/demographic analyses for marketing, strategy and other business purposes. However, these will be used in ways that will not be able to identify you or link any specific information to an individual. Such aggregated information and results/analyses shall be our property and you will not be entitled to any compensation for the use thereof.",
            "to share your information with judicial, administrative and regulatory entities to comply with any legal and regulatory requirements.",
            "to summarize information about your usage and combine it with that of others to learn about the use of the Platform and Software and further to help us develop new products and services.",
            "to use your information to manage your account, to contact you and to operate, improve, and deliver our products and services, including the Platform. You further acknowledge, agree and authorise us to use your information for market research, project planning, product development, troubleshoot problems, analyse user behaviour, marketing purposes, and promotions.",
            "to use your information to compute the charges for the products and services you purchase.",
            "to use the contact information to communicate with you. You further expressly consent and authorise us to send you messages on your mobile number, call you on your mobile number, send you messages and communicate with you in any other manner including for the purpose of providing you Platform and Software and for marketing and promotional purposes.",
            "to share your information with identified business partners, our third party service providers and our affiliates to host, use, copy, transmit, process, store, share, analyse, display, make derivations, and back up all data you submit to us through the Software and as required by us, including but not limited to personal data and any other data relating to financial information of yourself and others, for the purposes of (a) providing the Software requested by you, as set out in this Policy and enable you to use the Platform (including the services provided by our business partners, third parties and affiliates; (b) allow us to improve, develop and protect the Software; (c) create, market or provide new services through the Company or its business partners, group companies and affiliates; (d) communicate with you about our Platform; and (e) send you information we think may be of interest to you. You agree, represent and warrant that you have, and you will maintain, all rights to allow the Company, our business partners and/ or any third-party service providers, and our affiliates, to host, use, compile, copy, transmit, process, store, share, analyse, display, make derivations, and back up all your data and retain aggregated customer data, including without limitation in combination with data of other users.",
            "to conduct audit of your records without any notice in case of apprehension of fraud;",
            "to retain/ store your data and confidential information, of any nature (either wholly or partially), in the Company's servers or cloud or otherwise in any other medium as may be transmitted/ processed/ passed through the Platform.",
          ],
        },
        {
          type: "paragraph",
          text: "2.2 If you choose to License the Software provided by our business partners or our third-party service providers through the Platform, your information may be governed by the terms of the privacy policy of such business partners and the third-party service providers. We will not be responsible or liable for the privacy practices of such business partners or any third-party service providers.",
        },
        {
          type: "paragraph",
          text: "2.3 We may, share/ transfer/ assign all of your information with any other business entities, including in the event of a merger, sale, re-organization, amalgamation, joint ventures, assignment, restructuring of business or transfer or disposition of all or any portion of our business.",
        },
        {
          type: "heading",
          text: "3. Cookie Policy",
        },
        {
          type: "paragraph",
          text: "3.1 Like many websites, we use cookies, flash cookies, web beacons or similar technologies. \"Cookies\" are small text files that are stored on your computer or other device when you visit certain online pages that record your preferences and actions. We use cookies for a variety of purposes, including remembering you and your preferences, tracking your use of our Platform, and facilitating your use of Platform. Most web browsers automatically accept cookies, but, if you prefer, you can usually modify your browser setting to decline cookies. However, please note that refusing a cookie may limit your access and/or use of Platform and Software.",
        },
        {
          type: "heading",
          text: "4. Identity Theft",
        },
        {
          type: "paragraph",
          text: "4.1 There may be instances when you receive a seemingly legitimate looking e-mail asking your personal information from you such as your credit card details, bank account details, one-time passwords, contact information, etc. The Company will never ask for such information from you via e-mail.",
        },
        {
          type: "paragraph",
          text: "4.2 Such activities are usually carried on by unauthorized individuals and are illegal in nature. They are called phishing or identity theft. In case of any suspicion of such activity or on receiving such an e-mail you are certain it was not sent by us. We advise you to not respond to such mail and to take whatever action you see fit.",
        },
        {
          type: "heading",
          text: "5. Links to Other Sites",
        },
        {
          type: "paragraph",
          text: "Our Platform provides links to other websites and third-party platforms (\"Third-Party Platforms\"). Such Third-Party Platforms may collect information about you. We are not responsible for the privacy practices or the content of those linked websites and Third-Party Platforms. We recommend you review the privacy policies of such Third-Party Platforms. In case you choose to log-in through your Google account, we will access information from your Google accounts once they give us permission to do so whilst using the Google-related functionality (as the case maybe) of the Platform. Once permission is granted, the Platform accesses a user's account details, mobile number, email address, contact list and location (as applicable). The respective privacy policies of Google will also be applicable.",
        },
        {
          type: "heading",
          text: "6. Data Retention by Us",
        },
        {
          type: "paragraph",
          text: "6.1 We will retain your information only for as long as is necessary for the purposes set out in this Policy. We will retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.",
        },
        {
          type: "paragraph",
          text: "6.2 We encourage you to review the information and inform about any discrepancies and information found to be inaccurate shall be corrected or amended. Please reach out to us at support@evamed.in in case you would like to review the information collected by us.",
        },
        {
          type: "paragraph",
          text: "6.3 You shall at all times, take adequate necessary precautions, at your end, to preserve the integrity and security of your data which shall include and not be limited to your personal information. All information disclosed by you shall be deemed to be disclosed willingly and without any coercion.",
        },
        {
          type: "heading",
          text: "7. Log Data",
        },
        {
          type: "paragraph",
          text: "We want to inform you that whenever you use our Platform or avail the Software, we collect data from your device called Log Data. This Log Data may include information such as your device's Internet Protocol (\"IP\") address, device name, operating system version, configuration of the app when utilising the Service, the time and date of your use of the Service, and other statistics.",
        },
        {
          type: "heading",
          text: "8. Information Security",
        },
        {
          type: "paragraph",
          text: "We work to protect your information from loss, misuse or unauthorized alteration by using industry-recognized security safeguards, coupled with carefully developed security procedures and practices. We maintain electronic and procedural safeguards of all information. We use both internal and external resources to review our security procedures.",
        },
        {
          type: "heading",
          text: "9. Disclaimer",
        },
        {
          type: "paragraph",
          text: "9.1 We make no representation as to providing or storing back-up copies of any information submitted to us. You shall be solely responsible to ensure that you maintain back-up copies of such information and in the event of any malfunctioning or failing of the Platform for any reason whatsoever (including on account of maintenance), you may be required to resubmit such information.",
        },
        {
          type: "paragraph",
          text: "9.2 Although, we take appropriate steps to maintain the security of information we collect from you, we assume no responsibility of whatsoever nature as to make good the losses and damages you may incur, due to privacy and/or security breach of your information. We shall not be liable for any loss or damage sustained by reason of disclosure (inadvertent or otherwise) of any information and/or omission or inaccuracy with respect to any information so disclosed and used whether or not in pursuance of a legal process or otherwise.",
        },
        {
          type: "paragraph",
          text: "9.3 When payment information is being transmitted on or through the Platform, it will be protected by encryption technology of a third-party payment services providers, including payment gateways. You agree, acknowledge and consent to such sharing of your information with third party service providers to process payments and manage your payment-related information. The Company does not guarantee that the transmissions of your payment-related information or other information will always be secure.",
        },
        {
          type: "heading",
          text: "10. Changes to this Policy",
        },
        {
          type: "paragraph",
          text: "Please note that this Policy may change from time to time. The \"Last Updated\" date at the top of the Policy indicates when the most recent modifications were made to the Policy. We reserve the right to modify or amend the terms of our Policy from time to time. We will endeavour to post any changes to this Policy on our webpage and, if the changes are significant, to provide a more prominent notice. While we will make reasonable efforts to keep you posted on any updates to this Policy, to make sure that you are aware of any changes, we recommend that you review this Policy periodically. In the event we modify this Policy, your continued use of the Platform and Software will signify your acceptance of the modified Policy, and will be adequate proof that you have expressly agreed to the terms of this Policy which shall apply from the date of your first use of the Platform.",
        },
        {
          type: "heading",
          text: "11. Withdrawal of Consent by You",
        },
        {
          type: "paragraph",
          text: "You may choose to withdraw your consent provided hereunder at any point in time. Such withdrawal of consent must be sent in writing to support@evamed.in. In case you later withdraw your consent, we request you not to access the Platform and/or use the Software and also reserve the right to not provide you any Software through the Platform.",
        },
        {
          type: "heading",
          text: "12. Governing Law",
        },
        {
          type: "paragraph",
          text: "This Policy shall be governed by and construed and enforced in accordance with the laws of India. Any controversies, conflicts, disputes, or differences arising out of this Policy shall be resolved by arbitration in Mumbai in accordance with the Arbitration and Conciliation Act, 1996 for the time being in force, which is deemed to be incorporated by reference in this Clause. The tribunal shall consist of 1 (one) arbitrator appointed by us. The language of the arbitration shall be English. The parties to the arbitration shall keep the arbitration confidential and not disclose to any person, other than on a need to basis or to legal advisors, unless required to do so by law. The decision of the arbitrator shall be final and binding on all the Parties hereto. Subject to other provisions in this Clause, courts in Mumbai shall have exclusive jurisdiction over all issues arising out of this Policy.",
        },
        {
          type: "heading",
          text: "13. Contact Us",
        },
        {
          type: "paragraph",
          text: "If there are any questions or grievances regarding this Policy or the safety of your information, you may contact us at the address given below.",
        },
        {
          type: "paragraph",
          text: "Grievance Officer",
        },
        {
          type: "paragraph",
          text: "Name: Jay Parikh",
        },
        {
          type: "paragraph",
          text: "Address: A107, Wall Street 2, Ellis Bridge, Ahmedabad - 380006, Gujarat.",
        },
        {
          type: "paragraph",
          text: "Email: jay@evamed.in",
        },
      ],
    },
    termsAndConditions: {
      lastUpdated: "28 September 2025",
      content: [
        {
          type: "paragraph",
          text: "The Website Terms and Conditions and the Software Terms and Conditions shall together be referred to as \"Terms of Use\" and shall govern the use of the Site and the Software by the Users.",
        },
        {
          type: "heading",
          text: "I. Website Terms and Conditions",
        },
        {
          type: "heading",
          text: "1. Acceptance of Terms",
        },
        {
          type: "paragraph",
          text: "By accessing or using this website (\"Site\"), you agree to be bound by these Website Terms and Conditions (\"Terms\") and all applicable laws and regulations. If you do not agree with these Terms, you should not use or access this Site.",
        },
        {
          type: "heading",
          text: "2. Purpose of the Site",
        },
        {
          type: "paragraph",
          text: "The Site is intended solely to provide information about Innovea Logitech Private Limited's software products and related service packages. The Site does not itself provide access to or govern the use of the licensed software products. Use of, and access to, such software is subject to the Software Terms and Conditions, as set out below.",
        },
        {
          type: "heading",
          text: "3. Intellectual Property",
        },
        {
          type: "paragraph",
          text: "All content on this Site, including text, graphics, logos, images, and layout, is the property of Innovea Logitech Private Limited (\"Company\") or its licensors and is protected under applicable intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from the content without prior written consent of the Company.",
        },
        {
          type: "heading",
          text: "4. Permitted Use",
        },
        {
          type: "paragraph",
          text: "You may use the Site solely for personal or business informational purposes related to evaluating the Company's products and services. You may not:",
        },
        {
          type: "list",
          items: [
            "Use the Site for any unlawful, fraudulent, or harmful activity.",
            "Attempt to gain unauthorized access to the Site or its related systems.",
            "Use automated systems like bots or crawlers to extract information.",
          ],
        },
        {
          type: "heading",
          text: "5. Third-Party Links",
        },
        {
          type: "paragraph",
          text: "The Site may contain links to third-party websites for convenience. The Company does not endorse, control, or assume responsibility for the content, products, or services offered by such third parties.",
        },
        {
          type: "heading",
          text: "6. Disclaimer of Warranties",
        },
        {
          type: "paragraph",
          text: "The Site and its content are provided on an \"as is\" and \"as available\" basis. The Company makes no representations or warranties of any kind regarding the accuracy, reliability, or completeness of the information provided. To the fullest extent permitted by law, the Company disclaims all warranties, express or implied.",
        },
        {
          type: "heading",
          text: "7. Limitation of Liability",
        },
        {
          type: "paragraph",
          text: "To the fullest extent permitted by law, the Company, its officers, employees, or affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from or related to your use of, or inability to use, the Site.",
        },
        {
          type: "heading",
          text: "8. Privacy",
        },
        {
          type: "paragraph",
          text: "Your use of the Site may involve the collection and use of personal data. Please refer to our Privacy Policy, which explains how we collect, use, and protect your information.",
        },
        {
          type: "heading",
          text: "9. Changes to Terms",
        },
        {
          type: "paragraph",
          text: "The Company reserves the right to update or modify these Terms at any time without prior notice. Your continued use of the Site after any such changes constitutes acceptance of the revised Terms.",
        },
        {
          type: "heading",
          text: "10. Governing Law",
        },
        {
          type: "paragraph",
          text: "These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the courts at Mumbai.",
        },
        {
          type: "heading",
          text: "II. Software Terms and Conditions",
        },
        {
          type: "heading",
          text: "1. Introduction",
        },
        {
          type: "paragraph",
          text: "This Terms of Use is a legal agreement between you (either an individual or a single entity) and Innovea Logitech Private Limited (\"Licensor\") for the use of Evamed (\"Software\"). This Terms of Use governs your use of the Software provided by the Licensor. By clicking \"I Agree\" or installing or using the Software, you agree to be bound by the terms of this Terms of Use.",
        },
        {
          type: "heading",
          text: "2. License Grant",
        },
        {
          type: "paragraph",
          text: "Licensor grants you a revocable, non-exclusive, non-transferable, limited license to download, install, and use the Software solely for your personal, non-commercial purposes strictly in accordance with the terms of this Agreement.",
        },
        {
          type: "heading",
          text: "3. Restrictions on Use",
        },
        {
          type: "paragraph",
          text: "You agree not to, and you will not permit others to:",
        },
        {
          type: "list",
          items: [
            "Copy, modify, or create derivative works of the Software.",
            "Distribute, sell, transfer, sublicense, lease, lend, or rent the Software to any third party.",
            "Reverse engineer, decompile or disassemble the Software, except to the extent expressly permitted by applicable law.",
            "Remove, alter, or obscure any proprietary notices on the Software.",
            "Use the Software in any manner that could damage, disable, overburden, or impair the Software.",
            "Use the Software to create or distribute any malicious software or for any unlawful purpose.",
          ],
        },
        {
          type: "heading",
          text: "4. Related Agreements",
        },
        {
          type: "paragraph",
          text: "By agreeing to this Terms of Use, you also agree to comply with the Privacy policy, and any other agreements incorporated herein by reference.",
        },
        {
          type: "heading",
          text: "5. Jurisdiction",
        },
        {
          type: "paragraph",
          text: "This Terms of Use and any disputes arising out of or in connection with it will be governed by and construed in accordance with the laws of India, without regard to its conflict of laws principles. Any legal actions or proceedings arising out of this Terms of Use shall be brought exclusively in the courts of Mumbai.",
        },
        {
          type: "heading",
          text: "6. Intellectual Property & Copyright Infringement",
        },
        {
          type: "paragraph",
          text: "The Software and all rights, title, and interest in and to the Software, including all intellectual property rights therein, are and will remain the exclusive property of the Licensor. You agree to notify the Licensor promptly if you become aware of any infringement of the Licensor's intellectual property rights in the Software.",
        },
        {
          type: "heading",
          text: "7. Termination of Licensing",
        },
        {
          type: "paragraph",
          text: "Licensor may terminate this Terms of Use at any time if you fail to comply with any term(s) of this Agreement. Upon termination, you must cease all use of the Software and destroy all copies, full or partial, of the Software.",
        },
        {
          type: "heading",
          text: "8. Warranty Disclaimer",
        },
        {
          type: "paragraph",
          text: "THE SOFTWARE IS PROVIDED \"AS IS\" AND WITH ALL FAULTS. LICENSOR MAKES NO WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. YOU BEAR THE ENTIRE RISK AS TO SELECTING THE SOFTWARE FOR YOUR PURPOSES AND AS TO THE QUALITY AND PERFORMANCE OF THE SOFTWARE.",
        },
        {
          type: "heading",
          text: "9. Limitations of Liability",
        },
        {
          type: "paragraph",
          text: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL LICENSOR BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR USE OR INABILITY TO USE THE SOFTWARE; (B) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS AND/OR ANY PERSONAL INFORMATION STORED THEREIN; (C) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SOFTWARE; (D) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY BE TRANSMITTED TO OR THROUGH OUR SOFTWARE BY ANY THIRD PARTY; (E) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE INCURRED AS A RESULT OF YOUR USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE THROUGH THE SOFTWARE; AND/OR (F) THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY.",
        },
        {
          type: "heading",
          text: "10. Limits on Damage Liability",
        },
        {
          type: "paragraph",
          text: "Licensor's total liability to you for any damages (regardless of the form of action) shall not exceed the amount actually paid by you for the Software.",
        },
        {
          type: "heading",
          text: "11. Payment Terms",
        },
        {
          type: "paragraph",
          text: "11.1 License Fee",
        },
        {
          type: "paragraph",
          text: "You agree to pay an annual license fee for your use of the Software at the time of purchase of the Software (\"License Fee\"). The amount of the License Fee shall be based on the plan / package chosen by you at the time of purchase of the Software. The plan and fee details for each such package of the Software is available here. Your license to use the Software is contingent upon full payment of this fee and will be renewable annually.",
        },
        {
          type: "paragraph",
          text: "11.2 Payment Method",
        },
        {
          type: "paragraph",
          text: "Payment of the License Fee shall be made using the method(s) designated by the Licensor. The License Fee must be paid in Indian Rupees (INR), unless otherwise agreed in writing.",
        },
        {
          type: "heading",
          text: "12. Taxes",
        },
        {
          type: "paragraph",
          text: "All fees are exclusive of applicable taxes, duties, levies, or charges imposed by governmental authorities applicable today or that may become applicable at a future date. You are responsible for paying any such applicable taxes, other than taxes based on Licensor's income.",
        },
        {
          type: "heading",
          text: "13. No Refunds",
        },
        {
          type: "paragraph",
          text: "All payments made under this Agreement are non-refundable, including but not limited to payments made in error, for partial use, or due to termination of this Agreement by either party.",
        },
        {
          type: "heading",
          text: "14. Late Payments",
        },
        {
          type: "paragraph",
          text: "If full payment is not received within the agreed-upon timeframe, Licensor reserves the right to change the subscription model, suspend or terminate your access to the Software.",
        },
        {
          type: "heading",
          text: "15. License Activation",
        },
        {
          type: "paragraph",
          text: "Your license will be activated only upon receipt of full payment, unless otherwise specified in a separate written agreement.",
        },
        {
          type: "heading",
          text: "16. Term and Termination",
        },
        {
          type: "paragraph",
          text: "These Terms become effective on the date accepted and agreed by you below and will continue, unless earlier terminated in accordance with these Terms of Use, until the date we, in our sole discretion, make the Software (or some variation or successor thereof) generally publicly available under the Terms of Use. Without limiting our termination rights under the Terms of Use, these Terms may be terminated by (a) either party with or without cause upon thirty (30) days' advance written notice to the other party, or (b) by the Company with immediate effect if you are in violation of Section 20 (Anti-Corruption and Trade Compliance). Sections 4 (Acceptance of the Terms of Use), Section 16 (Term and Termination), Section 17 (Confidentiality), and 18 (Miscellaneous) of these Terms and the provisions of the Terms of Use, will survive any termination or expiration of these Terms.",
        },
        {
          type: "heading",
          text: "17. Confidentiality",
        },
        {
          type: "paragraph",
          text: "You acknowledge and agree that any and all Confidential Information, including the existence of these Terms, is Confidential Information of Company, and subject to the confidentiality obligations set forth in this Terms of Use.",
        },
        {
          type: "heading",
          text: "18. Miscellaneous",
        },
        {
          type: "paragraph",
          text: "You agree that any of your acts, omissions or obligations under this Terms of Use will be deemed to be \"access to or use of our Business Services\" for the purposes of these Terms (including the TOS) and any reference to \"Business Terms\" (including \"relating to, arising out of, or in any way in connection with ... Company's breach or alleged breach of these Business Terms\" ) in the TOS shall be a reference to these Terms (including the TOS). \"Including\" means \"including without limitation.\"",
        },
        {
          type: "heading",
          text: "19. Control of Software Distribution",
        },
        {
          type: "paragraph",
          text: "You may not distribute or make the Software available over a network where it could be used by multiple devices at the same time. You may not rent, lease, lend, sell, redistribute, or sublicense the Software.",
        },
        {
          type: "heading",
          text: "20. Anti-Corruption and Trade Compliance",
        },
        {
          type: "paragraph",
          text: "You represent and warrant that you have not engaged in, and covenant that you will refrain from, offering promising, paying, giving, authorizing the paying or giving of, soliciting, or accepting money or anything of value, including cash or a cash equivalent (including \"grease\", \"expediting\" or facilitation payments), discounts, rebates, gifts, meals, entertainment, hospitality, use of materials, facilities or equipment, transportation, lodging, or promise of future employment (\"Anything of Value\"), directly or indirectly, to or from: (a) (i) any official or employee of any multinational , national, regional, territorial , provincial or local government in any country , including any official or employee of any government department , agency, commission, or division; (ii) any official or employee of any government-owned or -controlled enterprise; (iii) any official or employee of any public educational, scientific, or research institution; (iv) any political party or official or employee of a political party ; (v) any candidate for public office; (vi) any official or employee of a public international organization; or (vii) any person acting on behalf of or any relative s, family, or household members of any of those listed above (collectively \"Government Official\") to (1) influence any act or decision of a Government Official in his or her official capacity, (2) induce a Government Official to use his or her influence with a government or instrumentality thereof, or (3) otherwise secure any improper advantage; or (b) any person in any manner that would constitute bribery or an illegal kickback , or would otherwise violate applicable anti­ corruption Laws, in each case, in connection with your participation in the Program under these Terms. You represent and warrant that you have not made a voluntary or other disclosure to, or received any notice, request for information , or citation from, or are aware of any past or present investigation of you by a multinational, national, regional, state , municipal , local, territorial, provincial or other governmental department, regulatory authority, commission, board, bureau, agency, ministry, self-regulatory organization or legislative, judicial or administrative body, including any other entities funded in whole or in part by any of the foregoing (\"Governmental Authority\") related to alleged violations of any anti­corruption Laws. Notwithstanding any other provision of these Terms or any applicable non-disclosure agreement, Evamed may disclose the existence and terms of these Terms, as well as information relating to any probable violation of this Section 15 (Anti-Corruption and Trade Compliance), to any Governmental Authority whenever Evamed considers it necessary or prudent to do so.",
        },
        {
          type: "heading",
          text: "21. Business Contact Information",
        },
        {
          type: "paragraph",
          text: "If you have any questions about this Terms of Use, please contact us at:",
        },
        {
          type: "paragraph",
          text: "Company Name: Innovea Logitech Private Limited",
        },
        {
          type: "paragraph",
          text: "Address: A107, Wall Street 2, Ellis Bridge, Ahmedabad - 380006, Gujarat",
        },
        {
          type: "paragraph",
          text: "Telephone number: +91 - 9137609995",
        },
        {
          type: "paragraph",
          text: "Email Address: contactus@evamed.in",
        },
        {
          type: "heading",
          text: "Updates & Changes",
        },
        {
          type: "paragraph",
          text: "Licensor reserves the right, at its sole discretion, to modify or replace this Terms of Use at any time. If a revision is material, we will provide at least 30 (Thirty) days' notice prior to any new terms taking effect. By continuing to access or use our Software after those revisions become effective, you agree to be bound by the revised terms.",
        },
        {
          type: "heading",
          text: "22. Consent to Use of Data",
        },
        {
          type: "paragraph",
          text: "You agree that Licensor may collect and use technical data and related information, including but not limited to technical information about your device, system and application software, and peripherals, that is gathered periodically to facilitate the provision of software updates, product support, and other services to you (if any) related to the Software. Licensor may use this information, as long as it is in a form that does not personally identify you, to improve its products or to provide services or technologies to you.",
        },
        {
          type: "paragraph",
          text: "By clicking \"I Agree\" or installing or using the Software, you acknowledge that you have read this Agreement, understand it, and agree to be bound by its terms and conditions.",
        },
        {
          type: "paragraph",
          text: "ACKNOWLEDGED AND AGREED",
        },
      ],
    },
  },
};

