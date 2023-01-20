function myFunction(x) {
  if (x.matches) { // Link Gmail para mobile
    document.getElementById("email").href="mailto:contact@my-website.com?subject=Big%20News&body=Hi,%0D%0A%0D%0A";
  } else {// Link Gmail para demais tamanhos de tela
    document.getElementById("email").href="https://mail.google.com/mail/u/0/?source=mailto&to=contato@rafaelmotal.dev&fs=1&tf=cm";
  }
}

