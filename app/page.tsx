import { Bell, Clock, Heart, Wrench } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { RiTwitterXLine } from 'react-icons/ri';
import { GrInstagram } from 'react-icons/gr';
import CelLogo from '~/cel-logo.png';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Logo */}
        <header className="flex flex-col items-center justify-center mb-12 space-y-4">
          <div className="w-[10rem] h-[10rem] bg-white rounded-2xl shadow-lg flex items-center justify-center p-0.5">
            {/* Replace with your actual logo */}
            <Image
              src={CelLogo}
              alt="Comores En Ligne Logo"
              width={200}
              height={200}
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-[#0055B8]">
            Comores En Ligne
          </h1>
        </header>

        <main className="max-w-3xl mx-auto text-center space-y-8">
          {/* Main Maintenance Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="flex flex-col items-center space-y-8">
              {/* Maintenance Illustration */}
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full" />
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <Wrench className="w-16 h-16 text-[#0055B8] animate-[spin_3s_ease-in-out_infinite]" />
                </div>
              </div>

              {/* Main Message */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Petite Pause Amélioration ! 🌟
                </h2>

                <p className="text-lg text-gray-600">
                  Nous améliorons votre expérience de shopping pour la rendre
                  encore plus agréable.
                </p>

                {/* Time Indicator */}
                <div className="inline-flex items-center gap-3 bg-[#0055B8] text-white rounded-full px-6 py-3 shadow-md">
                  <Clock className="w-5 h-5" />
                  <span>De retour dans environ 2 heures</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status Updates Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-center gap-2 mb-4 text-[#0055B8]">
              <Bell className="w-5 h-5" />
              <h3 className="font-semibold">Restez informé</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Suivez-nous sur les réseaux sociaux pour des mises à jour en temps
              réel
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://www.facebook.com/comoresEnLigne/"
                className="group"
              >
                <div className="w-12 h-12 bg-[#0055B8] text-white rounded-full flex items-center justify-center hover:bg-[#0066dd] transition-all transform group-hover:scale-110">
                  <FaFacebookF className="w-6 h-6" />
                </div>
                <span className="text-sm text-gray-500 mt-1">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com/comoresenligne"
                className="group"
              >
                <div className="w-12 h-12 bg-[#0055B8] text-white rounded-full flex items-center justify-center hover:bg-[#0066dd] transition-all transform group-hover:scale-110">
                  <GrInstagram className="w-6 h-6" />
                </div>
                <span className="text-sm text-gray-500 mt-1">Instagram</span>
              </Link>
              <Link
                href="https://twitter.com/ComoresEnLigne/"
                className="group"
              >
                <div className="w-12 h-12 bg-[#0055B8] text-white rounded-full flex items-center justify-center hover:bg-[#0066dd] transition-all transform group-hover:scale-110">
                  <RiTwitterXLine className="w-6 h-6" />
                </div>
                <span className="text-sm text-gray-500 mt-1">Twitter</span>
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCFhOolE_27Tp3BXWTmnCvcQ"
                className="group"
              >
                <div className="w-12 h-12 bg-[#0055B8] text-white rounded-full flex items-center justify-center hover:bg-[#0066dd] transition-all transform group-hover:scale-110">
                  <FaYoutube className="w-6 h-6" />
                </div>
                <span className="text-sm text-gray-500 mt-1">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 shadow-inner">
            <div className="flex justify-center items-center gap-2 text-[#0055B8]">
              <Heart className="w-5 h-5" />
              <p className="font-medium">
                Merci de votre patience et de votre fidélité
              </p>
              <Heart className="w-5 h-5" />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>© 2025 Comores En Ligne. Tous droits réservés.</p>
        </footer>
      </div>
    </div>
  );
}
