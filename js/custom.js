function updateImage(e){
  const suffix = this.dataset.suffix || '';
  const elName = this.name;
  console.log(this.name);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

const controls = document.querySelectorAll("input");

controls.forEach(control => control.addEventListener('change', updateImage));
controls.forEach(control => control.addEventListener('mousemove', updateImage));
