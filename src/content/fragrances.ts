import type {Fragrance} from '@/types/content';
import {assets} from './assets';
// Authoritative brand-supplied lists. LAZO's overlapping grape entries are intentional.
export const fragranceContent: Fragrance[] = [
{
  "id": "nox",
  "slug": "nox",
  "name": "NOX",
  "tagline": {
    "en": "Own the Night",
    "ar": "امتلك الليل"
  },
  "description": null,
  "theme": "nox",
  "notes": {
    "top": [
      {
        "id": "lavender",
        "name": {
          "en": "Lavender",
          "ar": "الخزامى"
        }
      },
      {
        "id": "bergamot",
        "name": {
          "en": "Bergamot",
          "ar": "البرغموت"
        }
      },
      {
        "id": "sage",
        "name": {
          "en": "Sage",
          "ar": "المريمية"
        }
      },
      {
        "id": "mandarin-orange",
        "name": {
          "en": "Mandarin Orange",
          "ar": "اليوسفي"
        }
      }
    ],
    "heart": [
      {
        "id": "coffee",
        "name": {
          "en": "Coffee",
          "ar": "القهوة"
        }
      },
      {
        "id": "geranium",
        "name": {
          "en": "Geranium",
          "ar": "إبرة الراعي"
        }
      }
    ],
    "base": [
      {
        "id": "sandalwood",
        "name": {
          "en": "Sandalwood",
          "ar": "خشب الصندل"
        }
      },
      {
        "id": "leather",
        "name": {
          "en": "Leather",
          "ar": "الجلد"
        }
      },
      {
        "id": "myrrh",
        "name": {
          "en": "Myrrh",
          "ar": "المر"
        }
      },
      {
        "id": "nutmeg",
        "name": {
          "en": "Nutmeg",
          "ar": "جوزة الطيب"
        }
      },
      {
        "id": "cardamom",
        "name": {
          "en": "Cardamom",
          "ar": "الهيل"
        }
      },
      {
        "id": "pepper",
        "name": {
          "en": "Pepper",
          "ar": "الفلفل"
        }
      },
      {
        "id": "musk",
        "name": {
          "en": "Musk",
          "ar": "المسك"
        }
      },
      {
        "id": "vetiver",
        "name": {
          "en": "Vetiver",
          "ar": "نجيل الهند"
        }
      },
      {
        "id": "oud",
        "name": {
          "en": "Oud",
          "ar": "العود"
        }
      }
    ]
  },
  "referenceSource": "ORYNOVA authoritative marketing composition supplied by the brand, October 2026",
  "specifications": [],
  "featured": true,
  "published": true,
  "sortOrder": 10,
  "campaignHeadline": {
    "en": "Discover the Power of the Night",
    "ar": "اكتشف قوة الليل"
  },
  "supportingMessage": {
    "en": "Feel the Power",
    "ar": "اشعر بالقوة"
  },
  "attributes": [
    {
      "id": "lasting",
      "label": {
        "en": "LONG LASTING",
        "ar": "ثبات طويل الأمد"
      },
      "icon": "timer",
      "source": "ORYNOVA NOX marketing reference"
    },
    {
      "id": "quality",
      "label": {
        "en": "PREMIUM QUALITY",
        "ar": "جودة فائقة"
      },
      "icon": "diamond",
      "source": "ORYNOVA NOX marketing reference"
    },
    {
      "id": "men",
      "label": {
        "en": "CRAFTED FOR MEN",
        "ar": "مصمم للرجال"
      },
      "icon": "person",
      "source": "ORYNOVA NOX marketing reference"
    }
  ]
,
 "images": {"primary": assets.products.nox, "isolated": assets.cinema.noxIsolated, "gallery": []},
 "noteImages": assets.notes.nox
},
{
  "id": "fuego",
  "slug": "fuego",
  "name": "FUEGO",
  "tagline": {
    "en": "Ignite Your Presence",
    "ar": "أشعل حضورك"
  },
  "description": null,
  "theme": "fuego",
  "notes": {
    "top": [
      {
        "id": "sicilian-bergamot",
        "name": {
          "en": "Sicilian Bergamot",
          "ar": "البرغموت الصقلي"
        }
      },
      {
        "id": "pink-pepper",
        "name": {
          "en": "Pink Pepper",
          "ar": "الفلفل الوردي"
        }
      },
      {
        "id": "davana",
        "name": {
          "en": "Davana",
          "ar": "الدافانا"
        }
      }
    ],
    "heart": [
      {
        "id": "agarwood-oud",
        "name": {
          "en": "Agarwood (Oud)",
          "ar": "خشب العود"
        }
      },
      {
        "id": "white-amber",
        "name": {
          "en": "White Amber",
          "ar": "العنبر الأبيض"
        }
      },
      {
        "id": "rosemary",
        "name": {
          "en": "Rosemary",
          "ar": "إكليل الجبل"
        }
      }
    ],
    "base": [
      {
        "id": "leather",
        "name": {
          "en": "Leather",
          "ar": "الجلد"
        }
      },
      {
        "id": "musk",
        "name": {
          "en": "Musk",
          "ar": "المسك"
        }
      },
      {
        "id": "haitian-vetiver",
        "name": {
          "en": "Haitian Vetiver",
          "ar": "نجيل الهند الهايتي"
        }
      }
    ]
  },
  "referenceSource": "ORYNOVA authoritative marketing composition supplied by the brand, October 2026",
  "specifications": [],
  "featured": true,
  "published": true,
  "sortOrder": 20,
  "campaignMessage": {
    "en": "Bold. Warm. Unforgettable.",
    "ar": "جريء. دافئ. لا يُنسى."
  }
,
 "images": {"primary": assets.products.fuego, "gallery": []},
 "noteImages": assets.notes.fuego
},
{
  "id": "lazo",
  "slug": "lazo",
  "name": "LAZO",
  "tagline": {
    "en": "Unveil Your Mystic",
    "ar": "اكشف سحرك الغامض"
  },
  "description": null,
  "theme": "lazo",
  "notes": {
    "top": [
      {
        "id": "dark-grape",
        "name": {
          "en": "Dark Grape",
          "ar": "العنب الداكن"
        }
      },
      {
        "id": "fruits",
        "name": {
          "en": "Fruits",
          "ar": "الفواكه"
        }
      },
      {
        "id": "exotic-fruits-and-dark-grape",
        "name": {
          "en": "Exotic Fruits & Dark Grape",
          "ar": "الفواكه الاستوائية والعنب الداكن"
        }
      }
    ],
    "heart": [
      {
        "id": "patchouli",
        "name": {
          "en": "Patchouli",
          "ar": "الباتشولي"
        }
      },
      {
        "id": "musk",
        "name": {
          "en": "Musk",
          "ar": "المسك"
        }
      },
      {
        "id": "pineapple",
        "name": {
          "en": "Pineapple",
          "ar": "الأناناس"
        }
      }
    ],
    "base": [
      {
        "id": "white-musk",
        "name": {
          "en": "White Musk",
          "ar": "المسك الأبيض"
        }
      },
      {
        "id": "dates",
        "name": {
          "en": "Dates",
          "ar": "التمر"
        }
      },
      {
        "id": "vanilla",
        "name": {
          "en": "Vanilla",
          "ar": "الفانيليا"
        }
      }
    ]
  },
  "referenceSource": "ORYNOVA authoritative marketing composition supplied by the brand, October 2026",
  "specifications": [],
  "featured": true,
  "published": true,
  "sortOrder": 30,
  "campaignHeadline": {
    "en": "The Essence of Exotic Charm",
    "ar": "جوهر السحر الاستثنائي"
  }
,
 "images": {"primary": assets.products.lazo, "gallery": []},
 "noteImages": assets.notes.lazo
}
];
