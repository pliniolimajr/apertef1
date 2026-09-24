<script setup>
const testimonials = [
  { name: 'Paloma Maria', role: 'Studio Modesto', text: 'A Aperte F1 entendeu a rotina do nosso salão e criou um painel que organizou agendamentos, caixa e controle financeiro. Hoje ganhamos muito mais tempo para focar nas clientes.' },
  { name: 'Júlia Mello', role: 'Cliente de suporte', text: 'Todo o processo foi explicado com clareza e resolvido sem demora. Saí tranquila, satisfeita e confiante no serviço.' },
  { name: 'Yasmin Santana', role: 'Advogada', text: 'O processo foi claro, rápido e o resultado superou as expectativas. Hoje o site virou uma ferramenta real de vendas.' },
  { name: 'Magna Studio', role: 'Arquitetura', text: 'Sempre que a rede cai ou um PC trava, eles resolvem remoto em minutos. Ter a parceria da Aperte F1 é como ter um setor de TI interno.' }
]
</script>

<template>
  <section id="depoimentos" class="bg-[#020817] text-white">
    <div class="mx-auto max-w-[1600px] border-x border-white/10 px-5 py-20 sm:px-10 lg:px-14 lg:py-28 xl:px-20">
      <div class="grid gap-12 lg:grid-cols-[.72fr_1.28fr]"><p class="text-xs font-bold uppercase tracking-[.2em] text-[#c5a059]">Quem trabalhou com a gente</p><h2 class="max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-[-.045em] sm:text-6xl">Trabalho bom deixa cliente à vontade para indicar.</h2></div>
      <div class="mt-14 grid border-l border-t border-white/15 md:grid-cols-2">
        <figure v-for="item in testimonials" :key="item.name" class="testimonial-item group flex min-h-72 flex-col justify-between border-b border-r border-white/15 p-7 sm:p-10">
          <blockquote class="font-display text-xl font-medium leading-8 tracking-[-.02em] transition-colors group-hover:text-white">“{{ item.text }}”</blockquote>
          <figcaption class="mt-10"><strong class="block text-sm">{{ item.name }}</strong><span class="mt-1 block text-xs uppercase tracking-[.14em] text-slate-400">{{ item.role }}</span></figcaption>
        </figure>
      </div>
      <div class="mt-14 grid gap-6 border-t border-white/15 pt-7 sm:grid-cols-4"><div><strong class="font-display text-3xl">6 anos</strong><span class="mt-1 block text-xs uppercase tracking-[.12em] text-slate-400">de experiência</span></div><div><strong class="font-display text-3xl">+250</strong><span class="mt-1 block text-xs uppercase tracking-[.12em] text-slate-400">clientes atendidos</span></div><div><strong class="font-display text-3xl">+1.000</strong><span class="mt-1 block text-xs uppercase tracking-[.12em] text-slate-400">chamados resolvidos</span></div><div><strong class="font-display text-3xl">Até 60 min</strong><span class="mt-1 block text-xs uppercase tracking-[.12em] text-slate-400">resposta no WhatsApp</span></div></div>
    </div>
  </section>
</template>
