const root=document.documentElement;
const themeBtn=document.getElementById("themeBtn");
const themeLabel=document.getElementById("themeLabel");
const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");

const savedTheme=localStorage.getItem("wdm-theme")||"dark";
root.dataset.theme=savedTheme;
themeLabel.textContent=savedTheme==="dark"?"Dark":"Light";

themeBtn?.addEventListener("click",()=>{
  const next=root.dataset.theme==="dark"?"light":"dark";
  root.dataset.theme=next;
  themeLabel.textContent=next==="dark"?"Dark":"Light";
  localStorage.setItem("wdm-theme",next);
});

menuBtn?.addEventListener("click",()=>{
  const open=navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded",String(open));
});
navLinks?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  navLinks.classList.remove("open");
  menuBtn?.setAttribute("aria-expanded","false");
}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const sections=[...document.querySelectorAll("main section[id]")];
const navItems=[...document.querySelectorAll(".nav-links a")];
const sectionObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navItems.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id));
    }
  });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>sectionObserver.observe(s));

document.getElementById("year").textContent=new Date().getFullYear();
