import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './src/counter.js'
import { setupContextMenu } from "./src/contextMenu.js";
import { setupInitiativeList } from './initiativeList.js';
import OBR from "@owlbear-rodeo/sdk";


OBR.onReady(() => {
  setupContextMenu();
  setupInitiativeList(document.querySelector("#initiative-list"));
});