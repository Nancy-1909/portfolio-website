// small interactions: year, mobile nav, contact handler
document.addEventListener('DOMContentLoaded', function(){
  // set year
  const y = new Date().getFullYear();
  const yearEls = [document.getElementById('year'), document.getElementById('year2')];
  yearEls.forEach(el => { if(el) el.textContent = y });

  // nav toggles (works for multiple pages)
  function wireToggle(toggleId, linksId){
    const t = document.getElementById(toggleId);
    const links = document.getElementById(linksId);
    if(!t || !links) return;
    t.addEventListener('click', () => {
      links.classList.toggle('show');
    });
  }
  wireToggle('nav-toggle','nav-links');
  wireToggle('nav-toggle-2','nav-links-2');
  wireToggle('nav-toggle-3','nav-links-3');
});

// contact form (dummy behaviour)
function handleContact(e){
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim() || 'there';
  alert(`Thanks ${name}! Your message was received (demo). I'll reach out soon.`);
  f.reset();
  return false;
}
