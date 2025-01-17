import "./widget.css";

function Widget() {
  return (
    <section className="widget-section">
      <header className="widget-header" data-widget="Programmer codes">
        <h1>Widget Name</h1>
      </header>
      <div className="widget-tabs-wrapper">
        <ul className="widget-tabs">
          <li className="widget-active">
            <a id="widget-tab1" tabIndex="1" href="#" className="widget-active">
              Tab 1
            </a>
          </li>
          <li className="widget-active-bg"></li>
        </ul>
      </div>
      <div
        id="widget-tab1-content"
        className="widget-tab-content widget-tab-content-active"
      >
        <article className="widget-new-items">
          <header className="widget-new-items__header">
            <div className="widget-top-item-img">
              <img src="" alt="" />
            </div>
            <div className="widget-top-item-info">
              <div>
                <h2>Lorem</h2>
                <p>Lorem ipsum</p>
              </div>
              <div>
                <h2>Lorem</h2>
                <p>Lorem ipsum</p>
              </div>
            </div>
          </header>
          <div className="widget-divider"></div>
          <div className="widget-new-items__total">
            <div>
              <h2>Total</h2>
              <p>Number</p>
              <ul className="widget-images">
                <li>
                  <img src="" alt="" />
                </li>
              </ul>
            </div>
            <div className="widget-new-items__right">
              <div className="widget-new-items__indicator">Number</div>
              <a href="#" tabIndex="4" title="More info">
                More info
              </a>
            </div>
          </div>
        </article>
        <p className="widget-new-items__footer"></p>
      </div>
    </section>
  );
}

export default Widget;
