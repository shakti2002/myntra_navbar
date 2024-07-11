import { BrowserRouter as Router ,useInRouterContext,Routes, Route } from "react-router-dom";
import Collections from "./Components/Collections";
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/Comments/Comment";
import Navbar from './Components/Navbar';
import JoinPage from './Components/JoinPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Collections />} />
          <Route path="/join/:section" element={<JoinPage />} />
          <Route path="/posts/:id" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
