"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(" ...  جاري الإرسال");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("تم الإرسال بنجاح  ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "خطا بالإرسال ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("خطا بالإتصال بالشبكة ❌");
    }
  };
const whatsappNumber = "201016825550";
const whatsappMessage = encodeURIComponent(
  `مرحباً، أنا ${form.name}\nبريدي: ${form.email}\n\nرسالتي:\n${form.message}`
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
                  

  return (
    <div dir="rtl" className="max-w-lg mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">تواصل معنا </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="الإسم للتواصل"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="الإيميل"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="إترك رسالتك التفصيلية"
          value={form.message}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows={5}
          required
        />
        <button
          type="submit"
          className="bg-[#0097b2] text-white px-4 py-2 rounded hover:bg-blue-950"
        >
          إرسال
        </button>
        {/*whatsapp button */}
        <div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
          >
            واتس أب
          </a>
          </div>
        
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}
