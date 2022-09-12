import { ColorConsumer } from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  return (
    <ColorConsumer>
      {({ actions }) => (
        <div style={{ display: "flex" }}>
          <h2>색상을 선택하세요: </h2>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
              onClick={() => actions.setColor(color)}
              onContextMenu={(e) => {
                e.preventDefault(); // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 방지
                actions.setSubcolor(color);
              }}
            />
          ))}
        </div>
      )}
    </ColorConsumer>
  );
};

export default SelectColors;
