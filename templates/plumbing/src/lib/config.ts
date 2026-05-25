import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "GEI Plumbing Services",
    tagline: "Expert Plumbing. Always On Time.",
    phone: "(713) 555-1234",
    phoneHref: "tel:+17135551234",
    email: "info@geiplumbing.com",
    address: "123 Main St, Houston, TX 77002",
    city: "Houston",
    serviceAreas: ["Houston", "Houston Metro Area"],
    license: "M-12345",
    since: "2005",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "slate",
    niche: "plumbing",
  },

  services: [
    { icon: "droplets", title: "Drain Cleaning & Hydro-Jetting", desc: "Clear stubborn clogs and maintain healthy pipes with our advanced hydro-jetting technology.", urgent: true },
    { icon: "wrench", title: "Water Heater Services", desc: "From repairs to new installations, we ensure you have reliable hot water when you need it.", urgent: false },
    { icon: "home", title: "Leak Detection & Repair", desc: "Pinpoint hidden leaks quickly and accurately to prevent costly water damage to your property.", urgent: true },
    { icon: "truck", title: "Sewer Line Services", desc: "Comprehensive sewer line inspections, repairs, and replacements for optimal waste management.", urgent: false },
    { icon: "zap", title: "Gas Leak Services", desc: "Prompt and safe detection and repair of gas leaks to protect your home and family.", urgent: true },
    { icon: "hammer", title: "Plumbing Installation Services", desc: "Professional installation of new fixtures, appliances, and complete plumbing systems.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah J.", location: "Houston", stars: 5, text: "GEI Plumbing saved us! Our water heater burst on a Saturday morning. Their technician, Mark, arrived within an hour, was incredibly professional, and had it replaced by lunchtime. The price was fair, and the service was outstanding. Highly recommend their emergency service!" },
    { name: "David L.", location: "Sugar Land", stars: 5, text: "We had a persistent drain clog that other companies couldn't fix. GEI Plumbing used their hydro-jetting service, and it worked wonders. Our drains are flowing perfectly now. The team was courteous and explained everything clearly. Fantastic job!" },
    { name: "Maria P.", location: "Katy", stars: 5, text: "I called GEI Plumbing for a suspected gas leak. They responded immediately, found the small leak, and repaired it safely and efficiently. Their quick action gave me such peace of mind. I'm so grateful for their expertise and professionalism." }
  ],

  trustBadges: [
    "Licensed & Insured", "NATE Certified Technicians", "GAF Master Elite Contractor", "24/7 Emergency Service", "5-Star Rated", "Upfront Pricing"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1500, label: "Jobs Done", suffix: "+", decimals: 0 },
    { value: 18, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We understand plumbing emergencies can't wait. Our team responds quickly to minimize damage and disruption." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "No surprises, no hidden fees. You'll know the cost before we start any work." },
    { icon: "award", title: "Certified Pros", desc: "Our technicians are highly trained, licensed, and continuously educated on the latest plumbing technologies." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work. Your satisfaction is our top priority, guaranteed." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our intelligent reception is always available to assist you, day or night." },
    { icon: "truck", title: "Fully Equipped", desc: "Our service vehicles are stocked with the right tools and parts for efficient, on-the-spot repairs." }
  ],

  formServiceOptions: ["Drain Cleaning & Hydro-Jetting", "Water Heater Services", "Leak Detection & Repair", "Sewer Line Services", "Gas Leak Services", "Plumbing Installation Services"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!