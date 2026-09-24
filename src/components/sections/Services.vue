<script setup>
import { ArrowDownRight, Code2, Database, Wrench } from 'lucide-vue-next'
const emit = defineEmits(['selectService'])
const services = [
  { id: 'dev', number: '01', icon: Code2, title: 'Sites e sistemas', desc: 'Da presença institucional a plataformas completas: estratégia, interface, código e publicação no mesmo projeto.', items: 'Sites · Lojas virtuais · Portais · Sistemas SaaS' },
  { id: 'support', number: '02', icon: Wrench, title: 'Suporte técnico', desc: 'Diagnóstico e manutenção com explicação clara, atendimento remoto ou serviço por coleta e entrega.', items: 'PCs · Notebooks · Apple · Redes · Upgrades' },
  { id: 'backup', number: '03', icon: Database, title: 'Backup e dados', desc: 'Proteção, migração e recuperação de informações importantes para pessoas e pequenas empresas.', items: 'Nuvem · Backup local · Migração · Recuperação' }
]
</script>

<template>
  <section id="servicos" class="bg-[#020817] text-white">
    <div class="mx-auto max-w-[1600px] border-x border-white/10 px-5 py-20 sm:px-10 lg:px-14 lg:py-28 xl:px-20">
      <div class="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[.72fr_1.28fr]">
        <p class="text-xs font-bold uppercase tracking-[.2em] text-[#c5a059]">O que colocamos de pé</p>
        <h2 class="max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-[-.045em] sm:text-6xl">Tecnologia útil, bem construída e fácil de entender.</h2>
      </div>
      <div>
        <button v-for="service in services" :key="service.id" type="button" @click="emit('selectService', service.id)" class="service-row group relative grid w-full gap-6 overflow-hidden border-b border-white/15 py-9 text-left lg:grid-cols-[90px_1fr_1.25fr_48px] lg:items-center lg:px-5">
          <span class="text-xs font-bold text-[#c5a059]">{{ service.number }}</span>
          <h3 class="font-display text-3xl font-bold tracking-[-.035em] transition-colors duration-300 group-hover:text-[#c5a059] sm:text-4xl">{{ service.title }}</h3>
          <div><p class="max-w-xl text-base leading-7 text-slate-300">{{ service.desc }}</p><p class="mt-3 text-xs font-semibold uppercase tracking-[.12em] text-slate-400">{{ service.items }}</p></div>
          <ArrowDownRight class="hidden h-7 w-7 text-slate-400 transition-all duration-300 group-hover:rotate-[-45deg] group-hover:text-[#c5a059] lg:block" />
        </button>
      </div>
    </div>
  </section>
</template>
