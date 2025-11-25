import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      
      {/* HEADER */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/10 ring-1 ring-sky-500/40">
              <span className="text-sm font-semibold text-sky-400">B</span>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">
                BITS Company
              </p>
              <p className="text-xs text-slate-400">
                Auditoría & Seguridad de Aplicaciones
              </p>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
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
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 md:py-24">
        
        {/* HERO */}
        <section className="grid gap-12 md:grid-cols-[3fr,2fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
              Auditoría externa de seguridad
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-50">
              Informes profesionales de seguridad web para empresas y auditorías.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
              Evaluamos tu superficie externa (TLS/SSL, cabeceras, CSP, DNS,
              exposición de servicios y OWASP/CIS) y entregamos un informe ejecutivo
              + técnico que puedes presentar a clientes, auditorías, SOC, o gerencias.
            </p>

            <div className="mt-8 flex flex-col gap-3 text-sm sm:flex-row">
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
                Ver planes
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Basado en herramientas reconocidas + análisis manual experto.
            </p>
          </div>

          {/* CARD EJEMPLO */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl shadow-slate-900/80">
            <p className="text-xs font-semibold text-sky-400">Ejemplo real</p>
            <h2 className="mt-2 text-sm font-medium text-slate-100">
              Auditoría externa de sitio corporativo
            </h2>

            <p className="mt-3 text-xs text-slate-400 leading-relaxed">
              • Calificación SSL/TLS: <span className="text-emerald-400">B</span> con
              recomendaciones para subir a <span className="text-emerald-400">A+</span>. <br />
              • Cabeceras de seguridad configuradas correctamente (HSTS, CSP, XFO, etc.) <br />
              • DNS limpio, sin exposición de backend. <br />
              • Informe ejecutivo + técnico entregable.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-2 py-3">
                <p className="text-[11px] text-slate-300">Sitios auditados</p>
                <p className="mt-1 text-base font-semibold text-emerald-300">10+</p>
              </div>
              <div className="rounded-xl border border-sky-500/30 bg-sky-500/10 px-2 py-3">
                <p className="text-[11px] text-slate-300">Framework</p>
                <p className="mt-1 text-base font-semibold text-sky-300">OWASP / CIS</p>
              </div>
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-2 py-3">
                <p className="text-[11px] text-slate-300">Entrega</p>
                <p className="mt-1 text-base font-semibold text-amber-300">3–5 días</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50">
            Servicios de auditoría
          </h2>

          <p className="max-w-3xl text-base text-slate-300">
            Auditorías de seguridad enfocadas en visibilidad, reputación y cumplimiento:
            detectamos riesgos reales en la capa pública y los traducimos en acciones concretas.
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-xs font-semibold text-sky-400">Auditoría SSL/TLS</p>
              <p className="mt-2 text-sm text-slate-100">
                Evaluación avanzada de certificados, protocolos, cipher suites y
                cumplimiento con estándares modernos.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-xs font-semibold text-sky-400">
                Seguridad de cabeceras HTTP
              </p>
              <p className="mt-2 text-sm text-slate-100">
                Validación de HSTS, CSP, X-Frame-Options, Referrer-Policy,
                Permissions-Policy y mitigaciones clave.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-xs font-semibold text-sky-400">
                Informe ejecutivo + técnico
              </p>
              <p className="mt-2 text-sm text-slate-100">
                Documento profesional listo para presentar a clientes, auditorías o
                gerencias TI.
              </p>
            </div>
          </div>
        </section>

        {/* METODOLOGÍA */}
        <section id="metodologia" className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50">
            Metodología
          </h2>
          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                title: "1. Relevamiento",
                desc: "Definimos dominios, objetivos y alcance.",
              },
              {
                title: "2. Análisis técnico",
                desc: "Ejecutamos pruebas con SSL Labs, herramientas públicas y análisis manual.",
              },
              {
                title: "3. Informe",
                desc: "Clasificamos riesgos y los alineamos con OWASP/CIS.",
              },
              {
                title: "4. Roadmap",
                desc: "Plan de remediación claro y accionable.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <p className="text-xs font-semibold text-sky-400">{step.title}</p>
                <p className="mt-2 text-sm text-slate-100">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PLANES */}
        <section id="planes" className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50">
            Planes de servicio
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            
            {/* EXPRESS */}
            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Plan Express
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-50">USD 79</p>
              <p className="mt-2 text-sm text-slate-300">
                Revisión rápida de un solo dominio. SSL/TLS + cabeceras
                principales. Informe breve.
              </p>
            </div>

            {/* PRO */}
            <div className="flex flex-col rounded-2xl border border-sky-500 bg-slate-900 p-5 shadow-lg shadow-sky-500/30">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
                Plan Profesional
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-50">
                USD 149
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Auditoría completa: TLS, CSP, DNS, rutas sensibles y reporte
                ejecutivo + técnico.
              </p>
            </div>

            {/* ENTERPRISE */}
            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Plan Enterprise
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-50">
                Desde USD 249
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Para empresas o múltiples dominios. Reporting, presentación y
                soporte en remediación.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section
          id="contacto"
          className="space-y-6 border-t border-slate-800 pt-14"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
            Contacto
          </h2>

          <p className="max-w-2xl text-sm md:text-base text-slate-300 leading-relaxed">
            ¿Necesitas validar tu seguridad externa o preparar un informe profesional?
            Escríbeme directamente y coordinamos una evaluación a medida.
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
            Tiempo de respuesta promedio: 1–3 horas.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-900/80 pt-6 pb-4 text-xs text-slate-500">
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} BITS Company. Auditoría & Seguridad.</p>
            <p className="text-[11px] text-slate-600">
              Evaluaciones externas de TLS/SSL, cabeceras, CSP, DNS y reporte profesional.
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
}
