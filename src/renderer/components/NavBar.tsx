import React, { useState } from 'react';
// import { ipcRenderer } from 'electron';

const NavBar = () =>{

  return(
    <div className="inline-flex">
      {/* <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" id='open-file'><img className="fill-current w-4 h-4 mr-2" src="/Users/Rosio/Desktop/code/codesmithCode/projects/production-project/electron-security-app/catsnake-electron-security/src/icons/google-docs.svg"/>Open File</button> */}
      <button className="bg-gray-medium hover:bg-gray-darkest text-white font-bold py-1 px-2 rounded-l inline-flex items-center" id='open-file'><img className="fill-current w-4 h-4 mr-2" src="/Users/Rosio/Desktop/code/codesmithCode/projects/production-project/electron-security-app/catsnake-electron-security/src/icons/google-docs.svg"/>Open File</button>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 inline-flex items-center" id='test-button'><svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <span>Test2</span></button>
      <button className="bg-gray-medium hover:bg-gray-darkest text-white font-bold py-1 px-2 inline-flex items-center" id='test-button'><img className="fill-current w-4 h-4 mr-2" src="/Users/Rosio/Desktop/code/codesmithCode/projects/production-project/electron-security-app/catsnake-electron-security/src/icons/testing.svg"/><span>Test</span></button>
      <button className="bg-gray-medium hover:bg-gray-darkest text-white font-bold py-1 px-2 rounded-r inline-flex items-center" id='open-folder'><img className="fill-current w-4 h-4 mr-2" src="/Users/Rosio/Desktop/code/codesmithCode/projects/production-project/electron-security-app/catsnake-electron-security/src/icons/open-folder-with-document.svg"/><span>Open Folder</span></button>
    </div>
  )
}

export default NavBar