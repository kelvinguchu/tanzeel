import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, Clock } from "lucide-react";

export function Hero() {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-gray-50 via-white to-gray-100'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-[0.03]'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23062861' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className='relative z-10 container mx-auto px-4 pt-28 pb-16'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left Content */}
          <div className='order-2 lg:order-1'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight'>
              Your Cargo,{" "}
              <span className='block text-secondary'>Our Priority</span>
            </h1>

            <p className='text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl'>
              Specialized in mineral transportation including iron ore, gypsum,
              coal, and other cargo across Kenya, Uganda, Tanzania, Rwanda,
              Burundi, Ethiopia, South Sudan, Sudan, and DR Congo. Safety,
              reliability, and precision delivery guaranteed.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 mb-12'>
              <Link href='#contact'>
                <Button
                  size='lg'
                  className='bg-secondary cursor-pointer hover:bg-secondary/90 text-white font-semibold px-8 h-14 text-lg rounded-xl shadow-lg shadow-secondary/25 w-full sm:w-auto'>
                  Request a Quote
                  <ArrowRight className='ml-2 w-5 h-5' />
                </Button>
              </Link>
              <Link href='#services'>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-2 cursor-pointer border-primary/20 text-primary hover:text-secondary hover:bg-primary/5 font-semibold px-8 h-14 text-lg rounded-xl w-full sm:w-auto'>
                  Explore Our Services
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-2 sm:gap-4 md:gap-8'>
              <div className='text-center md:text-left'>
                <div className='flex items-center justify-center md:justify-start gap-1 sm:gap-2 mb-1'>
                  <Truck className='w-4 h-4 sm:w-5 sm:h-5 text-secondary' />
                  <span className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>
                    100+
                  </span>
                </div>
                <p className='text-xs sm:text-sm text-gray-500'>
                  Modern Trucks
                </p>
              </div>
              <div className='text-center md:text-left'>
                <div className='flex items-center justify-center md:justify-start gap-1 sm:gap-2 mb-1'>
                  <Shield className='w-4 h-4 sm:w-5 sm:h-5 text-secondary' />
                  <span className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>
                    10+
                  </span>
                </div>
                <p className='text-xs sm:text-sm text-gray-500'>
                  Years Experience
                </p>
              </div>
              <div className='text-center md:text-left'>
                <div className='flex items-center justify-center md:justify-start gap-1 sm:gap-2 mb-1'>
                  <Clock className='w-4 h-4 sm:w-5 sm:h-5 text-secondary' />
                  <span className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>
                    7
                  </span>
                </div>
                <p className='text-xs sm:text-sm text-gray-500'>
                  Countries Covered
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Truck Images */}
          <div className='order-1 lg:order-2 relative'>
            <div className='relative'>
              {/* Main Image */}
              <div className='relative rounded-3xl overflow-hidden shadow-2xl'>
                <Image
                  src='/skeleton_trailer.webp'
                  alt='Flat Body Truck'
                  width={600}
                  height={400}
                  className='w-full h-auto object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-linear-to-t from-primary/20 to-transparent' />
              </div>

              {/* Floating Card */}
              <div className='absolute -bottom-4 left-2 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl shadow-xl p-3 sm:p-4 md:p-6 border border-gray-100'>
                <div className='flex items-center gap-2 sm:gap-3'>
                  <div className='flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/10'>
                    <Truck className='w-5 h-5 sm:w-6 sm:h-6 text-secondary' />
                  </div>
                  <div>
                    <p className='font-bold text-primary text-sm sm:text-lg'>
                      24/7 Support
                    </p>
                    <p className='text-xs sm:text-sm text-gray-500'>
                      Always ready to serve
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary Image */}
              <div className='absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-24 sm:w-32 md:w-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white'>
                <Image
                  src='/flat_body_truck.webp'
                  alt='Skeleton Trailer'
                  width={160}
                  height={120}
                  className='w-full h-auto object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className='absolute bottom-0 left-0 right-0'>
        <svg
          viewBox='0 0 1440 80'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-full'>
          <path
            d='M0 80L48 74.7C96 69 192 59 288 53.3C384 48 480 48 576 53.3C672 59 768 69 864 69.3C960 69 1056 59 1152 53.3C1248 48 1344 48 1392 48L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z'
            fill='white'
          />
        </svg>
      </div>
    </section>
  );
}
