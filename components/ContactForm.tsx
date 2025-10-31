"use client";
import { useState } from "react";
export default function ContactForm(){
  const [loading,setLoading]=useState(false);
  const [ok,setOk]=useState(false);
  async function onSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form=e.currentTarget;
    const fd=new FormData(form);
    const name=String(fd.get('name')||'');
    const phone=String(fd.get('phone')||'');
    const comment=String(fd.get('comment')||'');
    const agree=fd.get('agree')==='on';
    const hp=String(fd.get('company')||'');
    if(hp) return;
    if(!agree) return alert('Подтвердите согласие на обработку ПДн.');
    if(!/^[+0-9()\-\s]{7,}$/.test(phone)) return alert('Укажите телефон в корректном формате.');
    setLoading(true);
    try{
      const subject=encodeURIComponent('Запрос демо (OBA)');
      const body=encodeURIComponent(`Имя: ${name}\nТелефон: ${phone}\nКомментарий: ${comment}`);
      window.location.href=`mailto:sales@example.com?subject=${subject}&body=${body}`;
      setOk(true);
      form.reset();
    }finally{
      setLoading(false);
    }
  }
  return (
    <div className="card p-6">
      <h2 className="font-display text-2xl mb-4">Оставить заявку</h2>
      <form className="grid md:grid-cols-2 gap-4" onSubmit={onSubmit}>
        <label className="flex flex-col gap-1">
          <span className="text-sm">Имя</span>
          <input className="border rounded-xl px-4 py-3" name="name" placeholder="Алексей Иванов" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm">Телефон</span>
          <input className="border rounded-xl px-4 py-3" name="phone" placeholder="+7 999 123-45-67" required />
        </label>
        <label className="md:col-span-2 flex flex-col gap-1">
          <span className="text-sm">Комментарий</span>
          <textarea className="border rounded-xl px-4 py-3" name="comment" rows={4} placeholder="Коротко опишите задачу, сроки, интеграции…" />
        </label>
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
        <label className="flex items-start gap-2 md:col-span-2 text-sm">
          <input type="checkbox" name="agree" /> Согласен(а) с обработкой персональных данных
        </label>
        <div className="md:col-span-2 flex gap-3">
          <button className="btn btn-primary" type="submit" disabled={loading}>{loading? 'Отправка…':'Отправить'}</button>
          {ok && <span className="text-sm">Спасибо! Мы свяжемся с вами.</span>}
        </div>
      </form>
    </div>
  )
}
