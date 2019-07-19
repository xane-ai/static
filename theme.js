function themeSelector(cid, env) {
  // default
  let config = {
    formBG: "#2a2a2a",
    questionTextColor: "#00ffff",
    questionBubbleColor: "inherit",
    surveyTitle: "",
    logoSource: "",
    btnBg: "#2a2a2a",
    btnTxtColor: "#00ffff",
    btnBorderColor: "#00ffff",
    inputBgColor: "#2a2a2a",
    inputTxtColor: "#00ffff",
    inputBorderColor: "#00ffff",
    optionNotSelected: "#2a2a2a",
    optionSelected: "#00ffff",
    deptOptionColorSelected: "#00ffff",
    deptOptionColorNotSelected: "#2a2a2a",
    deptOptionFontColor: "#00ffff",
    deptAnswerOptionColor: "#00ffff",
    deptAnswerBorderColor: "#00ffff"
  };
  let envList = ["production", "development", "staging", "preproduction"];
  let envIndex = envList.indexOf(env);
  if (envIndex > -1) {
    switch (cid) {
      case [23,19,20,22][envIndex]:
        {
          config.formBG = ["abc", "#fff", "ghi", "lmo"][envIndex];
        }
        break;
      default:
    }
  }

  return config;
}

console.log(themeSelector(19, "development"));
