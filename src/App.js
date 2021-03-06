import "./app.css";
import { createElement } from "./utils/elements";
import SearchBox from "./components/SearchBox";
import Results from "./components/Results";
import { getIssues } from "./api/gitHub";

function App() {
  let results = Results({
    issues: [],
  });

  async function handleChange(query) {
    try {

      console.log(query);
      const issues = await getIssues(query);
      
      console.log(issues);
      
      const items = issues.items.map((issue) => issue.title);
      
      const newResults = Results({
        issues: issues.items,
      });
      
      results.parentElement.replaceChild(newResults, results);
      results = newResults;
    } catch(error) {
      console.error(error);
      results = Results({
        issues: []
      });
    }
  }

  const searchBox = SearchBox({
    onChange: handleChange,
    placeholder: "Enter search",
  });

  const main = createElement(
    "main",
    {
      className: "app",
    },
    [searchBox, results]
  );

  return main;
}

export default App;
