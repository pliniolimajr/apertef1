<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
const projects = [
  { number: '01', title: 'Palm CO.', kind: 'E-commerce e operação', image: '/images/cases/palm-co.avif', url: 'https://palm-co.vercel.app/', description: 'Uma loja virtual de moda circular com catálogo, conta do cliente, pagamento, frete, estoque e um painel que concentra a operação.', tags: 'React · Supabase · Mercado Pago', status: 'Projeto completo' },
  { number: '02', title: 'Yasmin Santana', kind: 'Site institucional e SEO', image: '/images/cases/yasmin-santana.webp', fit: true, url: 'https://yasminsantanaadvocacia.com.br/', description: 'Presença digital completa para um escritório de advocacia, com páginas por área de atuação, blog, SEO local e geração de contatos.', tags: 'Nuxt · Conteúdo · SEO local', status: 'Projeto completo' },
  { number: '03', title: 'PortalArq', kind: 'SaaS para escritórios de arquitetura', image: '/images/cases/portalarq-logo.svg', logo: true, url: 'https://www.portalarq.com.br/', description: 'Portal com a identidade do escritório para centralizar arquivos, atualizações, reuniões e aprovações, enquanto o cliente acompanha cada etapa do projeto com clareza.', tags: 'SaaS · Arquitetura · Portal do cliente', status: 'Em desenvolvimento' },
  { number: '04', title: 'Magna Studio', kind: 'Site institucional', image: '/images/cases/magna.webp', description: 'Uma vitrine digital para apresentar arquitetura e transformar interesse em novas conversas comerciais.', tags: 'Website · Conversão', status: 'Publicado' }
]
</script>

<template>
  <section id="projetos" class="bg-[#07142f] text-white">
    <div class="mx-auto max-w-[1600px] border-x border-white/10 px-5 py-20 sm:px-10 lg:px-14 lg:py-28 xl:px-20">
      <div class="grid gap-12 border-b border-white/20 pb-12 lg:grid-cols-[.72fr_1.28fr]">
        <p class="text-xs font-bold uppercase tracking-[.2em] text-[#d0a44f]">Trabalhos selecionados</p>
        <div><h2 class="max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-[-.045em] sm:text-6xl">O trabalho fala antes da apresentação.</h2><p class="mt-6 max-w-2xl leading-7 text-white/60">Alguns projetos que mostram como pensamos design, negócio e tecnologia no mesmo processo.</p></div>
      </div>

      <article v-for="(project, index) in projects" :key="project.title" class="project-row group grid gap-0 border-b border-white/20 py-10 lg:grid-cols-2 lg:py-16">
        <div class="relative aspect-[16/10] overflow-hidden" :class="[index % 2 === 1 ? 'lg:order-2' : '', project.logo ? 'bg-[#061128]' : project.fit ? 'bg-[#17233d]' : 'bg-white/5']">
          <img :src="project.image" :alt="`Projeto ${project.title}`" class="h-full w-full transition duration-700 hover:scale-[1.02]" :class="project.logo ? 'portalarq-logo object-contain p-14 sm:p-24' : project.fit ? 'object-contain p-3 sm:p-5' : 'object-cover object-top'" loading="lazy" width="1000" height="625" />
        </div>
        <div class="flex flex-col justify-between border-white/20 pt-7 lg:px-12 lg:pt-0" :class="index % 2 === 1 ? 'lg:order-1 lg:border-r lg:pl-0' : 'lg:border-l lg:pr-0'">
          <div><div class="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[.16em] text-white/60"><span>{{ project.number }} — {{ project.kind }}</span><span>{{ project.status }}</span></div><h3 class="mt-8 font-display text-4xl font-bold tracking-[-.04em] transition-colors duration-300 group-hover:text-[#c5a059] sm:text-5xl">{{ project.title }}</h3><p class="mt-5 max-w-lg text-base leading-7 text-white/70 transition-colors group-hover:text-white/85">{{ project.description }}</p></div>
          <div class="mt-10 flex items-end justify-between border-t border-white/15 pt-5"><span class="text-xs uppercase tracking-[.14em] text-[#d0a44f]">{{ project.tags }}</span><a v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#d0a44f]">Visitar site <ArrowUpRight class="h-5 w-5" /></a><ArrowUpRight v-else class="h-6 w-6 text-white/40" /></div>
        </div>
      </article>
    </div>
  </section>
</template>
