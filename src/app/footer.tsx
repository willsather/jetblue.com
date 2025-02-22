import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h3 className="mb-6 font-bold text-xl">Need help?</h3>
          <div className="mx-auto flex max-w-md gap-2">
            <Input
              type="search"
              placeholder="Search for answers"
              className="flex-1"
            />
            <Button className="bg-jb-navy hover:bg-jb-navy/80">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                role="graphics-symbol"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-4 font-bold">Get To Know Us</h4>
            <ul className="space-y-2 text-jb-blue text-sm ">
              <li>
                <Link href="#" className="hover:text-jb-navy hover:underline">
                  Credit Cards
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-jb-navy hover:underline">
                  JetBlue Swag
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-jb-navy hover:underline">
                  Our Planes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-jb-navy hover:underline">
                  Our Company
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-jb-navy hover:underline">
                  Partner Airlines
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-jb-navy hover:underline">
                  Travel Agents
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-jb-navy hover:underline">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-jb-navy hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-jb-navy hover:underline">
                  Site Map
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-jb-navy hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-jb-navy hover:underline">
                  See help topics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">JetBlue In Action</h4>
            <ul className="space-y-2 text-jb-blue text-sm">
              <li>
                <Link href="#" className="hover:text-jb-navy hover:underline">
                  JetBlue For Good
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-jb-navy hover:underline">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-jb-navy hover:underline">
                  Diversity, Equity & Inclusion
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-jb-navy hover:underline">
                  Military
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-jb-navy hover:underline">
                  Press Room
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-4 font-bold">Stay Connected</h4>
            <div className="mb-4 flex gap-4">
              <Link href="#" className="text-jb-blue hover:text-jb-navy">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  role="graphics-symbol"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>

              <Link href="#" className="text-jb-blue hover:text-jb-navy">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  role="graphics-symbol"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="#" className="text-jb-blue hover:text-jb-navy">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  role="graphics-symbol"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>

              <Link href="#" className="text-jb-blue hover:text-jb-navy">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  role="graphics-symbol"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>

            <div className="space-y-4">
              <Link
                href="#"
                className="flex items-center gap-2 text-jb-blue hover:text-jb-navy hover:underline"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  role="graphics-symbol"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Join our email list
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-jb-blue hover:text-jb-navy hover:underline"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  role="graphics-symbol"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                Download the JetBlue mobile app
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between border-t pt-8 text-gray-600 text-sm">
          <p>©2025 JetBlue Airways</p>
          <div className="flex items-center gap-2">
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
