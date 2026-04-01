"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ChevronLeft, Calendar, Clock, User, CreditCard, Gift, Crown } from "lucide-react";
import { services, staffMembers } from "@/lib/data/services";
import { availableTimeSlots, defaultBookingForm, depositAmount, depositPercentage, type BookingFormData } from "@/lib/data/booking";
import { formatPrice, formatDuration } from "@/lib/utils";
import { DayPicker } from "react-day-picker";
import { nb } from "date-fns/locale";
import "react-day-picker/src/style.css";

const STEPS = [
  { id: 1, label: "Tjeneste", icon: Crown },
  { id: 2, label: "Behandling", icon: Check },
  { id: 3, label: "Dato & Tid", icon: Calendar },
  { id: 4, label: "Detaljer", icon: User },
  { id: 5, label: "Betaling", icon: CreditCard },
  { id: 6, label: "Ferdig", icon: Check },
];

const stepVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -50 : 50, opacity: 0 }),
};

/* ── shared input class ── */
const inputCls =
  "w-full bg-[#FAF6F2] border border-[#E8D9D2] text-[#0B0B0D] px-4 py-3.5 text-sm min-h-[48px] focus:outline-none focus:border-[#B76E79] transition-colors rounded-none";

/* ── shared nav button ── */
function BackBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-[#999] hover:text-[#0B0B0D] transition-colors font-sans text-xs tracking-[0.15em] uppercase min-h-[44px] touch-manipulation"
    >
      <ChevronLeft className="w-4 h-4" /> Tilbake
    </button>
  );
}

function NextBtn({ onClick, disabled, label = "Neste" }: { onClick: () => void; disabled?: boolean; label?: string }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-2 bg-[#0B0B0D] text-[#F7F2EE] font-sans font-medium text-xs tracking-[0.2em] uppercase px-7 py-3.5 min-h-[48px] hover:bg-[#2A2A2A] transition-colors disabled:opacity-40 disabled:cursor-not-allowed touch-manipulation"
    >
      {label} <ChevronRight className="w-4 h-4" />
    </button>
  );
}

export function BookingWizard() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [form, setForm] = useState<BookingFormData>(defaultBookingForm);

  const goTo = (nextStep: number) => {
    setDirection(nextStep > step ? 1 : -1);
    setStep(nextStep);
  };

  const selectedService = services.find((s) => s.id === form.serviceCategory);
  const selectedSubService = selectedService?.subServices.find((s) => s.id === form.serviceId);
  const selectedStaff = staffMembers.find((s) => s.id === form.staffId);
  const depositValue = selectedSubService
    ? Math.round(selectedSubService.priceFrom * depositPercentage)
    : depositAmount;

  return (
    <div className="w-full">
      {/* ── STEP INDICATOR ─────────────────────────── */}
      <div className="mb-8 sm:mb-10">
        <div className="relative flex items-center justify-between">
          {/* connector line */}
          <div className="absolute top-4 left-0 right-0 h-px bg-[#E8D9D2]" />
          {STEPS.map((s) => {
            const Icon = s.icon;
            const isActive = step === s.id;
            const isDone = step > s.id;
            return (
              <div key={s.id} className="flex flex-col items-center gap-1.5 relative z-10">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isDone
                      ? "bg-[#B76E79] border-[#B76E79] text-white"
                      : isActive
                      ? "bg-white border-[#B76E79] text-[#B76E79] shadow-sm shadow-[#B76E79]/20"
                      : "bg-[#FAF6F2] border-[#E8D9D2] text-[#CCC]"
                  }`}
                >
                  {isDone ? <Check className="w-3.5 h-3.5" /> : <Icon className="w-3.5 h-3.5" />}
                </div>
                <span
                  className={`hidden sm:block font-sans text-[8px] tracking-[0.12em] uppercase transition-colors ${
                    isActive ? "text-[#B76E79]" : isDone ? "text-[#0B0B0D]" : "text-[#CCC]"
                  }`}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
        {/* Mobile: show current step label */}
        <p className="sm:hidden text-center font-sans text-xs text-[#B76E79] tracking-[0.15em] uppercase mt-3">
          Steg {step} av {STEPS.length} — {STEPS[step - 1]?.label}
        </p>
      </div>

      {/* ── STEP CONTENT ───────────────────────────── */}
      <div className="relative overflow-hidden min-h-[320px]">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={step}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35 }}
          >
            {step === 1 && <StepServiceCategory form={form} setForm={setForm} onNext={() => goTo(2)} />}
            {step === 2 && <StepTreatment form={form} setForm={setForm} onNext={() => goTo(3)} onBack={() => goTo(1)} />}
            {step === 3 && <StepDateTime form={form} setForm={setForm} onNext={() => goTo(4)} onBack={() => goTo(2)} />}
            {step === 4 && <StepDetails form={form} setForm={setForm} onNext={() => goTo(5)} onBack={() => goTo(3)} />}
            {step === 5 && (
              <StepPayment
                form={form}
                setForm={setForm}
                depositValue={depositValue}
                selectedSubService={selectedSubService}
                onConfirm={() => goTo(6)}
                onBack={() => goTo(4)}
              />
            )}
            {step === 6 && (
              <StepConfirmation
                form={form}
                selectedService={selectedService}
                selectedSubService={selectedSubService}
                selectedStaff={selectedStaff}
                onReset={() => { setForm(defaultBookingForm); setStep(1); }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── BOOKING SUMMARY (steps 2–5) ────────────── */}
      {step >= 2 && step < 6 && (selectedService || selectedSubService) && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 bg-[#FAF6F2] border border-[#E8D9D2] p-4 sm:p-5"
        >
          <p className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-[#C9A27E] mb-3">Din bestilling</p>
          <div className="space-y-2 text-sm">
            {selectedService && (
              <div className="flex justify-between gap-4">
                <span className="text-[#999]">Kategori</span>
                <span className="text-[#0B0B0D] font-medium">{selectedService.title}</span>
              </div>
            )}
            {selectedSubService && (
              <>
                <div className="flex justify-between gap-4">
                  <span className="text-[#999]">Behandling</span>
                  <span className="text-[#0B0B0D] font-medium text-right">{selectedSubService.name}</span>
                </div>
                <div className="flex justify-between gap-4 border-t border-[#E8D9D2] pt-2">
                  <span className="text-[#999]">Fra</span>
                  <span className="text-[#B76E79] font-medium">{formatPrice(selectedSubService.priceFrom)}</span>
                </div>
              </>
            )}
            {form.date && (
              <div className="flex justify-between gap-4">
                <span className="text-[#999]">Dato</span>
                <span className="text-[#0B0B0D]">{form.date.toLocaleDateString("nb-NO", { day: "numeric", month: "long" })}</span>
              </div>
            )}
            {form.timeSlot && (
              <div className="flex justify-between gap-4">
                <span className="text-[#999]">Tid</span>
                <span className="text-[#0B0B0D]">{form.timeSlot}</span>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   STEP 1 — Service category
═══════════════════════════════════════════════ */
function StepServiceCategory({ form, setForm, onNext }: { form: BookingFormData; setForm: (f: BookingFormData) => void; onNext: () => void }) {
  return (
    <div>
      <h3 className="font-serif text-xl sm:text-2xl text-[#0B0B0D] mb-1">Velg kategori</h3>
      <p className="text-[#999] text-sm mb-6">Hvilken type behandling ønsker du?</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => { setForm({ ...form, serviceCategory: service.id, serviceId: "" }); onNext(); }}
            className="group p-4 sm:p-5 text-left border-2 border-[#E8D9D2] hover:border-[#D8B7A6] bg-white hover:bg-[#FAF6F2] transition-all duration-200 min-h-[80px] touch-manipulation"
          >
            <div className="font-serif text-lg text-[#0B0B0D] mb-0.5">{service.title}</div>
            <div className="font-sans font-medium text-[9px] tracking-[0.18em] uppercase text-[#B76E79]">{service.subtitle}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   STEP 2 — Specific treatment
═══════════════════════════════════════════════ */
function StepTreatment({ form, setForm, onNext, onBack }: { form: BookingFormData; setForm: (f: BookingFormData) => void; onNext: () => void; onBack: () => void }) {
  const service = services.find((s) => s.id === form.serviceCategory);
  if (!service) return null;
  return (
    <div>
      <h3 className="font-serif text-xl sm:text-2xl text-[#0B0B0D] mb-1">Velg behandling</h3>
      <p className="text-[#999] text-sm mb-6">{service.title} – velg din behandling</p>

      <div className="space-y-2.5 mb-6">
        {service.subServices.map((sub) => (
          <button
            key={sub.id}
            onClick={() => { setForm({ ...form, serviceId: sub.id }); onNext(); }}
            className="w-full flex items-center justify-between gap-3 p-4 border-2 border-[#E8D9D2] hover:border-[#D8B7A6] bg-white hover:bg-[#FAF6F2] text-left transition-all duration-200 min-h-[72px] touch-manipulation"
          >
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="font-medium text-[#0B0B0D] text-sm">{sub.name}</span>
                {sub.popular && (
                  <span className="font-sans font-medium text-[8px] bg-[#F3E6E8] text-[#B76E79] px-2 py-0.5 rounded-full tracking-wide uppercase">
                    Populær
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-[#999] text-xs">
                <Clock className="w-3 h-3 flex-shrink-0" />
                <span>{formatDuration(sub.duration)}</span>
              </div>
            </div>
            <div className="flex-shrink-0 text-right">
              <div className="text-[#B76E79] font-medium text-sm">Fra {formatPrice(sub.priceFrom)}</div>
              <ChevronRight className="w-3.5 h-3.5 text-[#CCC] mt-1 ml-auto" />
            </div>
          </button>
        ))}
      </div>

      {/* Staff */}
      <h4 className="font-serif text-base text-[#0B0B0D] mb-3">Artist (valgfritt)</h4>
      <div className="grid grid-cols-2 gap-2.5 mb-6">
        {staffMembers.map((staff) => (
          <button
            key={staff.id}
            onClick={() => setForm({ ...form, staffId: staff.id })}
            className={`p-3.5 border-2 text-left transition-all duration-200 min-h-[60px] touch-manipulation ${
              form.staffId === staff.id ? "border-[#B76E79] bg-[#F3E6E8]" : "border-[#E8D9D2] bg-white hover:border-[#D8B7A6]"
            }`}
          >
            <div className="font-medium text-[#0B0B0D] text-sm">{staff.name}</div>
            <div className="text-[#999] text-xs mt-0.5 leading-tight">{staff.title}</div>
          </button>
        ))}
      </div>

      <div className="flex justify-between pt-2">
        <BackBtn onClick={onBack} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   STEP 3 — Date & time
═══════════════════════════════════════════════ */
function StepDateTime({ form, setForm, onNext, onBack }: { form: BookingFormData; setForm: (f: BookingFormData) => void; onNext: () => void; onBack: () => void }) {
  return (
    <div>
      <h3 className="font-serif text-xl sm:text-2xl text-[#0B0B0D] mb-1">Dato og tid</h3>
      <p className="text-[#999] text-sm mb-6">Når passer det best?</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Calendar */}
        <div>
          <p className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-[#C9A27E] mb-3">Velg dato</p>
          <div className="bg-white border border-[#E8D9D2] p-3 overflow-x-auto">
            <DayPicker
              mode="single"
              selected={form.date ?? undefined}
              onSelect={(date) => setForm({ ...form, date: date ?? null })}
              disabled={{ before: new Date() }}
              locale={nb}
            />
          </div>
        </div>

        {/* Time slots */}
        <div>
          <p className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-[#C9A27E] mb-3">
            Ledige tider
            {form.date && (
              <span className="ml-2 text-[#999] normal-case font-normal">
                – {form.date.toLocaleDateString("nb-NO", { day: "numeric", month: "short" })}
              </span>
            )}
          </p>
          {!form.date ? (
            <div className="bg-[#FAF6F2] border border-dashed border-[#E8D9D2] p-8 text-center">
              <Calendar className="w-7 h-7 text-[#D8B7A6] mx-auto mb-2" />
              <p className="text-[#999] text-sm">Velg en dato først</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-2">
              {availableTimeSlots.map((slot) => (
                <button
                  key={slot.id}
                  disabled={!slot.available}
                  onClick={() => setForm({ ...form, timeSlot: slot.time })}
                  className={`py-3 text-sm font-medium transition-all duration-200 min-h-[48px] touch-manipulation ${
                    !slot.available
                      ? "bg-[#F0F0F0] text-[#CCC] cursor-not-allowed line-through"
                      : form.timeSlot === slot.time
                      ? "bg-[#B76E79] text-white"
                      : "bg-white border border-[#E8D9D2] text-[#0B0B0D] hover:border-[#B76E79] hover:text-[#B76E79]"
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mt-7 pt-4 border-t border-[#E8D9D2]">
        <BackBtn onClick={onBack} />
        <NextBtn onClick={onNext} disabled={!form.date || !form.timeSlot} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   STEP 4 — Customer details
═══════════════════════════════════════════════ */
function StepDetails({ form, setForm, onNext, onBack }: { form: BookingFormData; setForm: (f: BookingFormData) => void; onNext: () => void; onBack: () => void }) {
  const isValid = form.firstName && form.lastName && form.phone && form.email;
  return (
    <div>
      <h3 className="font-serif text-xl sm:text-2xl text-[#0B0B0D] mb-1">Dine detaljer</h3>
      <p className="text-[#999] text-sm mb-6">Fyll inn kontaktinformasjonen din.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-[#999] block mb-2">Fornavn *</label>
          <input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            className={inputCls} placeholder="Ditt fornavn" />
        </div>
        <div>
          <label className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-[#999] block mb-2">Etternavn *</label>
          <input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className={inputCls} placeholder="Ditt etternavn" />
        </div>
        <div>
          <label className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-[#999] block mb-2">Telefon *</label>
          <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputCls} placeholder="+47 000 00 000" />
        </div>
        <div>
          <label className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-[#999] block mb-2">E-post *</label>
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputCls} placeholder="din@epost.no" />
        </div>
        <div>
          <label className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-[#999] block mb-2">Instagram (valgfritt)</label>
          <input value={form.instagram} onChange={(e) => setForm({ ...form, instagram: e.target.value })}
            className={inputCls} placeholder="@ditthandle" />
        </div>
        <div>
          <label className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-[#999] block mb-2">Gavekort (valgfritt)</label>
          <div className="relative">
            <input value={form.giftCard} onChange={(e) => setForm({ ...form, giftCard: e.target.value })}
              className={`${inputCls} pr-10`} placeholder="BQ-XXXX-XXXX" />
            <Gift className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D8B7A6]" />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-[#999] block mb-2">Notater / ønsker</label>
          <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}
            rows={3} className={`${inputCls} resize-none`}
            placeholder="Spesielle ønsker eller allergier?" />
        </div>
      </div>

      <div className="flex items-center justify-between mt-7 pt-4 border-t border-[#E8D9D2]">
        <BackBtn onClick={onBack} />
        <NextBtn onClick={onNext} disabled={!isValid} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   STEP 5 — Payment
═══════════════════════════════════════════════ */
function Sparkles({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l1.09 3.41L16 6.5l-2.91 1.09L12 11l-1.09-3.41L8 6.5l2.91-1.09L12 2zm7 8l.73 2.27L22 13l-2.27.73L19 16l-.73-2.27L16 13l2.27-.73L19 10zM5 14l.73 2.27L8 17l-2.27.73L5 20l-.73-2.27L2 17l2.27-.73L5 14z" />
    </svg>
  );
}

function StepPayment({ form, setForm, depositValue, selectedSubService, onConfirm, onBack }: {
  form: BookingFormData;
  setForm: (f: BookingFormData) => void;
  depositValue: number;
  selectedSubService: { name: string; priceFrom: number } | undefined;
  onConfirm: () => void;
  onBack: () => void;
}) {
  const options = [
    {
      id: "deposit" as const,
      title: "Betal depositum",
      subtitle: `${formatPrice(depositValue)} nå – resten i salongen`,
      description: "Sikre din time med et depositum.",
      badge: "Anbefalt",
    },
    {
      id: "full" as const,
      title: "Betal fullt beløp",
      subtitle: selectedSubService ? `${formatPrice(selectedSubService.priceFrom)} nå` : "Full betaling nå",
      description: "Betal hele beløpet online.",
      badge: null,
    },
    {
      id: "later" as const,
      title: "Betal i salongen",
      subtitle: "Ingen betaling nå",
      description: "Reserver og betal på dagen.",
      badge: null,
    },
  ];

  return (
    <div>
      <h3 className="font-serif text-xl sm:text-2xl text-[#0B0B0D] mb-1">Betaling</h3>
      <p className="text-[#999] text-sm mb-6">Velg din betalingsmåte.</p>

      <div className="space-y-3 mb-6">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setForm({ ...form, depositOption: opt.id })}
            className={`w-full flex items-start gap-3 p-4 sm:p-5 border-2 text-left transition-all duration-200 touch-manipulation ${
              form.depositOption === opt.id ? "border-[#B76E79] bg-[#F3E6E8]" : "border-[#E8D9D2] bg-white hover:border-[#D8B7A6]"
            }`}
          >
            <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${
              form.depositOption === opt.id ? "border-[#B76E79] bg-[#B76E79]" : "border-[#D8B7A6]"
            }`}>
              {form.depositOption === opt.id && <Check className="w-3 h-3 text-white" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-0.5">
                <span className="font-medium text-[#0B0B0D] text-sm">{opt.title}</span>
                {opt.badge && (
                  <span className="font-sans font-medium text-[8px] bg-[#B76E79] text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
                    {opt.badge}
                  </span>
                )}
              </div>
              <div className="text-[#B76E79] text-sm font-medium mb-0.5">{opt.subtitle}</div>
              <p className="text-[#999] text-xs">{opt.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Package upsell */}
      <div className="bg-gradient-to-r from-[#FAF6F2] to-[#F3E6E8] border border-[#E8D9D2] p-4 mb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <Sparkles className="w-4 h-4 text-[#C9A27E]" />
          <span className="font-medium text-[#0B0B0D] text-sm">Luksuspakke – Spar mer</span>
        </div>
        <p className="text-[#999] text-xs leading-relaxed mb-2">
          Kombiner behandlinger og spar opptil 20%.
        </p>
        <button className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-[#B76E79] border-b border-[#B76E79] pb-0.5 touch-manipulation">
          Forespør pakketilbud
        </button>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-[#E8D9D2]">
        <BackBtn onClick={onBack} />
        <button
          onClick={onConfirm}
          className="flex items-center gap-2 bg-[#B76E79] text-white font-sans font-medium text-xs tracking-[0.2em] uppercase px-7 py-3.5 min-h-[48px] hover:bg-[#9B5560] transition-colors shadow-lg shadow-[#B76E79]/20 touch-manipulation"
        >
          Bekreft <Check className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   STEP 6 — Confirmation
═══════════════════════════════════════════════ */
function StepConfirmation({ form, selectedService, selectedSubService, selectedStaff, onReset }: {
  form: BookingFormData;
  selectedService: { title: string } | undefined;
  selectedSubService: { name: string; priceFrom: number; duration: number } | undefined;
  selectedStaff: { name: string } | undefined;
  onReset: () => void;
}) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#B76E79] to-[#C9A27E] flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#B76E79]/30"
      >
        <Check className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
      </motion.div>

      <h3 className="font-serif text-2xl sm:text-3xl text-[#0B0B0D] mb-2">Booking bekreftet!</h3>
      <p className="text-[#999] text-sm mb-7 max-w-sm mx-auto px-4">
        Takk, {form.firstName}! En bekreftelse er sendt til {form.email}.
      </p>

      {/* Summary */}
      <div className="bg-white border border-[#E8D9D2] p-5 text-left max-w-sm mx-auto mb-7">
        <div className="flex items-center gap-2 mb-3">
          <Crown className="w-3.5 h-3.5 text-[#C9A27E]" />
          <span className="font-sans font-medium text-[9px] tracking-[0.2em] uppercase text-[#C9A27E]">Beauty Queen Oslo</span>
        </div>
        <div className="space-y-2 text-sm">
          {selectedService && (
            <div className="flex justify-between gap-4">
              <span className="text-[#999]">Tjeneste</span>
              <span className="font-medium text-[#0B0B0D]">{selectedService.title}</span>
            </div>
          )}
          {selectedSubService && (
            <div className="flex justify-between gap-4">
              <span className="text-[#999]">Behandling</span>
              <span className="font-medium text-[#0B0B0D] text-right">{selectedSubService.name}</span>
            </div>
          )}
          {selectedStaff && (
            <div className="flex justify-between gap-4">
              <span className="text-[#999]">Artist</span>
              <span className="font-medium text-[#0B0B0D]">{selectedStaff.name}</span>
            </div>
          )}
          {form.date && (
            <div className="flex justify-between gap-4">
              <span className="text-[#999]">Dato</span>
              <span className="font-medium text-[#0B0B0D]">
                {form.date.toLocaleDateString("nb-NO", { weekday: "short", day: "numeric", month: "long" })}
              </span>
            </div>
          )}
          {form.timeSlot && (
            <div className="flex justify-between gap-4">
              <span className="text-[#999]">Tid</span>
              <span className="font-medium text-[#0B0B0D]">{form.timeSlot}</span>
            </div>
          )}
          {selectedSubService && (
            <div className="flex justify-between gap-4 border-t border-[#E8D9D2] pt-2">
              <span className="text-[#999]">Pris fra</span>
              <span className="font-medium text-[#B76E79]">{formatPrice(selectedSubService.priceFrom)}</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
        <button className="bg-[#0B0B0D] text-[#F7F2EE] font-sans font-medium text-xs tracking-[0.2em] uppercase px-6 py-3.5 min-h-[48px] hover:bg-[#2A2A2A] transition-colors touch-manipulation">
          Legg til kalender
        </button>
        <button onClick={onReset}
          className="bg-transparent border border-[#E8D9D2] text-[#0B0B0D] font-sans font-medium text-xs tracking-[0.2em] uppercase px-6 py-3.5 min-h-[48px] hover:bg-[#FAF6F2] transition-colors touch-manipulation">
          Book ny time
        </button>
      </div>

      <p className="mt-5 text-[#999] text-xs px-4">
        Trenger du å ombooke?{" "}
        <a href="tel:+4794447080" className="text-[#B76E79] hover:underline">Ring oss</a>
      </p>
    </motion.div>
  );
}
