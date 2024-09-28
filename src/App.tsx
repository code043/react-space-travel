import { Button } from "./components/button/Button";
import { List } from "./components/list/List";
import { Title } from "./components/title/Title";

function App() {
  return (
    <>
      <div className="container">
        <main className="main-content">
          <div>
            <img src="./image/color-blocks.png" alt="blocks" />
            <Title styleHeading="title">
              What’s next in
              <br /> your space travel
            </Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper habitant arcu eget. Et integer facilisi
              eget diam.
            </p>
            <Button styleBtn="btn">Explore</Button>
          </div>
        </main>
        <div className="list">
          <List styleList="list-content" />
        </div>
      </div>
    </>
  );
}

export default App;
