js
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav ul');
js
// اختيار زر التنقل وقائمة التنقل
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav ul');

// عند الضغط على زر الهامبرجر، نضيف/نزيل الكلاس 'active' لفتح/إغلاق القائمة
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  // لتغيير شكل زر الهامبرجر عند الفتح والإغلاق (اختياري)
  navToggle.classList.toggle('active');
});

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
```
