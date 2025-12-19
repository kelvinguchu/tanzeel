import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Fleet", href: "#fleet" },
  { name: "Coverage", href: "#coverage" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Mineral Transportation",
  "Ship Shunting",
  "Container Haulage",
  "Heavy Machinery Transport",
  "Warehousing",
  "Supply Chain Management",
];

export function Footer() {
  return (
    <footer className='bg-linear-to-br from-primary via-primary to-primary/90 text-white'>
      <div className='container mx-auto px-4 py-10 sm:py-12 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12'>
          {/* Company Info */}
          <div>
            <Link href='#home' className='inline-block mb-4 sm:mb-6'>
              <Image
                src='/logo.png'
                alt='Tanzeel Logistics'
                width={180}
                height={60}
                className='h-10 sm:h-14 w-auto brightness-0 invert'
              />
            </Link>
            <p className='text-sm sm:text-base text-white/70 mb-4 sm:mb-6 leading-relaxed'>
              Your trusted partner for mineral and cargo transportation across
              East and Central Africa. Safety, reliability, and excellence in
              every delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-6'>Quick Links</h3>
            <ul className='space-y-3'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-white/70 hover:text-secondary transition-colors'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-lg font-semibold mb-6'>Our Services</h3>
            <ul className='space-y-3'>
              {services.map((service) => (
                <li key={service}>
                  <span className='text-white/70'>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold mb-6'>Contact Info</h3>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <MapPin className='w-5 h-5 text-secondary shrink-0 mt-0.5' />
                <span className='text-white/70'>
                  Kampala road, Nairobi, Kenya
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <Phone className='w-5 h-5 text-secondary shrink-0' />
                <span className='text-white/70'>
                  0759 888 333 / 0759 999 666
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <Mail className='w-5 h-5 text-secondary shrink-0' />
                <span className='text-white/70'>info@tanzeellogistics.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className='my-10 bg-white/10' />

        {/* Bottom Bar */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-white/60 text-sm text-center md:text-left'>
            © {new Date().getFullYear()} Tanzeel Logistics Ltd. All rights
            reserved.
          </p>
          <p className='text-white/60 text-sm text-center md:text-right'>
            Developed and Designed by{' '}
            <Link
              href='https://www.kulmi.digital/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-secondary transition-colors'>
              Kulmi Digital
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
