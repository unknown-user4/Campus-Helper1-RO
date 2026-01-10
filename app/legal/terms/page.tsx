import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const sections = [
  {
    title: 'Utilizarea Campus Helper',
    body: 'Campus Helper este destinat studenților și partenerilor din campus. Prin utilizarea platformei confirmi că ai capacitatea de a încheia acorduri în regiunea ta și că vei respecta codul de conduită al instituției tale.',
  },
  {
    title: 'Postări și anunțuri',
    body: 'Păstrează anunțurile de joburi, listările din marketplace și mesajele de pe forum corecte și respectuoase. Nu publica informații înșelătoare despre plată, conținut de tip spam sau materiale ilegale.',
  },
  {
    title: 'Plăți și responsabilități',
    body: 'Dacă nu se precizează altfel, plățile și acordurile au loc direct între utilizatori. Campus Helper nu este parte în aceste acorduri și nu garantează plata sau îndeplinirea obligațiilor. Notează/confirmă întotdeauna în scris ceea ce ați stabilit.',
  },
  {
    title: 'Siguranță și conduită',
    body: 'Întâlniți-vă, pe cât posibil, în locuri publice și sigure și urmați recomandările din „Sfaturi de siguranță”. Hărțuirea, discriminarea sau încercările de a ocoli măsurile de protecție ale comunității pot duce la limitarea sau eliminarea contului.',
  },
  {
    title: 'Drepturi asupra conținutului',
    body: 'Îți păstrezi drepturile asupra conținutului pe care îl distribui și acorzi Campus Helper o licență de a-l afișa pe platformă, astfel încât ceilalți să îți poată descoperi postările și anunțurile.',
  },
  {
    title: 'Încetarea sau modificarea serviciului',
    body: 'Putem actualiza funcționalitățile, suspenda accesul sau elimina conținutul care încalcă acești termeni. Vom publica aici actualizări atunci când termenii se modifică, ca să poți vedea ce este nou.',
  },
];

export const metadata = {
  title: 'Termeni și condiții | Campus Helper',
};

export default function TermsPage() {
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
            <p className="uppercase text-sm tracking-widest text-[#f4d03f] font-semibold mb-2">Termeni și condiții</p>
            <h1 className="text-4xl font-bold mb-3">Reguli de utilizare pentru Campus Helper</h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Te rugăm să citești acești termeni ca să știi ce se așteaptă atunci când postezi joburi, vinzi materiale sau participi la discuții.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-2">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">Contact</h2>
            <p className="text-gray-700">
              Dacă ai întrebări despre acești termeni, scrie-ne prin <Link href="/support/contact" className="text-[#1e3a5f] font-semibold hover:text-[#d4af37]">pagina de contact</Link>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
