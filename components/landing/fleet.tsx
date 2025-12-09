import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Settings, Shield, Users } from "lucide-react";

const fleetItems = [
  {
    image: "/flat_body_truck.webp",
    title: "Flat Body Trucks",
    description:
      "For carrying containers of 20ft and 40ft units with secure loading and transportation.",
    capacity: "20-28 MT",
  },
  {
    image: "/skeleton_trailer.webp",
    title: "Skeleton Trailers",
    description:
      "Versatile trailers for 20ft, 40ft containers and heavy machinery transportation.",
    capacity: "20-28 MT",
  },
  {
    image: "/low-bed-truck.webp",
    title: "Low Bed Trucks",
    description:
      "Specialized for carrying heavy machines of big tonnage like bulldozers.",
    capacity: "Heavy Duty",
  },
  {
    image: "/highsided-open-bodies.webp",
    title: "High-Sided Open Bodies",
    description:
      "For voluminous light cargo like survival kits, blankets, mattresses, and empty containers.",
    capacity: "Voluminous",
  },
];

const features = [
  {
    icon: Settings,
    title: "Modern Fleet",
    description:
      "All trucks are modern and well-maintained with regular servicing schedules.",
  },
  {
    icon: Users,
    title: "Trained Drivers",
    description:
      "Well-trained staff ensuring safe and professional cargo handling.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Comprehensive safety protocols and discipline across all operations.",
  },
  {
    icon: Truck,
    title: "Rapid Response",
    description:
      "Able response team for breakdowns and road issues available 24/7.",
  },
];

export function Fleet() {
  return (
    <section id='fleet' className='py-6 md:py-8 bg-white overflow-hidden'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='mb-10 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary'>
            Our Fleet
          </h2>
          <p className='text-gray-600 mt-2'>
            100+ modern trucks with 20-28 metric ton capacity
          </p>
        </div>

        {/* Fleet Types with Images */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {fleetItems.map((item) => (
            <Card
              key={item.title}
              className='group border-2 border-gray-100 hover:border-secondary/30 transition-all duration-300 bg-white overflow-hidden p-0'>
              <div className='relative h-48 overflow-hidden'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-linear-to-t from-black/50 to-transparent' />
                <span className='absolute bottom-3 right-3 px-3 py-1 text-xs font-semibold bg-secondary text-white rounded-full'>
                  {item.capacity}
                </span>
              </div>
              <CardContent className='text-center pb-2'>
                <h3 className='text-xl font-bold text-primary mb-2'>
                  {item.title}
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fleet Features */}
        <div className='relative'>
          <div className='absolute inset-0 bg-linear-to-br from-primary to-primary/90 rounded-2xl sm:rounded-3xl' />
          <div className='relative z-10 p-6 sm:p-8 md:p-12'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
              {features.map((feature) => (
                <div key={feature.title} className='text-center'>
                  <div className='flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl bg-secondary/20'>
                    <feature.icon className='w-6 h-6 sm:w-7 sm:h-7 text-secondary' />
                  </div>
                  <h3 className='text-base sm:text-lg font-bold text-white mb-1 sm:mb-2'>
                    {feature.title}
                  </h3>
                  <p className='text-white/70 text-xs sm:text-sm leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional fleet info */}
        <div className='mt-12 text-center'>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Our fleet also includes road patrol vehicles, 4x4 units, and escort
            vehicles to ensure the safety and security of your cargo throughout
            the journey.
          </p>
        </div>
      </div>
    </section>
  );
}
