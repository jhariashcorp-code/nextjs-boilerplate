 "use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
              Evaluamos la superficie externa de tus aplicaciones (TLS/SSL, cabeceras
              de seguridad, CSP, DNS, exposición de servicios y OWASP/CIS) y lo
              traducimos en un informe ejecutivo y técnico listo para presentar a
              clientes, auditorías, SOC o gerencias.
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
              Basado en herramientas reconocidas (SSL Labs, análisis de cabeceras,
              CSP, DNS) + experiencia en ciberseguridad.
            </motion.p>
          </div>

          {/* CARD EJEMPLO */}
          <motion.div
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl shadow-slate-900/80"
            variants={scaleIn}
            whileHover={{ y: -4, boxShadow: "0 20px 45px rgba(15,23,42,0.9)" }}
          >
            <p className="text-xs font-semibold text-sky-400">Ejemplo de resultado</p>
            <h2 className="mt-2 text-sm font-medium text-slate-100">
              Auditoría externa de sitio corporativo
            </h2>

            <p className="mt-3 text-xs text-slate-400 leading-relaxed">
              • Calificación TLS/SSL: <span className="text-emerald-400">B</span> con
              recomendaciones para subir a{" "}
              <span className="text-emerald-400">A+</span>.<br />
              • Cabeceras de seguridad: HSTS, CSP, XFO, XCTO, Referrer-Policy,
              Permissions-Policy configuradas correctamente.<br />
              • DNS y superficie pública: sin exposición de backend ni rutas
              sensibles.<br />
              • Informe ejecutivo + anexo técnico en formato PDF/Word.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-2 py-3">
                <p className="text-[11px] text-slate-300">Sitios auditados</p>
                <p className="mt-1 text-base font-semibold text-emerald-300">10+</p>
              </div>
              <div className="rounded-xl border border-sky-500/30 bg-sky-500/10 px-2 py-3">
                <p className="text-[11px] text-slate-300">Enfoque</p>
                <p className="mt-1 text-base font-semibold text-sky-300">
                  OWASP / CIS
                </p>
              </div>
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-2 py-3">
                <p className="text-[11px] text-slate-300">Entrega</p>
                <p className="mt-1 text-base font-semibold text-amber-300">3–5 días</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* CERTIFICACIONES */}
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
            industria, alineando los informes y recomendaciones con marcos como:
            ISO/IEC 27001, ISO/IEC 22301, OWASP y CIS Controls.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {/* ISO 27001 */}
            <motion.div
              className="flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 p-4"
              variants={scaleIn}
              whileHover={{ y: -4, scale: 1.02, borderColor: "#38bdf8" }}
            >
              <Image
                src="/logos/iso27001.png"
                alt="ISO 27001"
                width={80}
                height={80}
                className="opacity-90"
              />
            </motion.div>

            {/* ISO 22301 */}
            <motion.div
              className="flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 p-4"
              variants={scaleIn}
              whileHover={{ y: -4, scale: 1.02, borderColor: "#38bdf8" }}
            >
              <Image
                src="/logos/iso22301.png"
                alt="ISO 22301"
                width={80}
                height={80}
                className="opacity-90"
              />
            </motion.div>

            {/* OWASP */}
            <motion.div
              className="flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 p-4"
              variants={scaleIn}
              whileHover={{ y: -4, scale: 1.02, borderColor: "#38bdf8" }}
            >
              <Image
                src="/logos/owasp.png"
                alt="OWASP"
                width={80}
                height={80}
                className="opacity-90"
              />
            </motion.div>

            {/* CIS */}
            <motion.div
              className="flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 p-4"
              variants={scaleIn}
              whileHover={{ y: -4, scale: 1.02, borderColor: "#38bdf8" }}
            >
              <Image
                src="/logos/cis.png"
                alt="CIS Controls"
                width={80}
                height={80}
                className="opacity-90"
              />
            </motion.div>
          </div>

          <p className="text-xs text-slate-500">
            Los logos representan los estándares y marcos de referencia utilizados en
            las evaluaciones; la prestación del servicio se centra en auditorías y
            generación de informes profesionales.
          </p>
        </motion.section>

        {/* SERVICIOS */}
        <motion.section
          id="servicios"
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-xl font-semibold tracking-tight text-slate-50">
            Servicios de auditoría
          </h2>

          <p className="max-w-3xl text-sm md:text-base text-slate-300">
            Auditorías externas diseñadas para mejorar visibilidad, reputación y
            cumplimiento, detectando riesgos reales en la superficie pública de tus
            aplicaciones y traduciéndolos en acciones concretas.
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            <motion.div
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              variants={scaleIn}
              whileHover={{ y: -4, borderColor: "#38bdf8" }}
            >
              <p className="text-xs font-semibold text-sky-400">Auditoría SSL/TLS</p>
              <p className="mt-2 text-sm text-slate-100">
                Evaluación avanzada de certificados, protocolos, cipher suites y
                alineamiento con prácticas actuales de cifrado.
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              variants={scaleIn}
              whileHover={{ y: -4, borderColor: "#38bdf8" }}
            >
              <p className="text-xs font-semibold text-sky-400">
                Seguridad de cabeceras HTTP
              </p>
              <p className="mt-2 text-sm text-slate-100">
                Análisis y mejora de HSTS, CSP, X-Frame-Options, Referrer-Policy,
                Permissions-Policy y otras mitigaciones clave.
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              variants={scaleIn}
              whileHover={{ y: -4, borderColor: "#38bdf8" }}
            >
              <p className="text-xs font-semibold text-sky-400">
                Informe ejecutivo + técnico
              </p>
              <p className="mt-2 text-sm text-slate-100">
                Entregables en formato consultoría, listos para compartir con
                clientes, auditorías, direcciones TI o comités de riesgo.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* METODOLOGÍA */}
        <motion.section
          id="metodologia"
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-xl font-semibold tracking-tight text-slate-50">
            Metodología de trabajo
          </h2>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                title: "1. Relevamiento",
                desc: "Definimos alcance, dominios y objetivos de negocio de la evaluación.",
              },
              {
                title: "2. Análisis técnico",
                desc: "Ejecutamos pruebas con herramientas reconocidas y análisis manual experto.",
              },
              {
                title: "3. Informe y riesgos",
                desc: "Clasificamos hallazgos por criticidad y los alineamos con OWASP / CIS.",
              },
              {
                title: "4. Roadmap",
                desc: "Proponemos un plan de remediación priorizado, claro y accionable.",
              },
            ].map((step, idx) => (
              <motion.div
                key={step.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
                variants={fadeUpDelayed(0.1 * idx)}
              >
                <p className="text-xs font-semibold text-sky-400">
                  {step.title}
                </p>
                <p className="mt-2 text-sm text-slate-100">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PLANES */}
        <motion.section
          id="planes"
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-xl font-semibold tracking-tight text-slate-50">
            Planes de servicio
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {/* EXPRESS */}
            <motion.div
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              variants={scaleIn}
              whileHover={{ y: -4, borderColor: "#38bdf8" }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Plan Express
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-50">USD 79</p>
              <p className="mt-2 text-sm text-slate-300">
                Revisión única de un sitio con foco en SSL/TLS y cabeceras
                principales. Informe breve (5–7 páginas).
              </p>
            </motion.div>

            {/* PROFESIONAL */}
            <motion.div
              className="flex flex-col rounded-2xl border border-sky-500 bg-slate-900 p-5 shadow-lg shadow-sky-500/30"
              variants={scaleIn}
              whileHover={{ y: -4, borderColor: "#38bdf8" }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
                Plan Profesional
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-50">
                USD 149
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Auditoría completa: TLS, CSP, DNS, rutas sensibles y reporte
                ejecutivo + técnico para uso interno o con clientes.
              </p>
            </motion.div>

            {/* ENTERPRISE */}
            <motion.div
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              variants={scaleIn}
              whileHover={{ y: -4, borderColor: "#38bdf8" }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Plan Enterprise
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-50">
                Desde USD 249
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Ideal para múltiples dominios, reporting recurrente, soporte en
                remediación y acompañamiento en auditorías externas.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* CONTACTO */}
        <motion.section
          id="contacto"
          className="space-y-6 border-t border-slate-800 pt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
            Contacto
          </h2>

          <p className="max-w-2xl text-sm md:text-base text-slate-300 leading-relaxed">
            ¿Necesitas validar la seguridad externa de tu sitio o preparar un informe
            profesional para un cliente, auditoría o comité directivo? Escríbenos y
            coordinamos una evaluación a medida.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-sm">
            <a
              href="https://wa.me/56966440231"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 
                         px-6 py-3 font-medium text-slate-950 shadow-lg shadow-emerald-500/25 
                         transition hover:bg-emerald-400 hover:shadow-emerald-400/30"
            >
              📱 WhatsApp: +56 9 6644 0231
            </a>

            <a
              href="mailto:bitscompany.audits@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 
                         px-6 py-3 font-medium text-slate-200 transition 
                         hover:border-sky-500 hover:text-sky-400"
            >
              ✉️ bitscompany.audits@gmail.com
            </a>
          </div>

          <p className="text-xs text-slate-500 pt-2">
            Tiempo de respuesta habitual: 1–3 horas hábiles.
          </p>
        </motion.section>

        {/* FOOTER */}
        <footer className="border-t border-slate-900/80 pt-6 pb-4 text-xs text-slate-500">
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
            <p>
              © {new Date().getFullYear()} BITS Company. Auditoría &amp; Seguridad.
            </p>
            <p className="text-[11px] text-slate-600">
              Evaluaciones externas de TLS/SSL, cabeceras, CSP y DNS con informes
              profesionales listos para auditorías y clientes.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
