import reactIcon from "src/assets/svg/react.svg";
import cssIcon from "src/assets/svg/css3.svg";
import typescriptIcon from "src/assets/svg/typescript.svg";
import mobxIcon from "src/assets/svg/mobx.svg";
import reduxIcon from "src/assets/svg/redux.svg";
import htmlIocn from "src/assets/svg/html5.svg";
import awsIcon from "src/assets/svg/aws.svg";
import nodeIcon from "src/assets/svg/nodejs.svg";
import gitHubIcon from "src/assets/svg/github.svg";
import gitIcon from "src/assets/svg/git.svg";
import webpackICon from "src/assets/svg/webpack.svg";
import scssIcon from "src/assets/svg/sass.svg";
import { TechStackScheme } from "src/types/tech";

export const techStacks: TechStackScheme[] = [
  {
    stackTitle: "Front-End",
    stackItems: [
      {
        itemName: "React",
        iconUrl: reactIcon,
        skillGrade: 9,
      },
      {
        itemName: "Typescript",
        iconUrl: typescriptIcon,
        skillGrade: 8,
      },
      {
        itemName: "MobX",
        iconUrl: mobxIcon,
        skillGrade: 8.5,
      },
      {
        itemName: "Redux",
        iconUrl: reduxIcon,
        skillGrade: 8,
      },
      {
        itemName: "CSS",
        iconUrl: cssIcon,
        skillGrade: 8.5,
      },
      {
        itemName: "SCSS",
        iconUrl: scssIcon,
        skillGrade: 5,
      },
      {
        itemName: "HTML",
        iconUrl: htmlIocn,
        skillGrade: 8,
      },
      {
        itemName: "Webpack",
        iconUrl: webpackICon,
        skillGrade: 5,
      },
    ],
  },
  {
    stackTitle: "Other",
    stackItems: [
      {
        itemName: "Github",
        iconUrl: gitHubIcon,
        skillGrade: 8,
      },
      {
        itemName: "Git",
        iconUrl: gitIcon,
        skillGrade: 5,
      },
      {
        itemName: "AWS",
        iconUrl: awsIcon,
        skillGrade: 4,
      },
      {
        itemName: "Node.js",
        iconUrl: nodeIcon,
        skillGrade: 6,
      },
    ],
  },
];
