import { MapPin, Globe, CheckCircle2 } from "lucide-react";

const countries = [
  {
    name: "Kenya",
    flag: "🇰🇪",
    description:
      "Headquarters & nationwide coverage including Eastern and North Eastern regions",
    isHQ: true,
  },
  {
    name: "Uganda",
    flag: "🇺🇬",
    description: "Full coverage for mineral and cargo transportation",
    isHQ: false,
  },
  {
    name: "Tanzania",
    flag: "🇹🇿",
    description: "Cross-border transport and port connections",
    isHQ: false,
  },
  {
    name: "Ethiopia",
    flag: "🇪🇹",
    description: "Strategic route for regional distribution",
    isHQ: false,
  },
  {
    name: "South Sudan",
    flag: "🇸🇸",
    description: "Relief and commercial cargo delivery",
    isHQ: false,
  },
  {
    name: "Sudan",
    flag: "🇸🇩",
    description: "Extended network for cargo services",
    isHQ: false,
  },
  {
    name: "DR Congo",
    flag: "🇨🇩",
    description: "Mining regions and commercial centers",
    isHQ: false,
  },
  {
    name: "Rwanda",
    flag: "🇷🇼",
    description: "Efficient cross-border cargo services",
    isHQ: false,
  },
  {
    name: "Burundi",
    flag: "🇧🇮",
    description: "Regional transport and logistics",
    isHQ: false,
  },
];

const routeHighlights = [
  "Mombasa Port to all regional destinations",
  "Mining sites to cement and steel factories",
  "Cross-border seamless operations",
  "Urban and remote area delivery",
  "Time-critical shipments",
  "Relief cargo to conflict zones",
];

export function Coverage() {
  return (
    <section id='coverage' className='py-6 md:py-8 bg-gray-50'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='mb-10 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary'>
            Our Coverage
          </h2>
          <p className='text-gray-600 mt-2'>
            Transport network spanning 9 countries across East & Central Africa
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Countries Grid */}
          <div className='lg:col-span-2'>
            <div className='grid sm:grid-cols-2 gap-4'>
              {countries.map((country) => (
                <div
                  key={country.name}
                  className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                    country.isHQ
                      ? "bg-linear-to-br from-primary to-primary/90 border-primary text-white"
                      : "bg-white border-gray-100 hover:border-secondary/30"
                  }`}>
                  {country.isHQ && (
                    <span className='absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-secondary text-white rounded-full'>
                      HQ
                    </span>
                  )}
                  <div className='flex items-center gap-4 mb-3'>
                    <span className='text-4xl'>{country.flag}</span>
                    <h3
                      className={`text-xl font-bold ${
                        country.isHQ ? "text-white" : "text-primary"
                      }`}>
                      {country.name}
                    </h3>
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${
                      country.isHQ ? "text-white/80" : "text-gray-600"
                    }`}>
                    {country.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Route Highlights */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-2xl border border-gray-100 p-8 h-full'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10'>
                  <Globe className='w-6 h-6 text-secondary' />
                </div>
                <h3 className='text-xl font-bold text-primary'>
                  Route Highlights
                </h3>
              </div>
              <div className='space-y-4'>
                {routeHighlights.map((route) => (
                  <div key={route} className='flex items-start gap-3'>
                    <CheckCircle2 className='w-5 h-5 text-secondary shrink-0 mt-0.5' />
                    <span className='text-gray-700'>{route}</span>
                  </div>
                ))}
              </div>
              <div className='mt-8 pt-6 border-t border-gray-100'>
                <div className='flex items-center gap-3'>
                  <MapPin className='w-5 h-5 text-secondary' />
                  <span className='text-sm text-gray-600'>
                    Head Office: Kampala road, Nairobi, Kenya
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Banner */}
        <div className='mt-8 sm:mt-12 bg-linear-to-r from-primary via-primary to-primary/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12'>
          <div className='grid grid-cols-3 gap-4 sm:gap-8 text-center'>
            <div>
              <div className='text-2xl sm:text-4xl md:text-5xl font-bold text-secondary mb-1 sm:mb-2'>
                10+
              </div>
              <div className='text-xs sm:text-base text-white/80'>
                Years Experience
              </div>
            </div>
            <div>
              <div className='text-2xl sm:text-4xl md:text-5xl font-bold text-secondary mb-1 sm:mb-2'>
                9
              </div>
              <div className='text-xs sm:text-base text-white/80'>
                Countries Served
              </div>
            </div>
            <div>
              <div className='text-2xl sm:text-4xl md:text-5xl font-bold text-secondary mb-1 sm:mb-2'>
                1000+
              </div>
              <div className='text-xs sm:text-base text-white/80'>
                Successful Deliveries
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
