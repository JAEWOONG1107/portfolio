function newMockFrame(options = { dark: false, style: "regular" }) {
  var iframes = document.querySelectorAll("iframe");
  for (let iframe of iframes) {
    let parent = iframe.parentNode;
    let wrapper = document.createElement('div');
    wrapper.setAttribute("class", "window");
    let header = document.createElement("div");
    header.setAttribute("class", "header");
    header.innerHTML = `<div class="mockup-button red">&nbsp;&nbsp;</div>
          <div class="mockup-button yellow">&nbsp;&nbsp;</div>
          <div class="mockup-button green">&nbsp;&nbsp;</div>`
    parent.replaceChild(wrapper, iframe);
    wrapper.appendChild(header);
    wrapper.appendChild(iframe);
    let harry_styles = document.createElement("style");
    harry_styles.innerText = `
      .header {
        box-sizing : content-box;
        margin: 0px;
        background: #e8e8e8;
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
        height: 12px;
        padding: 12px;
      }
      
      .mockup-button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        display: inline-block;
      }

      .red {
        background-color: #ff5f56;
      }

      .yellow {
        background-color: #ffc343;
        margin-left: 3px;
      }

      .green {
        background-color: #32a852;
        margin-left: 3px;
      }
    `;
    document.body.appendChild(harry_styles);
    
    if (options.dark === true) {
      let headers = document.querySelectorAll('.header');
      for (let header of headers) {
        header.style.backgroundColor = "rgb(54, 56, 58)";
      }
    }
    
    if (options.style === "darken") {
      let buttons = document.querySelectorAll('.mockup-button');
      for (let button of buttons) {
        button.style.backgroundColor = "#979799";
      }
    }
  }
};
