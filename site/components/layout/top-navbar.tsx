"use client";
import { Mail, Phone, Languages } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function TopNavbar() {
  return (
    <div className="bg-blue-950 text-white py-1.5 text-sm hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          {/* Phone Section */}
          <div className="flex items-center space-x-2">
            {CONTACT_INFO.phone.split(',').map((num, index, array) => (
              <div key={index} className="flex items-center space-x-2">
                <Phone size={14} className="text-white/80" />
                <a
                  href={`tel:${num.trim()}`}
                  className="hover:text-white/80 transition-colors text-xs"
                >
                  {num.trim()}
                </a>
                {index < array.length - 1 && <span className="text-white/20 mx-1">|</span>}
              </div>
            ))}
          </div>

          <div className="h-4 w-px bg-white/20" />

          {/* Email Section */}
          <div className="flex items-center space-x-2">
            
            {CONTACT_INFO.email.split(',').slice(1, 3).map((mail, index, array) => (
              <div key={index} className="flex items-center space-x-2">
                <Mail size={14} className="text-white/80" />
                <a
                  href={`mailto:${mail.trim()}`}
                  className="hover:text-white/80 transition-colors text-sm"
                >
                  {mail.trim()}
                </a>
                {index < array.length - 1 && <span className="text-white/20 mx-1">|</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Japanese Language Button & Modal Section */}
        <div className="flex items-center">
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-1 rounded-md transition-all text-xs font-medium border border-white/10">
                <Languages size={14} className="text-white/80" />
                <span>日本語 (JP)</span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-100 bg-white text-slate-900 border-none shadow-2xl">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl font-bold text-blue-950">
                  Notice / お知らせ
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mb-6 animate-pulse">
                  <span className="text-4xl">🚧</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Under Development</h3>
                <p className="text-slate-500 leading-relaxed px-4">
                  We are currently working on our Japanese website to serve you better.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-100 w-full">
                  <p className="text-blue-600 font-medium italic">
                    日本語版サイトは現在制作中です。
                  </p>
                  <p className="text-slate-400 text-sm mt-1">
                    公開までしばらくお待ちください。
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}