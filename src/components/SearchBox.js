import "./searchBox.css";
import { createElement } from "../utils/elements";

function SearchBox(props) {
  const input = createElement("input", {
    placeholder: props.placeholder,
  });
  const button = createElement("button", { innerText: "🔎" });
  const container = createElement(
    "div",
    {
      className: "searchBox",
    },
    [input, button]
  );

  button.addEventListener("click", () => {
    props.onChange(input.value);
  });

let timeoutId = null;

  input.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      console.log(input.value);
    }, 500);
   
    // props.onChange(input.value);
  })

  // input.addEventListener("keydown", (e) => {
  //   if(e.keyCode === 13) {
  //     props.onChange(input.value);
  //   } else {
  //     console.log('NO WORK');
  //   }
  // })

  return container;
}

export default SearchBox;
