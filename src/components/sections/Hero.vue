<script setup>
import { ArrowDown, ArrowUpRight } from 'lucide-vue-next'
const whatsapp = 'https://wa.me/5571993290895?text=Ol%C3%A1!%20Visitei%20o%20site%20da%20Aperte%20F1%20e%20quero%20conversar%20sobre%20um%20projeto.'
</script>

<template>
  <header id="inicio" class="bg-[#020817] pt-[80px] text-white">
    <div class="mx-auto grid min-h-[calc(100vh-80px)] max-w-[1600px] border-x border-white/10 lg:grid-cols-[minmax(0,1.18fr)_minmax(420px,.82fr)]">
      <div class="flex flex-col justify-between px-5 py-12 sm:px-10 lg:px-14 lg:py-16 xl:px-20">
        <div class="py-14 lg:py-20">
          <p class="mb-6 max-w-lg text-base font-medium leading-7 text-slate-400">Sites, sistemas e suporte para quem precisa da tecnologia funcionando de verdade.</p>
          <h1 class="max-w-5xl font-display text-[clamp(3.5rem,7.4vw,8rem)] font-bold leading-[.86] tracking-[-.075em]">
            Ideias viram<br><span class="text-[#c5a059]">ferramentas.</span>
          </h1>
          <p class="mt-9 max-w-xl text-lg leading-8 text-slate-300">A Aperte F1 entende o problema, desenha a solução e permanece por perto depois da entrega.</p>
          <div class="mt-10 flex flex-wrap items-center gap-7">
            <a :href="whatsapp" target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-track-location="hero" class="inline-flex items-center gap-3 bg-[#c5a059] px-6 py-4 text-sm font-bold text-[#020817] transition hover:bg-white">Conte seu projeto <ArrowUpRight class="h-5 w-5" /></a>
            <a href="#projetos" class="nav-link inline-flex items-center gap-2 text-sm font-bold text-white">Ver trabalhos <ArrowDown class="h-4 w-4" /></a>
          </div>
        </div>
        <div class="grid gap-3 border-t border-white/10 pt-5 text-xs font-semibold uppercase tracking-[.12em] text-slate-400 sm:grid-cols-3"><span>6 anos de experiência</span><span>+250 clientes atendidos</span><span>+1.000 chamados solucionados</span></div>
      </div>

      <div class="relative min-h-[520px] overflow-hidden border-t border-white/10 bg-[#07142f] lg:min-h-0 lg:border-l lg:border-t-0">
        <div class="absolute inset-0 grid grid-rows-2">
          <a href="https://palm-co.vercel.app/" target="_blank" rel="noopener noreferrer" class="group flex min-h-0 flex-col overflow-hidden border-b border-white/15">
            <div class="relative min-h-0 flex-1 overflow-hidden">
              <img src="/images/cases/palm-co.avif" srcset="/images/cases/palm-co-720.avif 720w, /images/cases/palm-co.avif 1024w" sizes="(min-width: 1024px) 41vw, 100vw" alt="Projeto de e-commerce Palm CO." class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" width="1024" height="647" fetchpriority="high" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#07142f]/40 via-transparent to-transparent"></div>
            </div>
            <div class="flex shrink-0 items-end justify-between border-t border-white/10 bg-[#020817] p-4 text-white sm:p-5"><div><span class="text-[10px] uppercase tracking-[.2em] text-white/70">E-commerce + sistema</span><strong class="mt-1 block font-display text-xl sm:text-2xl">Palm CO.</strong></div><span class="text-xs text-white/70">01</span></div>
          </a>
          <a href="https://yasminsantanaadvocacia.com.br/" target="_blank" rel="noopener noreferrer" class="group flex min-h-0 flex-col overflow-hidden">
            <div class="min-h-0 flex-1 overflow-hidden bg-[#17233d]">
              <img src="/images/cases/yasmin-santana.webp" srcset="/images/cases/yasmin-santana-720.webp 720w, /images/cases/yasmin-santana.webp 1400w" sizes="(min-width: 1024px) 41vw, 100vw" alt="Projeto Yasmin Santana Advocacia" class="h-full w-full object-contain p-2 transition duration-700 group-hover:scale-[1.015] sm:p-4" width="1400" height="620" />
            </div>
            <div class="flex shrink-0 items-end justify-between border-t border-white/10 bg-[#020817] p-4 text-white sm:p-5"><div><span class="text-[10px] uppercase tracking-[.2em] text-white/70">Site + SEO local</span><strong class="mt-1 block font-display text-xl sm:text-2xl">Yasmin Santana</strong></div><span class="text-xs text-white/70">02</span></div>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
