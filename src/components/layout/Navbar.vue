<script setup>
import { ArrowUpRight, Menu, X } from 'lucide-vue-next'
import { nextTick, onUnmounted, ref, watch } from 'vue'
const open = ref(false)
const mobileMenu = ref(null)
const links = [['Serviços', 'servicos'], ['Sobre', 'metodologia'], ['Trabalho', 'projetos'], ['Contato', 'contato']]
const whatsapp = 'https://wa.me/5571993290895?text=Ol%C3%A1!%20Visitei%20o%20site%20da%20Aperte%20F1%20e%20gostaria%20de%20conversar.'
function go(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); open.value = false }
function closeOutsideAction(event) {
  if (!event.target.closest('button, a')) open.value = false
}
watch(open, async (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
  if (value) {
    await nextTick()
    mobileMenu.value?.querySelector('button')?.focus()
  }
})
onUnmounted(() => { document.body.style.overflow = '' })
</script>

<template>
  <nav class="fixed inset-x-0 top-0 z-50 bg-[#020817]/95 backdrop-blur" aria-label="Navegação principal">
    <div class="mx-auto flex h-[80px] max-w-[1600px] items-center px-5 sm:px-8">
      <button type="button" @click="go('inicio')" class="w-64 text-left">
        <span class="block font-display text-[26px] font-bold leading-none tracking-[-0.04em] text-white">APERTE <span class="text-[#c5a059]">F1</span></span>
      </button>
      <div class="hidden flex-1 justify-center gap-9 lg:flex">
        <button v-for="link in links" :key="link[1]" type="button" @click="go(link[1])" class="nav-link text-sm font-light tracking-wide text-slate-300">{{ link[0] }}</button>
      </div>
      <a :href="whatsapp" target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-track-location="navbar" class="group ml-auto hidden items-center gap-2 border-b border-[#c5a059] pb-1 text-[13px] font-bold text-white transition hover:text-[#c5a059] lg:flex">Iniciar conversa <ArrowUpRight class="h-4 w-4 text-[#c5a059] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
      <button type="button" @click="open = !open" class="relative z-[60] ml-auto p-2 text-white transition hover:text-[#c5a059] lg:hidden" :aria-expanded="open" aria-controls="mobile-menu" :aria-label="open ? 'Fechar menu' : 'Abrir menu'"><X v-if="open" class="h-6 w-6" /><Menu v-else class="h-6 w-6" /></button>
    </div>
  </nav>

  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-3"
  >
    <div
      v-if="open"
      id="mobile-menu"
      ref="mobileMenu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu principal"
      @click="closeOutsideAction"
      @keydown.esc="open = false"
      class="fixed inset-x-0 bottom-0 top-[80px] z-40 flex flex-col items-center overflow-y-auto border-t border-white/10 bg-[#020817]/80 px-6 pb-10 pt-10 backdrop-blur-xl lg:hidden"
    >
      <div class="flex w-full max-w-md flex-col items-center gap-2">
        <button
          v-for="(link, index) in links"
          :key="link[1]"
          type="button"
          @click="go(link[1])"
          class="mobile-menu-item w-full py-4 text-center font-display text-2xl font-medium text-white transition hover:text-[#c5a059]"
          :style="{ animationDelay: `${index * 55}ms` }"
        >{{ link[0] }}</button>
      </div>
      <a :href="whatsapp" target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-track-location="mobile_menu" class="mobile-menu-item mt-8 inline-flex w-full max-w-sm items-center justify-center gap-3 bg-[#c5a059] px-7 py-4 font-bold text-[#020817] shadow-[0_12px_35px_rgba(197,160,89,.2)] transition hover:bg-white" style="animation-delay: 240ms">Iniciar conversa <ArrowUpRight class="h-5 w-5" /></a>
    </div>
  </Transition>
</template>

<style scoped>
.mobile-menu-item { animation: menuItemIn .4s both cubic-bezier(.2,.75,.25,1); }
@keyframes menuItemIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  .mobile-menu-item { animation: none; }
}
</style>
