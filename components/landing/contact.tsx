"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["0759 888 333", "0759 999 666"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@tanzeellogistics.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Kampala road, Nairobi, Kenya"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 8:00 AM - 2:00 PM"],
  },
];

export function Contact() {
  return (
    <section id='contact' className='py-6 md:py-8 bg-white'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='mb-10 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary'>
            Contact Us
          </h2>
        </div>

        {/* Contact Information */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
          {contactInfo.map((item) => (
            <Card key={item.title} className='border-0 bg-gray-50 h-full'>
              <CardContent className='p-4 sm:p-6 flex flex-col items-center text-center h-full'>
                <div className='flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary text-white mb-3 sm:mb-4'>
                  <item.icon className='w-5 h-5 sm:w-6 sm:h-6' />
                </div>
                <h3 className='font-semibold text-primary mb-1 sm:mb-2 text-base sm:text-lg'>
                  {item.title}
                </h3>
                <div className='space-y-1'>
                  {item.details.map((detail) => (
                    <p
                      key={detail}
                      className='text-sm sm:text-base text-gray-600'>
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
