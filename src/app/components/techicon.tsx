import { DiDocker } from "react-icons/di";
import {
  FaAngular,
  FaJava,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaC, FaComputer, FaGolang } from "react-icons/fa6";
import {
  SiFlutter,
  SiOpencv,
  SiKeras,
  SiTensorflow,
  SiJupyter,
  SiPandas,
  SiPostgresql,
  SiTableau,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";

interface TechIconProps {
  tech: string;
  size?: number;
}

const TechIcon: React.FC<TechIconProps> = ({ tech, size = 20 }) => {
  const lowerCaseTechName = tech.toLowerCase();
  const iconSize = `${size}px`; // Convert size to string with 'px' suffix

  // Define colors for each technology
  const colors: { [key: string]: string } = {
    angular: "#DD0031",
    react: "#61DAFB",
    javascript: "#F7DF1E",
    js: "#F7DF1E",
    flutter: "#02569B",
    node: "#339933",
    docker: "#2496ED",
    python: "#3776AB",
    cpp: "#00599C",
    "c++": "#00599C",
    java: "#007396",
    golang: "#00ADD8",
    go: "#00ADD8",
    c: "#A8B9CC",
    opencv: "#5C3EE8",
    keras: "#D00000",
    tensorflow: "#FF6F00",
    jupyter: "#F37626",
    pandas: "#4B4EE8",
    postgresql: "#336791",
    tableau: "#E97627",
    numpy: "#013243",
    "scikit-learn": "#F7931E",
    matplotlib: "#11557C",
    default: "#6A737D", // Default grey color
  };

  const iconColor = colors[lowerCaseTechName] || colors.default;

  if (lowerCaseTechName.includes("angular")) {
    return <FaAngular color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("react")) {
    return <FaReact color={iconColor} size={iconSize} />;
  } else if (
    lowerCaseTechName.includes("javascript") ||
    lowerCaseTechName === "js"
  ) {
    return <FaJsSquare color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("flutter")) {
    return <SiFlutter color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("node")) {
    return <FaNodeJs color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("docker")) {
    return <DiDocker color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("python")) {
    return <FaPython color={iconColor} size={iconSize} />;
  } else if (
    lowerCaseTechName.includes("c++") ||
    lowerCaseTechName.includes("cpp") ||
    lowerCaseTechName === "c"
  ) {
    return <FaC color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("java")) {
    return <FaJava color={iconColor} size={iconSize} />;
  } else if (
    lowerCaseTechName.includes("go") ||
    lowerCaseTechName.includes("golang")
  ) {
    return <FaGolang color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName === "c") {
    return <FaC color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("opencv")) {
    return <SiOpencv color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("keras")) {
    return <SiKeras color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("tensorflow")) {
    return <SiTensorflow color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("jupyter")) {
    return <SiJupyter color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("pandas")) {
    return <SiPandas color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("postgresql")) {
    return <SiPostgresql color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("tableau")) {
    return <SiTableau color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("numpy")) {
    return <SiNumpy color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("scikit-learn")) {
    return <SiScikitlearn color={iconColor} size={iconSize} />;
  } else {
    // Return a generic icon for unknown technologies
    return <FaComputer color={iconColor} size={iconSize} />;
  }
};

export default TechIcon;
