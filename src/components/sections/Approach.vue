<script setup>
import { computed, ref, watch } from 'vue'
const props = defineProps({ modelValue: { type: String, default: 'dev' } })
const emit = defineEmits(['update:modelValue'])
const active = ref(props.modelValue)
watch(() => props.modelValue, value => { if (value) active.value = value })
const tabs = [{ id: 'dev', label: 'Sites e sistemas' }, { id: 'support', label: 'Suporte técnico' }, { id: 'backup', label: 'Backup e dados' }]
const processes = {
  dev: [['Entender', 'Negócio, público e objetivo antes de escolher a tecnologia.'], ['Desenhar', 'Conteúdo, experiência e funcionalidades organizados com clareza.'], ['Construir', 'Desenvolvimento cuidadoso, rápido e preparado para crescer.'], ['Acompanhar', 'Publicação, orientação e suporte depois que o projeto entra no ar.']],
  support: [['Ouvir', 'Sintomas e histórico do equipamento sem diagnóstico apressado.'], ['Avaliar', 'Testes e explicação clara do problema e das alternativas.'], ['Resolver', 'Manutenção, reparo ou melhoria somente após a aprovação.'], ['Entregar', 'Testes finais, orientação de uso e garantia documentada.']],
  backup: [['Mapear', 'O que é importante, onde está e quais são os riscos atuais.'], ['Planejar', 'Uma combinação adequada de armazenamento local e nuvem.'], ['Automatizar', 'Rotinas que não dependem da memória de alguém para acontecer.'], ['Verificar', 'Testes de restauração e ajustes conforme os dados evoluem.']]
}
const steps = computed(() => processes[active.value] || processes.dev)
function select(id) { active.value = id; emit('update:modelValue', id) }
</script>

<template>
  <section id="metodologia" class="bg-[#061128] text-white">
    <div class="mx-auto max-w-[1600px] border-x border-white/10 px-5 py-20 sm:px-10 lg:px-14 lg:py-28 xl:px-20">
      <div class="grid gap-12 lg:grid-cols-[.72fr_1.28fr]"><p class="text-xs font-bold uppercase tracking-[.2em] text-[#c5a059]">Como a gente trabalha</p><div><h2 class="max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-[-.045em] sm:text-6xl">Você entende o processo inteiro.</h2><p class="mt-6 max-w-2xl leading-7 text-slate-400">Tecnologia exige decisões, mas não precisa exigir linguagem complicada. A gente explica, combina e executa.</p></div></div>
      <div class="mt-14 flex flex-wrap border-b border-white/15" role="tablist" aria-label="Tipo de serviço"><button v-for="tab in tabs" :key="tab.id" type="button" role="tab" :aria-selected="active === tab.id" @click="select(tab.id)" class="mr-8 border-b-2 px-0 py-4 text-sm font-bold transition" :class="active === tab.id ? 'border-[#c5a059] text-white' : 'border-transparent text-slate-400 hover:text-white'">{{ tab.label }}</button></div>
      <div class="grid border-l border-white/15 md:grid-cols-2 lg:grid-cols-4"><article v-for="(step, index) in steps" :key="step[0]" class="process-step group min-h-64 border-b border-r border-white/15 p-7"><span class="text-xs font-bold text-[#c5a059]">0{{ index + 1 }}</span><h3 class="mt-14 font-display text-2xl font-bold transition-colors group-hover:text-[#c5a059]">{{ step[0] }}</h3><p class="mt-4 text-sm leading-6 text-slate-400 transition-colors group-hover:text-slate-300">{{ step[1] }}</p></article></div>
    </div>
  </section>
</template>
