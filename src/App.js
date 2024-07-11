import { BrowserRouter as Router ,useInRouterContext,Routes, Route } from "react-router-dom";
import Collections from "./Components/Collections";
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/Comments/Comment";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Collections />} />
          <Route path="/posts/:id" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
