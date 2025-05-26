import Header from "../../components/Header/Header";
import { formatText } from "../../utils/utils";
import "./compilation.css";

const text =
  "**Lorem** ipsum *dolor* sit amet consectetur adipisicing elit. Consectetur illum saepe expedita temporibus incidunt ex magnam laudantium molestias provident, explicabo ipsa velit magni est eum dolor, veniam, ratione delectus eos nihil exercitationem rem! Sunt quasi sequi, consectetur illo, amet ea quis vel, laudantium ut quia cumque! Sunt excepturi nobis quas. _Architecto_, maxime!";

function Compilation() {
  return (
    <main>
      <Header />
      <section>{formatText(text)}</section>
    </main>
  );
}

export default Compilation;
