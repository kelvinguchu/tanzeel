import {
  Truck,
  Ship,
  Mountain,
  Package,
  Warehouse,
  Route,
  Container,
  HardHat,
} from "lucide-react";

const services = [
  {
    icon: Mountain,
    title: "Mineral Transportation",
    description:
      "Iron ore, gypsum, coal, and clinker from mining sites to processing plants.",
  },
  {
    icon: Ship,
    title: "Ship Shunting",
    description:
      "Bulk cargo movement directly from ships at port to factories.",
  },
  {
    icon: Truck,
    title: "Cargo Transport",
    description:
      "Relief items, loose cargo, and containerized goods across the region.",
  },
  {
    icon: Container,
    title: "Container Haulage",
    description:
      "20ft and 40ft container transport with flat body and skeleton trailers.",
  },
  {
    icon: HardHat,
    title: "Heavy Machinery",
    description:
      "Specialized transport for bulldozers and construction equipment.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure storage solutions on dedicated or shared basis.",
  },
  {
    icon: Package,
    title: "Supply Chain",
    description:
      "End-to-end logistics including procurement and material handling.",
  },
  {
    icon: Route,
    title: "Regional Distribution",
    description:
      "Last mile delivery and cross-border shipments across East Africa.",
  },
];

export function Services() {
  return (
    <section id='services' className='py-6 md:py-8 bg-gray-50'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='mb-10 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary'>
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((service) => (
            <div
              key={service.title}
              className='group p-6 bg-white rounded-2xl border border-gray-100 hover:border-secondary/30 hover:shadow-lg transition-all duration-300'>
              <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-primary/10 text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-300'>
                <service.icon className='w-6 h-6' />
              </div>
              <h3 className='text-lg font-semibold text-primary mb-2'>
                {service.title}
              </h3>
              <p className='text-sm text-gray-600 leading-relaxed'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
