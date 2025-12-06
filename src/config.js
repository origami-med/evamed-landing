// Single source of truth for all content - Edit only this file to update the site

export const config = {
  // Meta Information & SEO
  meta: {
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
    title: "TESTIMONIALS",
    subtitle: "What our clients are saying",
    items: [
      {
        text: "This is the space to share a review from one of the business's clients or customers.",
        author: "Leah Yurfset",
      },
      {
        text: "This is the space to share a review from one of the business's clients or customers.",
        author: "Roy Gold",
      },
      {
        text: "This is the space to share a review from one of the business's clients or customers.",
        author: "Nela Yliuay",
      },
    ],
  },

  // Contact Form
  contact: {
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
        useApi: false,
        // API endpoint URL (if useApi is true)
        apiEndpoint: null,
        // Success message
        successMessage: "Thank you for contacting us! We will get back to you soon.",
        // Error message
        errorMessage: "There was an error submitting your form. Please try again.",
      },
    },
  },

  // Footer
  footer: {
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
    privacyPolicy: {
      lastUpdated: "January 2025",
      content: [
        {
          type: "paragraph",
          text: "At evamed, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our EMR platform.",
        },
        {
          type: "heading",
          text: "Information We Collect",
        },
        {
          type: "paragraph",
          text: "We collect information that you provide directly to us, including:",
        },
        {
          type: "list",
          items: [
            "Personal identification information (name, email, phone number)",
            "Professional information (clinic details, specialization)",
            "Patient data (stored locally on your device)",
            "Usage data and analytics",
          ],
        },
        {
          type: "heading",
          text: "How We Use Your Information",
        },
        {
          type: "paragraph",
          text: "We use the information we collect to:",
        },
        {
          type: "list",
          items: [
            "Provide, maintain, and improve our services",
            "Process transactions and send related information",
            "Send technical notices and support messages",
            "Respond to your comments and questions",
          ],
        },
        {
          type: "heading",
          text: "Data Security",
        },
        {
          type: "paragraph",
          text: "We implement appropriate technical and organizational measures to protect your personal information. Patient data is stored locally on your device, giving you complete control over your data.",
        },
        {
          type: "heading",
          text: "Contact Us",
        },
        {
          type: "paragraph",
          text: "If you have any questions about this Privacy Policy, please contact us at contact@evamed.in",
        },
      ],
    },
    termsAndConditions: {
      lastUpdated: "January 2025",
      content: [
        {
          type: "paragraph",
          text: "Please read these Terms and Conditions carefully before using the evamed EMR platform.",
        },
        {
          type: "heading",
          text: "Acceptance of Terms",
        },
        {
          type: "paragraph",
          text: "By accessing and using evamed, you accept and agree to be bound by the terms and provision of this agreement.",
        },
        {
          type: "heading",
          text: "Use License",
        },
        {
          type: "paragraph",
          text: "Permission is granted to temporarily use evamed for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
        },
        {
          type: "list",
          items: [
            "Modify or copy the materials",
            "Use the materials for any commercial purpose",
            "Attempt to reverse engineer any software contained in evamed",
            "Remove any copyright or other proprietary notations from the materials",
          ],
        },
        {
          type: "heading",
          text: "Disclaimer",
        },
        {
          type: "paragraph",
          text: "The materials on evamed are provided on an 'as is' basis. evamed makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        },
        {
          type: "heading",
          text: "Limitations",
        },
        {
          type: "paragraph",
          text: "In no event shall evamed or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on evamed, even if evamed or an authorized representative has been notified orally or in writing of the possibility of such damage.",
        },
        {
          type: "heading",
          text: "Revisions",
        },
        {
          type: "paragraph",
          text: "evamed may revise these terms of service at any time without notice. By using this platform, you are agreeing to be bound by the then current version of these terms of service.",
        },
        {
          type: "heading",
          text: "Contact Us",
        },
        {
          type: "paragraph",
          text: "If you have any questions about these Terms and Conditions, please contact us at contact@evamed.in",
        },
      ],
    },
  },
};

