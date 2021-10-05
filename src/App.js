import "./styles.css";

import Button from "./button";
import Loader from "./loader";
import RibbonIcon from "./ribbonIcon";

export default function App() {
  return (
    <div className="App">
      <h3>Main Button </h3>
      <div className="buttons__wrapper">
        <Button type="primary" text="primary" />
        <Button type="secondary" text="secondary" />
        <Button type="outline" text="outline" />
        <Button type="danger" text="danger" />
        <Button type="cancel" text="cancel" />
        <Button type="yellow" text="yellow" />
        <Button type="transparent" text="transparent" />
        <Button type="disconnect" text="disconnect" />
      </div>

      <h3>With Customer background and text color</h3>
      <div className="buttons__wrapper">
        <Button color="red" bgColor="black" text="Custom" />
        <Button color="white" bgColor="blue" text="Custom" />
        <Button color="black" bgColor="aqua" text="Custom" />
        <Button color="black" bgColor="green" text="Custom" />
      </div>

      <h3>No border </h3>
      <div className="buttons__wrapper">
        <Button borderNone type="primary" text="primary" />
        <Button borderNone type="secondary" text="secondary" />
        <Button borderNone type="outline" text="outline" />
        <Button borderNone type="danger" text="danger" />
        <Button borderNone type="cancel" text="cancel" />
        <Button borderNone type="yellow" text="yellow" />
        <Button borderNone type="transparent" text="transparent" />
        <Button borderNone type="disconnect" text="disconnect" />
      </div>

      <h3>Custom border radius </h3>
      <div className="buttons__wrapper">
        <Button borderRadius="8px" type="primary" text="primary" />
        <Button borderRadius="10px" type="secondary" text="secondary" />
        <Button borderRadius="12px" type="outline" text="outline" />
        <Button borderRadius="14px" type="danger" text="danger" />
        <Button borderRadius="2px" type="cancel" text="cancel" />
        <Button borderRadius="50px" type="yellow" text="yellow" />
        <Button borderRadius="16px" type="transparent" text="transparent" />
        <Button borderRadius="7px" type="disconnect" text="disconnect" />
      </div>

      <h3>With Loader (customize loader stroke)</h3>
      <div className="buttons__wrapper">
        <Button
          loader={<Loader stroke="white" />}
          type="primary"
          text="primary"
        />
        <Button loader={<Loader />} type="secondary" text="secondary" />
        <Button loader={<Loader />} type="outline" text="outline" />
        <Button
          loader={<Loader stroke="white" />}
          type="danger"
          text="danger"
        />
        <Button loader={<Loader />} type="cancel" text="cancel" />
        <Button loader={<Loader />} type="yellow" text="yellow" />
        <Button loader={<Loader />} type="transparent" text="transparent" />
        <Button
          loader={<Loader stroke="white" />}
          type="disconnect"
          text="disconnect"
        />
      </div>

      <h3>With Icon</h3>
      <div className="buttons__wrapper">
        <Button icon={<RibbonIcon />} type="primary" text="primary" />
        <Button icon={<RibbonIcon />} type="secondary" text="secondary" />
        <Button icon={<RibbonIcon />} type="outline" text="outline" />
        <Button icon={<RibbonIcon />} type="danger" text="danger" />
        <Button icon={<RibbonIcon />} type="cancel" text="cancel" />
        <Button icon={<RibbonIcon />} type="yellow" text="yellow" />
        <Button icon={<RibbonIcon />} type="transparent" text="transparent" />
        <Button icon={<RibbonIcon />} type="disconnect" text="disconnect" />
      </div>

      <h3>Icon Only</h3>
      <div className="buttons__wrapper">
        <Button icon={<RibbonIcon />} type="primary" />
        <Button icon={<RibbonIcon />} type="secondary" />
        <Button icon={<RibbonIcon />} type="outline" />
        <Button icon={<RibbonIcon />} type="danger" />
        <Button icon={<RibbonIcon />} type="cancel" />
        <Button icon={<RibbonIcon />} type="yellow" />
        <Button icon={<RibbonIcon />} type="transparent" />
        <Button icon={<RibbonIcon />} type="disconnect" />
      </div>
    </div>
  );
}
