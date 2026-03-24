import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#faf9f9] w-full rounded-t-[3rem] mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 w-full max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="font-serif text-2xl text-[#b40064] mb-6">
            <Image
              src="/vanilla-logo.png"
              alt={'logo'}
              width={165}
              height={64}
            />
          </div>
          <p className="text-[#8e6f78] font-body text-sm leading-relaxed mb-6">
            Handcrafting sweet memories since 2012. Our boutique patisserie
            focuses on artisanal quality and locally-sourced ingredients.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#b40064] hover:scale-110 transition-transform cursor-pointer">
              social_leaderboard
            </span>
            <span className="material-symbols-outlined text-[#b40064] hover:scale-110 transition-transform cursor-pointer">
              photo_camera
            </span>
            <span className="material-symbols-outlined text-[#b40064] hover:scale-110 transition-transform cursor-pointer">
              mail
            </span>
          </div>
        </div>
        <div>
          <h6 className="font-headline font-bold text-[#1a1c1c] mb-6">
            Quick Links
          </h6>
          <ul className="space-y-4 font-label text-sm">
            <li>
              <a
                className="text-[#8e6f78] hover:text-[#b40064] hover:underline underline-offset-4 decoration-[#ffb0ca] transition-all"
                href="#"
              >
                Shop All
              </a>
            </li>
            <li>
              <a
                className="text-[#8e6f78] hover:text-[#b40064] hover:underline underline-offset-4 decoration-[#ffb0ca] transition-all"
                href="#"
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                className="text-[#8e6f78] hover:text-[#b40064] hover:underline underline-offset-4 decoration-[#ffb0ca] transition-all"
                href="#"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                className="text-[#8e6f78] hover:text-[#b40064] hover:underline underline-offset-4 decoration-[#ffb0ca] transition-all"
                href="#"
              >
                Bespoke Inquiries
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-headline font-bold text-[#1a1c1c] mb-6">
            Support
          </h6>
          <ul className="space-y-4 font-label text-sm">
            <li>
              <a
                className="text-[#8e6f78] hover:text-[#b40064] hover:underline underline-offset-4 decoration-[#ffb0ca] transition-all"
                href="#"
              >
                Shipping &amp; Returns
              </a>
            </li>
            <li>
              <a
                className="text-[#8e6f78] hover:text-[#b40064] hover:underline underline-offset-4 decoration-[#ffb0ca] transition-all"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-[#8e6f78] hover:text-[#b40064] hover:underline underline-offset-4 decoration-[#ffb0ca] transition-all"
                href="#"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                className="text-[#8e6f78] hover:text-[#b40064] hover:underline underline-offset-4 decoration-[#ffb0ca] transition-all"
                href="#"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-headline font-bold text-[#1a1c1c] mb-6">
            Our Studio
          </h6>
          <p className="text-[#8e6f78] text-sm leading-loose">
            123 Confectioner's Way
            <br />
            Pastry District, NY 10012
            <br />
            <span className="block mt-4 font-bold text-[#b40064]">
              Tue - Sat: 9am - 6pm
            </span>
          </p>
        </div>
      </div>
      <div className="border-t border-[#e9e8e8] py-8 text-center text-[#8e6f78] font-label text-xs tracking-widest px-8">
        © 2024 Vanilla Digital Patisserie. Handcrafted with love.
      </div>
    </footer>
  );
}
