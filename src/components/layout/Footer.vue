<script setup>
import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-vue-next'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/10 bg-[#01040b] py-14">
    <div class="container mx-auto grid gap-12 px-6 lg:grid-cols-[1.2fr_.8fr_.8fr]">
      <div>
        <p class="font-display text-2xl font-bold text-white">APERTE <span class="text-brand-gold">F1</span></p>
        <p class="mt-4 text-[11px] font-medium uppercase tracking-[.2em] text-slate-400">Sites <span class="px-1 text-brand-gold">·</span> Sistemas <span class="px-1 text-brand-gold">·</span> Suporte</p>
      </div>
      <div><h2 class="text-sm font-bold text-white">Atendimento</h2><ul class="mt-4 space-y-3 text-sm text-slate-400"><li>Segunda a sexta, 8h às 18h</li><li>Sábado, 8h às 12h</li><li>Emergências fora do horário sob consulta</li><li class="flex items-center gap-2"><MapPin class="h-4 w-4 text-brand-gold" /> Salvador e RMS</li></ul></div>
      <div><h2 class="text-sm font-bold text-white">Canais oficiais</h2><ul class="mt-4 space-y-3 text-sm"><li><a href="https://wa.me/5571993290895" target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-track-location="footer" class="footer-link"><MessageCircle class="h-4 w-4" /> (71) 99329-0895</a></li><li><a href="https://instagram.com/aperte.f1" target="_blank" rel="noopener noreferrer" data-track="instagram_click" data-track-location="footer" class="footer-link"><Instagram class="h-4 w-4" /> @aperte.f1</a></li><li><a href="mailto:apertef1agora@gmail.com" class="footer-link"><Mail class="h-4 w-4" /> apertef1agora@gmail.com</a></li></ul></div>
    </div>
    <div class="container mx-auto mt-12 border-t border-white/10 px-6 pt-7 text-xs text-slate-400"><p>© {{ year }} Aperte F1. Todos os direitos reservados.</p></div>
  </footer>
</template>
