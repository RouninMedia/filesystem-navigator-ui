const webDirectoryFolderNames = document.querySelectorAll('.webDirectoryFolderName');

const toggleFolder = (e) =>  {
  const webDirectory = e.currentTarget.nextElementSibling;
  webDirectory.style.setProperty('transition', `height ${(webDirectory.scrollHeight / 360).toFixed(2)}s linear`);
  webDirectory.style.setProperty('height', webDirectory.scrollHeight + 'px');
  webDirectory.classList.add('--transitioning');
  webDirectory.classList.toggle('--open');
  const timeout = ((webDirectory.scrollHeight / 360) * 1000);
  setTimeout(() => webDirectory.style.removeProperty('height'), (webDirectory.classList.contains('--open')) ? timeout : 0);
  setTimeout(() => webDirectory.classList.remove('--transitioning'), timeout);
  setTimeout(() => webDirectory.removeAttribute('style'), timeout);
}
  
webDirectoryFolderNames.forEach((folderName) => folderName.addEventListener('click', toggleFolder));
