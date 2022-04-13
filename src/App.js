import { BrowserRouter, Route } from 'react-router-dom';
import Login from './screens/login/Login';
import About from './screens/About';
import Posts from './screens/Posts';
import Mypage from './screens/Mypage';
import Search from './screens/Search';
import LayoutScreen from './layout/LayoutScreen';
import PostView from "./page/post/PostView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path="/" component={Login}/>
          <Route path="/main" component={LayoutScreen}/>
          <Route path="/about" component={About}/>
          <Route path="/posts" component={Posts}/>
          <Route exact path='/postView/:no' component={PostView} />
          <Route path="/mypage" component={Mypage}/>
          <Route path="/search" component={Search}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
