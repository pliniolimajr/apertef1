<script setup>
import { nextTick, ref } from 'vue'
import { Instagram, MessageCircle, MapPin, Send, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-vue-next'

// --- CONFIGURAÇÃO ---
// Crie seu form em formspree.io e cole o código final aqui (ex: "mdorqznk")
const FORMSPREE_ID = "mqeqwvvr" 

// --- ESTADOS ---
const form = ref({ name: '', phone: '', service: '', message: '' })
const status = ref({ submitting: false, success: false, error: false })
const isDropdownOpen = ref(false) // Controla o menu suspenso
const serviceError = ref(false)

// --- DADOS ---
const contactInfo = {
    phone: '(71) 99329-0895',
    whatsappLink: 'https://wa.me/5571993290895?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Aperte%20F1%20e%20preciso%20de%20ajuda.',
    instagram: '@aperte.f1',
    instagramLink: 'https://www.instagram.com/aperte.f1/',
    location: 'Salvador - BA'
}

// Opções do Menu Personalizado
const serviceOptions = [
    { label: 'Sites e sistemas', value: 'Sites e sistemas' },
    { label: 'Suporte Técnico', value: 'Suporte Técnico' },
    { label: 'Backup & Segurança de Dados', value: 'Backup & Dados' },
    { label: 'Reparos Apple', value: 'Reparos Apple' },
    { label: 'Consultoria / Outros', value: 'Outros' }
]

// --- MÉTODOS ---

// Selecionar opção do menu
const selectOption = (option) => {
    form.value.service = option.value
    serviceError.value = false
    isDropdownOpen.value = false
    nextTick(() => document.getElementById('service-trigger')?.focus())
}

const openDropdown = () => {
    isDropdownOpen.value = true
    nextTick(() => document.getElementById('service-option-0')?.focus())
}

const moveOptionFocus = (index, direction) => {
    const nextIndex = (index + direction + serviceOptions.length) % serviceOptions.length
    document.getElementById(`service-option-${nextIndex}`)?.focus()
}

// Fechar menu ao clicar fora
const closeDropdown = () => {
    isDropdownOpen.value = false
}

// Enviar Formulário
const handleSubmit = async () => {
    if (!form.value.service) {
        serviceError.value = true
        document.getElementById('service-trigger')?.focus()
        return
    }
    status.value.submitting = true
    status.value.error = false
    status.value.success = false

    try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(form.value)
        })

        if (response.ok) {
            // Sucesso
            status.value.success = true
            form.value = { name: '', phone: '', service: '', message: '' } // Limpa campos
            
            // Remove mensagem após 5s
            setTimeout(() => { status.value.success = false }, 5000)
        } else {
            // Erro do servidor
            status.value.error = true
        }

    } catch (e) {
        // Erro de rede
        status.value.error = true
    } finally {
        status.value.submitting = false
    }
}
</script>

<template>
    <section id="contato" class="py-24 bg-slate-950 relative border-t border-white/5">
        
        <div class="container mx-auto px-6">
            <div class="flex flex-col lg:flex-row gap-16 items-start">
                
                <div class="lg:w-1/3 space-y-8">
                    <div>
                        <div class="flex items-center gap-2 mb-4">
                            <span class="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></span>
                            <span class="font-mono text-xs font-bold uppercase tracking-widest text-brand-gold">
                                Atendimento disponível
                            </span>
                        </div>
                        <h2 class="font-display text-4xl text-white font-bold leading-tight">
                            Conte o que <br>
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">você precisa.</span>
                        </h2>
                        <p class="mt-4 text-slate-400 font-sans font-light leading-relaxed">
                            Envie sua solicitação pelo formulário ou fale diretamente com a gente pelos canais abaixo.
                        </p>
                    </div>

                    <div class="space-y-4 pt-4 border-t border-white/5">
                        
                        <a :href="contactInfo.whatsappLink" target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-track-location="contact" class="group flex items-center gap-4 p-4 rounded bg-slate-900/50 border border-white/5 hover:border-brand-gold/50 transition-all cursor-pointer">
                            <div class="w-10 h-10 rounded bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-slate-950 transition-colors">
                                <MessageCircle class="w-5 h-5" />
                            </div>
                            <div>
                                <span class="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">WhatsApp</span>
                                <span class="text-white font-display text-lg">{{ contactInfo.phone }}</span>
                            </div>
                        </a>

                        <a :href="contactInfo.instagramLink" target="_blank" rel="noopener noreferrer" data-track="instagram_click" data-track-location="contact" class="group flex items-center gap-4 p-4 rounded bg-slate-900/50 border border-white/5 hover:border-brand-gold/50 transition-all cursor-pointer">
                            <div class="w-10 h-10 rounded bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-slate-950 transition-colors">
                                <Instagram class="w-5 h-5" />
                            </div>
                            <div>
                                <span class="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">Instagram</span>
                                <span class="text-white font-display text-lg">{{ contactInfo.instagram }}</span>
                            </div>
                        </a>

                        <div class="flex items-center gap-4 p-4 opacity-60">
                            <MapPin class="w-5 h-5 text-slate-400" />
                            <span class="text-slate-300 font-mono text-sm uppercase tracking-wide">{{ contactInfo.location }}</span>
                        </div>

                    </div>
                </div>

                <div class="lg:w-2/3 w-full bg-[#020617] p-8 md:p-12 rounded-xl border border-white/10 relative overflow-hidden shadow-2xl shadow-black">
                    
                    <div class="absolute top-0 left-0 w-full h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                        <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
                        <span class="ml-4 font-mono text-[10px] text-slate-400">apertef1.com.br/contato</span>
                    </div>

                    <form @submit.prevent="handleSubmit" class="mt-8 space-y-8 relative z-10">
                        
                        <div v-if="status.success" class="p-4 bg-green-500/10 border border-green-500/20 text-green-400 font-mono text-xs flex items-center gap-3 rounded animate-in fade-in slide-in-from-top-2">
                            <CheckCircle2 class="w-4 h-4" />
                            <span>Mensagem enviada. Entraremos em contato em breve.</span>
                        </div>

                        <div v-if="status.error" class="p-4 bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs flex items-center gap-3 rounded animate-pulse">
                            <AlertCircle class="w-4 h-4" />
                            <span>Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.</span>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="group">
                                <label for="contact-name" class="block font-mono text-[10px] uppercase tracking-widest text-brand-gold mb-2 group-focus-within:text-white transition-colors">
                                    Nome ou empresa
                                </label>
                                <input id="contact-name" v-model="form.name" required autocomplete="name" type="text" class="w-full bg-transparent border-b border-white/20 py-3 text-white font-sans focus:border-brand-gold focus:outline-none transition-colors placeholder-slate-500" placeholder="Seu nome ou empresa">
                            </div>
                            <div class="group">
                                <label for="contact-phone" class="block font-mono text-[10px] uppercase tracking-widest text-brand-gold mb-2 group-focus-within:text-white transition-colors">
                                    WhatsApp
                                </label>
                                <input id="contact-phone" v-model="form.phone" required autocomplete="tel" inputmode="tel" type="tel" class="w-full bg-transparent border-b border-white/20 py-3 text-white font-sans focus:border-brand-gold focus:outline-none transition-colors placeholder-slate-500" placeholder="(71) 99999-9999">
                            </div>
                        </div>

                        <div class="group relative">
                            <span id="service-label" class="block font-mono text-[10px] uppercase tracking-widest text-brand-gold mb-2 group-focus-within:text-white transition-colors">
                                Como podemos ajudar?
                            </span>
                            
                            <button
                                id="service-trigger"
                                type="button"
                                aria-haspopup="listbox"
                                aria-controls="service-options"
                                :aria-expanded="isDropdownOpen"
                                aria-labelledby="service-label service-value"
                                :aria-describedby="serviceError ? 'service-error' : undefined"
                                @click="isDropdownOpen ? closeDropdown() : openDropdown()"
                                @keydown.down.prevent="openDropdown"
                                class="w-full bg-transparent border-b border-white/20 py-3 text-white font-sans cursor-pointer flex justify-between items-center hover:border-brand-gold/50 transition-colors select-none"
                                :class="{ 'border-brand-gold': isDropdownOpen, 'border-red-400': serviceError }"
                            >
                                <span id="service-value" :class="form.service ? 'text-white' : 'text-slate-300 font-light'">{{ form.service || 'Selecione o serviço...' }}</span>
                                
                                <ChevronDown 
                                    class="w-4 h-4 text-brand-gold transition-transform duration-300"
                                    :class="{ 'rotate-180': isDropdownOpen }"
                                />
                            </button>
                            <p v-if="serviceError" id="service-error" role="alert" class="mt-2 text-xs text-red-300">Selecione um serviço antes de enviar.</p>

                            <div v-if="isDropdownOpen" @click="closeDropdown" class="fixed inset-0 z-10 cursor-default"></div>

                            <Transition 
                                enter-active-class="transition duration-200 ease-out"
                                enter-from-class="opacity-0 -translate-y-2"
                                enter-to-class="opacity-100 translate-y-0"
                                leave-active-class="transition duration-150 ease-in"
                                leave-from-class="opacity-100 translate-y-0"
                                leave-to-class="opacity-0 -translate-y-2"
                            >
                                <div v-if="isDropdownOpen" class="absolute left-0 top-full mt-2 w-full bg-[#0f172a] border border-brand-gold/20 rounded shadow-xl shadow-black/50 z-20 overflow-hidden">
                                    <ul id="service-options" role="listbox" aria-labelledby="service-label">
                                        <li role="none"
                                            v-for="option in serviceOptions" 
                                            :key="option.value"
                                        >
                                            <button
                                                :id="`service-option-${serviceOptions.indexOf(option)}`"
                                                type="button"
                                                role="option"
                                                :aria-selected="form.service === option.value"
                                                @click="selectOption(option)"
                                                @keydown.down.prevent="moveOptionFocus(serviceOptions.indexOf(option), 1)"
                                                @keydown.up.prevent="moveOptionFocus(serviceOptions.indexOf(option), -1)"
                                                @keydown.esc.prevent="closeDropdown(); $nextTick(() => document.getElementById('service-trigger')?.focus())"
                                                class="w-full px-4 py-3 text-left text-sm text-slate-200 hover:bg-brand-gold/10 hover:text-brand-gold cursor-pointer transition-colors font-mono border-b border-white/5 last:border-0 flex items-center gap-2"
                                            >
                                                <span class="w-1.5 h-1.5 rounded-full" :class="form.service === option.value ? 'bg-brand-gold' : 'bg-slate-500'"></span>
                                                {{ option.label }}
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </Transition>
                        </div>

                        <div class="group">
                            <label for="contact-message" class="block font-mono text-[10px] uppercase tracking-widest text-brand-gold mb-2 group-focus-within:text-white transition-colors">
                                Mensagem
                            </label>
                            <textarea id="contact-message" v-model="form.message" required rows="3" class="w-full bg-transparent border-b border-white/20 py-3 text-white font-sans focus:border-brand-gold focus:outline-none transition-colors placeholder-slate-500 resize-none" placeholder="Descreva brevemente sua necessidade..."></textarea>
                        </div>

                        <button 
                            type="submit" 
                            :disabled="status.submitting"
                            class="group relative w-full md:w-auto px-8 py-4 bg-brand-gold text-slate-950 font-bold font-mono text-xs uppercase tracking-widest rounded hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden"
                        >
                            <span class="relative z-10 flex items-center gap-2">
                                <span v-if="status.submitting">Enviando...</span>
                                <span v-else>Enviar solicitação</span>
                                <Send v-if="!status.submitting" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            
                            <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 z-0"></div>
                        </button>
                        
                        <p class="text-center md:text-left font-mono text-[10px] text-slate-400">
                            * Tempo estimado de resposta: até 60 minutos no horário comercial.
                        </p>

                    </form>
                </div>

            </div>
        </div>
    </section>
</template>
