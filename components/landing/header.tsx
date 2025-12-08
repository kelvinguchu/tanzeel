"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Fleet", href: "#fleet" },
  { name: "Coverage", href: "#coverage" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-sm"
      )}>
      <div className='container mx-auto px-4'>
        <div className='flex h-20 items-center justify-between'>
          {/* Logo */}
          <Link href='#home' className='flex items-center'>
            <Image
              src='/logo.png'
              alt='Tanzeel Transporters'
              width={180}
              height={60}
              className='h-14 w-auto'
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-1'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='px-4 py-2 text-sm font-medium text-primary/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors'>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className='hidden lg:flex items-center gap-4'>
            <Link href='#contact'>
              <Button
                className='bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 cursor-pointer'
                size='lg'>
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className='lg:hidden p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors'>
                <Menu className='w-6 h-6' />
              </button>
            </SheetTrigger>
            <SheetContent side='right' className='min-w-[90vw] px-2'>
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src='/logo.png'
                    alt='Tanzeel Transporters'
                    width={160}
                    height={53}
                    className='h-12 w-auto'
                  />
                </SheetTitle>
              </SheetHeader>
              <nav className='flex flex-col gap-2'>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className='px-4 py-3 text-base font-medium text-primary/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors'>
                    {item.name}
                  </Link>
                ))}
                <Link href='#contact' onClick={() => setIsOpen(false)}>
                  <Button
                    className='mt-6 bg-secondary hover:bg-secondary/90 text-white font-semibold cursor-pointer w-full'
                    size='lg'>
                    Get a Quote
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
