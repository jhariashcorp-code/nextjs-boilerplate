"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LogosSlider from "./LogosSlider";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeUpDelayed = (delay: number) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* HEADER */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <motion.div
            className="flex items-center gap-3"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/10 ring-1 ring-sky-500/40">
              <span className="text-sm font-semibold text-sky-400">B</span>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">
                BITS Company
              </p>
              <p className="text-xs text-slate-400">
                Auditoría &amp; Seguridad de Aplicaciones
              </p>
            </div>
          </motion.div>

          <motion.nav
            className="hidden gap-6 text-sm text-slate-300 md:flex"
            initial="hidden"
            animate="visible"
            variants={fadeUpDelayed(0.2)}
          >
            <a href="#servicios" className="hover:text-sky-400">
              Servicios
            </a>
            <a href="#metodologia" className="hover:text-sky-400">
              Metodología
            </a>
            <a href="#planes" className="hover:text-sky-400">
              Planes
            </a>
            <a href="#contacto" className="hover:text-sky-400">
              Contacto
            </a>
          </motion.nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 md:py-24">

        {/* HERO */}
        <motion.section
          className="grid gap-12 md:grid-cols-[3fr,2fr] md:items-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div>
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400"
              variants={fadeUp}
            >
              Auditoría externa de seguridad
            </motion.p>

            <motion.h1
              className="mt-4 text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-slate-50"
              variants={fadeUpDelayed(0.1)}
            >
              Informes profesionales de seguridad web para empresas y auditorías.
            </motion.h1>

            <motion.p
              className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-slate-300"
              variants={fadeUpDelayed(0.2)}
            >
              Evaluamos la superficie externa de tus aplicaciones (TLS/SSL,
              cabeceras de seguridad, CSP, DNS, exposición de servicios y
              OWASP/CIS) y lo traducimos en un informe ejecutivo y técnico listo
              para presentar a clientes, auditorías, SOC o gerencias.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 text-sm sm:flex-row"
              variants={fadeUpDelayed(0.3)}
            >
              <a
                href="#contacto"
                className="flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 font-medium text-slate-950 shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
              >
                Solicitar auditoría
              </a>
              <a
                href="#planes"
                className="flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 font-medium text-slate-100 transition hover:border-sky-500/70 hover:text-sky-400"
              >
                Ver planes de servicio
              </a>
            </motion.div>

            <motion.p
              className="mt-4 text-xs text-slate-500"
              variants={fadeUpDelayed(0.4)}
            >
              Basado en herramientas reconocidas (SSL Labs, análisis de
              cabeceras, CSP, DNS) + experiencia en ciberseguridad.
            </motion.p>
          </div>

          {/* CARD EXAMPLE */}
          <motion.div
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl shadow-slate-900/80"
            variants={scaleIn}
            whileHover={{ y: -4, boxShadow: "0 20px 45px rgba(15,23,42,0.9)" }}
          >
            <p className="text-xs font-semibold text-sky-400">
              Ejemplo de resultado
            </p>
            <h2 className="mt-2 text-sm font-medium text-slate-100">
              Auditoría externa de sitio corporativo
            </h2>

            <p className="mt-3 text-xs text-slate-400 leading-relaxed">
              • Calificación TLS/SSL:{" "}
              <span className="text-emerald-400">B</span> con recomendaciones
              para subir a <span className="text-emerald-400">A+</span>.<br />
              • Cabeceras de seguridad: HSTS, CSP, XFO, XCTO, Referrer-Policy,
              Permissions-Policy configuradas correctamente.<br />
              • DNS y superficie pública: sin exposición de backend ni rutas
              sensibles.<br />
              • Informe ejecutivo + anexo técnico en formato PDF/Word.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-2 py-3">
                <p className="text-[11px] text-slate-300">Sitios auditados</p>
                <p className="mt-1 text-base font-semibold text-emerald-300">
                  10+
                </p>
              </div>
              <div className="rounded-xl border border-sky-500/30 bg-sky-500/10 px-2 py-3">
                <p className="text-[11px] text-slate-300">Enfoque</p>
                <p className="mt-1 text-base font-semibold text-sky-300">
                  OWASP / CIS
                </p>
              </div>
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-2 py-3">
                <p className="text-[11px] text-slate-300">Entrega</p>
                <p className="mt-1 text-base font-semibold text-amber-300">
                  3–5 días
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* SLIDER */}
        <motion.section
          className="w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
            ESTÁNDARES Y MARCOS QUE UTILIZAMOS
          </p>
          <LogosSlider />
        </motion.section>

        {/* CERTIFICATIONS */}
        <motion.section
          id="certificaciones"
          className="space-y-8 pt-10 pb-12 border-t border-slate-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-xl font-semibold tracking-tight text-slate-50">
            Certificaciones y estándares
          </h2>

          <p className="max-w-3xl text-sm md:text-base text-slate-300 leading-relaxed">
            BITS Company basa sus evaluaciones en estándares reconocidos de la
            industria, alineando los informes y recomendaciones con marcos
            como: ISO/IEC 27001, ISO/IEC 22301, OWASP y CIS Controls.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

            <motion.div
              className="flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 p-4"
              variants={scaleIn}
              whileHover={{ y: -4, scale: 1.02, borderColor: "#38bdf8" }}
            >
              <Image
                src="/iso27001.png"
                alt="ISO 27001"
                width={80}
                height={80}
                className="opacity-90"
              />
            </motion.div>

            <motion.div
              className="flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 p-4"
              variants={scaleIn}
              whileHover={{ y: -4, scale: 1.02, borderColor: "#38bdf8" }}
            >
              <Image
                src="/iso22301.png"
                alt="ISO 22301"
                width={80}
                height={80}
                className="opacity-90"
              />
            </motion.div>

            <motion.div
              className="flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 p-4"
              variants={scaleIn}
              whileHover={{ y: -4, scale: 1.02, borderColor: "#38bdf8" }}
            >
              <Image
                src="/owasp.png"
                alt="OWASP"
                width={80}
                height={80}
                className="opacity-90"
              />
            </motion.div>

            <motion.div
              className="flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 p-4"
              variants={scaleIn}
              whileHover={{ y: -4, scale: 1.02, borderColor: "#38bdf8" }}
            >
              <Image
                src="/cis.png"
                alt="CIS Controls"
                width={80}
                height={80}
                className="opacity-90"
              />
            </motion.div>
          </div>

          <p className="text-xs text-slate-500">
            Los logos representan los estándares y marcos de referencia
            utilizados en las evaluaciones; la prestación del servicio se
            centra en auditorías y generación de informes profesionales.
          </p>
        </motion.section>
