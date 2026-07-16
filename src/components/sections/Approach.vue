<script setup>
import { ref, computed, watch } from 'vue'
import { Search, PenTool, Code2, Rocket, Wrench, ShieldCheck, HardDrive, Monitor, Database, Activity, Cloud, Lock, ArrowRight, Server } from 'lucide-vue-next'

const props = defineProps({
    modelValue: {
        type: String,
        default: 'dev'
    }
})

const emit = defineEmits(['update:modelValue'])

const activeTab = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
    if (newVal) activeTab.value = newVal
})

const setTab = (tab) => {
    activeTab.value = tab
    emit('update:modelValue', tab)
}

const methodologies = {
    dev: [
        {
            id: '01',
            icon: Search,
            title: 'Diagnóstico & Estratégia',
            desc: 'Antes de escrever código, entendemos o seu negócio. Analisamos seus objetivos, público-alvo e processos para desenhar uma solução que resolva problemas reais.'
        },
        {
            id: '02',
            icon: PenTool,
            title: 'UX/UI & Arquitetura',
            desc: 'Criamos interfaces focadas em conversão e usabilidade. Não entregamos apenas sites bonitos, entregamos experiências que guiam o usuário para a ação.'
        },
        {
            id: '03',
            icon: Code2,
            title: 'Desenvolvimento Premium',
            desc: 'Escrevemos código limpo, seguro e performático. Utilizamos tecnologias de ponta (Vue, Node) para garantir velocidade extrema e SEO impecável.'
        },
        {
            id: '04',
            icon: Rocket,
            title: 'Lançamento & Suporte',
            desc: 'O trabalho não acaba no deploy. Acompanhamos o lançamento, fornecemos infraestrutura confiável e suporte contínuo para o seu ecossistema digital.'
        }
    ],
    support: [
        {
            id: '01',
            icon: Search,
            title: 'Avaliação & Diagnóstico',
            desc: 'Análise minuciosa de hardware e software para identificar gargalos de performance, superaquecimento ou falhas de componentes no seu equipamento.'
        },
        {
            id: '02',
            icon: Wrench,
            title: 'Orçamento Transparente',
            desc: 'Apresentamos um plano de ação claro, com opções de upgrades de SSD, memória RAM ou limpeza preventiva, sem taxas ocultas ou surpresas.'
        },
        {
            id: '03',
            icon: Monitor,
            title: 'Intervenção Técnica',
            desc: 'Limpeza química, troca de pasta térmica de alta performance e formatação otimizada do sistema, maximizando a vida útil da sua máquina.'
        },
        {
            id: '04',
            icon: Activity,
            title: 'Testes & Entrega',
            desc: 'Realizamos testes de estresse (stress test) nas temperaturas e componentes. Só entregamos o equipamento quando ele está operando em 100% da sua capacidade.'
        }
    ],
    backup: [
        {
            id: '01',
            icon: Search,
            title: 'Auditoria de Riscos',
            desc: 'Mapeamos onde seus dados críticos estão armazenados hoje e identificamos vulnerabilidades (falta de redundância, vírus, falhas de HD).'
        },
        {
            id: '02',
            icon: HardDrive,
            title: 'Estratégia Nuvem/Local',
            desc: 'Desenhamos uma arquitetura híbrida de backup adaptada ao seu volume de dados, mesclando armazenamento físico criptografado e espelhamento em nuvem.'
        },
        {
            id: '03',
            icon: Cloud,
            title: 'Automação de Rotinas',
            desc: 'Configuramos rotinas que rodam silenciosamente em segundo plano, garantindo que o backup diário ocorra sem que você precise lembrar de clicar em nada.'
        },
        {
            id: '04',
            icon: Lock,
            title: 'Monitoramento Contínuo',
            desc: 'Acompanhamos a saúde dos seus dados. Em caso de desastre (arquivos apagados ou corrompidos), atuamos na recuperação rápida para seu negócio não parar.'
        }
    ]
}

const currentSteps = computed(() => methodologies[activeTab.value])
</script>

<template>
    <section id="metodologia" class="py-24 bg-[#020617] relative overflow-hidden border-t border-white/5">
        
        <!-- Fundo decorativo -->
        <div class="absolute inset-0 bg-brand-gold/5 blur-[120px] rounded-full opacity-30 pointer-events-none translate-x-1/2 translate-y-1/2 transition-all duration-1000"></div>
        <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
            <div class="font-mono text-xs text-brand-gold p-10 leading-loose select-none transition-opacity duration-500">
                const workProcess = {<br>
                &nbsp;&nbsp;strategy: 'business-first',<br>
                &nbsp;&nbsp;focus: '{{ activeTab }}',<br>
                &nbsp;&nbsp;execution: 'flawless'<br>
                }
            </div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
                <div class="space-y-4 text-center md:text-left w-full md:w-auto">
                    <div class="flex items-center gap-2 justify-center md:justify-start">
                        <span class="w-8 h-[1px] bg-brand-gold"></span>
                        <span class="font-mono text-xs font-bold uppercase tracking-widest text-brand-gold">
                            Como Trabalhamos
                        </span>
                    </div>
                    <h2 class="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                        Nossa Metodologia <br>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-100">
                            passo a passo
                        </span>
                    </h2>
                </div>
                <p class="font-sans text-slate-400 max-w-md text-sm leading-relaxed text-center md:text-right">
                    Transparência e excelência técnica em todas as frentes. Selecione abaixo a área do seu interesse para entender nosso processo.
                </p>
            </div>

            <!-- Tabs Navigation -->
            <div class="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 mb-16">
                <button 
                    @click="setTab('dev')"
                    class="flex items-center gap-2 px-6 py-3 rounded-md font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300"
                    :class="activeTab === 'dev' ? 'bg-brand-gold text-slate-950 shadow-[0_0_20px_-5px_rgba(234,179,8,0.4)] scale-105' : 'bg-slate-900/50 text-slate-400 border border-white/5 hover:border-brand-gold/30 hover:text-white'"
                >
                    <Code2 class="w-4 h-4" />
                    <span class="hidden md:inline">Desenvolvimento</span>
                    <span class="md:hidden">Dev</span>
                </button>

                <button 
                    @click="setTab('support')"
                    class="flex items-center gap-2 px-6 py-3 rounded-md font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300"
                    :class="activeTab === 'support' ? 'bg-brand-gold text-slate-950 shadow-[0_0_20px_-5px_rgba(234,179,8,0.4)] scale-105' : 'bg-slate-900/50 text-slate-400 border border-white/5 hover:border-brand-gold/30 hover:text-white'"
                >
                    <Wrench class="w-4 h-4" />
                    <span class="hidden md:inline">Suporte Técnico</span>
                    <span class="md:hidden">Suporte</span>
                </button>

                <button 
                    @click="setTab('backup')"
                    class="flex items-center gap-2 px-6 py-3 rounded-md font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300"
                    :class="activeTab === 'backup' ? 'bg-brand-gold text-slate-950 shadow-[0_0_20px_-5px_rgba(234,179,8,0.4)] scale-105' : 'bg-slate-900/50 text-slate-400 border border-white/5 hover:border-brand-gold/30 hover:text-white'"
                >
                    <Database class="w-4 h-4" />
                    <span class="hidden md:inline">Backup & Dados</span>
                    <span class="md:hidden">Backup</span>
                </button>
            </div>

            <!-- Steps Grid with Transition -->
            <div class="relative min-h-[400px]">
                <Transition name="fade" mode="out-in">
                    <div :key="activeTab" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div v-for="(step, index) in currentSteps" :key="step.id" 
                             class="group relative bg-slate-900/40 border border-white/5 p-8 rounded-xl hover:bg-slate-900/80 hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-2">
                            
                            <div class="absolute top-0 right-8 -translate-y-1/2 font-display text-6xl font-bold text-white/5 group-hover:text-brand-gold/10 transition-colors pointer-events-none">
                                {{ step.id }}
                            </div>

                            <div class="w-14 h-14 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-gold/50 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] transition-all">
                                <component :is="step.icon" class="w-6 h-6 text-slate-400 group-hover:text-brand-gold transition-colors" />
                            </div>

                            <h3 class="font-display text-xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">
                                {{ step.title }}
                            </h3>

                            <p class="font-sans text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                {{ step.desc }}
                            </p>

                            <!-- Conector visual para desktop -->
                            <div v-if="index !== currentSteps.length - 1" class="hidden lg:block absolute top-1/2 right-0 w-8 h-[1px] bg-gradient-to-r from-white/10 to-transparent translate-x-full z-0 group-hover:from-brand-gold/30 transition-colors"></div>
                        </div>
                    </div>
                </Transition>
            </div>

            <div class="mt-20 flex justify-center">
                <a href="#contato" class="inline-flex items-center gap-3 px-8 py-4 bg-brand-gold text-slate-950 hover:bg-white font-bold rounded shadow-[0_0_30px_-10px_rgba(234,179,8,0.5)] transition-all duration-300 hover:scale-105 group font-mono text-sm uppercase tracking-widest">
                    Iniciar meu projeto
                    <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(15px);
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(-15px);
}
</style>
