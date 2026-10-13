import React from 'react'

const contacts = [
  {
    title: "E-mail:",
    text: "dariiaborart@gmail.com",
    href: "mailto:dariiaborart@gmail.com"
  },
  {
    title: "Telegram:",
    text: "@Dariiabor",
    href: "https://t.me/Dariiabor"
  },
  {
    title: "Whatsapp:",
    text: "+79939809039",
    href: "https://wa.me/79939809039"
  }
]

export function ResumeContacts() {
  return (
    <section className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-forwards pt-8 sm:pt-8">
      
      {/* Заголовок секции с разделителем */}
      <div className="flex items-center gap-4">
        <h2 className="text-[18px] font-normal text-[#9CA3AF] tracking-normal">
          Контакты
        </h2>
        <div className="h-[1px] bg-gray-300 flex-1" />
      </div>

      {/* Список контактов */}
      <ul className="flex flex-col gap-2 list-none p-0 text-base text-[#4B5563] font-sans leading-relaxed">
        {contacts.map((contact, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF] mt-2.5 shrink-0" />
            <span>
              <strong className="font-semibold text-[#111827]">{contact.title}</strong>{" "}
              <a 
                href={contact.href} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[#111827] underline decoration-gray-300 underline-offset-4 transition-colors"
              >
                {contact.text}
              </a>
            </span>
          </li>
        ))}
      </ul>

    </section>
  )
}