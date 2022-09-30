/*
  Author: przewnic
  Project: Restaurant-Page
*/
export default function createFooter() {
  const footer = document.createElement('footer');

  const footerInfo = document.createElement('p');
  footerInfo.innerHTML = 'Copyright 2022';
  footer.appendChild(footerInfo);

  return footer;
}
