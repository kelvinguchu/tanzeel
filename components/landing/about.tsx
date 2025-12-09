import { CheckCircle2, Target, Eye } from "lucide-react";

const highlights = [
  "Over a decade of industry experience",
  "Fleet of 100+ modern trucks",
  "Well-trained professional staff",
  "24/7 breakdown response team",
  "Coverage across 7 nations",
  "Specialized mineral transport",
];

export function About() {
  return (
    <section id='about' className='py-6 md:py-8 bg-white'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='mb-10 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary'>
            About Us
          </h2>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
          {/* Left Content */}
          <div>
            <p className='text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed'>
              Tanzeel Logistics Limited is a well-established transport company
              operating within East and Central Africa. We have been in the
              business for over a decade, building a reputation for reliability
              and excellence.
            </p>
            <p className='text-gray-600 mb-8 leading-relaxed'>
              From ship shunting – loading bulk cargo directly from ships to
              trucks at ports – to delivering minerals like iron ore, gypsum,
              coal, and clinker across the region, we handle it all with
              precision.
            </p>

            {/* Highlights */}
            <div className='grid sm:grid-cols-2 gap-3'>
              {highlights.map((item) => (
                <div key={item} className='flex items-center gap-3'>
                  <CheckCircle2 className='w-5 h-5 text-secondary shrink-0' />
                  <span className='text-sm text-gray-700'>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Mission & Vision */}
          <div className='space-y-4 sm:space-y-6'>
            {/* Mission */}
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 sm:p-6 bg-primary rounded-xl'>
              <div className='flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-secondary/20 shrink-0'>
                <Target className='w-5 h-5 sm:w-6 sm:h-6 text-secondary' />
              </div>
              <div>
                <h3 className='text-lg font-semibold text-white mb-2'>
                  Our Mission
                </h3>
                <p className='text-sm text-white/80 leading-relaxed'>
                  To provide safe, reliable, and efficient transportation
                  services that meet the growing demands of the mining, cement,
                  and steel industries across East and Central Africa.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 sm:p-6 bg-secondary rounded-xl'>
              <div className='flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/20 shrink-0'>
                <Eye className='w-5 h-5 sm:w-6 sm:h-6 text-white' />
              </div>
              <div>
                <h3 className='text-lg font-semibold text-white mb-2'>
                  Our Vision
                </h3>
                <p className='text-sm text-white/90 leading-relaxed'>
                  To be the leading transport partner in East and Central
                  Africa, recognized for our commitment to safety, timeliness,
                  and reliability.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className='p-4 sm:p-6 bg-gray-50 rounded-xl'>
              <h3 className='text-lg font-semibold text-primary mb-4'>
                Our Values
              </h3>
              <div className='flex flex-wrap gap-2'>
                {[
                  "Safety First",
                  "Reliability",
                  "Integrity",
                  "Excellence",
                  "Customer Focus",
                  "Teamwork",
                ].map((value) => (
                  <span
                    key={value}
                    className='px-3 py-1.5 text-sm font-medium text-primary bg-white border border-gray-200 rounded-full'>
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
