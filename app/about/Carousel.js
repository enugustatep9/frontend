import "../about/about.css";
export default function Carousel() {
  return (
    <>
      <div class="scrollable-div">
        <div className="content-box">
          <header className="scrollable-header">
            <h2 className="">Landmark's in Enugu</h2>
          </header>
          <p>
            This is some content that will exceed the width of the div, causing
            it to scroll horizontally.
          </p>
        </div>
      </div>
    </>
  );
}
