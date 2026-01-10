import Link from 'next/link';
import { FileText, ShieldCheck } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const policies = [
  {
    title: 'Termeni și condiții',
    description: 'Înțelege regulile de utilizare Campus Helper, publicarea anunțurilor de joburi și cumpărarea sau vânzarea de produse.',
    href: '/legal/terms',
    icon: FileText,
  },
  {
    title: 'Politica de confidențialitate',
    description: 'Vezi cum îți gestionăm datele, de la detaliile contului la mesaje și notificări.',
    href: '/legal/privacy',
    icon: ShieldCheck,
  },
];

export const metadata = {
  title: 'Informații legale | Campus Helper',
};

export default function LegalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] text-white py-14">
          <div className="pointer-events-none absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_15%_25%,rgba(244,208,63,0.28),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(15,31,51,0.55),transparent_40%)] bg-[length:160%_160%] animate-gradient-move" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 -top-16 h-52 w-52 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4d03f] blur-3xl opacity-70 animate-float" />
            <div className="absolute right-0 top-6 h-60 w-60 rounded-full bg-gradient-to-br from-white/40 via-transparent to-[#d4af37]/25 blur-3xl opacity-70 animate-float" />
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <p className="uppercase text-sm tracking-widest text-[#f4d03f] font-semibold mb-2">Informații legale</p>
            <h1 className="text-4xl font-bold mb-3">Politici care mențin Campus Helper în siguranță</h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Consultă termenii și detaliile de confidențialitate care ghidează modul în care platforma funcționează pentru toți membrii comunității din campus.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {policies.map((policy, index) => {
              const Icon = policy.icon;
              return (
                <Card
                  key={policy.title}
                  className="h-full border-2 border-gray-100 hover:border-[#d4af37] transition-shadow hover:shadow-2xl bg-white/90 backdrop-blur animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <CardHeader className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#1e3a5f] text-[#d4af37] flex items-center justify-center shadow">
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-xl text-[#1e3a5f]">{policy.title}</CardTitle>
                    <CardDescription className="text-gray-600">{policy.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Link href={policy.href} className="inline-flex items-center text-[#1e3a5f] font-semibold hover:text-[#d4af37]">
                      <span>Citește {policy.title}</span>
                      <span className="ml-2">→</span>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl font-semibold text-[#1e3a5f]">Întrebări despre politicile noastre?</h2>
            <p className="text-gray-700">
              Contactează-ne prin <Link href="/support/contact" className="text-[#1e3a5f] font-semibold hover:text-[#d4af37]">pagina de contact</Link> și include secțiunea
              despre care întrebi, ca să putem răspunde clar sau să facem actualizări acolo unde este necesar.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
