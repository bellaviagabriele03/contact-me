import { useState } from 'react'
import './App.css'
import "./index.css"
import ParticlesBG from './components/ParticlesBG'
import { Mail, Phone, MessageCircle } from "lucide-react";
function App() {


  return (

    <main className="relative min-h-screen overflow-hidden  text-white">
      <ParticlesBG />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10 ">
        <div className="w-full max-w-sm rounded-3xl border border-cyan-400/20 bg-white/10 p-6 shadow-[0_0_40px_rgba(0,255,255,0.08)] backdrop-blur-xl">
          <div className="flex flex-col items-center text-center">
            <img
              src="/img/foto-profilo.jpg"
              alt="Foto profilo"
              className="mb-4 h-24 w-24 rounded-full border-2 border-cyan-400 object-cover shadow-[0_0_20px_rgba(0,245,255,0.35)]"
            />

            <h1 className="text-2xl font-bold">Gabriele Bellavia</h1>

            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Programmatore Web <br />
            </p>

            <div className="mt-6 flex w-full flex-col gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/393401516634"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl border border-green-400/30 bg-green-500/10 px-4 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(34,197,94,0.15)] transition hover:scale-[1.03] hover:bg-green-500/20"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              {/* Telefono */}
              <a
                href="tel:+393401516634"
                className="flex items-center justify-center gap-3 rounded-2xl border border-blue-400/30 bg-blue-500/10 px-4 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.15)] transition hover:scale-[1.03] hover:bg-blue-500/20"
              >
                <Phone size={18} />
                Chiamami
              </a>

              {/* Email */}
              <a
                href="mailto:bellaviagabriele03@gmail.com"
                className="flex items-center justify-center gap-3 rounded-2xl border border-violet-400/30 bg-violet-500/10 px-4 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.18)]  transition hover:scale-[1.03] hover:bg-violet-500/20"
              >
                <Mail size={18} />
                Inviami una email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

  )
}

export default App
