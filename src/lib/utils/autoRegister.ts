import fs from "fs";
import path from "path";
import { classRegistry } from "./ClassRegister";
const PATH = "../../services";
const classesDirectory = path.join(__dirname, PATH);

fs.readdirSync(classesDirectory).forEach((file) => {
  if (file.endsWith(".ts")) {
    const className = path.basename(file, ".ts");
    const classPath = `${PATH}/${file}`;
    classRegistry.register(className, classPath);
  }
});
