// @ts-check
import themes from '../colors/themes';
import * as colorFunctions from '../colors/functions';
import yummyuiInfo from '../../package.json';

const twYummyPlugin = (param: any) => {
  const { addBase, config } = param;
  
  let includedItems = [];
  let logs = false;

  /** @type {boolean} */
  const yummyUILogs = config('yummyui.logs');

  if (yummyUILogs !== false) {
    logs = true;
  }

  if (logs) {
    console.log();
    console.log(
      "\x1b[35m%s\x1b[0m",
      "🌮 yummyUI components " + yummyuiInfo.version,
      "\x1b[0m",
    );
    console.group();
  }


  // inject theme
  const themeInjector = colorFunctions.injectThemes(addBase, config, themes)
  includedItems.push("themes[" + themeInjector.themeOrder.length + "]");

  if (logs) {
    console.log(
      "\x1b[32m%s\x1b[0m",
      "✔︎ Including:",
      "\x1b[0m",
      "" + includedItems.join(", ")
    );
    console.log();
    console.groupEnd();
  }
};

export default twYummyPlugin;
