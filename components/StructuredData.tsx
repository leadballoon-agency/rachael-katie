export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Rachael Katie Cosmetics",
    "alternateName": "RK Skincare Southampton",
    "url": "https://co2lasersouthampton.co.uk",
    "sameAs": [
      "https://co2lasersouthampton.co.uk",
      "https://rachaelkatiecosmetics.co.uk"
    ],
    "logo": "https://co2lasersouthampton.co.uk/images/RK-Skincare-logo-metallic-stack-squashed.png",
    "image": "https://co2lasersouthampton.co.uk/images/Rachael-1.jpg",
    "description": "Expert CO2 laser treatment clinic in Southampton led by Rachael Katie RN, specializing in acne scar treatment, wrinkle reduction, skin texture improvement, and anti-aging treatments with over 20 years of experience.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Southampton",
      "addressRegion": "Hampshire",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.9097",
      "longitude": "-1.4044"
    },
    "telephone": "+44 7846888649",
    "priceRange": "£££",
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-17:00"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CO2 Laser Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Single CO2 Laser Session",
            "description": "Professional fractional CO2 laser treatment for skin resurfacing"
          },
          "price": "395",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "CO2 Laser 3 Session Package",
            "description": "Comprehensive package for acne scars, wrinkles, and skin rejuvenation - Save £335"
          },
          "price": "850",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "PRP Enhancement Add-on",
            "description": "Platelet Rich Plasma therapy add-on for enhanced healing and results"
          },
          "price": "100",
          "priceCurrency": "GBP"
        }
      ]
    },
    "medicalSpecialty": [
      "Dermatology",
      "Aesthetic Medicine",
      "Laser Therapy"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "CO2 Laser Skin Resurfacing",
        "description": "Fractional CO2 laser treatment for acne scars, wrinkles, and skin rejuvenation"
      },
      {
        "@type": "MedicalProcedure",
        "name": "PRP Therapy",
        "description": "Platelet Rich Plasma therapy for enhanced healing and skin regeneration"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Acne Scar Treatment",
        "description": "Specialized CO2 laser treatment for acne scar reduction"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Pigmentation Treatment",
        "description": "Laser treatment for sun damage and pigmentation removal"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Stretch Mark Reduction",
        "description": "CO2 laser treatment for stretch mark improvement"
      }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rachael Katie Cosmetics CO2 Laser Southampton",
    "alternateName": "CO2 Laser Southampton",
    "url": "https://co2lasersouthampton.co.uk",
    "description": "Expert CO2 laser treatment for acne scars, wrinkles, skin texture & pigmentation in Southampton by Rachael Katie RN - over 20 years experience",
    "publisher": {
      "@type": "Organization",
      "name": "Rachael Katie Cosmetics"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://co2lasersouthampton.co.uk/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Rachael Katie Cosmetics",
    "alternateName": "RK Skincare Southampton",
    "image": "https://co2lasersouthampton.co.uk/images/clinic/inside1.webp",
    "description": "Expert CO2 laser treatment clinic in Southampton. Specializing in acne scar treatment, wrinkle reduction, skin resurfacing, and pigmentation removal with Rachael Katie RN - over 20 years experience.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "63 London Rd",
      "addressLocality": "Southampton",
      "addressRegion": "Hampshire",
      "postalCode": "SO15 2AB",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.9097",
      "longitude": "-1.4044"
    },
    "url": "https://co2lasersouthampton.co.uk",
    "telephone": "+447846888649",
    "email": "info@rachaelkatiecosmetics.co.uk",
    "priceRange": "££-£££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Clearpay"],
    "currenciesAccepted": "GBP",
    "areaServed": [
      {
        "@type": "City",
        "name": "Southampton"
      },
      {
        "@type": "City",
        "name": "Portsmouth"
      },
      {
        "@type": "City",
        "name": "Winchester"
      },
      {
        "@type": "City",
        "name": "Eastleigh"
      },
      {
        "@type": "City",
        "name": "Fareham"
      },
      {
        "@type": "City",
        "name": "Hampshire"
      }
    ],
    "hasMap": "https://maps.google.com/?q=63+London+Rd,+Southampton,+Hampshire+SO15+2AB",
    "medicalSpecialty": [
      "Dermatology",
      "Aesthetic Medicine",
      "Cosmetic Dermatology"
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "CO2 Laser Treatment Southampton",
    "description": "Expert fractional CO2 laser treatment for acne scars, wrinkles, skin texture, and pigmentation led by Rachael Katie RN with over 20 years experience",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Rachael Katie Cosmetics",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "63 London Rd",
        "addressLocality": "Southampton",
        "addressRegion": "Hampshire",
        "postalCode": "SO15 2AB",
        "addressCountry": "GB"
      },
      "telephone": "+447846888649"
    },
    "areaServed": [
      "Southampton",
      "Portsmouth",
      "Winchester",
      "Eastleigh",
      "Fareham",
      "Romsey",
      "Totton",
      "Chandlers Ford",
      "Bitterne",
      "Shirley",
      "Portswood",
      "Hampshire"
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://co2lasersouthampton.co.uk",
      "serviceSmsNumber": "+447846888649"
    },
    "category": "Medical Treatment",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CO2 Laser Treatment Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Single CO2 Laser Session",
          "price": "395",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "name": "CO2 Laser 3 Session Package",
          "price": "850",
          "priceCurrency": "GBP",
          "description": "Save £335 - Comprehensive package for acne scars, wrinkles, and skin rejuvenation"
        },
        {
          "@type": "Offer",
          "name": "PRP Enhancement Add-on",
          "price": "100",
          "priceCurrency": "GBP",
          "description": "Platelet Rich Plasma therapy add-on per session"
        }
      ]
    }
  }

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Rachael Katie Cosmetics",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "6",
      "bestRating": "5",
      "worstRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Maria B."
        },
        "datePublished": "2024-10-28",
        "reviewBody": "I honestly can't recommend Elanda enough! She's truly the best at what she does. She has so much experience, knowledge, and passion for her work. What makes her stand out is how she really listens and tailors everything perfectly to your needs.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Zoyyah I."
        },
        "datePublished": "2024-09-15",
        "reviewBody": "I've struggled with insecurity related to acne scars for years, and PRP has finally made a real difference! The clinic team - particularly Mavra was professional, I was super nervous and she took the time to explain the process and put me at ease.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Inês R."
        },
        "datePublished": "2024-09-20",
        "reviewBody": "I had PRP for the hyperpigmentation on my skin from Mavra and just 2 sessions in, I can already see a huge difference! Mavra explained the process thoroughly and made me feel so comfortable she was gentle, informative, and really took her time.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Olivia B."
        },
        "datePublished": "2024-10-25",
        "reviewBody": "Elanda is an exceptionally knowledgeable practitioner as well as being a nurse she is very patient through her consultations and will always explain everything to you and there is no pressure to have anything done that she doesn't feel is right for you.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Eva C."
        },
        "datePublished": "2024-09-18",
        "reviewBody": "I've been seeing Elanda at Eskeen Clinic for a course of PRP sessions and I couldn't be happier with the results! She's incredibly knowledgeable, professional, and really takes the time to explain everything so I feel informed and comfortable.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ljiljana P."
        },
        "datePublished": "2024-09-22",
        "reviewBody": "What an incredible young lady Elanda is! Knowledgable, polite, professional, explains everything to a detail. Shows all the products and labels. Done the job precisely and with care. Much better priced services than anywhere else too. Highly recommend!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ]
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rachael Katie",
    "jobTitle": "Aesthetic Nurse Specialist & Founder",
    "image": "https://co2lasersouthampton.co.uk/images/Rachael-1.jpg",
    "description": "Rachael Katie is an award-winning aesthetic nurse specialist with over 20 years of experience in advanced cosmetic treatments. As the founder of RK Skincare, she specializes in CO2 laser treatments, offering expert care for acne scarring, skin rejuvenation, and anti-aging procedures.",
    "url": "https://co2lasersouthampton.co.uk",
    "worksFor": {
      "@type": "Organization",
      "name": "Rachael Katie Cosmetics"
    },
    "knowsAbout": [
      "CO2 Laser Treatment",
      "Aesthetic Medicine",
      "Skin Resurfacing",
      "Acne Scar Treatment",
      "Anti-Aging Treatments",
      "Dermatology"
    ],
    "alumniOf": "Registered Nurse",
    "hasCredential": "Registered Nurse (RN)",
    "sameAs": [
      "https://co2lasersouthampton.co.uk",
      "https://rachaelkatiecosmetics.co.uk"
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is CO2 laser treatment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CO2 laser treatment is an advanced skin resurfacing procedure that uses fractional carbon dioxide laser technology to improve skin texture, reduce wrinkles, treat acne scars, and address various skin concerns. The laser creates controlled micro-injuries in the skin, stimulating collagen production and natural healing for dramatic results."
        }
      },
      {
        "@type": "Question",
        "name": "How many CO2 laser sessions do I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients achieve optimal results with 3 sessions of CO2 laser treatment, spaced 4-6 weeks apart. However, the exact number of sessions needed varies depending on your specific skin concerns and treatment goals. During your free consultation, we'll create a personalized treatment plan tailored to your needs."
        }
      },
      {
        "@type": "Question",
        "name": "What is the downtime after CO2 laser treatment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Downtime typically ranges from 5-7 days for fractional CO2 laser treatment. You can expect redness, swelling, and some peeling as your skin heals. Most patients can return to normal activities within a week, though complete healing and optimal results develop over several months as collagen remodeling occurs."
        }
      },
      {
        "@type": "Question",
        "name": "Does CO2 laser treatment hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We apply a topical numbing cream before treatment to minimize discomfort. Most patients describe the sensation as tolerable, similar to a warm prickling feeling. Post-treatment, the area may feel sunburned for a few days. We provide comprehensive aftercare instructions to ensure your comfort throughout the healing process."
        }
      },
      {
        "@type": "Question",
        "name": "How much does CO2 laser treatment cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A single CO2 laser session costs £395. We offer a 3-session package for £850, saving you £335. PRP enhancement can be added for £100 per session. We also accept Clearpay for flexible payment options. Book a free consultation to discuss your specific needs and receive a personalized quote."
        }
      },
      {
        "@type": "Question",
        "name": "What can CO2 laser treat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CO2 laser treatment effectively addresses acne scars, wrinkles and fine lines, sun damage, age spots, uneven skin texture, stretch marks, enlarged pores, and pigmentation issues. It's the gold standard for skin resurfacing and can achieve 70-80% reduction in acne scarring with proper treatment."
        }
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://co2lasersouthampton.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "CO2 Laser Treatment",
        "item": "https://co2lasersouthampton.co.uk#treatments"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Results",
        "item": "https://co2lasersouthampton.co.uk#results"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://co2lasersouthampton.co.uk#contact"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}