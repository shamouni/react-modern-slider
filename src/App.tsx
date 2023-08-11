import { Slider, Slide, HBox, VBox } from "react-modern-slider";
import "react-modern-slider/dist/style.css";

const App = () => {
  const Dir = "https://shamouni.github.io/shop-react/images/banners";
  const txt =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, explicabo, laudantium illo eius sed, deleniti earum architecto reprehenderit";

  return (
    <Slider>
      <VBox width="3">
        <Slide
          height="3"
          title="Beautiful landscape"
          src={`${Dir}/s-32.png`}
          lbl="Sport"
          color="red"
          borderRight
          borderBottom
        />

        <Slide
          height="3"
          title="Beautiful landscape"
          src={`${Dir}/s-18.jpeg`}
          lbl="Sport"
          color="green"
          borderRight
          borderTop
          borderBottom
        />

        <Slide
          height="3"
          title="Beautiful landscape"
          src={`${Dir}/i9.jpg`}
          lbl="Sport"
          color="green"
          borderRight
          borderTop
        />
      </VBox>

      <VBox width="5">
        <Slide
          height="7"
          title="Beautiful landscape"
          text={txt}
          src={`${Dir}/big-1.jpg`}
          lbl="Sport"
          color="blue"
          fontSize="large"
          borderLeft
          borderRight
          borderBottom
        />

        <HBox height="3">
          <Slide
            title="Beautiful landscape"
            src={`${Dir}/s-7.jpg`}
            lbl="Sport"
            color="purple"
            borderLeft
            borderRight
            borderTop
          />

          <Slide
            title="Beautiful landscape"
            src={`${Dir}/s-59.png`}
            lbl="Sport"
            color="red"
            borderLeft
            borderRight
            borderTop
          />
        </HBox>
      </VBox>

      <VBox width="3">
        <Slide
          height="3"
          title="Beautiful landscape"
          src={`${Dir}/s-30.jpg`}
          lbl="Sport"
          color="sky"
          borderLeft
          borderRight
          borderBottom
        />

        <Slide
          height="3"
          title="Beautiful landscape"
          src={`${Dir}/s-20.jpeg`}
          lbl="Sport"
          color="green"
          borderLeft
          borderRight
          borderTop
          borderBottom
        />

        <Slide
          height="3"
          title="Beautiful landscape"
          src={`${Dir}/s-9.jpg`}
          lbl="Sport"
          color="sky"
          borderLeft
          borderRight
          borderTop
        />
      </VBox>

      <VBox width="4">
        <Slide
          height="5"
          title="Beautiful landscape"
          src={`${Dir}/s-13.jpeg`}
          lbl="Sport"
          color="blue"
          borderLeft
          borderRight
          borderBottom
        />

        <Slide
          height="5"
          title="Beautiful landscape"
          src={`${Dir}/a-71.png`}
          lbl="Sport"
          color="red"
          borderLeft
          borderRight
          borderTop
        />
      </VBox>

      <VBox width="6">
        <HBox height="3">
          <Slide
            title="Beautiful landscape77777777"
            src={`${Dir}/s-26.jpg`}
            lbl="Sport"
            color="purple"
            borderLeft
            borderRight
            borderBottom
          />

          <Slide
            title="Beautiful landscape"
            src={`${Dir}/s-46.jpg`}
            lbl="Sport"
            color="red"
            borderLeft
            borderRight
            borderBottom
          />
        </HBox>

        <Slide
          height="7"
          title="Beautiful landscape"
          text={txt}
          src={`${Dir}/big-3.jpg`}
          lbl="Sport"
          color="blue"
          fontSize="large"
          borderLeft
          borderRight
          borderTop
        />
      </VBox>

      <VBox width="4">
        <Slide
          height="5"
          title="Beautiful landscape"
          src={`${Dir}/s-45.jpg`}
          lbl="Sport"
          color="green"
          borderLeft
          borderRight
          borderBottom
        />

        <Slide
          height="5"
          title="Beautiful landscape"
          src={`${Dir}/s-2.jpg`}
          lbl="Sport"
          color="sky"
          borderLeft
          borderRight
          borderTop
        />
      </VBox>

      <VBox width="4">
        <Slide
          height="5"
          title="Beautiful landscape"
          src={`${Dir}/s-64.jpg`}
          lbl="Sport"
          color="pink"
          borderLeft
          borderBottom
        />

        <Slide
          height="5"
          title="Beautiful landscape"
          src={`${Dir}/s-60.jpg`}
          lbl="Sport"
          color="red"
          borderLeft
          borderTop
        />
      </VBox>
    </Slider>
  );
};

export default App;
